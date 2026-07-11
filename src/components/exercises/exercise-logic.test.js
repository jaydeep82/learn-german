import { describe, it, expect } from 'vitest';
import { norm, accepts } from './FormFill.jsx';
import { shuffle, buildQuiz } from '../../pages/Practice.jsx';

/**
 * Unit tests for the pure exercise logic (roadmap D5): the tolerant answer
 * matching used by the exam form-fill, and the quiz generator behind Practice.
 */

describe('FormFill · tolerant answer matching', () => {
  it('ignores case, spacing and end punctuation', () => {
    expect(norm('  Köln! ')).toBe(norm('köln'));
    expect(accepts('Berlin', 'berlin')).toBe(true);
    expect(accepts('28', ' 28 ')).toBe(true);
  });

  it('keeps the German umlaut convention (ä→ae) so Köln matches Koeln', () => {
    expect(accepts('Köln', 'Koeln')).toBe(true);
    expect(accepts('Straße', 'strasse')).toBe(true);
    expect(accepts('München', 'muenchen')).toBe(true);
  });

  it('folds non-German accents (Gómez matches Gomez)', () => {
    expect(accepts('Gómez', 'Gomez')).toBe(true);
    expect(accepts('Gómez', 'gómez')).toBe(true);
  });

  it('supports several acceptable answers', () => {
    expect(accepts(['Spanien', 'Spain'], 'spain')).toBe(true);
    expect(accepts(['Spanien', 'Spain'], 'France')).toBe(false);
  });

  it('still rejects genuinely wrong answers', () => {
    expect(accepts('28', '27')).toBe(false);
    expect(accepts('Maria', 'Marco')).toBe(false);
  });
});

describe('Practice · shuffle', () => {
  it('preserves the multiset of items', () => {
    const arr = [1, 2, 3, 4, 5, 5];
    expect([...shuffle(arr)].sort()).toEqual([...arr].sort());
  });
  it('does not mutate its input', () => {
    const arr = [1, 2, 3];
    shuffle(arr);
    expect(arr).toEqual([1, 2, 3]);
  });
});

describe('Practice · buildQuiz', () => {
  const items = Array.from({ length: 30 }, (_, i) => ({ de: `wort${i}`, en: `word${i}`, example: `Satz ${i}.` }));

  it('builds the requested number of questions', () => {
    expect(buildQuiz(items, items, 10)).toHaveLength(10);
    expect(buildQuiz(items, items, 0)).toHaveLength(30); // 0 = all
  });

  it('every question contains its own answer among unique options', () => {
    for (const q of buildQuiz(items, items, 20)) {
      expect(q.options).toContain(q.answer);
      expect(new Set(q.options).size).toBe(q.options.length);
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(q.type).toBe('multiple-choice');
    }
  });

  it('draws distractors from the pool, never equal to the answer', () => {
    for (const q of buildQuiz(items, items, 20)) {
      const distractors = q.options.filter((o) => o !== q.answer);
      expect(distractors).toHaveLength(3);
      expect(distractors.every((d) => d !== q.answer)).toBe(true);
    }
  });

  it('small pools still produce valid questions (fewer distractors)', () => {
    const two = items.slice(0, 2);
    for (const q of buildQuiz(two, two, 0)) {
      expect(q.options).toContain(q.answer);
      expect(new Set(q.options).size).toBe(q.options.length);
    }
  });

  it('carries the example as the explanation', () => {
    const q = buildQuiz(items.slice(0, 1), items, 1)[0];
    expect(q.explain).toBe('Satz 0.');
  });

  it('en-de direction reverses prompt and answer (reverse quiz)', () => {
    for (const q of buildQuiz(items, items, 10, 'en-de')) {
      expect(q.q).toMatch(/^word/);      // English prompt
      expect(q.answer).toMatch(/^wort/); // German answer among options
      expect(q.options).toContain(q.answer);
      expect(new Set(q.options).size).toBe(q.options.length);
    }
  });
});
