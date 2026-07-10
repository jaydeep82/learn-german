import { Link } from 'react-router-dom';
import { useApp } from '../store/AppContext.jsx';
import { days as courseDays } from '../data/curriculum.js';
import { ALL_WORDS, collectionStats, dueCount, todayStr, MAX_LEVEL } from '../data/srs.js';
import { activityMap, heatmapWeeks, heatBucket, sessionTrend, levelHistogram } from '../data/progressStats.js';
import { readinessReport } from '../data/readiness.js';

/**
 * Progress dashboard (roadmap C4): activity heat-map, accuracy trend from
 * recorded skill sessions, and the SRS "memory pipeline" histogram.
 */

const HEAT_CLS = [
  'bg-slate-200 dark:bg-slate-800',
  'bg-brand-200 dark:bg-brand-900',
  'bg-brand-400 dark:bg-brand-700',
  'bg-brand-600 dark:bg-brand-500',
  'bg-brand-800 dark:bg-brand-300',
];

function Heatmap({ weeks }) {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1 w-max" role="img" aria-label="Study activity for the last 16 weeks">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) =>
              day ? (
                <div
                  key={day.date}
                  title={`${day.date} · ${day.count ? `${day.count} activity points` : 'no activity'}`}
                  className={`w-3.5 h-3.5 rounded-[3px] ${HEAT_CLS[heatBucket(day.count)]}`}
                />
              ) : (
                <div key={`pad-${wi}-${di}`} className="w-3.5 h-3.5" />
              )
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-2 text-[11px] text-slate-500">
        <span>Less</span>
        {HEAT_CLS.map((c) => <span key={c} className={`w-3 h-3 rounded-[3px] ${c}`} />)}
        <span>More</span>
      </div>
    </div>
  );
}

function TrendBars({ sessions }) {
  if (!sessions.length) {
    return (
      <p className="text-sm text-slate-500">
        No exam-practice sessions yet — try a <Link to="/exam" className="text-brand-600 hover:underline">skill module</Link> and your accuracy will chart here.
      </p>
    );
  }
  return (
    <div>
      <div className="flex items-end gap-2 h-32" role="img" aria-label={`Accuracy of your last ${sessions.length} practice sessions`}>
        {sessions.map((s, i) => {
          const pct = Math.round(s.ratio * 100);
          return (
            <div key={`${s.d}-${i}`} className="flex-1 flex flex-col items-center gap-1 min-w-[1.4rem]"
              title={`${s.name} · ${s.d} · ${pct}%${s.mock ? ' · mock' : ''}`}>
              <span className="text-[10px] tabular-nums text-slate-500">{pct}</span>
              <div className="w-full rounded-t-md overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-end" style={{ height: '5.5rem' }}>
                <div className={`w-full ${s.ratio >= 0.6 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ height: `${pct}%` }} />
              </div>
              <span className="text-xs" aria-hidden>{s.emoji}</span>
            </div>
          );
        })}
      </div>
      <p className="text-[11px] text-slate-500 mt-1.5">Last {sessions.length} sessions · green = above the 60% pass mark · hover for details</p>
    </div>
  );
}

function LevelPipeline({ histogram }) {
  const max = Math.max(1, ...histogram.map((h) => h.count));
  const label = (h) =>
    h.level === 0 ? 'new' : h.level === MAX_LEVEL ? `${h.intervalDays}d · mastered` : `${h.intervalDays}d`;
  return (
    <div className="grid grid-cols-7 gap-2 items-end" role="img" aria-label="Words by memory level">
      {histogram.map((h) => (
        <div key={h.level} className="flex flex-col items-center gap-1" title={`Level ${h.level}: ${h.count} words · reviewed every ${h.intervalDays || 0} days`}>
          <span className="text-xs tabular-nums font-semibold">{h.count}</span>
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-md flex items-end" style={{ height: '4.5rem' }}>
            <div className="w-full bg-gradient-to-t from-brand-600 to-brand-400 rounded-t-md" style={{ height: `${(h.count / max) * 100}%` }} />
          </div>
          <span className="text-[10px] text-slate-500">L{h.level}</span>
          <span className="text-[9px] text-slate-400">{label(h)}</span>
        </div>
      ))}
    </div>
  );
}

export default function Progress() {
  const { state } = useApp();
  const today = todayStr();
  const lessonsDone = Object.values(state.completed || {}).filter((c) => c.score >= 0.7).length;
  const vocab = collectionStats(state.srs, ALL_WORDS);
  const due = dueCount(state.srs, today);
  const readiness = readinessReport(state.skillResults);

  const weeks = heatmapWeeks(activityMap(state), today, 16);
  const sessions = sessionTrend(state.skillResults, 12);
  const histogram = levelHistogram(state.srs);
  const scheduled = histogram.reduce((n, h) => n + h.count, 0);

  const stats = [
    { n: state.xp || 0, l: 'XP earned', to: null },
    { n: `${state.streak || 0}🔥`, l: 'day streak', to: null },
    { n: `${lessonsDone}/${courseDays.length}`, l: 'lessons passed', to: '/' },
    { n: vocab.known, l: 'words known', to: '/vocabulary' },
    { n: vocab.learning, l: 'words learning', to: '/vocabulary' },
    { n: due, l: 'due today', to: '/daily' },
  ];

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold">📊 Your progress</h1>
        <p className="text-slate-500 mt-1">Everything you’ve put in — and what it’s building toward.</p>
      </div>

      {/* Stat tiles */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {stats.map((s) => {
          const tile = (
            <div className="card p-3 text-center h-full">
              <div className="text-xl font-extrabold tabular-nums">{s.n}</div>
              <div className="text-[11px] text-slate-500">{s.l}</div>
            </div>
          );
          return s.to
            ? <Link key={s.l} to={s.to} className="block hover:opacity-90">{tile}</Link>
            : <div key={s.l}>{tile}</div>;
        })}
      </div>

      {/* Streak heat-map */}
      <section className="card">
        <h2 className="font-bold mb-3">Study activity · last 16 weeks</h2>
        <Heatmap weeks={weeks} />
      </section>

      {/* Accuracy trend */}
      <section className="card">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <h2 className="font-bold">Exam-practice accuracy</h2>
          {readiness.tested > 0 && (
            <Link to="/readiness" className="ml-auto pill bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300 hover:opacity-80">
              Readiness {Math.round(readiness.overall * 100)}% →
            </Link>
          )}
        </div>
        <TrendBars sessions={sessions} />
      </section>

      {/* Memory pipeline */}
      <section className="card">
        <h2 className="font-bold mb-1">Vocabulary memory pipeline</h2>
        <p className="text-sm text-slate-500 mb-3">
          {scheduled === 0
            ? <>Start the <Link to="/daily" className="text-brand-600 hover:underline">daily review</Link> and words will move rightward as they stick — higher level, longer memory.</>
            : <>{scheduled.toLocaleString()} words in rotation — each level doubles roughly how long you remember it. Words move right as you review.</>}
        </p>
        {scheduled > 0 && <LevelPipeline histogram={histogram} />}
      </section>
    </div>
  );
}
