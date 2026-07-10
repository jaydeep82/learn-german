/**
 * Spaced-repetition engine (roadmap B1) — word-list side.
 *
 * The pure scheduling math lives in srsCore.js (no data imports, safe for the
 * entry bundle) and is re-exported here so existing imports keep working.
 * This module owns everything that touches the actual vocabulary data:
 * the master word list and the daily session builder.
 *
 * State shape (persisted in AppContext under `srs`), keyed by the German word:
 *   { [de]: { level, due: 'YYYY-MM-DD', reps, lapses, last } }
 */
import { allVocab } from './vocabulary.js';
import { goetheA1Flat } from './goetheA1.js';
import { goetheSD1Flat } from './goetheSD1.js';

export * from './srsCore.js';

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
