import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ExerciseRunner from '../components/exercises/ExerciseRunner.jsx';
import { useApp } from '../store/AppContext.jsx';
import { MOCK_PAPERS, MOCK_PASS_RATIO, paperById, paperMinutes, overallRatio } from '../data/mockExam.js';

/**
 * Full Goethe A1 mock exams — three complete papers.
 * /mock         → paper picker
 * /mock/:paperId → intro → run each module (timed) with a break between →
 *                  combined result: overall %, 60% pass verdict, per-skill bars.
 */

// ── picker (route /mock) ─────────────────────────────────────────────
function PaperPicker() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <Link to="/exam" className="text-sm text-slate-500 hover:underline">← Exam trainer</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">🏁 Full mock exams</h1>
        <p className="text-slate-500 mt-1">
          {MOCK_PAPERS.length} complete Goethe A1 sittings — all four skills, back to back, each module timed,
          scored against the <strong>60%</strong> pass mark. Sit a different paper each time so you never repeat
          the answers.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {MOCK_PAPERS.map((p) => {
          const items = p.modules.reduce((n, m) => n + m.exercises.length, 0);
          return (
            <Link key={p.id} to={`/mock/${p.id}`} className="block card hover:shadow-md transition bg-gradient-to-br from-brand-50 to-white dark:from-slate-800 dark:to-slate-900">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden>{p.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-bold">{p.title}</div>
                  <div className="text-sm text-slate-500">{p.tagline}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">~{paperMinutes(p)} min · {items} tasks</div>
                  <div className="text-xs font-semibold text-emerald-600">Start →</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <p className="text-xs text-slate-400">
        ⏱ Every module has a countdown — when time runs out it submits what you’ve done and moves on, like the real exam.
      </p>
    </div>
  );
}

// ── one paper (route /mock/:paperId) ─────────────────────────────────
function Paper({ paper }) {
  const { recordSkillResult } = useApp();
  const [phase, setPhase] = useState('intro'); // intro | module | break | done
  const [modIdx, setModIdx] = useState(0);
  const [results, setResults] = useState([]); // [{ key, name, emoji, ratio, correct, total, timedOut }]

  const modules = paper.modules;
  const mod = modules[modIdx];

  const start = () => { setResults([]); setModIdx(0); setPhase('module'); };

  const finishModule = (r) => {
    recordSkillResult(mod.key, { correct: r.correct, total: r.total, ratio: r.ratio, mock: true });
    const entry = { key: mod.key, name: mod.name, emoji: mod.emoji, ...r };
    setResults((prev) => {
      const next = [...prev, entry];
      if (modIdx + 1 >= modules.length) setPhase('done');
      else setPhase('break');
      return next;
    });
  };

  const nextModule = () => { setModIdx((i) => i + 1); setPhase('module'); };

  // ── done: combined result ────────────────────────────────────────
  if (phase === 'done') {
    const overall = overallRatio(results);
    const pct = Math.round(overall * 100);
    const passed = overall >= MOCK_PASS_RATIO;
    const weakest = [...results].sort((a, b) => (a.ratio || 0) - (b.ratio || 0))[0];
    const nextPaper = MOCK_PAPERS.find((p) => p.id !== paper.id);
    return (
      <div className="space-y-5 max-w-lg mx-auto">
        <div className="card text-center">
          <div className="text-5xl mb-2" aria-hidden>{passed ? '🏆' : '🌱'}</div>
          <h1 className="text-2xl font-extrabold">{paper.title} complete</h1>
          <div className="text-6xl font-bold mt-3 tabular-nums">{pct}%</div>
          <div className={`mt-3 inline-block rounded-full px-4 py-1.5 text-sm font-semibold ${
            passed ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                   : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'}`}>
            {passed ? '✓ On track to pass (≥ 60%)' : `Below the 60% pass mark`}
          </div>
          <p className="text-sm text-slate-500 mt-3">
            {passed
              ? 'Nice work — keep this up and you’re ready for the real exam.'
              : `Focus next on ${weakest?.emoji} ${weakest?.name} — your lowest module today.`}
          </p>
        </div>

        <div className="card">
          <h2 className="font-bold mb-3">By skill</h2>
          <ul className="space-y-3">
            {results.map((r) => {
              const p = Math.round((r.ratio || 0) * 100);
              return (
                <li key={r.key}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-semibold">{r.emoji} {r.name}</span>
                    <span className="tabular-nums text-slate-500">{r.correct}/{r.total} · {p}%{r.timedOut ? ' · ⏱ time up' : ''}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div className={`h-full rounded-full ${p >= 60 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${p}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {nextPaper && <Link to={`/mock/${nextPaper.id}`} className="btn-primary">Try {nextPaper.emoji} {nextPaper.title.split(' ·')[0]}</Link>}
          <button className="btn-secondary" onClick={start}>Retake this paper</button>
          <Link to="/readiness" className="btn-secondary">📈 Readiness</Link>
          <Link to="/exam" className="btn-secondary">Exam trainer</Link>
        </div>
      </div>
    );
  }

  // ── break: between modules ───────────────────────────────────────
  if (phase === 'break') {
    const next = modules[modIdx + 1];
    const last = results[results.length - 1];
    return (
      <div className="card text-center max-w-md mx-auto">
        <div className="text-4xl mb-2" aria-hidden>✅</div>
        <h1 className="text-xl font-extrabold">{last?.emoji} {last?.name} done</h1>
        <p className="text-slate-500 mt-1">{last?.correct}/{last?.total} correct{last?.timedOut ? ' · time ran out' : ''}</p>
        <div className="my-4 h-px bg-slate-200 dark:bg-slate-700" />
        <p className="text-sm text-slate-500">Next up</p>
        <p className="text-lg font-bold mt-1">{next?.emoji} {next?.name} — {next?.en}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">about {next?.minutes} minutes</p>
        <button className="btn-primary w-full mt-5" onClick={nextModule}>Continue →</button>
      </div>
    );
  }

  // ── module: run one skill ────────────────────────────────────────
  if (phase === 'module') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-xl font-extrabold">{paper.emoji} {paper.title} · {mod.emoji} {mod.name}</h1>
          <span className="text-xs text-slate-500 dark:text-slate-400">Module {modIdx + 1} of {modules.length}</span>
        </div>
        <ExerciseRunner
          key={`${paper.id}-${mod.key}`}
          exercises={mod.exercises}
          dayId={`mock${paper.id}-${mod.key}`}
          timeLimitSec={mod.minutes * 60}
          onFinish={finishModule}
        />
      </div>
    );
  }

  // ── intro ────────────────────────────────────────────────────────
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <Link to="/mock" className="text-sm text-slate-500 hover:underline">← All mock exams</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">{paper.emoji} {paper.title}</h1>
        <p className="text-slate-500 mt-1">
          {paper.tagline} One sitting, all four skills, each module timed. Pass mark: <strong>60%</strong>.
        </p>
      </div>

      <div className="card">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Today’s exam</h2>
          <span className="text-sm text-slate-500">~{paperMinutes(paper)} min total</span>
        </div>
        <ol className="mt-3 space-y-2">
          {modules.map((m, i) => (
            <li key={m.key} className="flex items-center gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
              <span className="font-semibold">{m.emoji} {m.name}</span>
              <span className="text-slate-400 text-sm">— {m.en}</span>
              <span className="ml-auto text-xs text-slate-500 dark:text-slate-400 tabular-nums">{m.minutes} min</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="card bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700 text-sm">
        ⏱ Each module has a countdown. If time runs out, that module is submitted with what you’ve done and the exam moves on — just like the real thing. You can finish a module early.
      </div>

      <button className="btn-primary w-full text-lg py-4" onClick={start}>Start {paper.title} →</button>
    </div>
  );
}

export default function Mock() {
  const { paperId } = useParams();
  if (!paperId) return <PaperPicker />;
  const paper = paperById(paperId);
  if (!paper) return <PaperPicker />;
  // Keyed remount so switching papers resets all exam state.
  return <Paper key={paper.id} paper={paper} />;
}
