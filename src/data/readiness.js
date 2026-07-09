/**
 * Exam-readiness engine (roadmap B3).
 *
 * Every finished skill module (standalone or inside the mock) records one
 * result entry per skill in AppContext under `skillResults`:
 *   { [skill]: [{ d: 'YYYY-MM-DD', c: correct, t: total, r: ratio, mock: bool }] }
 *
 * Readiness per skill is a recency-weighted average of the last few attempts —
 * newer sessions count more, and mock-exam sessions (timed, full format) count
 * more than relaxed practice. Pure functions, fully unit-tested.
 */

export const SKILLS = [
  { key: 'hoeren', emoji: '🎧', name: 'Hören', en: 'Listening', to: '/hoeren' },
  { key: 'lesen', emoji: '📖', name: 'Lesen', en: 'Reading', to: '/lesen' },
  { key: 'schreiben', emoji: '✍️', name: 'Schreiben', en: 'Writing', to: '/schreiben' },
  { key: 'sprechen', emoji: '🗣️', name: 'Sprechen', en: 'Speaking', to: '/sprechen' },
];

export const PASS_RATIO = 0.6;   // the exam's pass mark
export const READY_RATIO = 0.75; // conservative bar for "exam-ready"

// Weight of the newest → oldest attempt (only the last 5 count).
const RECENCY = [1, 0.8, 0.6, 0.4, 0.2];
// A mock-exam session is a stronger signal than relaxed practice.
const MOCK_WEIGHT = 1.5;

const ratioOf = (e) => e.r ?? (e.t ? e.c / e.t : 0);

/**
 * Readiness for one skill from its (chronological) result entries.
 * Returns { ratio, attempts, mocks, last } or null when untested.
 */
export function skillReadiness(entries) {
  if (!entries || entries.length === 0) return null;
  const recent = entries.slice(-RECENCY.length).reverse(); // newest first
  let num = 0;
  let den = 0;
  recent.forEach((e, i) => {
    const w = RECENCY[i] * (e.mock ? MOCK_WEIGHT : 1);
    num += ratioOf(e) * w;
    den += w;
  });
  return {
    ratio: den ? num / den : 0,
    attempts: entries.length,
    mocks: entries.filter((e) => e.mock).length,
    last: entries[entries.length - 1].d,
  };
}

/**
 * Full report across the four skills.
 * verdict: 'untested' | 'incomplete' | 'keep-going' | 'almost' | 'ready'
 *   ready      — every skill ≥ 60% and overall ≥ 75%
 *   almost     — overall ≥ 60% (but not comfortably ready everywhere)
 *   keep-going — overall below the 60% pass mark
 */
export function readinessReport(skillResults = {}) {
  const skills = SKILLS.map((s) => ({ ...s, r: skillReadiness(skillResults[s.key]) }));
  const tested = skills.filter((s) => s.r);
  const overall = tested.length ? tested.reduce((n, s) => n + s.r.ratio, 0) / tested.length : 0;

  let verdict;
  if (tested.length === 0) verdict = 'untested';
  else if (tested.length < SKILLS.length) verdict = 'incomplete';
  else if (overall >= READY_RATIO && skills.every((s) => s.r.ratio >= PASS_RATIO)) verdict = 'ready';
  else if (overall >= PASS_RATIO) verdict = 'almost';
  else verdict = 'keep-going';

  const weakest = tested.length
    ? [...tested].sort((a, b) => a.r.ratio - b.r.ratio)[0]
    : null;
  const untested = skills.filter((s) => !s.r);

  return { skills, tested: tested.length, overall, verdict, weakest, untested };
}
