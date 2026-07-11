/**
 * Full Goethe A1 mock exams — roadmap A7, extended to three papers.
 *
 * Each paper strings the four skills together in the real exam order, each
 * module with its own countdown (the official approximate timings). Scoring
 * weights the four skills equally and passes at 60%, matching the exam.
 *
 * Paper 1 reuses the skill-module tasks (so it doubles as a recap of the
 * per-skill practice); papers 2 and 3 are fresh, independent sittings with
 * realistic item counts (Hören 13 · Lesen 13 · form + one message · the
 * official Sprechen keyword structure).
 */
import { HOEREN_EXERCISES } from './hoerenModule.js';
import { LESEN_EXERCISES } from './lesenModule.js';
import { SCHREIBEN_EXERCISES } from './schreibenModule.js';
import { SPRECHEN_EXERCISES } from './sprechenModule.js';
import { MOCK2_HOEREN, MOCK2_LESEN, MOCK2_SCHREIBEN, MOCK2_SPRECHEN } from './mockPaper2.js';
import { MOCK3_HOEREN, MOCK3_LESEN, MOCK3_SCHREIBEN, MOCK3_SPRECHEN } from './mockPaper3.js';
import { MOCK4_HOEREN, MOCK4_LESEN, MOCK4_SCHREIBEN, MOCK4_SPRECHEN } from './mockPaper4.js';
import { MOCK5_HOEREN, MOCK5_LESEN, MOCK5_SCHREIBEN, MOCK5_SPRECHEN } from './mockPaper5.js';
import { MOCK6_HOEREN, MOCK6_LESEN, MOCK6_SCHREIBEN, MOCK6_SPRECHEN } from './mockPaper6.js';
import { MOCK7_HOEREN, MOCK7_LESEN, MOCK7_SCHREIBEN, MOCK7_SPRECHEN } from './mockPaper7.js';
import { MOCK8_HOEREN, MOCK8_LESEN, MOCK8_SCHREIBEN, MOCK8_SPRECHEN } from './mockPaper8.js';

const buildModules = (hoeren, lesen, schreiben, sprechen) => [
  { key: 'hoeren', emoji: '🎧', name: 'Hören', en: 'Listening', minutes: 20, exercises: hoeren },
  { key: 'lesen', emoji: '📖', name: 'Lesen', en: 'Reading', minutes: 25, exercises: lesen },
  { key: 'schreiben', emoji: '✍️', name: 'Schreiben', en: 'Writing', minutes: 20, exercises: schreiben },
  { key: 'sprechen', emoji: '🗣️', name: 'Sprechen', en: 'Speaking', minutes: 15, exercises: sprechen },
];

export const MOCK_PAPERS = [
  {
    id: '1',
    title: 'Mock exam 1',
    tagline: 'The classic — built from the four practice modules.',
    emoji: '🏁',
    modules: buildModules(HOEREN_EXERCISES, LESEN_EXERCISES, SCHREIBEN_EXERCISES, SPRECHEN_EXERCISES),
  },
  {
    id: '2',
    title: 'Mock exam 2 · Im Alltag',
    tagline: 'A fresh sitting around daily life — market, café, appointments.',
    emoji: '🛒',
    modules: buildModules(MOCK2_HOEREN, MOCK2_LESEN, MOCK2_SCHREIBEN, MOCK2_SPRECHEN),
  },
  {
    id: '3',
    title: 'Mock exam 3 · Unterwegs & Arbeit',
    tagline: 'A fresh sitting around travel and work — trains, flights, the office.',
    emoji: '🧳',
    modules: buildModules(MOCK3_HOEREN, MOCK3_LESEN, MOCK3_SCHREIBEN, MOCK3_SPRECHEN),
  },
  {
    id: '4',
    title: 'Mock exam 4 · Familie & Freizeit',
    tagline: 'Family and free time — clubs, birthdays, hobbies, the park.',
    emoji: '⚽',
    modules: buildModules(MOCK4_HOEREN, MOCK4_LESEN, MOCK4_SCHREIBEN, MOCK4_SPRECHEN),
  },
  {
    id: '5',
    title: 'Mock exam 5 · Gesundheit & Termine',
    tagline: 'Health and appointments — the doctor, the pharmacy, getting help.',
    emoji: '🩺',
    modules: buildModules(MOCK5_HOEREN, MOCK5_LESEN, MOCK5_SCHREIBEN, MOCK5_SPRECHEN),
  },
  {
    id: '6',
    title: 'Mock exam 6 · Wohnen & Einkaufen',
    tagline: 'Living and shopping — the flat, neighbours, furniture, the market.',
    emoji: '🏠',
    modules: buildModules(MOCK6_HOEREN, MOCK6_LESEN, MOCK6_SCHREIBEN, MOCK6_SPRECHEN),
  },
  {
    id: '7',
    title: 'Mock exam 7 · Schule & Lernen',
    tagline: 'School and learning — courses, the library, exam day itself.',
    emoji: '📚',
    modules: buildModules(MOCK7_HOEREN, MOCK7_LESEN, MOCK7_SCHREIBEN, MOCK7_SPRECHEN),
  },
  {
    id: '8',
    title: 'Mock exam 8 · Feste & Jahreszeiten',
    tagline: 'Celebrations and seasons — invitations, presents, weather, holidays.',
    emoji: '🎄',
    modules: buildModules(MOCK8_HOEREN, MOCK8_LESEN, MOCK8_SCHREIBEN, MOCK8_SPRECHEN),
  },
];

export const paperById = (id) => MOCK_PAPERS.find((p) => p.id === String(id)) || null;
export const paperMinutes = (paper) => paper.modules.reduce((n, m) => n + m.minutes, 0);

// Back-compat: paper 1's modules (kept for existing imports/tests).
export const MOCK_MODULES = MOCK_PAPERS[0].modules;

export const MOCK_PASS_RATIO = 0.6;
export const MOCK_TOTAL_MINUTES = paperMinutes(MOCK_PAPERS[0]);

/** Equal-weight the four skills: overall = mean of each module's ratio. */
export function overallRatio(results) {
  if (!results.length) return 0;
  return results.reduce((n, r) => n + (r.ratio || 0), 0) / results.length;
}
