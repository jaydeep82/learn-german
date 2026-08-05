import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExerciseRunner from '../components/exercises/ExerciseRunner.jsx';
import { useApp } from '../store/AppContext.jsx';
import { SPRECHEN_PARTS, SPRECHEN_EXERCISES, SPRECHEN_ITEM_COUNT } from '../data/sprechenModule.js';
import { T2_CARD_COUNT, T2_THEME_COUNT, T2_QUESTION_COUNT } from '../data/sprechenTeil2Meta.js';
import { T3_CARD_COUNT, T3_THEME_COUNT, T3_REQUEST_COUNT } from '../data/sprechenTeil3Meta.js';

/**
 * Goethe A1 "Sprechen" (Speaking) module — roadmap A6.
 * Intro → run the three Teile through ExerciseRunner → self-rated result.
 * Speaking can't be auto-graded, so the score reflects how many turns you
 * marked as "I could say it"; the result screen is encouraging, not pass/fail.
 */
export default function Sprechen() {
  const { recordSkillResult } = useApp();
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
          onFinish={(r) => { recordSkillResult('sprechen', { ...r, mock: false }); setResult(r); setStage('done'); }}
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

      <Link to="/sprechen/karten" className="block">
        <div className="card flex flex-col sm:flex-row sm:items-center gap-3 bg-gradient-to-br from-amber-50 to-white dark:from-slate-800 dark:to-slate-900 hover:shadow-md transition">
          <div className="flex-1">
            <h2 className="font-bold">🗂️ Teil 2 card deck · {T2_CARD_COUNT} keywords, {T2_QUESTION_COUNT} ready questions</h2>
            <p className="text-sm text-slate-500">
              Every keyword from the {T2_THEME_COUNT} official themes with a W-question, a Ja/Nein-question and model
              answers — colour-coded by gender, searchable, with audio.
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-600 self-start sm:self-center">Open the deck →</span>
        </div>
      </Link>

      <Link to="/sprechen/bitten" className="block">
        <div className="card flex flex-col sm:flex-row sm:items-center gap-3 bg-gradient-to-br from-rose-50 to-white dark:from-slate-800 dark:to-slate-900 hover:shadow-md transition">
          <div className="flex-1">
            <h2 className="font-bold">🙏 Teil 3 request deck · {T3_CARD_COUNT} words, {T3_REQUEST_COUNT} model requests</h2>
            <p className="text-sm text-slate-500">
              Every picture word from the {T3_THEME_COUNT} themes with its accusative form (der → den — the classic
              Teil 3 slip), polite requests and the short replies that always work.
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-600 self-start sm:self-center">Open the deck →</span>
        </div>
      </Link>

      <div className="card bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700 text-sm">
        🗣️ Speak out loud — don’t just read. Then compare with the model and rate yourself honestly.
        {' '}Warm up with the <Link to="/phrases" className="text-brand-600 font-semibold hover:underline">phrase bank →</Link>
      </div>

      <button className="btn-primary w-full text-lg py-4" onClick={() => setStage('run')}>Start speaking practice →</button>
    </div>
  );
}
