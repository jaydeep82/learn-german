import { Link } from 'react-router-dom';
import { useApp } from '../store/AppContext.jsx';
import { readinessReport } from '../data/readiness.js';

/**
 * Exam trainer hub — the home for Goethe A1 exam practice. Lists the four skill
 * modules and the timed mock. Reading (Lesen) is live; the rest arrive with
 * roadmap A3–A7, shown here as "coming soon" so this page scales without nav churn.
 */
const MODULES = [
  { to: '/lesen', emoji: '📖', de: 'Lesen', en: 'Reading', desc: 'Emails, adverts and signs — true/false and matching.', ready: true, tone: 'emerald' },
  { to: '/hoeren', emoji: '🎧', de: 'Hören', en: 'Listening', desc: 'Dialogues, announcements and messages — with audio.', ready: true, tone: 'blue' },
  { to: '/schreiben', emoji: '✍️', de: 'Schreiben', en: 'Writing', desc: 'Fill a form and write a short message.', ready: true, tone: 'violet' },
  { to: '/sprechen', emoji: '🗣️', de: 'Sprechen', en: 'Speaking', desc: 'Introduce yourself, ask & answer, make requests.', ready: true, tone: 'amber' },
];

const TONE = {
  emerald: 'from-emerald-50 dark:from-emerald-900/20',
  blue: 'from-blue-50 dark:from-blue-900/20',
  violet: 'from-violet-50 dark:from-violet-900/20',
  amber: 'from-amber-50 dark:from-amber-900/20',
};

export default function Exam() {
  const { state } = useApp();
  const report = readinessReport(state.skillResults);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Exam trainer</h1>
        <p className="text-slate-500 max-w-2xl mt-1">
          Practice the <strong>Goethe-Zertifikat A1</strong> in its real format — four skills, a 60% pass mark.
          Start with Reading; the other modules are on the way.
        </p>
      </header>

      <Link to="/readiness" className="block">
        <div className="card flex items-center gap-3 hover:shadow-md transition">
          <span className="text-2xl" aria-hidden>📈</span>
          <div className="flex-1">
            <div className="font-bold">Exam readiness</div>
            <div className="text-sm text-slate-500">
              {report.tested === 0
                ? 'Take a skill module or the mock to see how ready you are.'
                : `${Math.round(report.overall * 100)}% overall · ${report.tested}/4 skills tested`}
            </div>
          </div>
          <span aria-hidden className="text-xl">→</span>
        </div>
      </Link>

      <div className="grid sm:grid-cols-2 gap-3">
        {MODULES.map((m) => {
          const inner = (
            <div className={`card h-full bg-gradient-to-br to-white dark:to-slate-900 ${TONE[m.tone]}
              ${m.ready ? 'hover:shadow-md transition' : 'opacity-70'}`}>
              <div className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden>{m.emoji}</span>
                <h2 className="font-extrabold text-lg">{m.de} <span className="text-slate-400 font-normal text-base">· {m.en}</span></h2>
                {m.ready
                  ? <span className="ml-auto text-xs font-semibold text-emerald-600">Ready →</span>
                  : <span className="ml-auto text-[11px] font-semibold rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 px-2 py-0.5">Coming soon</span>}
              </div>
              <p className="text-sm text-slate-500 mt-1.5">{m.desc}</p>
            </div>
          );
          return m.ready
            ? <Link key={m.de} to={m.to} className="block">{inner}</Link>
            : <div key={m.de} aria-disabled="true">{inner}</div>;
        })}
      </div>

      <Link to="/drills" className="block">
        <div className="card flex flex-col sm:flex-row sm:items-center gap-3 hover:shadow-md transition">
          <div className="flex-1">
            <h2 className="font-bold">🎯 Section drills · one task type at a time</h2>
            <p className="text-sm text-slate-500">Weak spot? Drill just that part — 20 realistic forms (Schreiben Teil 1), plus pictures, announcements, messages, texts, adverts and signs.</p>
          </div>
          <span className="text-xs font-semibold text-emerald-600 self-start sm:self-center">Pick a section →</span>
        </div>
      </Link>

      <Link to="/mock" className="block">
        <div className="card flex flex-col sm:flex-row sm:items-center gap-3 bg-gradient-to-br from-brand-50 to-white dark:from-slate-800 dark:to-slate-900 hover:shadow-md transition">
          <div className="flex-1">
            <h2 className="font-bold">🏁 Full mock exams · 8 papers</h2>
            <p className="text-sm text-slate-500">Eight complete timed sittings — all four skills, one overall score against the 60% pass mark. Sit a fresh paper each time.</p>
          </div>
          <span className="text-xs font-semibold text-emerald-600 self-start sm:self-center">Choose a paper →</span>
        </div>
      </Link>

      <p className="text-sm text-slate-500">
        Curious about the task types? <Link to="/exam-formats" className="text-brand-600 hover:underline">Preview all exam formats →</Link>
        {' '}· Grammar covered? <Link to="/checklist" className="text-brand-600 hover:underline">A1 grammar checklist →</Link>
        {' '}· Need the words? <Link to="/phrases" className="text-brand-600 hover:underline">Phrase bank →</Link>
      </p>
    </div>
  );
}
