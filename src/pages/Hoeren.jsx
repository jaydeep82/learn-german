import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExerciseRunner from '../components/exercises/ExerciseRunner.jsx';
import { HOEREN_PARTS, HOEREN_EXERCISES, HOEREN_ITEM_COUNT } from '../data/hoerenModule.js';

/**
 * Goethe A1 "Hören" (Listening) module — roadmap A5.
 * Intro → run the three Teile through ExerciseRunner → scored result with a 60%
 * pass indicator. Audio plays via the browser voice with a transcript fallback.
 */
export default function Hoeren() {
  const [stage, setStage] = useState('intro');
  const [result, setResult] = useState(null);

  if (stage === 'done') {
    const pct = Math.round((result?.ratio ?? 0) * 100);
    const passed = pct >= 60;
    return (
      <div className="card text-center max-w-lg mx-auto">
        <div className="text-5xl mb-2" aria-hidden>{passed ? '🎉' : '🌱'}</div>
        <h1 className="text-2xl font-extrabold">Listening practice complete</h1>
        <div className="text-5xl font-bold mt-4 tabular-nums">{pct}%</div>
        <p className="text-slate-500 mt-1">{result.correct} / {result.total} correct</p>
        <div className={`mt-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold ${
          passed ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                 : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'}`}>
          {passed ? '✓ Above the 60% pass mark' : 'Below 60% — keep practising'}
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          <button className="btn-primary" onClick={() => { setResult(null); setStage('run'); }}>Try again</button>
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
          <h1 className="text-xl font-extrabold">🎧 Hören — Listening</h1>
          <button className="text-sm text-slate-500 hover:underline" onClick={() => setStage('intro')}>Exit</button>
        </div>
        <ExerciseRunner
          exercises={HOEREN_EXERCISES}
          dayId="hoeren"
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
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">🎧 Hören — Listening</h1>
        <p className="text-slate-500 mt-1">
          Practice the Goethe A1 listening test: three parts, {HOEREN_ITEM_COUNT} questions. Each recording can be
          replayed, and you can slow it down. In the real exam you have about 20 minutes.
        </p>
      </div>

      <ol className="space-y-3">
        {HOEREN_PARTS.map((p) => (
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
        🔊 Audio uses your browser’s German voice. No sound? Use “Show the text” under any recording — you can still do every task.
      </div>

      <button className="btn-primary w-full text-lg py-4" onClick={() => setStage('run')}>Start listening test →</button>
    </div>
  );
}
