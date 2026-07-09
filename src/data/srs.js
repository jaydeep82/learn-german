/**
 * Spaced-repetition engine (roadmap B1).
 *
 * A Leitner-style scheduler: every word sits at a level (0 = new); a correct
 * recall promotes it and pushes the next review further out, a lapse sends it
 * back to level 1. Reviews are due when their date arrives, so each day the
 * learner sees exactly the words they're about to forget, plus a few new ones.
 *
 * State shape (persisted in AppContext under `srs`), keyed by the German word:
 *   { [de]: { level, due: 'YYYY-MM-DD', reps, lapses, last } }
 *
 * Pure functions take `today` explicitly so they're deterministic and testable.
 */
import { allVocab } from './vocabulary.js';
import { goetheA1Flat } from './goetheA1.js';
import { goetheSD1Flat } from './goetheSD1.js';

// Days until the next review, indexed by level. Level 0 = brand new (due now).
export const INTERVALS = [0, 1, 2, 4, 9, 20, 45];
export const MAX_LEVEL = INTERVALS.length - 1;
export const GRADES = ['again', 'good', 'easy'];

// A word at or above this level counts as "known" (mastered).
export const KNOWN_LEVEL = 4;

// Ordered, de-duplicated master word list — course (in day order) first, then
// the youth and adult Goethe lists. New words are introduced in this order.
export const ALL_WORDS = (() => {
  const seen = new Set();
  const out = [];
  for (const v of [...allVocab, ...goetheA1Flat, ...goetheSD1Flat]) {
    if (!v || !v.de || seen.has(v.de)) continue;
    seen.add(v.de);
    out.push({ de: v.de, en: v.en, example: v.example, hint: v.hint });
  }
  return out;
})();

export const WORD_BY_DE = new Map(ALL_WORDS.map((w) => [w.de, w]));

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

/**
 * Build today's review deck: all due cards (oldest first, capped at `max`),
 * then up to `newPerDay` brand-new words that aren't in the SRS yet.
 * Each entry: { de, en, example?, hint?, card|null, kind: 'due' | 'new' }.
 */
export function buildSession(srs = {}, { today, newPerDay = 10, max = 30 } = {}) {
  const due = [];
  for (const de in srs) {
    const card = srs[de];
    if (card && card.due <= today && WORD_BY_DE.has(de)) {
      due.push({ ...WORD_BY_DE.get(de), card, kind: 'due' });
    }
  }
  due.sort((a, b) => (a.card.due < b.card.due ? -1 : a.card.due > b.card.due ? 1 : 0));
  const capped = due.slice(0, max);

  const slots = Math.max(0, Math.min(newPerDay, max - capped.length));
  const fresh = [];
  for (const w of ALL_WORDS) {
    if (fresh.length >= slots) break;
    if (!srs[w.de]) fresh.push({ ...w, card: null, kind: 'new' });
  }
  return [...capped, ...fresh];
}
