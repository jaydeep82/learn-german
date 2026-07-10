import { describe, it, expect } from 'vitest';
import { daysUntil, lessonPaceLabel, paceReport } from './examGoals.js';

const TODAY = '2026-07-10';

describe('exam goals · daysUntil', () => {
  it('counts calendar days, not hours', () => {
    expect(daysUntil('2026-07-10', TODAY)).toBe(0);
    expect(daysUntil('2026-07-11', TODAY)).toBe(1);
    expect(daysUntil('2026-08-10', TODAY)).toBe(31);
    expect(daysUntil('2026-07-01', TODAY)).toBe(-9);
  });
  it('crosses month and year boundaries', () => {
    expect(daysUntil('2027-01-01', '2026-12-31')).toBe(1);
  });
});

describe('exam goals · lessonPaceLabel', () => {
  it('null when nothing left or no time', () => {
    expect(lessonPaceLabel(0, 30)).toBeNull();
    expect(lessonPaceLabel(5, 0)).toBeNull();
  });
  it('relaxed pace reads as "1 lesson every N days"', () => {
    expect(lessonPaceLabel(10, 40)).toBe('1 lesson every 4 days');
    expect(lessonPaceLabel(10, 20)).toBe('1 lesson every 2 days');
  });
  it('tight pace reads as lessons per day', () => {
    expect(lessonPaceLabel(10, 10)).toBe('1 lesson a day');
    expect(lessonPaceLabel(20, 10)).toBe('2 lessons a day');
  });
});

describe('exam goals · paceReport', () => {
  const base = { today: TODAY, lessonsDone: 20, totalLessons: 50, wordsStarted: 400, totalWords: 2400 };

  it('null without an exam date', () => {
    expect(paceReport({ ...base, examDate: null })).toBeNull();
  });

  it('prep phase with paces', () => {
    const r = paceReport({ ...base, examDate: '2026-08-29' }); // 50 days out
    expect(r.phase).toBe('prep');
    expect(r.days).toBe(50);
    expect(r.lessonsLeft).toBe(30);
    expect(r.lessonPace).toBe('1 lesson a day'); // 30 lessons / 50 days → ceil = 1/day
    expect(r.wordsPerDay).toBe(Math.ceil(2000 / 50)); // 40
  });

  it('final week and exam day phases', () => {
    expect(paceReport({ ...base, examDate: '2026-07-15' }).phase).toBe('final-week');
    expect(paceReport({ ...base, examDate: TODAY }).phase).toBe('exam-day');
    expect(paceReport({ ...base, examDate: '2026-07-01' }).phase).toBe('past');
  });

  it('finished course yields no lesson pace', () => {
    const r = paceReport({ ...base, lessonsDone: 50, examDate: '2026-08-29' });
    expect(r.lessonsLeft).toBe(0);
    expect(r.lessonPace).toBeNull();
  });
});
