import { describe, it, expect } from 'vitest';
import { EXAM_FORMATS } from './examFormats.js';
import { LESEN_EXERCISES, LESEN_ITEM_COUNT, LESEN_PARTS } from './lesenModule.js';
import { SCHREIBEN_EXERCISES, SCHREIBEN_ITEM_COUNT, SCHREIBEN_PARTS } from './schreibenModule.js';
import { HOEREN_EXERCISES, HOEREN_ITEM_COUNT, HOEREN_PARTS } from './hoerenModule.js';
import { SPRECHEN_EXERCISES, SPRECHEN_ITEM_COUNT, SPRECHEN_PARTS } from './sprechenModule.js';
import { MOCK_PAPERS, MOCK_MODULES, MOCK_PASS_RATIO, MOCK_TOTAL_MINUTES, overallRatio } from './mockExam.js';
import { FORMS_DRILL, asExercise } from './formsDrill.js';
import { SECTION_DRILLS } from './sectionDrills.js';
import { T2_CARDS, T2_THEMES, T2_GENDERS, T2_GRAMMAR, T2_PAIRS, cardsByTheme } from './sprechenTeil2.js';
import { T2_CARD_COUNT, T2_THEME_COUNT, T2_QUESTION_COUNT } from './sprechenTeil2Meta.js';
import { T3_CARDS, T3_THEMES, T3_GENDERS, T3_GRAMMAR, T3_REQUESTS, T3_ANSWERS, t3CardsByTheme, t3AnswerOf } from './sprechenTeil3.js';
import { T3_CARD_COUNT, T3_THEME_COUNT, T3_REQUEST_COUNT } from './sprechenTeil3Meta.js';

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
        if (f.prefilled != null) {
          if (!isNonEmptyString(String(f.prefilled))) problems.push(`field ${i} has an empty prefilled value`);
          return; // display-only, not scored
        }
        const ans = Array.isArray(f.answer) ? f.answer : [f.answer];
        if (!ans.length || !ans.every(isNonEmptyString)) problems.push(`field ${i} has an empty answer`);
        if (f.type === 'choice') {
          if (!Array.isArray(f.options) || f.options.length < 2) problems.push(`choice field ${i} needs at least 2 options`);
          else if (!ans.some((a) => f.options.includes(a))) problems.push(`choice field ${i}: answer not among options`);
        }
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

describe('Full mock exams (8 papers)', () => {
  it('offers eight papers with unique ids and titles', () => {
    expect(MOCK_PAPERS).toHaveLength(8);
    expect(new Set(MOCK_PAPERS.map((p) => p.id)).size).toBe(8);
    expect(new Set(MOCK_PAPERS.map((p) => p.title)).size).toBe(8);
  });

  it.each(MOCK_PAPERS)('paper $id has the four skills in exam order, timed, non-empty', (paper) => {
    expect(paper.modules.map((m) => m.key)).toEqual(['hoeren', 'lesen', 'schreiben', 'sprechen']);
    const bad = paper.modules.filter((m) => !(m.minutes > 0) || !Array.isArray(m.exercises) || m.exercises.length === 0);
    expect(bad.map((m) => m.key)).toEqual([]);
  });

  it.each(MOCK_PAPERS)('paper $id — every exercise is a well-formed exam task', (paper) => {
    const bad = paper.modules.flatMap((m) => m.exercises).map((ex, i) => ({ i, problems: validate(ex) })).filter((r) => r.problems.length);
    expect(bad, JSON.stringify(bad)).toEqual([]);
  });

  it.each(MOCK_PAPERS)('paper $id — every Hören task carries audio', (paper) => {
    const hoeren = paper.modules.find((m) => m.key === 'hoeren');
    expect(hoeren.exercises.every((e) => isNonEmptyString(e.audioText))).toBe(true);
  });

  it('papers 2 and 3 hit realistic item counts (Hören ≥ 13 · Lesen ≥ 13 scorable items)', () => {
    const scorable = (exs) => exs.reduce((n, ex) => n + (ex.type === 'richtig-falsch' ? ex.statements.length : 1), 0);
    for (const paper of MOCK_PAPERS.slice(1)) {
      expect(scorable(paper.modules.find((m) => m.key === 'hoeren').exercises)).toBeGreaterThanOrEqual(13);
      expect(scorable(paper.modules.find((m) => m.key === 'lesen').exercises)).toBeGreaterThanOrEqual(13);
      // Schreiben: exactly the real shape — one form + one guided message
      const schreiben = paper.modules.find((m) => m.key === 'schreiben').exercises;
      expect(schreiben.map((e) => e.type)).toEqual(['form-fill', 'guided-writing']);
    }
  });

  it('no two papers share Hören/Lesen/Schreiben content', () => {
    const sig = (paper, key) => JSON.stringify(paper.modules.find((m) => m.key === key).exercises);
    for (const key of ['hoeren', 'lesen', 'schreiben']) {
      const sigs = MOCK_PAPERS.map((p) => sig(p, key));
      expect(new Set(sigs).size).toBe(MOCK_PAPERS.length);
    }
  });

  it('back-compat exports still describe paper 1', () => {
    expect(MOCK_MODULES).toBe(MOCK_PAPERS[0].modules);
    expect(MOCK_TOTAL_MINUTES).toBe(MOCK_PAPERS[0].modules.reduce((n, m) => n + m.minutes, 0));
  });

  it('overallRatio equal-weights the modules and pass mark is 60%', () => {
    expect(MOCK_PASS_RATIO).toBe(0.6);
    expect(overallRatio([{ ratio: 0.5 }, { ratio: 0.7 }, { ratio: 0.6 }, { ratio: 0.8 }])).toBeCloseTo(0.65, 5);
    expect(overallRatio([])).toBe(0);
  });
});

describe('Forms drill (Schreiben Teil 1 · 20 tests)', () => {
  it('offers twenty forms with unique ids and titles', () => {
    expect(FORMS_DRILL).toHaveLength(20);
    expect(new Set(FORMS_DRILL.map((f) => f.id)).size).toBe(20);
    expect(new Set(FORMS_DRILL.map((f) => f.title)).size).toBe(20);
  });

  it.each(FORMS_DRILL)('form $id is a well-formed form-fill exercise', (form) => {
    expect(validate(asExercise(form))).toEqual([]);
    expect(isNonEmptyString(form.intro)).toBe(true);
  });

  it.each(FORMS_DRILL)('form $id matches the real sheet: ≥1 prefilled example row + exactly 5 scored gaps', (form) => {
    const prefilled = form.fields.filter((f) => f.prefilled != null);
    const scoredFields = form.fields.filter((f) => f.prefilled == null);
    expect(prefilled.length).toBeGreaterThanOrEqual(1);
    expect(scoredFields).toHaveLength(5);
  });

  it.each(FORMS_DRILL)('form $id includes at least one tick-the-box (inference) gap', (form) => {
    expect(form.fields.some((f) => f.type === 'choice' && f.prefilled == null)).toBe(true);
  });
});

describe('Section drills', () => {
  it('covers the seven drillable sections with unique keys', () => {
    expect(SECTION_DRILLS).toHaveLength(7);
    expect(new Set(SECTION_DRILLS.map((d) => d.key)).size).toBe(7);
  });

  it('every aggregated drill has a healthy pool of tasks of only its own type', () => {
    for (const d of SECTION_DRILLS) {
      if (d.dedicated) continue;
      expect(d.items.length, d.key).toBeGreaterThanOrEqual(8);
      if (d.key === 'bilder') expect(d.items.every((e) => e.type === 'picture-mcq')).toBe(true);
      if (d.key === 'durchsagen') expect(d.items.every((e) => e.type === 'richtig-falsch' && e.audioText)).toBe(true);
      if (d.key === 'nachrichten') expect(d.items.every((e) => e.type === 'multiple-choice' && e.audioText)).toBe(true);
      if (d.key === 'texte') expect(d.items.every((e) => e.type === 'richtig-falsch' && !e.audioText)).toBe(true);
      if (d.key === 'anzeigen') expect(d.items.every((e) => e.type === 'ad-match')).toBe(true);
      if (d.key === 'schilder') expect(d.items.every((e) => e.type === 'richtig-falsch' && !e.audioText)).toBe(true);
    }
  });

  it('texte and schilder pools do not overlap', () => {
    const texte = SECTION_DRILLS.find((d) => d.key === 'texte').items;
    const schilder = new Set(SECTION_DRILLS.find((d) => d.key === 'schilder').items);
    expect(texte.some((e) => schilder.has(e))).toBe(false);
  });
});

describe('Sprechen Teil 2 card deck', () => {
  const GENS = new Set(T2_GENDERS.map((g) => g.key));

  it('covers the 16 official themes, every one of them stocked', () => {
    expect(T2_THEMES).toHaveLength(16);
    expect(new Set(T2_THEMES.map((t) => t.de)).size).toBe(16);
    for (const t of T2_THEMES) {
      expect(isNonEmptyString(t.en), t.de).toBe(true);
      expect(cardsByTheme(t.de).length, t.de).toBeGreaterThanOrEqual(5);
    }
  });

  it.each(T2_CARDS)('card $cat/$word is complete and well-formed', (card) => {
    expect(isNonEmptyString(card.word)).toBe(true);
    expect(isNonEmptyString(card.gloss)).toBe(true);
    expect(GENS.has(card.gen), `${card.word}: ${card.gen}`).toBe(true);
    expect(T2_THEMES.some((t) => t.de === card.cat), card.cat).toBe(true);
    expect(card.lines).toHaveLength(2);
    for (const l of card.lines) {
      for (const k of ['de', 'en', 'ade', 'aen']) expect(isNonEmptyString(l[k]), `${card.word}.${k}`).toBe(true);
      // both prompts are questions; both model answers are statements
      expect(l.de.trim().endsWith('?'), `${card.word}: "${l.de}"`).toBe(true);
      expect(l.ade.trim().endsWith('?'), `${card.word}: "${l.ade}"`).toBe(false);
    }
    // Line 0 is the W-question — the W-word may follow a preposition
    // ("Mit wem spielst du Karten?", "In welchem Stock wohnst du?").
    expect(
      /^(\p{L}+\s+)?(wo|was|wer|wem|wen|wie|wann|warum|woher|wohin|welch)/iu.test(card.lines[0].de),
      card.lines[0].de,
    ).toBe(true);
  });

  it('has no duplicate keyword inside a theme', () => {
    for (const t of T2_THEMES) {
      const words = cardsByTheme(t.de).map((c) => c.word);
      expect(new Set(words).size, t.de).toBe(words.length);
    }
  });

  it('flattens to two practice pairs per card', () => {
    expect(T2_PAIRS).toHaveLength(T2_CARDS.length * 2);
    expect(T2_PAIRS.filter((p) => p.kind === 'w')).toHaveLength(T2_CARDS.length);
    expect(T2_PAIRS.filter((p) => p.kind === 'jn')).toHaveLength(T2_CARDS.length);
  });

  it('ships the grammar reference boxes with renderable token content', () => {
    expect(T2_GRAMMAR.length).toBeGreaterThanOrEqual(12);
    for (const box of T2_GRAMMAR) {
      expect(isNonEmptyString(box.title)).toBe(true);
      expect(box.tables?.length || box.items?.length, box.title).toBeGreaterThanOrEqual(1);
      for (const tbl of box.tables || []) {
        expect(tbl.rows.length, box.title).toBeGreaterThanOrEqual(1);
        for (const row of tbl.rows) {
          expect(row.c.length).toBeGreaterThanOrEqual(1);
          for (const cell of row.c) expect(Array.isArray(cell.t)).toBe(true);
        }
      }
    }
  });

  it('left no raw HTML or unresolved entities behind after the import', () => {
    const suspicious = /[<>]|&[a-z]+;|&#\d+;/;
    for (const c of T2_CARDS) {
      const all = [c.word, c.gloss, ...c.lines.flatMap((l) => [l.de, l.en, l.ade, l.aen])].join(' ');
      expect(suspicious.test(all), `${c.cat}/${c.word}: ${all}`).toBe(false);
    }
    for (const box of T2_GRAMMAR) {
      const texts = [
        box.title, box.subtitle,
        ...(box.foot || []).map((t) => t.s),
        ...(box.tables || []).flatMap((tb) => tb.rows.flatMap((r) => r.c.flatMap((c) => c.t.map((t) => t.s)))),
      ].join(' ');
      expect(suspicious.test(texts), box.title).toBe(false);
    }
  });
});

describe('Sprechen Teil 2 deck meta', () => {
  it('advertised counts match the real deck (link cards must never drift)', () => {
    expect(T2_CARD_COUNT).toBe(T2_CARDS.length);
    expect(T2_THEME_COUNT).toBe(T2_THEMES.length);
    expect(T2_QUESTION_COUNT).toBe(T2_PAIRS.length);
  });
});

describe('Sprechen Teil 3 request deck', () => {
  const GENS = new Set(T3_GENDERS.map((g) => g.key));

  it('covers the seven themes, every one of them stocked', () => {
    expect(T3_THEMES).toHaveLength(7);
    expect(new Set(T3_THEMES.map((t) => t.de)).size).toBe(7);
    for (const t of T3_THEMES) {
      expect(isNonEmptyString(t.en), t.de).toBe(true);
      expect(t3CardsByTheme(t.de).length, t.de).toBeGreaterThanOrEqual(5);
    }
  });

  it.each(T3_CARDS)('card $cat/$word is complete and well-formed', (card) => {
    expect(isNonEmptyString(card.word)).toBe(true);
    expect(isNonEmptyString(card.gloss)).toBe(true);
    expect(GENS.has(card.gen), `${card.word}: ${card.gen}`).toBe(true);
    expect(T3_THEMES.some((t) => t.de === card.cat), card.cat).toBe(true);
    expect(card.lines.length).toBeGreaterThanOrEqual(1);
    for (const l of card.lines) {
      expect(isNonEmptyString(l.de), `${card.word}.de`).toBe(true);
      expect(isNonEmptyString(l.en), `${card.word}.en`).toBe(true);
      // every request resolves to a reply, from the shared bank or its own override
      const a = t3AnswerOf(l);
      expect(a && isNonEmptyString(a.de) && isNonEmptyString(a.en), `${card.word}: "${l.de}" has no reply`).toBe(true);
    }
  });

  it('every card except a sign carries its accusative form', () => {
    for (const c of T3_CARDS) {
      if (c.gen === 'sign') continue;
      expect(isNonEmptyString(c.acc), `${c.cat}/${c.word}`).toBe(true);
    }
  });

  it('masculine cards show the der → den change (the classic Teil 3 slip)', () => {
    const masc = T3_CARDS.filter((c) => c.gen === 'der');
    expect(masc.length).toBeGreaterThan(20);
    for (const c of masc) expect(/\bden\b|\beinen\b/.test(c.acc), `${c.word} → ${c.acc}`).toBe(true);
  });

  it('non-masculine cards keep the article unchanged in the accusative', () => {
    for (const c of T3_CARDS.filter((x) => x.gen === 'die' || x.gen === 'das')) {
      expect(c.acc.startsWith(c.gen), `${c.word} → ${c.acc}`).toBe(true);
    }
  });

  it('sign cards state a prohibition or instruction rather than an object request', () => {
    const signs = T3_CARDS.filter((c) => c.gen === 'sign');
    expect(signs.length).toBeGreaterThanOrEqual(10);
    for (const s of signs) expect(/verboten|ausschalten|nicht/i.test(s.word + ' ' + s.lines[0].de), s.word).toBe(true);
  });

  it('flattens every request with its answer resolved', () => {
    const counted = T3_CARDS.reduce((n, c) => n + c.lines.length, 0);
    expect(T3_REQUESTS).toHaveLength(counted);
    expect(T3_REQUESTS.every((r) => r.answer?.de && r.answer?.en)).toBe(true);
  });

  it('every bank answer is actually used, and used keys all exist', () => {
    const used = new Set(T3_REQUESTS.filter((r) => r.ans).map((r) => r.ans));
    for (const key of used) expect(T3_ANSWERS[key], key).toBeTruthy();
    for (const key of Object.keys(T3_ANSWERS)) expect(used.has(key), `unused answer: ${key}`).toBe(true);
  });

  it('ships the grammar reference boxes with renderable token content', () => {
    expect(T3_GRAMMAR.length).toBeGreaterThanOrEqual(5);
    for (const box of T3_GRAMMAR) {
      expect(isNonEmptyString(box.title)).toBe(true);
      expect(box.tables?.length || box.items?.length, box.title).toBeGreaterThanOrEqual(1);
    }
  });

  it('left no raw HTML or unresolved entities behind after the import', () => {
    const suspicious = /[<>]|&[a-z]+;|&#\d+;/;
    for (const c of T3_CARDS) {
      const all = [c.word, c.gloss, c.acc, ...c.lines.flatMap((l) => [l.de, l.en])].join(' ');
      expect(suspicious.test(all), `${c.cat}/${c.word}: ${all}`).toBe(false);
    }
    for (const box of T3_GRAMMAR) {
      const texts = [
        box.title,
        ...(box.foot || []).map((t) => t.s),
        ...(box.items || []).flatMap((i) => i.map((t) => t.s)),
        ...(box.tables || []).flatMap((tb) => tb.rows.flatMap((r) => r.c.flatMap((c) => c.t.map((t) => t.s)))),
      ].join(' ');
      expect(suspicious.test(texts), box.title).toBe(false);
    }
  });

  it('never softens a prohibition with "bitte" (imported-sheet fix)', () => {
    // "bitte" softens a request, not a statement of what is forbidden; the deck's
    // own grammar box models "Sie dürfen hier nicht rauchen." without it.
    for (const c of T3_CARDS) {
      for (const l of c.lines) {
        const softened = /\bbitte\b/i.test(l.de) && /\b(dürfen|darf)\b/i.test(l.de);
        expect(softened, `${c.word}: "${l.de}"`).toBe(false);
      }
    }
  });

  it('advertised counts match the real deck (link cards must never drift)', () => {
    expect(T3_CARD_COUNT).toBe(T3_CARDS.length);
    expect(T3_THEME_COUNT).toBe(T3_THEMES.length);
    expect(T3_REQUEST_COUNT).toBe(T3_REQUESTS.length);
  });
});
