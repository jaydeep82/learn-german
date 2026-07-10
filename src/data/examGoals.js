/**
 * Exam-date goals (roadmap C3).
 *
 * The learner sets their Goethe A1 exam date (stored in settings.examDate as
 * 'YYYY-MM-DD'). These pure helpers turn that into a countdown and the pace
 * needed to be ready in time: lessons per day to finish the course, and new
 * words per day to have seen every word before the exam.
 */

/** Whole calendar days from `today` until `dateStr` (negative when past). */
export function daysUntil(dateStr, today) {
  const a = new Date(`${today}T00:00:00`);
  const b = new Date(`${dateStr}T00:00:00`);
  return Math.round((b - a) / 86400000);
}

/** Human pace for finishing the remaining lessons, or null when done/no time. */
export function lessonPaceLabel(lessonsLeft, days) {
  if (lessonsLeft <= 0 || days <= 0) return null;
  if (days >= 2 * lessonsLeft) {
    const every = Math.floor(days / lessonsLeft);
    return `1 lesson every ${every} days`;
  }
  const perDay = Math.ceil(lessonsLeft / days);
  return `${perDay} lesson${perDay === 1 ? '' : 's'} a day`;
}

/**
 * Full pace report. Returns null when no exam date is set.
 * phase: 'past' | 'exam-day' | 'final-week' | 'prep'
 */
export function paceReport({ examDate, today, lessonsDone = 0, totalLessons = 0, wordsStarted = 0, totalWords = 0 }) {
  if (!examDate) return null;
  const days = daysUntil(examDate, today);
  const lessonsLeft = Math.max(0, totalLessons - lessonsDone);
  const wordsLeft = Math.max(0, totalWords - wordsStarted);
  const phase = days < 0 ? 'past' : days === 0 ? 'exam-day' : days <= 7 ? 'final-week' : 'prep';
  return {
    days,
    phase,
    lessonsLeft,
    wordsLeft,
    lessonPace: days > 0 ? lessonPaceLabel(lessonsLeft, days) : null,
    wordsPerDay: days > 0 && wordsLeft > 0 ? Math.ceil(wordsLeft / days) : 0,
  };
}
