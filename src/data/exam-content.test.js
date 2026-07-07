import { describe, it, expect } from 'vitest';
import { EXAM_FORMATS } from './examFormats.js';
import { LESEN_EXERCISES, LESEN_ITEM_COUNT, LESEN_PARTS } from './lesenModule.js';

/**
 * Integrity tests for exam-format content (roadmap A1/A2). Guards that every
 * exercise spec is well-formed so a malformed task can't slip into the trainer:
 * known type, an answer that points at a real option, no duplicate keys.
 */
const KNOWN_TYPES = new Set(['richtig-falsch', 'picture-mcq', 'ad-match', 'form-fill', 'speaking-card']);
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
