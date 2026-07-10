import { describe, it, expect } from 'vitest';
import { activityMap, heatBucket, heatmapWeeks, sessionTrend, levelHistogram } from './progressStats.js';
import { MAX_LEVEL } from './srs.js';

const TODAY = '2026-07-10';

describe('progress · activityMap', () => {
  it('sums the explicit log (lessons weighted ×5)', () => {
    const map = activityMap({ activity: { [TODAY]: { answers: 4, reviews: 6, lessons: 1 } } });
    expect(map[TODAY]).toBe(4 + 6 + 5);
  });

  it('falls back to retro proxies only for unlogged days', () => {
    const state = {
      activity: { '2026-07-09': { answers: 2 } },
      completed: {
        1: { score: 1, completedAt: '2026-07-01' },     // unlogged → +8
        2: { score: 1, completedAt: '2026-07-09' },     // logged day → ignored
      },
      skillResults: { lesen: [{ d: '2026-07-02', c: 9, t: 13, r: 0.7 }] }, // +13
      srs: { Hund: { level: 2, last: '2026-07-03' } },  // +1
    };
    const map = activityMap(state);
    expect(map['2026-07-01']).toBe(8);
    expect(map['2026-07-02']).toBe(13);
    expect(map['2026-07-03']).toBe(1);
    expect(map['2026-07-09']).toBe(2); // log only, proxy suppressed
  });
});

describe('progress · heatBucket', () => {
  it('buckets intensity into 0..4', () => {
    expect([0, 1, 4, 5, 14, 15, 29, 30, 99].map(heatBucket)).toEqual([0, 1, 1, 2, 2, 3, 3, 4, 4]);
  });
});

describe('progress · heatmapWeeks', () => {
  it('produces Monday-aligned full weeks ending today', () => {
    const weeks = heatmapWeeks({ [TODAY]: 3 }, TODAY, 4);
    expect(weeks.length).toBeGreaterThanOrEqual(4);
    weeks.forEach((w) => expect(w).toHaveLength(7));
    // first day of the grid is a Monday
    const first = new Date(`${weeks[0][0].date}T00:00:00`);
    expect(first.getDay()).toBe(1);
    // today's cell exists, carries its count, and is the last non-null cell
    const flat = weeks.flat().filter(Boolean);
    const last = flat[flat.length - 1];
    expect(last.date).toBe(TODAY);
    expect(last.count).toBe(3);
  });
});

describe('progress · sessionTrend', () => {
  it('merges skills, sorts by date, caps at n', () => {
    const sr = {
      lesen: [{ d: '2026-07-01', r: 0.5 }, { d: '2026-07-03', r: 0.9 }],
      hoeren: [{ d: '2026-07-02', c: 4, t: 10 }],
    };
    const t = sessionTrend(sr, 2);
    expect(t).toHaveLength(2);
    expect(t[0].d).toBe('2026-07-02');
    expect(t[0].ratio).toBeCloseTo(0.4, 5); // c/t fallback
    expect(t[1]).toMatchObject({ d: '2026-07-03', skill: 'lesen' });
  });

  it('empty results give an empty trend', () => {
    expect(sessionTrend({}, 5)).toEqual([]);
  });
});

describe('progress · levelHistogram', () => {
  it('counts words per SRS level with intervals attached', () => {
    const srs = { a: { level: 1 }, b: { level: 1 }, c: { level: MAX_LEVEL } };
    const h = levelHistogram(srs);
    expect(h).toHaveLength(MAX_LEVEL + 1);
    expect(h[1].count).toBe(2);
    expect(h[MAX_LEVEL].count).toBe(1);
    expect(h[0].count).toBe(0);
    expect(h[1].intervalDays).toBeGreaterThan(0);
  });
});
