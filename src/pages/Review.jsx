import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { days, caseReview } from '../data/curriculum.js';
import ExerciseRunner from '../components/exercises/ExerciseRunner.jsx';
import VocabCard from '../components/VocabCard.jsx';
import GrammarItem from '../components/grammar/GrammarItem.jsx';
import { useApp } from '../store/AppContext.jsx';

/**
 * Rich consolidation review for the Days 21-30 case system. Lives on the
 * /review/case-system route — not in the `days` grid — so it never affects
 * day-numbering, locking or saved progress. Shows keystone vocab + grammar
 * recap cards, then runs the mixed quiz.
 */
function CaseSystemReview() {
  const [stage, setStage] = useState('intro');
  const [result, setResult] = useState(null);
  const r = caseReview;

  if (stage === 'done') {
    const pct = Math.round(((result?.ratio) ?? 0) * 100);
    return (
      <div className="card text-center">
        <div className="text-5xl mb-2" aria-hidden>{pct >= 80 ? '🏆' : pct >= 60 ? '👏' : '🌱'}</div>
        <h1 className="text-2xl font-extrabold">Case System Review done!</h1>
        <div className="text-5xl font-bold mt-4 tabular-nums">{pct}%</div>
        <p className="text-slate-500 mt-1">{result.correct} / {result.total} correct</p>
        {pct < 80 && <p className="mt-3 text-sm">Aim for ≥ 80% — revisit Days 21-30 and try again.</p>}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <button onClick={() => { setResult(null); setStage('run'); }} className="btn-secondary">Try again</button>
          <Link to="/" className="btn-primary">Back to dashboard</Link>
        </div>
      </div>
    );
  }

  if (stage === 'run') {
    return (
      <div className="space-y-4">
        <Link to="/review/case-system" className="text-sm text-slate-500 hover:underline" onClick={() => setStage('intro')}>← Back to recap</Link>
        <h1 className="text-2xl font-extrabold"><span aria-hidden className="mr-2">{r.emoji}</span>{r.title}</h1>
        <ExerciseRunner
          exercises={r.quiz}
          vocabulary={r.vocabulary}
          dayId="review-case-system"
          onFinish={(res) => { setResult(res); setStage('done'); }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm text-slate-500 hover:underline">← Dashboard</Link>
      <header className="card bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-slate-900 dark:to-slate-950">
        <div className="text-5xl mb-2" aria-hidden>{r.emoji}</div>
        <p className="uppercase tracking-widest text-xs text-violet-600">Consolidation · Days 21–30</p>
        <h1 className="text-3xl font-extrabold mt-1">{r.title}</h1>
        <p className="text-slate-500 italic">{r.titleDe}</p>
        <p className="mt-3 text-lg">{r.intro}</p>
        <p className="mt-3"><strong>🎯 Goal:</strong> {r.objective}</p>
      </header>

      <section aria-labelledby="cr-grammar">
        <h2 id="cr-grammar" className="text-xl font-bold mb-3">Recap cards</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {r.grammar.map((g, i) => (
            <ul key={`${g.rule}-${i}`} className="card">
              <GrammarItem g={g} week={4} />
            </ul>
          ))}
        </div>
      </section>

      <section aria-labelledby="cr-vocab">
        <h2 id="cr-vocab" className="text-xl font-bold mb-3">Keystones</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {r.vocabulary.map((v, i) => (
            <VocabCard key={`${v.de}-${i}`} v={v} layout={r.vocabularyLayout || 'spotlight'} showHint />
          ))}
        </div>
      </section>

      <button className="btn-primary w-full text-lg py-4" onClick={() => setStage('run')}>
        Start the {r.quiz.length}-question review →
      </button>
    </div>
  );
}

function pickReviewItems(kind, state) {
  // weekly: items from current week's days; week-N: that specific week
  // wrong-only: questions the learner missed last attempt
  const wrongDayIds = Object.entries(state.answered || {})
    .filter(([, perEx]) => Object.values(perEx).includes('wrong'))
    .map(([id]) => Number(id));

  let pool;
  if (/^week-(\d)$/.test(kind || '')) {
    const n = Number(kind.split('-')[1]);
    pool = days.filter((d) => d.week === n);
  } else if (kind === 'final') {
    pool = days.filter((d) => d.id === 30);
  } else if (kind === 'wrong-only') {
    pool = days.filter((d) => wrongDayIds.includes(d.id));
  } else {
    // weekly: latest 7 unlocked days
    const completed = Object.keys(state.completed || {}).map(Number);
    const last = Math.max(0, ...completed);
    pool = days.filter((d) => d.id <= Math.max(7, last));
  }

  const exercises = pool.flatMap((d) => (d.quiz?.length ? d.quiz : d.exercises))
    .filter((ex) => ex && ex.type !== 'flashcards' && ex.type !== 'dialogue');
  // shuffle + cap
  const cap = kind === 'final' ? 999 : 12;
  return exercises.sort(() => Math.random() - 0.5).slice(0, cap);
}

export default function Review() {
  const { kind = 'weekly' } = useParams();
  // The Days 21-30 case-system consolidation has its own rich page.
  // Dispatch by component TYPE so hook order stays consistent within each.
  if (kind === 'case-system') return <CaseSystemReview />;
  return <GenericReview kind={kind} />;
}

function GenericReview({ kind }) {
  const { state, completeDay } = useApp();
  const items = useMemo(() => pickReviewItems(kind, state), [kind, state]);
  const [stage, setStage] = useState('intro');
  const [result, setResult] = useState(null);

  const titles = {
    weekly: 'Weekly review',
    'week-1': 'Week 1 review',
    'week-2': 'Week 2 review',
    'week-3': 'Week 3 review',
    'week-4': 'Week 4 review',
    final: 'Final exam',
    'wrong-only': 'Mistakes only — spaced repetition',
  };
  const title = titles[kind] || 'Review';

  if (!items.length) {
    return (
      <div className="card text-center">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-slate-500">Nothing to review yet — complete a few daily lessons first.</p>
        <Link to="/" className="btn-primary mt-4 inline-flex">Back to dashboard</Link>
      </div>
    );
  }

  if (stage === 'intro') {
    return (
      <div className="space-y-4">
        <Link to="/" className="text-sm text-slate-500 hover:underline">← Dashboard</Link>
        <header className="card">
          <h1 className="text-2xl sm:text-3xl font-extrabold">{title}</h1>
          <p className="mt-1 text-slate-500">{items.length} questions · adaptive · instant feedback</p>
          <p className="mt-2">This pulls a randomised mix of questions you have seen. Finish to update your XP and badges.</p>
        </header>
        <button className="btn-primary w-full text-lg py-4" onClick={() => setStage('run')}>Start review →</button>
      </div>
    );
  }

  if (stage === 'done') {
    const pct = Math.round(((result?.ratio) ?? 0) * 100);
    return (
      <div className="card text-center">
        <div className="text-5xl mb-2" aria-hidden>{pct >= 80 ? '🏆' : pct >= 60 ? '👏' : '🌱'}</div>
        <h1 className="text-2xl font-extrabold">{title} done!</h1>
        <div className="text-5xl font-bold mt-4 tabular-nums">{pct}%</div>
        <p className="text-slate-500 mt-1">{result.correct} / {result.total} correct</p>
        <Link to="/" className="btn-primary mt-4 inline-flex">Back to dashboard</Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold">{title}</h1>
      <ExerciseRunner
        exercises={items}
        dayId={kind === 'final' ? 30 : `review-${kind}`}
        onFinish={(r) => {
          setResult(r);
          if (kind === 'final') completeDay(30, r.ratio);
          setStage('done');
        }}
      />
    </div>
  );
}
