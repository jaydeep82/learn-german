import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExerciseRunner from '../components/exercises/ExerciseRunner.jsx';
import { useApp } from '../store/AppContext.jsx';
import { LESEN_PARTS, LESEN_EXERCISES, LESEN_ITEM_COUNT } from '../data/lesenModule.js';

/**
 * Goethe A1 "Lesen" (Reading) module — roadmap A2.
 * Intro → run the three Teile through ExerciseRunner → scored result with a
 * 60% pass indicator (the real exam's threshold).
 */
export default function Lesen() {
  const { recordSkillResult } = useApp();
  const [stage, setStage] = useState('intro');
  const [result, setResult] = useState(null);

  if (stage === 'done') {
    const pct = Math.round((result?.ratio ?? 0) * 100);
    const passed = pct >= 60;
    return (
      <div className="card text-center max-w-lg mx-auto">
        <div className="text-5xl mb-2" aria-hidden>{passed ? '🎉' : '🌱'}</div>
        <h1 className="text-2xl font-extrabold">Reading practice complete</h1>
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
          <h1 className="text-xl font-extrabold">📖 Lesen — Reading</h1>
          <button className="text-sm text-slate-500 hover:underline" onClick={() => setStage('intro')}>Exit</button>
        </div>
        <ExerciseRunner
          exercises={LESEN_EXERCISES}
          dayId="lesen"
          onFinish={(r) => { recordSkillResult('lesen', { ...r, mock: false }); setResult(r); setStage('done'); }}
        />
      </div>
    );
  }

  // ── intro ──────────────────────────────────────────────────────────
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <Link to="/exam" className="text-sm text-slate-500 hover:underline">← Exam trainer</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">📖 Lesen — Reading</h1>
        <p className="text-slate-500 mt-1">
          Practice the Goethe A1 reading test: three parts, {LESEN_ITEM_COUNT} questions, with instant feedback.
          In the real exam you have about 25 minutes.
        </p>
      </div>

      <ol className="space-y-3">
        {LESEN_PARTS.map((p) => (
          <li key={p.teil} className="card flex items-start gap-3">
            <span className="shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center">{p.teil}</span>
            <div>
              <h2 className="font-bold">Teil {p.teil} · {p.name} <span className="text-slate-400 font-normal">— {p.en}</span></h2>
              <p className="text-sm text-slate-500">{p.blurb}</p>
            </div>
          </li>
        ))}
      </ol>

      <button className="btn-primary w-full text-lg py-4" onClick={() => setStage('run')}>Start reading test →</button>
      <p className="text-xs text-slate-400">Tip: read the questions first, then scan the text for the answer.</p>
    </div>
  );
}
