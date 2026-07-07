import { Link } from 'react-router-dom';

/**
 * Exam trainer hub — the home for Goethe A1 exam practice. Lists the four skill
 * modules and the timed mock. Reading (Lesen) is live; the rest arrive with
 * roadmap A3–A7, shown here as "coming soon" so this page scales without nav churn.
 */
const MODULES = [
  { to: '/lesen', emoji: '📖', de: 'Lesen', en: 'Reading', desc: 'Emails, adverts and signs — true/false and matching.', ready: true, tone: 'emerald' },
  { emoji: '🎧', de: 'Hören', en: 'Listening', desc: 'Dialogues, announcements and messages — with audio.', ready: false, tone: 'blue' },
  { emoji: '✍️', de: 'Schreiben', en: 'Writing', desc: 'Fill a form and write a short message.', ready: false, tone: 'violet' },
  { emoji: '🗣️', de: 'Sprechen', en: 'Speaking', desc: 'Introduce yourself, ask & answer, make requests.', ready: false, tone: 'amber' },
];

const TONE = {
  emerald: 'from-emerald-50 dark:from-emerald-900/20',
  blue: 'from-blue-50 dark:from-blue-900/20',
  violet: 'from-violet-50 dark:from-violet-900/20',
  amber: 'from-amber-50 dark:from-amber-900/20',
};

export default function Exam() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Exam trainer</h1>
        <p className="text-slate-500 max-w-2xl mt-1">
          Practice the <strong>Goethe-Zertifikat A1</strong> in its real format — four skills, a 60% pass mark.
          Start with Reading; the other modules are on the way.
        </p>
      </header>

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

      <div className="card flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1">
          <h2 className="font-bold">🏁 Full mock exam</h2>
          <p className="text-sm text-slate-500">All four modules, timed and scored end-to-end. Arrives once every skill module is built.</p>
        </div>
        <span className="text-[11px] font-semibold rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 px-2 py-0.5 self-start">Coming soon</span>
      </div>

      <p className="text-sm text-slate-500">
        Curious about the task types? <Link to="/exam-formats" className="text-brand-600 hover:underline">Preview all exam formats →</Link>
      </p>
    </div>
  );
}
