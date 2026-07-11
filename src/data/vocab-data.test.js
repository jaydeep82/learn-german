import { describe, it, expect } from 'vitest';
import { collections } from './taggedVocab.js';
import { allVocab, vocabByTopic } from './vocabulary.js';
import { VERSION, RELEASES } from './release.js';
import pkg from '../../package.json';

/**
 * Data-integrity tests for all vocabulary content.
 *
 * The word lists are large and partly hand/auto-generated from PDFs, so this
 * suite guards the invariants that broke (and were fixed by hand) while
 * building the Goethe collections: empty fields, bare-article parse fragments,
 * single-letter leaks, duplicate headwords, and mis-grouped A–Z letters.
 *
 * Pure data — runs in the default (node) Vitest environment, no DOM needed.
 */

// A group is part of the alphabetical A–Z section if its title is "A–Z · X".
const isAlpha = (g) => /A[–-]Z\s·/.test(g.title);
const alphaLetter = (g) => (g.title.match(/·\s([A-Z])$/) || [])[1];

// Strip a leading article (incl. the "der/die" compound) + punctuation, then
// return the folded first letter — how the A–Z generator buckets a headword.
const firstLetter = (de) => {
  const w = de.replace(/^(der\/die|die\/der|der|die|das|sich)\s+/, '').replace(/^[^A-Za-zÄÖÜäöüß]+/, '');
  const c = (w[0] || '').toUpperCase();
  return { Ä: 'A', Ö: 'O', Ü: 'U' }[c] || c;
};

const isNonEmptyString = (v) => typeof v === 'string' && v.trim().length > 0;

// Every set of items we surface anywhere: course + each tagged collection.
const ALL_SOURCES = [
  { key: 'course', flat: allVocab },
  ...collections.map((c) => ({ key: c.key, flat: c.flat })),
];

describe.each(ALL_SOURCES)('vocab fields · $key', ({ flat }) => {
  it('has items', () => {
    expect(flat.length).toBeGreaterThan(0);
  });

  it('every item has a non-empty German (de) and English (en) string', () => {
    const bad = flat.filter((v) => !isNonEmptyString(v.de) || !isNonEmptyString(v.en));
    expect(bad, `bad entries: ${JSON.stringify(bad.slice(0, 8))}`).toEqual([]);
  });

  it('optional fields (example, emoji, hint, exampleEn), when present, are non-empty strings', () => {
    const bad = flat.filter((v) =>
      ['example', 'emoji', 'hint', 'exampleEn'].some((k) => k in v && !isNonEmptyString(v[k]))
    );
    expect(bad, `bad optional fields: ${JSON.stringify(bad.slice(0, 8))}`).toEqual([]);
  });
});

// The Goethe collections are stricter than the course vocab: no parse
// artifacts, no duplicate headwords within a section, clean A–Z bucketing.
describe.each(collections)('Goethe collection · $key', (c) => {
  const alpha = c.groups.filter(isAlpha);
  const thematic = c.groups.filter((g) => !isAlpha(g));

  it('every de is a real headword (not a bare article, not a single char)', () => {
    const bad = c.flat.filter(
      (v) => /^(der|die|das|der\/die)$/.test(v.de.trim()) || v.de.trim().length < 2
    );
    expect(bad.map((v) => v.de)).toEqual([]);
  });

  it('has no duplicate headwords within the A–Z section', () => {
    const seen = new Set();
    const dupes = [];
    alpha.forEach((g) => g.items.forEach((it) => (seen.has(it.de) ? dupes.push(it.de) : seen.add(it.de))));
    expect([...new Set(dupes)]).toEqual([]);
  });

  it('has no duplicate headwords within the thematic section', () => {
    const seen = new Set();
    const dupes = [];
    thematic.forEach((g) => g.items.forEach((it) => (seen.has(it.de) ? dupes.push(it.de) : seen.add(it.de))));
    expect([...new Set(dupes)]).toEqual([]);
  });

  it('buckets every A–Z item under the correct letter', () => {
    const misplaced = [];
    alpha.forEach((g) => {
      const L = alphaLetter(g);
      g.items.forEach((it) => {
        const fl = firstLetter(it.de);
        if (fl && fl !== L) misplaced.push(`${it.de} → group ${L}`);
      });
    });
    expect(misplaced).toEqual([]);
  });

  it('every group has a title, an emoji, and a non-empty items array', () => {
    const bad = c.groups.filter(
      (g) => !isNonEmptyString(g.title) || !isNonEmptyString(g.emoji) || !Array.isArray(g.items) || g.items.length === 0
    );
    expect(bad.map((g) => g.title)).toEqual([]);
  });

  it('the flat search list matches the sum of all group items', () => {
    const fromGroups = c.groups.reduce((n, g) => n + g.items.length, 0);
    expect(c.flat.length).toBe(fromGroups);
  });

  it('carries the collection tag on every flat item', () => {
    expect(c.flat.every((v) => v.tag === c.tag)).toBe(true);
  });

  it('every example carries an English translation (exampleEn)', () => {
    const missing = c.flat.filter((v) => v.example && !v.exampleEn).map((v) => v.de);
    expect(missing).toEqual([]);
  });
});

describe('course vocab structure', () => {
  it('every day topic has a numeric day and a non-empty items array', () => {
    const bad = vocabByTopic.filter((t) => typeof t.day !== 'number' || !Array.isArray(t.items) || t.items.length === 0);
    expect(bad.map((t) => t.day)).toEqual([]);
  });
});

describe('release metadata integrity', () => {
  it('VERSION matches package.json and the newest RELEASES entry', () => {
    expect(VERSION).toBe(pkg.version);
    expect(RELEASES[0].version).toBe(VERSION);
  });

  it('every release entry has version, date, title and a non-empty notes array', () => {
    const bad = RELEASES.filter(
      (r) => !isNonEmptyString(r.version) || !isNonEmptyString(r.date) || !isNonEmptyString(r.title) || !Array.isArray(r.notes) || r.notes.length === 0
    );
    expect(bad.map((r) => r.version)).toEqual([]);
  });

  it('release versions are unique', () => {
    const versions = RELEASES.map((r) => r.version);
    expect(new Set(versions).size).toBe(versions.length);
  });
});
