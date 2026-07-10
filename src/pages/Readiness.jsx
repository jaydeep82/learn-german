import { Link } from 'react-router-dom';
import { useApp } from '../store/AppContext.jsx';
import { readinessReport, PASS_RATIO } from '../data/readiness.js';
import { ALL_WORDS, collectionStats, dueCount, todayStr } from '../data/srs.js';

/**
 * Exam-readiness dashboard (roadmap B3).
 * Turns recorded skill-module and mock results into a %-ready gauge per skill
 * plus an overall verdict, and points the learner at their weakest module.
 * Supporting stats tie in the SRS: words known/learning and due today.
 */

const VERDICTS = {
  ready: { emoji: '🏆', label: '✓ Exam-ready', cls: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300', msg: 'Every skill is above the 60% pass mark with room to spare. Keep it warm with the daily review.' },
  almost: { emoji: '💪', label: 'Almost there', cls: 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300', msg: 'You’re above the pass mark overall — tighten the weak spots below to be safely ready.' },
  'keep-going': { emoji: '🌱', label: 'Below the 60% pass mark', cls: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300', msg: 'Not there yet — keep practising, starting with your weakest skill.' },
  incomplete: { emoji: '🧭', label: 'Partly tested', cls: 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300', msg: 'Try every skill at least once to unlock your full verdict.' },
  untested: { emoji: '🎯', label: 'Not tested yet', cls: 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300', msg: 'Your readiness is measured from real exam-format practice. Take a skill module — or sit the full mock — to begin.' },
};

function SkillCard({ s }) {
  if (!s.r) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 p-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="text-xl" aria-hidden>{s.emoji}</span>
          <span className="font-bold">{s.name}</span>
          <span className="text-sm text-slate-400">· {s.en}</span>
        </div>
        <p className="text-sm text-slate-400">Not tested yet.</p>
        <Link to={s.to} className="text-sm font-semibold text-brand-600 hover:underline mt-auto">Try it →</Link>
      </div>
    );
  }
  const pct = Math.round(s.r.ratio * 100);
  const pass = s.r.ratio >= PASS_RATIO;
  return (
    <div className="card flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-xl" aria-hidden>{s.emoji}</span>
        <span className="font-bold">{s.name}</span>
        <span className="text-sm text-slate-400">· {s.en}</span>
        <span className={`ml-auto font-bold tabular-nums ${pass ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>{pct}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <div className={`h-full rounded-full ${pass ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${pct}%` }} />
      </div>
      <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
        <span>{s.r.attempts} session{s.r.attempts === 1 ? '' : 's'}{s.r.mocks > 0 ? ` · ${s.r.mocks} mock` : ''} · last {s.r.last}</span>
        <Link to={s.to} className="ml-auto font-semibold text-brand-600 hover:underline">Practice →</Link>
      </div>
    </div>
  );
}

export default function Readiness() {
  const { state } = useApp();
  const report = readinessReport(state.skillResults);
  const v = VERDICTS[report.verdict];
  const pct = report.tested > 0 ? Math.round(report.overall * 100) : null;
  const vocab = collectionStats(state.srs, ALL_WORDS);
  const due = dueCount(state.srs, todayStr());

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <Link to="/exam" className="text-sm text-slate-500 hover:underline">← Exam trainer</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">📈 Exam readiness</h1>
        <p className="text-slate-500 mt-1">
          How close you are to the Goethe A1, measured from your exam-format practice and mock results.
          Recent sessions count more; mock sittings count extra.
        </p>
      </div>

      {/* Overall gauge */}
      <div className="card text-center">
        <div className="text-4xl mb-1" aria-hidden>{v.emoji}</div>
        <div className="text-6xl font-bold tabular-nums">{pct === null ? '—' : `${pct}%`}</div>
        <div className={`mt-3 inline-block rounded-full px-4 py-1.5 text-sm font-semibold ${v.cls}`}>{v.label}</div>
        <p className="text-sm text-slate-500 mt-3 max-w-md mx-auto">{v.msg}</p>
        {report.tested > 0 && report.tested < 4 && (
          <p className="text-xs text-slate-400 mt-2">
            Untested: {report.untested.map((s) => `${s.emoji} ${s.name}`).join(' · ')}
          </p>
        )}
      </div>

      {/* Weakest-skill callout */}
      {report.tested === 4 && report.verdict !== 'ready' && report.weakest && (
        <Link to={report.weakest.to} className="block card bg-gradient-to-br from-amber-50 to-white dark:from-slate-800 dark:to-slate-900 hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden>{report.weakest.emoji}</span>
            <div className="flex-1">
              <div className="font-bold">Focus next: {report.weakest.name} — {report.weakest.en}</div>
              <div className="text-sm text-slate-500">Your lowest skill at {Math.round(report.weakest.r.ratio * 100)}%. One focused session moves the needle most here.</div>
            </div>
            <span aria-hidden className="text-xl">→</span>
          </div>
        </Link>
      )}

      {/* Per-skill gauges */}
      <div className="grid sm:grid-cols-2 gap-3">
        {report.skills.map((s) => <SkillCard key={s.key} s={s} />)}
      </div>

      {/* Supporting stats — vocabulary memory */}
      <div className="card">
        <h2 className="font-bold mb-3">Vocabulary memory</h2>
        <div className="grid grid-cols-3 gap-3 text-center">
          <Link to="/vocabulary" className="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 p-3 hover:opacity-90">
            <div className="text-2xl font-bold tabular-nums text-emerald-700 dark:text-emerald-300">{vocab.known}</div>
            <div className="text-xs text-slate-500">words known</div>
          </Link>
          <Link to="/vocabulary" className="rounded-xl bg-amber-50 dark:bg-amber-900/20 p-3 hover:opacity-90">
            <div className="text-2xl font-bold tabular-nums text-amber-700 dark:text-amber-300">{vocab.learning}</div>
            <div className="text-xs text-slate-500">learning</div>
          </Link>
          <Link to="/daily" className="rounded-xl bg-brand-50 dark:bg-slate-800 p-3 hover:opacity-90">
            <div className="text-2xl font-bold tabular-nums text-brand-700 dark:text-brand-300">{due}</div>
            <div className="text-xs text-slate-500">due today</div>
          </Link>
        </div>
      </div>

      <Link to="/mock" className="btn-primary w-full text-lg py-4 text-center block">
        {report.tested === 0 ? 'Sit the full mock exam →' : 'Re-test with the full mock →'}
      </Link>
    </div>
  );
}
