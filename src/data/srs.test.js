import { describe, it, expect } from 'vitest';
import {
  ALL_WORDS, WORD_BY_DE, INTERVALS, MAX_LEVEL,
  todayStr, addDays, newCard, gradeCard, dueCount, learningCount, buildSession,
} from './srs.js';

const TODAY = '2026-07-09';

describe('SRS · master word list', () => {
  it('is non-empty and de-duplicated by headword', () => {
    expect(ALL_WORDS.length).toBeGreaterThan(1000);
    const des = ALL_WORDS.map((w) => w.de);
    expect(new Set(des).size).toBe(des.length);
  });
  it('every word has de + en and is indexed', () => {
    expect(ALL_WORDS.every((w) => w.de && w.en)).toBe(true);
    expect(WORD_BY_DE.get(ALL_WORDS[0].de)).toBeTruthy();
  });
});

describe('SRS · date helpers', () => {
  it('addDays advances calendar dates and crosses month boundaries', () => {
    expect(addDays(TODAY, 1)).toBe('2026-07-10');
    expect(addDays(TODAY, 0)).toBe(TODAY);
    expect(addDays('2026-07-31', 1)).toBe('2026-08-01');
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01');
  });
  it('todayStr formats a Date as YYYY-MM-DD', () => {
    expect(todayStr(new Date('2026-03-05T12:00:00'))).toBe('2026-03-05');
  });
});

describe('SRS · scheduling', () => {
  it('a new card is level 0 and due immediately', () => {
    expect(newCard(TODAY)).toMatchObject({ level: 0, due: TODAY, reps: 0, lapses: 0 });
  });

  it('"good" promotes one level and schedules the matching interval', () => {
    const c = gradeCard(null, 'good', TODAY); // new → level 1
    expect(c.level).toBe(1);
    expect(c.due).toBe(addDays(TODAY, INTERVALS[1]));
    expect(c.reps).toBe(1);
    const c2 = gradeCard(c, 'good', TODAY); // level 2
    expect(c2.level).toBe(2);
    expect(c2.due).toBe(addDays(TODAY, INTERVALS[2]));
  });

  it('"easy" jumps two levels', () => {
    const c = gradeCard({ level: 1, due: TODAY, reps: 3, lapses: 0 }, 'easy', TODAY);
    expect(c.level).toBe(3);
    expect(c.due).toBe(addDays(TODAY, INTERVALS[3]));
  });

  it('"again" drops to level 1 and counts a lapse', () => {
    const c = gradeCard({ level: 4, due: TODAY, reps: 6, lapses: 1 }, 'again', TODAY);
    expect(c.level).toBe(1);
    expect(c.lapses).toBe(2);
    expect(c.due).toBe(addDays(TODAY, INTERVALS[1]));
  });

  it('level never exceeds MAX_LEVEL', () => {
    let c = { level: MAX_LEVEL, due: TODAY, reps: 9, lapses: 0 };
    c = gradeCard(c, 'easy', TODAY);
    expect(c.level).toBe(MAX_LEVEL);
  });
});

describe('SRS · queues', () => {
  const srs = {
    'der Hund': { level: 2, due: '2026-07-08', reps: 2, lapses: 0 }, // due (past)
    'die Katze': { level: 1, due: '2026-07-09', reps: 1, lapses: 0 }, // due (today)
    'das Haus': { level: 3, due: '2026-07-20', reps: 3, lapses: 0 },  // not due
  };

  it('dueCount counts only cards due on/before today', () => {
    expect(dueCount(srs, TODAY)).toBe(2);
    expect(dueCount({}, TODAY)).toBe(0);
  });

  it('learningCount counts all scheduled words', () => {
    expect(learningCount(srs)).toBe(3);
  });

  it('buildSession returns due cards plus a capped number of new words', () => {
    const session = buildSession(srs, { today: TODAY, newPerDay: 5, max: 30 });
    const due = session.filter((s) => s.kind === 'due');
    const fresh = session.filter((s) => s.kind === 'new');
    expect(due.length).toBe(2);            // der Hund + die Katze (das Haus not due)
    expect(fresh.length).toBe(5);          // newPerDay
    expect(fresh.every((s) => !srs[s.de])).toBe(true); // never re-introduces a known word
  });

  it('respects the session max (due cards are capped, no new added past max)', () => {
    const many = {};
    // Use real headwords so buildSession can render them (it drops unknown des).
    ALL_WORDS.slice(0, 40).forEach((w) => { many[w.de] = { level: 1, due: '2026-07-01', reps: 1, lapses: 0 }; });
    const session = buildSession(many, { today: TODAY, newPerDay: 10, max: 12 });
    expect(session.length).toBe(12);
    expect(session.every((s) => s.kind === 'due')).toBe(true);
  });
});
