/**
 * Data-free core of the spaced-repetition engine: scheduling math, mastery
 * classification and date helpers. Deliberately imports NO vocabulary data —
 * AppContext (in the app's entry bundle) depends on this module, and keeping
 * it word-free is what lets the big word lists live in lazy route chunks
 * (roadmap C6 code-splitting). Word-list helpers live in srs.js, which
 * re-exports everything here.
 */

// Days until the next review, indexed by level. Level 0 = brand new (due now).
export const INTERVALS = [0, 1, 2, 4, 9, 20, 45];
export const MAX_LEVEL = INTERVALS.length - 1;
export const GRADES = ['again', 'good', 'easy'];

// A word at or above this level counts as "known" (mastered).
export const KNOWN_LEVEL = 4;

/** Local calendar date as YYYY-MM-DD (date only, no time-of-day). */
export function todayStr(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function addDays(dateStr, n) {
  const d = new Date(`${dateStr}T00:00:00`);
  d.setDate(d.getDate() + n);
  return todayStr(d);
}

export function newCard(today) {
  return { level: 0, due: today, reps: 0, lapses: 0, last: null };
}

/**
 * Reschedule a card after a review. grade ∈ 'again' | 'good' | 'easy'.
 *   again → back to level 1 (a lapse)
 *   good  → +1 level
 *   easy  → +2 levels
 */
export function gradeCard(card, grade, today) {
  const c = card || newCard(today);
  let level;
  if (grade === 'again') level = 1;
  else if (grade === 'easy') level = Math.min(c.level + 2, MAX_LEVEL);
  else level = Math.min(c.level + 1, MAX_LEVEL); // 'good' (default)
  level = Math.max(1, level);
  return {
    level,
    due: addDays(today, INTERVALS[level]),
    reps: (c.reps || 0) + 1,
    lapses: (c.lapses || 0) + (grade === 'again' ? 1 : 0),
    last: today,
  };
}

/** How many scheduled cards are due on or before `today`. */
export function dueCount(srs = {}, today) {
  let n = 0;
  for (const de in srs) if (srs[de] && srs[de].due <= today) n += 1;
  return n;
}

/** How many words have entered the SRS at all (been reviewed at least once). */
export function learningCount(srs = {}) {
  return Object.keys(srs).length;
}

/** Mastery of a single word: 'new' (unseen) · 'learning' · 'known'. */
export function masteryOf(srs, de) {
  const c = srs?.[de];
  if (!c) return 'new';
  return c.level >= KNOWN_LEVEL ? 'known' : 'learning';
}

/** A card representing a word the learner marked as already known. */
export function knownCard(today, prev) {
  const level = MAX_LEVEL - 1; // comfortably "known", scheduled well out
  return {
    level,
    due: addDays(today, INTERVALS[level]),
    reps: (prev?.reps || 0) + 1,
    lapses: prev?.lapses || 0,
    last: today,
    known: true,
  };
}

/** Coverage of a word set: how many are known / learning / new. */
export function collectionStats(srs = {}, words = []) {
  let known = 0;
  let learning = 0;
  for (const w of words) {
    const m = masteryOf(srs, w.de);
    if (m === 'known') known += 1;
    else if (m === 'learning') learning += 1;
  }
  const total = words.length;
  return { total, known, learning, new: total - known - learning, started: known + learning };
}
