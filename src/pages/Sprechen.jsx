import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExerciseRunner from '../components/exercises/ExerciseRunner.jsx';
import { SPRECHEN_PARTS, SPRECHEN_EXERCISES, SPRECHEN_ITEM_COUNT } from '../data/sprechenModule.js';

/**
 * Goethe A1 "Sprechen" (Speaking) module — roadmap A6.
 * Intro → run the three Teile through ExerciseRunner → self-rated result.
 * Speaking can't be auto-graded, so the score reflects how many turns you
 * marked as "I could say it"; the result screen is encouraging, not pass/fail.
 */
export default function Sprechen() {
  const [stage, setStage] = useState('intro');
  const [result, setResult] = useState(null);

  if (stage === 'done') {
    const pct = Math.round((result?.ratio ?? 0) * 100);
    return (
      <div className="card text-center max-w-lg mx-auto">
        <div className="text-5xl mb-2" aria-hidden>🗣️</div>
        <h1 className="text-2xl font-extrabold">Speaking practice complete</h1>
        <div className="text-5xl font-bold mt-4 tabular-nums">{result.correct} / {result.total}</div>
        <p className="text-slate-500 mt-1">turns you said you could say ({pct}%)</p>
        <p className="text-sm text-slate-400 mt-3 max-w-sm mx-auto">
          Speaking is self-rated — say each answer aloud and compare it with the model. The more you speak, the more natural it gets.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          <button className="btn-primary" onClick={() => { setResult(null); setStage('run'); }}>Practice again</button>
          <Link to="/exam" className="btn-secondary">Exam trainer</Link>
          <Link to="/" className="btn-secondary">Dashboard</Link>
        </div>
      </div>
    );
  }

  if (stage === 'run') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-xl font-extrabold">🗣️ Sprechen — Speaking</h1>
          <button className="text-sm text-slate-500 hover:underline" onClick={() => setStage('intro')}>Exit</button>
        </div>
        <ExerciseRunner
          exercises={SPRECHEN_EXERCISES}
          dayId="sprechen"
          onFinish={(r) => { setResult(r); setStage('done'); }}
        />
      </div>
    );
  }

  // ── intro ──────────────────────────────────────────────────────────
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <Link to="/exam" className="text-sm text-slate-500 hover:underline">← Exam trainer</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">🗣️ Sprechen — Speaking</h1>
        <p className="text-slate-500 mt-1">
          Practice the Goethe A1 speaking test: three parts, {SPRECHEN_ITEM_COUNT} speaking turns. Say each answer
          aloud, then reveal a model answer with audio. In the real exam you speak in a small group.
        </p>
      </div>

      <ol className="space-y-3">
        {SPRECHEN_PARTS.map((p) => (
          <li key={p.teil} className="card flex items-start gap-3">
            <span className="shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center">{p.teil}</span>
            <div>
              <h2 className="font-bold">Teil {p.teil} · {p.name} <span className="text-slate-400 font-normal">— {p.en}</span></h2>
              <p className="text-sm text-slate-500">{p.blurb}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="card bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700 text-sm">
        🗣️ Speak out loud — don’t just read. Then compare with the model and rate yourself honestly.
      </div>

      <button className="btn-primary w-full text-lg py-4" onClick={() => setStage('run')}>Start speaking practice →</button>
    </div>
  );
}
