import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { days } from '../data/curriculum.js';
import ExerciseRunner from '../components/exercises/ExerciseRunner.jsx';
import { useApp } from '../store/AppContext.jsx';

function pickReviewItems(kind, state) {
  // weekly: items from current week's days; week-N: that specific week
  // wrong-only: questions the learner missed last attempt
  const wrongDayIds = Object.entries(state.answered || {})
    .filter(([, perEx]) => Object.values(perEx).includes('wrong'))
    .map(([id]) => Number(id));

  let pool = days;
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
