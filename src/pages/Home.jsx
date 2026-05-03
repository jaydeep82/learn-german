import { Link } from 'react-router-dom';
import { useApp } from '../store/AppContext.jsx';
import { days, weeks } from '../data/curriculum.js';
import { ProgressBar, BadgeWall, XPBadge, StreakIndicator } from '../components/ProgressUI.jsx';

function DayCard({ day, unlocked, score }) {
  const cls = unlocked
    ? 'card hover:shadow-md transition group'
    : 'card opacity-50 cursor-not-allowed';
  const inner = (
    <div className={cls}>
      <div className="flex items-start gap-3">
        <div className="text-3xl" aria-hidden>{day.emoji}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Day {day.id}</span>
            {score >= 0.999 && <span className="pill bg-emerald-100 text-emerald-700">100%</span>}
            {score > 0 && score < 0.999 && <span className="pill bg-emerald-100 text-emerald-700">{Math.round(score * 100)}%</span>}
            {!unlocked && <span aria-hidden>🔒</span>}
          </div>
          <div className="font-semibold leading-tight truncate">{day.title}</div>
          <div className="text-xs text-slate-500 italic truncate">{day.titleDe}</div>
        </div>
      </div>
    </div>
  );
  return unlocked
    ? <Link to={`/day/${day.id}`} aria-label={`Day ${day.id}: ${day.title}`}>{inner}</Link>
    : <div aria-disabled title="Pass the previous day to unlock">{inner}</div>;
}

export default function Home() {
  const { state, isUnlocked } = useApp();
  const completedCount = Object.values(state.completed || {}).filter((c) => c.score >= 0.7).length;
  const ratio = completedCount / days.length;

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 text-white p-6 sm:p-10 shadow-md">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="uppercase tracking-widest text-xs opacity-80">Willkommen!</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-1">Learn German in 50 days</h1>
            <p className="mt-2 max-w-prose opacity-90">
              Daily 10–15-minute lessons with audio, flashcards, mini-games and quizzes —
              from the alphabet on Day 1 through past tenses, polite Konjunktiv II
              and the Imperativ by Day 50.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <StreakIndicator />
            <XPBadge />
            <span className="pill bg-white/20 text-white">{completedCount}/{days.length} days passed</span>
          </div>
        </div>
        <div className="mt-6">
          <ProgressBar value={ratio} label="Overall progress" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to={`/day/${Math.min(days.length, completedCount + 1)}`} className="btn bg-white text-brand-700 hover:bg-brand-50">
            ▶ Continue learning
          </Link>
          <Link to="/review/weekly"  className="btn bg-white/10 text-white hover:bg-white/20">Review</Link>
          <Link to="/vocabulary"     className="btn bg-white/10 text-white hover:bg-white/20">Vocabulary</Link>
        </div>
      </section>

      {weeks.map((w) => {
        const wDays = days.filter((d) => d.week === w.n);
        return (
          <section key={w.n} aria-labelledby={`week-${w.n}`}>
            <header className="flex items-baseline gap-3 mb-3">
              <h2 id={`week-${w.n}`} className="text-xl sm:text-2xl font-bold">Week {w.n} · {w.title}</h2>
              <p className="text-sm text-slate-500">{w.tagline}</p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {wDays.map((d) => (
                <DayCard
                  key={d.id}
                  day={d}
                  unlocked={isUnlocked(d.id)}
                  score={state.completed?.[d.id]?.score || 0}
                />
              ))}
            </div>
            {w.n === 1 && (
              <Link
                to="/cheatsheet/aux-verbs"
                className="mt-3 block card bg-gradient-to-br from-brand-50 to-amber-50 dark:from-slate-900 dark:to-slate-900 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl" aria-hidden>📋</div>
                  <div className="flex-1">
                    <div className="font-bold">Cheatsheet · sein · haben · werden</div>
                    <div className="text-sm text-slate-500">Side-by-side table, examples, the three "sies" decoded, common mistakes — print or save as PDF.</div>
                  </div>
                  <span aria-hidden className="text-xl">→</span>
                </div>
              </Link>
            )}
            {w.n < 8 && (
              <div className="mt-3">
                <Link to={`/review/week-${w.n}`} className="text-sm font-semibold text-brand-700 dark:text-brand-300 hover:underline">
                  → Take the Week {w.n} review quiz
                </Link>
              </div>
            )}
          </section>
        );
      })}

      <section aria-labelledby="badges">
        <h2 id="badges" className="text-xl sm:text-2xl font-bold mb-3">Badges</h2>
        <BadgeWall />
      </section>
    </div>
  );
}
