import { Link } from 'react-router-dom';
import { A1_CHECKLIST, CHECKLIST_STATS } from '../data/a1Checklist.js';
import AudioButton from '../components/AudioButton.jsx';

/**
 * Goethe A1 grammar checklist (roadmap D2) — the official syllabus, point by
 * point: an example for each, links to the lesson days that teach it, and
 * compact inline lessons for the three points the course didn't cover
 * explicitly (ordinals & dates, time prepositions, irregular comparison).
 */
export default function Checklist() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <Link to="/grammar" className="text-sm text-slate-500 hover:underline">← Grammar reference</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">✅ Goethe A1 grammar checklist</h1>
        <p className="text-slate-500 mt-1">
          The official A1 grammar inventory, audited against the course: {CHECKLIST_STATS.inCourse} of{' '}
          {CHECKLIST_STATS.total} points are taught in the lessons (tap a day to jump there), and the remaining{' '}
          {CHECKLIST_STATS.gaps} are taught right here — so this page is the complete exam syllabus.
        </p>
      </div>

      {A1_CHECKLIST.map((area) => (
        <section key={area.area} className="space-y-3" aria-labelledby={`area-${area.area}`}>
          <h2 id={`area-${area.area}`} className="text-lg font-extrabold flex items-center gap-2">
            <span aria-hidden>{area.emoji}</span> {area.area}
          </h2>
          <ul className="space-y-2">
            {area.items.map((it) => (
              <li key={it.topic} className={`card ${it.gap ? 'border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50 to-white dark:from-slate-800 dark:to-slate-900' : ''}`}>
                <div className="flex items-start gap-3">
                  <span className={`shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                    it.gap ? 'bg-amber-400 text-white' : 'bg-emerald-500 text-white'}`} aria-hidden>
                    {it.gap ? '★' : '✓'}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold flex items-center gap-2 flex-wrap">
                      {it.topic}
                      {it.gap && <span className="pill bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">taught here</span>}
                    </div>
                    <div className="mt-1 flex items-start gap-2">
                      <p className="flex-1">
                        <span lang="de" className="font-medium">{it.de}</span>
                        <span className="block text-sm text-slate-500">{it.en}</span>
                      </p>
                      <AudioButton text={it.de} size="sm" />
                    </div>

                    {it.points && (
                      <ul className="mt-3 space-y-1.5 border-t border-amber-200 dark:border-slate-700 pt-3">
                        {it.points.map((p, i) => (
                          <li key={i} className="text-sm flex gap-2">
                            <span className="text-amber-500 shrink-0" aria-hidden>▸</span>
                            <span>
                              <span lang="de" className="font-medium">{p.de}</span>
                              <span className="text-slate-500"> — {p.en}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {it.days && (
                      <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                        <span className="text-[11px] text-slate-400">Taught in</span>
                        {it.days.map((d) => (
                          <Link key={d} to={`/day/${d}`} className="pill bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300 hover:opacity-80">
                            Day {d}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800 pt-4">
        Everything here is at A1 level (Start Deutsch 1 / Fit in Deutsch 1). Ready to test it?{' '}
        <Link to="/mock" className="text-brand-600 font-semibold hover:underline">Sit the mock exam →</Link>
      </p>
    </div>
  );
}
