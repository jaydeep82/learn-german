import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { dayById, days } from '../data/curriculum.js';
import ExerciseRunner from '../components/exercises/ExerciseRunner.jsx';
import AudioButton from '../components/AudioButton.jsx';
import Pron from '../components/Pron.jsx';
import { useApp } from '../store/AppContext.jsx';

function Confetti() {
  const pieces = useMemo(
    () => Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 600,
      hue: Math.floor(Math.random() * 360),
    })),
    []
  );
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 w-2 h-3 rounded-sm animate-confetti"
          style={{
            left: `${p.left}%`,
            background: `hsl(${p.hue} 90% 55%)`,
            animationDelay: `${p.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}

export default function DayLesson() {
  const { dayId } = useParams();
  const day = dayById(dayId);
  const navigate = useNavigate();
  const { completeDay, isUnlocked } = useApp();
  const [stage, setStage] = useState('intro'); // intro | exercises | done
  const [result, setResult] = useState(null);

  // Reset to the intro screen whenever the user navigates to a different
  // day — otherwise React Router reuses this component and we'd still be
  // showing the previous day's result/exercises.
  useEffect(() => {
    setStage('intro');
    setResult(null);
    window.scrollTo({ top: 0 });
  }, [dayId]);

  if (!day) {
    return <div className="card">Day not found. <Link to="/" className="text-brand-600">Back home</Link></div>;
  }
  if (!isUnlocked(day.id)) {
    return (
      <div className="card text-center">
        <div className="text-4xl mb-2" aria-hidden>🔒</div>
        <h1 className="text-xl font-bold">Day {day.id} is locked</h1>
        <p className="mt-1 text-slate-500">Score 70% or higher on Day {day.id - 1} to unlock this lesson.</p>
        <Link to={`/day/${day.id - 1}`} className="btn-primary mt-4 inline-flex">Go to Day {day.id - 1}</Link>
      </div>
    );
  }

  const onFinish = (r) => {
    setResult(r);
    completeDay(day.id, r.ratio);
    setStage('done');
  };

  if (stage === 'intro') return <Intro day={day} onStart={() => setStage('exercises')} />;
  if (stage === 'done')  return <Result day={day} result={result} onContinue={() => navigate(day.id < days.length ? `/day/${day.id + 1}` : '/')} />;

  return (
    <div className="space-y-4">
      <header>
        <Link to="/" className="text-sm text-slate-500 hover:underline">← Back to dashboard</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">
          <span aria-hidden className="mr-2">{day.emoji}</span>
          Day {day.id}: {day.title}
        </h1>
      </header>
      <ExerciseRunner
        exercises={day.exercises.length ? day.exercises : day.quiz}
        vocabulary={day.vocabulary}
        dayId={day.id}
        onFinish={onFinish}
      />
    </div>
  );
}

function Intro({ day, onStart }) {
  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm text-slate-500 hover:underline">← Back to dashboard</Link>
      <header className="card bg-gradient-to-br from-brand-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="text-5xl mb-2" aria-hidden>{day.emoji}</div>
        <p className="uppercase tracking-widest text-xs text-brand-600">Week {day.week} · Day {day.id}</p>
        <h1 className="text-3xl font-extrabold mt-1">{day.title}</h1>
        <p className="text-slate-500 italic">{day.titleDe}</p>
        <p className="mt-3 text-lg">{day.intro}</p>
        <p className="mt-3"><strong>🎯 Goal:</strong> {day.objective}</p>
      </header>

      {day.grammar?.length > 0 && (
        <section aria-labelledby="grammar">
          <h2 id="grammar" className="text-xl font-bold mb-3">Grammar pointers</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {day.grammar.map((g) => (
              <div key={g.rule} className="card">
                <div className="text-sm font-bold text-brand-700 dark:text-brand-300">{g.rule}</div>
                <p className="mt-1 text-slate-700 dark:text-slate-200 whitespace-pre-line">{g.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {day.vocabulary?.length > 0 && (
        <section aria-labelledby="vocab">
          <h2 id="vocab" className="text-xl font-bold mb-3">Today&rsquo;s vocabulary</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {day.vocabulary.map((v) => (
              <div key={v.de} className="card flex items-center gap-3 p-3">
                <AudioButton text={v.de} size="sm" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">{v.de}</div>
                  <Pron de={v.de} />
                  <div className="text-sm text-slate-500 truncate">{v.en}</div>
                  {v.hint && <div className="text-xs italic text-slate-400 truncate">💡 {v.hint}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <button className="btn-primary w-full text-lg py-4" onClick={onStart}>
        Start the lesson →
      </button>
    </div>
  );
}

function Result({ day, result, onContinue }) {
  const ratio = result?.ratio ?? 0;
  const pct = Math.round(ratio * 100);
  const passed = ratio >= 0.7;
  return (
    <div className="space-y-5 relative">
      {passed && <Confetti />}
      <div className="card text-center">
        <div className="text-6xl mb-2" aria-hidden>{passed ? '🎉' : '📚'}</div>
        <h1 className="text-2xl sm:text-3xl font-extrabold">
          {passed ? 'Sehr gut!' : 'Keep going!'}
        </h1>
        <p className="mt-1 text-slate-500">Day {day.id} · {day.title}</p>
        <div className="text-5xl font-bold mt-4 tabular-nums">{pct}%</div>
        <p className="text-slate-500">{result?.correct} / {result?.total} answers correct</p>
        {!passed && <p className="mt-3 text-sm">You need 70% to unlock the next day. Take another pass — the more reps, the better the retention.</p>}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Link to={`/day/${day.id}`} reloadDocument className="btn-secondary">Try again</Link>
        <button onClick={onContinue} className="btn-primary" disabled={!passed}>
          {day.id < days.length ? 'Next day →' : 'Back home'}
        </button>
      </div>
      {passed && day.id === 7 && (
        <Link
          to="/cheatsheet/aux-verbs"
          className="block card bg-gradient-to-br from-brand-50 to-amber-50 dark:from-slate-900 dark:to-slate-900 hover:shadow-md transition"
        >
          <div className="flex items-center gap-3">
            <div className="text-3xl" aria-hidden>📋</div>
            <div className="flex-1">
              <div className="font-bold">Before Week 2 — review the cheatsheet</div>
              <div className="text-sm text-slate-500">sein · haben · werden side-by-side, with examples and the three "sies" decoded.</div>
            </div>
            <span aria-hidden className="text-xl">→</span>
          </div>
        </Link>
      )}
      {passed && day.id === 14 && (
        <Link
          to="/cheatsheet/regular-verbs"
          className="block card bg-gradient-to-br from-emerald-50 to-brand-50 dark:from-slate-900 dark:to-slate-900 hover:shadow-md transition"
        >
          <div className="flex items-center gap-3">
            <div className="text-3xl" aria-hidden>🧰</div>
            <div className="flex-1">
              <div className="font-bold">Before Week 3 — review the Week 2 cheatsheet</div>
              <div className="text-sm text-slate-500">Regular endings, the -t/-d rule, stem-changers, separable sandwich rule, TFP order and a self-intro template.</div>
            </div>
            <span aria-hidden className="text-xl">→</span>
          </div>
        </Link>
      )}
    </div>
  );
}
