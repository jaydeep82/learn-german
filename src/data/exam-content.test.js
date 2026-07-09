import { describe, it, expect } from 'vitest';
import { EXAM_FORMATS } from './examFormats.js';
import { LESEN_EXERCISES, LESEN_ITEM_COUNT, LESEN_PARTS } from './lesenModule.js';
import { SCHREIBEN_EXERCISES, SCHREIBEN_ITEM_COUNT, SCHREIBEN_PARTS } from './schreibenModule.js';
import { HOEREN_EXERCISES, HOEREN_ITEM_COUNT, HOEREN_PARTS } from './hoerenModule.js';
import { SPRECHEN_EXERCISES, SPRECHEN_ITEM_COUNT, SPRECHEN_PARTS } from './sprechenModule.js';
import { MOCK_MODULES, MOCK_PASS_RATIO, MOCK_TOTAL_MINUTES, overallRatio } from './mockExam.js';

/**
 * Integrity tests for exam-format content (roadmap A1/A2). Guards that every
 * exercise spec is well-formed so a malformed task can't slip into the trainer:
 * known type, an answer that points at a real option, no duplicate keys.
 */
const KNOWN_TYPES = new Set(['richtig-falsch', 'picture-mcq', 'ad-match', 'form-fill', 'speaking-card', 'guided-writing', 'multiple-choice']);
const isNonEmptyString = (v) => typeof v === 'string' && v.trim().length > 0;

// Validate one exercise spec; returns an array of problem strings (empty = ok).
function validate(spec) {
  const problems = [];
  if (!KNOWN_TYPES.has(spec.type)) return [`unknown type "${spec.type}"`];

  switch (spec.type) {
    case 'richtig-falsch': {
      if (!Array.isArray(spec.statements) || spec.statements.length === 0) problems.push('no statements');
      (spec.statements || []).forEach((s, i) => {
        if (!isNonEmptyString(s.text)) problems.push(`statement ${i} has no text`);
        if (typeof s.answer !== 'boolean') problems.push(`statement ${i} answer is not boolean`);
      });
      break;
    }
    case 'picture-mcq': {
      const values = (spec.options || []).map((o) => o.value);
      if (values.length < 2) problems.push('needs at least 2 options');
      if (new Set(values).size !== values.length) problems.push('duplicate option values');
      if (!values.includes(spec.answer)) problems.push('answer does not match any option value');
      (spec.options || []).forEach((o, i) => {
        if (!o.img && !o.emoji) problems.push(`option ${i} has no emoji/img`);
        if (!isNonEmptyString(o.label)) problems.push(`option ${i} has no label`);
      });
      break;
    }
    case 'ad-match': {
      const keys = (spec.options || []).map((o) => o.key);
      if (keys.length < 2) problems.push('needs at least 2 adverts');
      if (new Set(keys).size !== keys.length) problems.push('duplicate advert keys');
      if (!keys.includes(spec.answer)) problems.push('answer does not match any advert key');
      if (!isNonEmptyString(spec.situation)) problems.push('no situation');
      break;
    }
    case 'form-fill': {
      const names = (spec.fields || []).map((f) => f.name);
      if (names.length === 0) problems.push('no fields');
      if (new Set(names).size !== names.length) problems.push('duplicate field names');
      (spec.fields || []).forEach((f, i) => {
        if (!isNonEmptyString(f.label)) problems.push(`field ${i} has no label`);
        const ans = Array.isArray(f.answer) ? f.answer : [f.answer];
        if (!ans.length || !ans.every(isNonEmptyString)) problems.push(`field ${i} has an empty answer`);
      });
      break;
    }
    case 'speaking-card': {
      if (!Array.isArray(spec.cards) || spec.cards.length === 0) problems.push('no cards');
      (spec.cards || []).forEach((c, i) => {
        if (!isNonEmptyString(c.keyword)) problems.push(`card ${i} has no keyword`);
      });
      break;
    }
    case 'guided-writing': {
      if (!isNonEmptyString(spec.situation)) problems.push('no situation');
      if (!Array.isArray(spec.points) || spec.points.length === 0) problems.push('no points');
      if (!(spec.points || []).every(isNonEmptyString)) problems.push('empty point');
      if (!isNonEmptyString(spec.model)) problems.push('no model answer');
      break;
    }
    case 'multiple-choice': {
      if (!isNonEmptyString(spec.q)) problems.push('no question');
      if (!Array.isArray(spec.options) || spec.options.length < 2) problems.push('needs at least 2 options');
      if (new Set(spec.options).size !== (spec.options || []).length) problems.push('duplicate options');
      if (!(spec.options || []).includes(spec.answer)) problems.push('answer is not one of the options');
      break;
    }
    default:
      break;
  }
  return problems;
}

describe('exam-format sample specs', () => {
  it.each(EXAM_FORMATS)('$id is a well-formed $spec.type task', (fmt) => {
    expect(validate(fmt.spec)).toEqual([]);
  });
});

describe('Lesen (Reading) module', () => {
  it('every exercise is a well-formed exam task', () => {
    const bad = LESEN_EXERCISES.map((ex, i) => ({ i, problems: validate(ex) })).filter((r) => r.problems.length);
    expect(bad, JSON.stringify(bad)).toEqual([]);
  });

  it('only uses reading task types (richtig-falsch, ad-match)', () => {
    const types = [...new Set(LESEN_EXERCISES.map((e) => e.type))];
    expect(types.every((t) => t === 'richtig-falsch' || t === 'ad-match')).toBe(true);
  });

  it('every exercise carries a Teil label', () => {
    expect(LESEN_EXERCISES.every((e) => /Lesen · Teil [123]/.test(e.label))).toBe(true);
  });

  it('LESEN_ITEM_COUNT matches the scorable items', () => {
    const counted = LESEN_EXERCISES.reduce((n, ex) => n + (ex.type === 'richtig-falsch' ? ex.statements.length : 1), 0);
    expect(LESEN_ITEM_COUNT).toBe(counted);
  });

  it('covers all three Teile', () => {
    const teile = new Set(LESEN_EXERCISES.map((e) => e.label));
    expect(teile.size).toBe(3);
    expect(LESEN_PARTS).toHaveLength(3);
  });
});

describe('Schreiben (Writing) module', () => {
  it('every exercise is a well-formed exam task', () => {
    const bad = SCHREIBEN_EXERCISES.map((ex, i) => ({ i, problems: validate(ex) })).filter((r) => r.problems.length);
    expect(bad, JSON.stringify(bad)).toEqual([]);
  });

  it('only uses writing task types (form-fill, guided-writing)', () => {
    const types = [...new Set(SCHREIBEN_EXERCISES.map((e) => e.type))];
    expect(types.every((t) => t === 'form-fill' || t === 'guided-writing')).toBe(true);
  });

  it('every exercise carries a Teil label', () => {
    expect(SCHREIBEN_EXERCISES.every((e) => /Schreiben · Teil [12]/.test(e.label))).toBe(true);
  });

  it('SCHREIBEN_ITEM_COUNT matches the scorable items', () => {
    const counted = SCHREIBEN_EXERCISES.reduce((n, ex) => n + (ex.type === 'form-fill' ? ex.fields.length : ex.points.length), 0);
    expect(SCHREIBEN_ITEM_COUNT).toBe(counted);
  });

  it('covers both Teile', () => {
    const teile = new Set(SCHREIBEN_EXERCISES.map((e) => e.label));
    expect(teile.size).toBe(2);
    expect(SCHREIBEN_PARTS).toHaveLength(2);
  });
});

describe('Hören (Listening) module', () => {
  it('every exercise is a well-formed exam task', () => {
    const bad = HOEREN_EXERCISES.map((ex, i) => ({ i, problems: validate(ex) })).filter((r) => r.problems.length);
    expect(bad, JSON.stringify(bad)).toEqual([]);
  });

  it('every exercise has an audio recording (audioText)', () => {
    const missing = HOEREN_EXERCISES.filter((e) => !isNonEmptyString(e.audioText));
    expect(missing).toEqual([]);
  });

  it('every exercise carries a Teil label', () => {
    expect(HOEREN_EXERCISES.every((e) => /Hören · Teil [123]/.test(e.label))).toBe(true);
  });

  it('HOEREN_ITEM_COUNT matches the scorable items', () => {
    const counted = HOEREN_EXERCISES.reduce((n, ex) => n + (ex.type === 'richtig-falsch' ? ex.statements.length : 1), 0);
    expect(HOEREN_ITEM_COUNT).toBe(counted);
  });

  it('covers all three Teile', () => {
    const teile = new Set(HOEREN_EXERCISES.map((e) => e.label));
    expect(teile.size).toBe(3);
    expect(HOEREN_PARTS).toHaveLength(3);
  });
});

describe('Sprechen (Speaking) module', () => {
  it('every exercise is a well-formed exam task', () => {
    const bad = SPRECHEN_EXERCISES.map((ex, i) => ({ i, problems: validate(ex) })).filter((r) => r.problems.length);
    expect(bad, JSON.stringify(bad)).toEqual([]);
  });

  it('only uses speaking cards', () => {
    expect(SPRECHEN_EXERCISES.every((e) => e.type === 'speaking-card')).toBe(true);
  });

  it('every card has a keyword and a model answer', () => {
    const bad = [];
    SPRECHEN_EXERCISES.forEach((ex) => ex.cards.forEach((c) => {
      if (!isNonEmptyString(c.keyword) || !isNonEmptyString(c.model)) bad.push(c);
    }));
    expect(bad).toEqual([]);
  });

  it('every exercise carries a Teil label', () => {
    expect(SPRECHEN_EXERCISES.every((e) => /Sprechen · Teil [123]/.test(e.label))).toBe(true);
  });

  it('SPRECHEN_ITEM_COUNT matches the number of cards', () => {
    const counted = SPRECHEN_EXERCISES.reduce((n, ex) => n + ex.cards.length, 0);
    expect(SPRECHEN_ITEM_COUNT).toBe(counted);
  });

  it('covers all three Teile', () => {
    const teile = new Set(SPRECHEN_EXERCISES.map((e) => e.label));
    expect(teile.size).toBe(3);
    expect(SPRECHEN_PARTS).toHaveLength(3);
  });
});

describe('Full mock exam', () => {
  it('includes all four skill modules in exam order', () => {
    expect(MOCK_MODULES.map((m) => m.key)).toEqual(['hoeren', 'lesen', 'schreiben', 'sprechen']);
  });

  it('every module has a positive time limit and a non-empty exercise list', () => {
    const bad = MOCK_MODULES.filter((m) => !(m.minutes > 0) || !Array.isArray(m.exercises) || m.exercises.length === 0);
    expect(bad.map((m) => m.key)).toEqual([]);
  });

  it('every mock exercise is a well-formed exam task', () => {
    const bad = MOCK_MODULES.flatMap((m) => m.exercises).map((ex, i) => ({ i, problems: validate(ex) })).filter((r) => r.problems.length);
    expect(bad, JSON.stringify(bad)).toEqual([]);
  });

  it('total time is the sum of the module minutes', () => {
    expect(MOCK_TOTAL_MINUTES).toBe(MOCK_MODULES.reduce((n, m) => n + m.minutes, 0));
  });

  it('overallRatio equal-weights the modules and pass mark is 60%', () => {
    expect(MOCK_PASS_RATIO).toBe(0.6);
    expect(overallRatio([{ ratio: 0.5 }, { ratio: 0.7 }, { ratio: 0.6 }, { ratio: 0.8 }])).toBeCloseTo(0.65, 5);
    expect(overallRatio([])).toBe(0);
  });
});
