import { Link } from 'react-router-dom';
import { useApp } from '../store/AppContext.jsx';
import { days, weeks } from '../data/curriculum.js';
import { dueCount, learningCount, todayStr } from '../data/srs.js';
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
  const due = dueCount(state.srs, todayStr());
  const learning = learningCount(state.srs);

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
          <Link to="/daily"          className="btn bg-white/10 text-white hover:bg-white/20">🔁 Daily review{due > 0 ? ` · ${due}` : ''}</Link>
          <Link to="/vocabulary"     className="btn bg-white/10 text-white hover:bg-white/20">Vocabulary</Link>
        </div>
      </section>

      <Link to="/daily" className="block card bg-gradient-to-br from-amber-50 to-brand-50 dark:from-slate-900 dark:to-slate-900 hover:shadow-md transition">
        <div className="flex items-center gap-4">
          <div className="text-4xl" aria-hidden>🔁</div>
          <div className="flex-1">
            <div className="font-bold text-lg flex items-center gap-2">
              Daily review
              {due > 0 && <span className="pill bg-amber-500 text-white">{due} due</span>}
            </div>
            <div className="text-sm text-slate-500">
              {due > 0
                ? `${due} ${due === 1 ? 'word is' : 'words are'} ready — spaced repetition keeps them in long-term memory.`
                : learning > 0
                  ? 'All caught up for today. Tap to learn a few new words.'
                  : 'Start spaced repetition — learn and lock in vocabulary a little every day.'}
            </div>
          </div>
          <span aria-hidden className="text-xl">→</span>
        </div>
      </Link>

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
            {w.n === 2 && (
              <Link
                to="/cheatsheet/regular-verbs"
                className="mt-3 block card bg-gradient-to-br from-emerald-50 to-brand-50 dark:from-slate-900 dark:to-slate-900 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl" aria-hidden>🧰</div>
                  <div className="flex-1">
                    <div className="font-bold">Cheatsheet · regular & separable verbs · TFP order</div>
                    <div className="text-sm text-slate-500">Six endings, the -t/-d rule, stem-changers, sandwich rule for separables, TFP word order, self-intro template.</div>
                  </div>
                  <span aria-hidden className="text-xl">→</span>
                </div>
              </Link>
            )}
            {w.n === 3 && (
              <Link
                to="/cheatsheet/questions-numbers"
                className="mt-3 block card bg-gradient-to-br from-rose-50 to-amber-50 dark:from-slate-900 dark:to-slate-900 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl" aria-hidden>❓</div>
                  <div className="flex-1">
                    <div className="font-bold">Cheatsheet · questions · numbers · prices</div>
                    <div className="text-sm text-slate-500">Yes/No vs W-question shapes, all 11 W-words, the wo/wohin/woher trio, the ja/nein/doch trio, big-number recipes, comma-vs-dot.</div>
                  </div>
                  <span aria-hidden className="text-xl">→</span>
                </div>
              </Link>
            )}
            {w.n === 4 && (
              <Link
                to="/cheatsheet/cases"
                className="mt-3 block card bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-slate-900 dark:to-slate-900 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl" aria-hidden>📐</div>
                  <div className="flex-1">
                    <div className="font-bold">Cheatsheet · cases — Akkusativ · Dativ · pronouns</div>
                    <div className="text-sm text-slate-500">All 12 article slots side-by-side, decision tree (Nom · Akk · Dat), the 8 Dativ prepositions, 7 Dativ verbs, Akk-pronoun shape-shift, 6 contractions and the gefallen-flip.</div>
                  </div>
                  <span aria-hidden className="text-xl">→</span>
                </div>
              </Link>
            )}
            {w.n === 5 && (
              <Link
                to="/cheatsheet/pronouns-modals"
                className="mt-3 block card bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-900 dark:to-slate-900 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl" aria-hidden>🧭</div>
                  <div className="flex-1">
                    <div className="font-bold">Cheatsheet · pronouns · prepositions · modals</div>
                    <div className="text-sm text-slate-500">Akk + Dat pronouns side-by-side, the Wechsel Wo?/Wohin? decision, full possessive table with mein- declension, all three modal verbs with the sandwich rule, plus family + routine quick lists.</div>
                  </div>
                  <span aria-hidden className="text-xl">→</span>
                </div>
              </Link>
            )}
            {w.n === 6 && (
              <Link
                to="/cheatsheet/real-life"
                className="mt-3 block card bg-gradient-to-br from-rose-50 to-orange-50 dark:from-slate-900 dark:to-slate-900 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl" aria-hidden>🍽️</div>
                  <div className="flex-1">
                    <div className="font-bold">Cheatsheet · real life — modals II · glue · scenarios · negation</div>
                    <div className="text-sm text-slate-500">Four-modal table (dürfen/sollen/mögen/möchten), no-change vs verb-to-end connectors side-by-side, demonstratives + indefinites tables, three real-life scenario lists (restaurant/shopping/travel), kein-vs-nicht decision tree + full kein declension, möchte-magic tip.</div>
                  </div>
                  <span aria-hidden className="text-xl">→</span>
                </div>
              </Link>
            )}
            {w.n === 5 && (
              <Link
                to="/review/case-system"
                className="mt-3 block card bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-slate-900 dark:to-slate-900 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl" aria-hidden>🧩</div>
                  <div className="flex-1">
                    <div className="font-bold">Case System Review · Days 21–30</div>
                    <div className="text-sm text-slate-500">Consolidate the whole case arc — Akkusativ, Dativ, the wer/wen/wem test, Akk/Dat pronouns and the full preposition system (always-Dativ · always-Akk · Wechsel) — with keystone cards and a 16-question mixed quiz.</div>
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
