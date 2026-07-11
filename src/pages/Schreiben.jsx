import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExerciseRunner from '../components/exercises/ExerciseRunner.jsx';
import { useApp } from '../store/AppContext.jsx';
import { SCHREIBEN_PARTS, SCHREIBEN_EXERCISES, SCHREIBEN_ITEM_COUNT } from '../data/schreibenModule.js';

/**
 * Goethe A1 "Schreiben" (Writing) module — roadmap A3.
 * Intro → run the two Teile through ExerciseRunner → result. Writing is
 * self-assessed against a model, so the score reflects form fields plus the
 * message points you mark as covered.
 */
export default function Schreiben() {
  const { recordSkillResult } = useApp();
  const [stage, setStage] = useState('intro');
  const [result, setResult] = useState(null);

  if (stage === 'done') {
    const pct = Math.round((result?.ratio ?? 0) * 100);
    const strong = pct >= 60;
    return (
      <div className="card text-center max-w-lg mx-auto">
        <div className="text-5xl mb-2" aria-hidden>{strong ? '🎉' : '🌱'}</div>
        <h1 className="text-2xl font-extrabold">Writing practice complete</h1>
        <div className="text-5xl font-bold mt-4 tabular-nums">{pct}%</div>
        <p className="text-slate-500 mt-1">{result.correct} / {result.total} points</p>
        <div className={`mt-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold ${
          strong ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                  : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'}`}>
          {strong ? '✓ Above the 60% pass mark' : 'Below 60% — keep practising'}
        </div>
        <p className="text-xs text-slate-400 mt-3 max-w-sm mx-auto">
          Writing is self-scored against the model answers — be honest about which points you covered.
        </p>
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
          <h1 className="text-xl font-extrabold">✍️ Schreiben — Writing</h1>
          <button className="text-sm text-slate-500 hover:underline" onClick={() => setStage('intro')}>Exit</button>
        </div>
        <ExerciseRunner
          exercises={SCHREIBEN_EXERCISES}
          dayId="schreiben"
          onFinish={(r) => { recordSkillResult('schreiben', { ...r, mock: false }); setResult(r); setStage('done'); }}
        />
      </div>
    );
  }

  // ── intro ──────────────────────────────────────────────────────────
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <Link to="/exam" className="text-sm text-slate-500 hover:underline">← Exam trainer</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">✍️ Schreiben — Writing</h1>
        <p className="text-slate-500 mt-1">
          Practice the Goethe A1 writing test: complete a form, then write a short message.
          In the real exam you have about 20 minutes.
        </p>
      </div>

      <ol className="space-y-3">
        {SCHREIBEN_PARTS.map((p) => (
          <li key={p.teil} className="card flex items-start gap-3">
            <span className="shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center">{p.teil}</span>
            <div>
              <h2 className="font-bold">Teil {p.teil} · {p.name} <span className="text-slate-400 font-normal">— {p.en}</span></h2>
              <p className="text-sm text-slate-500">{p.blurb}</p>
            </div>
          </li>
        ))}
      </ol>

      <button className="btn-primary w-full text-lg py-4" onClick={() => setStage('run')}>Start writing test →</button>
      <p className="text-xs text-slate-400">
        Tip: in Teil 2, address all three points and aim for about 30 words. Stuck for openers?{' '}
        <Link to="/phrases" className="text-brand-600 font-semibold hover:underline">Use the writing templates →</Link>
      </p>
    </div>
  );
}
