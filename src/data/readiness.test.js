import { describe, it, expect } from 'vitest';
import { SKILLS, PASS_RATIO, READY_RATIO, skillReadiness, readinessReport } from './readiness.js';

// Entries are chronological (oldest → newest), matching how they're recorded.
const e = (r, mock = false) => ({ d: '2026-07-09', c: Math.round(r * 10), t: 10, r, mock });
const all4 = (r) => Object.fromEntries(SKILLS.map((s) => [s.key, [e(r)]]));

describe('readiness · skillReadiness', () => {
  it('returns null when untested', () => {
    expect(skillReadiness()).toBeNull();
    expect(skillReadiness([])).toBeNull();
  });

  it('a single session is its own readiness', () => {
    const r = skillReadiness([e(0.6)]);
    expect(r.ratio).toBeCloseTo(0.6, 5);
    expect(r).toMatchObject({ attempts: 1, mocks: 0, last: '2026-07-09' });
  });

  it('newer sessions count more than older ones', () => {
    const improving = skillReadiness([e(0), e(1)]); // newest = 100%
    const declining = skillReadiness([e(1), e(0)]); // newest = 0%
    expect(improving.ratio).toBeCloseTo(1 / 1.8, 4);     // (1×1 + 0×0.8) / 1.8
    expect(declining.ratio).toBeCloseTo(0.8 / 1.8, 4);   // (0×1 + 1×0.8) / 1.8
    expect(improving.ratio).toBeGreaterThan(declining.ratio);
  });

  it('mock sessions weigh more than practice sessions', () => {
    const practiceOld = skillReadiness([e(1, false), e(0, false)]).ratio;
    const mockOld = skillReadiness([e(1, true), e(0, false)]).ratio;
    expect(mockOld).toBeCloseTo(1.2 / 2.2, 4); // old mock w=0.8×1.5
    expect(mockOld).toBeGreaterThan(practiceOld);
  });

  it('only the last five sessions are weighted, but attempts counts all', () => {
    const many = [e(0), e(0), e(0), e(1), e(1), e(1), e(1), e(1)]; // last 5 are all 100%
    const r = skillReadiness(many);
    expect(r.ratio).toBeCloseTo(1, 5);
    expect(r.attempts).toBe(8);
  });

  it('falls back to c/t when a stored entry has no ratio', () => {
    expect(skillReadiness([{ d: '2026-07-09', c: 3, t: 10 }]).ratio).toBeCloseTo(0.3, 5);
  });
});

describe('readiness · readinessReport', () => {
  it('untested when nothing is recorded', () => {
    const rep = readinessReport({});
    expect(rep.verdict).toBe('untested');
    expect(rep.tested).toBe(0);
    expect(rep.weakest).toBeNull();
    expect(rep.untested).toHaveLength(4);
  });

  it('incomplete until all four skills are tested', () => {
    const rep = readinessReport({ lesen: [e(0.9)] });
    expect(rep.verdict).toBe('incomplete');
    expect(rep.tested).toBe(1);
    expect(rep.untested.map((s) => s.key)).toEqual(['hoeren', 'schreiben', 'sprechen']);
  });

  it('ready when every skill passes and overall clears the ready bar', () => {
    const rep = readinessReport(all4(0.9));
    expect(rep.overall).toBeCloseTo(0.9, 5);
    expect(rep.verdict).toBe('ready');
  });

  it('almost when overall passes but one skill is under the pass mark', () => {
    const results = { ...all4(0.9), hoeren: [e(0.5)] }; // overall 0.8 but Hören 50%
    const rep = readinessReport(results);
    expect(rep.overall).toBeCloseTo(0.8, 5);
    expect(rep.overall).toBeGreaterThanOrEqual(READY_RATIO);
    expect(rep.verdict).toBe('almost');
    expect(rep.weakest.key).toBe('hoeren');
  });

  it('almost when everything hovers just above the pass mark', () => {
    const rep = readinessReport(all4(0.65));
    expect(rep.verdict).toBe('almost');
  });

  it('keep-going when overall is below the pass mark', () => {
    const rep = readinessReport(all4(0.4));
    expect(rep.overall).toBeLessThan(PASS_RATIO);
    expect(rep.verdict).toBe('keep-going');
    expect(rep.weakest).toBeTruthy();
  });
});
