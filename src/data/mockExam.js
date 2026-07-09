/**
 * Full Goethe A1 mock exam — roadmap A7.
 *
 * Strings the four skill modules together in the real exam order, each with its
 * own countdown (the official approximate timings). Scoring weights the four
 * skills equally and passes at 60% overall, matching the exam's pass mark.
 */
import { HOEREN_EXERCISES } from './hoerenModule.js';
import { LESEN_EXERCISES } from './lesenModule.js';
import { SCHREIBEN_EXERCISES } from './schreibenModule.js';
import { SPRECHEN_EXERCISES } from './sprechenModule.js';

export const MOCK_MODULES = [
  { key: 'hoeren', emoji: '🎧', name: 'Hören', en: 'Listening', minutes: 20, exercises: HOEREN_EXERCISES },
  { key: 'lesen', emoji: '📖', name: 'Lesen', en: 'Reading', minutes: 25, exercises: LESEN_EXERCISES },
  { key: 'schreiben', emoji: '✍️', name: 'Schreiben', en: 'Writing', minutes: 20, exercises: SCHREIBEN_EXERCISES },
  { key: 'sprechen', emoji: '🗣️', name: 'Sprechen', en: 'Speaking', minutes: 15, exercises: SPRECHEN_EXERCISES },
];

export const MOCK_PASS_RATIO = 0.6;
export const MOCK_TOTAL_MINUTES = MOCK_MODULES.reduce((n, m) => n + m.minutes, 0);

/** Equal-weight the four skills: overall = mean of each module's ratio. */
export function overallRatio(results) {
  if (!results.length) return 0;
  return results.reduce((n, r) => n + (r.ratio || 0), 0) / results.length;
}
