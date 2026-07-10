import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../store/AppContext.jsx';
import { days as courseDays } from '../data/curriculum.js';
import { ALL_WORDS, collectionStats, todayStr } from '../data/srs.js';
import { paceReport } from '../data/examGoals.js';
import { readinessReport } from '../data/readiness.js';

/**
 * Exam-date goal card (roadmap C3), shown on the dashboard.
 * Unset → inline date picker. Set → countdown + the pace needed to be ready
 * (lessons/day, new words/day) + readiness %, with a mock nudge in the
 * final week. The date lives in settings.examDate ('YYYY-MM-DD').
 */
export default function ExamCountdown() {
  const { state, updateSettings } = useApp();
  const [draft, setDraft] = useState('');
  const today = todayStr();
  const examDate = state.settings?.examDate || null;

  // ── unset: inline picker ─────────────────────────────────────────
  if (!examDate) {
    return (
      <div className="card bg-gradient-to-br from-brand-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-3xl" aria-hidden>🎯</span>
          <div className="flex-1 min-w-[12rem]">
            <div className="font-bold">Studying for the Goethe A1?</div>
            <div className="text-sm text-slate-500">Set your exam date to get a countdown and a daily pace.</div>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="exam-date" className="sr-only">Exam date</label>
            <input
              id="exam-date"
              type="date"
              min={today}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm"
            />
            <button className="btn-primary py-1.5 px-3 text-sm" disabled={!draft} onClick={() => updateSettings({ examDate: draft })}>
              Set date
            </button>
          </div>
        </div>
      </div>
    );
  }

  const lessonsDone = Object.values(state.completed || {}).filter((c) => c.score >= 0.7).length;
  const vocab = collectionStats(state.srs, ALL_WORDS);
  const pace = paceReport({
    examDate, today,
    lessonsDone, totalLessons: courseDays.length,
    wordsStarted: vocab.started, totalWords: vocab.total,
  });
  const readiness = readinessReport(state.skillResults);
  const clear = () => updateSettings({ examDate: null });

  // ── past date ────────────────────────────────────────────────────
  if (pace.phase === 'past') {
    return (
      <div className="card bg-gradient-to-br from-amber-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-3xl" aria-hidden>🎯</span>
          <div className="flex-1">
            <div className="font-bold">Your exam date ({examDate}) has passed</div>
            <div className="text-sm text-slate-500">Hope it went well! Set a new goal to keep the momentum.</div>
          </div>
          <button className="btn-secondary py-1.5 px-3 text-sm" onClick={clear}>Set a new date</button>
        </div>
      </div>
    );
  }

  const examDay = pace.phase === 'exam-day';
  const finalWeek = pace.phase === 'final-week';

  return (
    <div className="card bg-gradient-to-br from-brand-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="flex flex-wrap items-center gap-4">
        <div className="text-center shrink-0">
          <div className="text-4xl font-extrabold tabular-nums leading-none">{examDay ? '🎓' : pace.days}</div>
          <div className="text-[11px] uppercase tracking-wide text-slate-500 mt-1">{examDay ? 'today!' : pace.days === 1 ? 'day to go' : 'days to go'}</div>
        </div>
        <div className="flex-1 min-w-[14rem]">
          <div className="font-bold flex items-center gap-2 flex-wrap">
            🎯 Goethe A1 · {examDate}
            {readiness.tested > 0 && (
              <Link to="/readiness" className="pill bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300 hover:opacity-80">
                Readiness {Math.round(readiness.overall * 100)}%
              </Link>
            )}
          </div>
          {examDay ? (
            <p className="text-sm text-slate-500 mt-1">It’s exam day — viel Erfolg! 🍀</p>
          ) : finalWeek ? (
            <p className="text-sm text-slate-500 mt-1">
              Final week — <Link to="/mock" className="text-brand-600 font-semibold hover:underline">sit a timed mock</Link> and review your weak spots daily.
            </p>
          ) : (
            <ul className="text-sm text-slate-500 mt-1 space-y-0.5">
              {pace.lessonPace && <li>📚 {pace.lessonsLeft} lessons left — <strong>{pace.lessonPace}</strong> finishes the course in time.</li>}
              {!pace.lessonPace && <li>📚 Course finished — keep sharpening with the exam trainer.</li>}
              {pace.wordsPerDay > 0 && <li>🔤 <strong>~{pace.wordsPerDay} new words a day</strong> covers all {vocab.total.toLocaleString()} words before the exam.</li>}
            </ul>
          )}
        </div>
        <button className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline shrink-0" onClick={clear}>
          change
        </button>
      </div>
    </div>
  );
}
