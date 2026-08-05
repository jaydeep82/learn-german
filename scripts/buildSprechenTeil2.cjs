/* Convert A1_Sprechen_Teil2_CheatSheet_v2.0.html into a structured JS data module. */
const fs = require('fs');

const SRC = '/Volumes/MacData/POC Projects/POC5/A1_Sprechen_Teil2_CheatSheet_v2.0.html';
const OUT = '/Volumes/MacData/POC Projects/POC5/poc5-german/src/data/sprechenTeil2.js';
const html = fs.readFileSync(SRC, 'utf8');

// ── entities ────────────────────────────────────────────────────────────
const ENT = {
  auml: 'ä', ouml: 'ö', uuml: 'ü', Auml: 'Ä', Ouml: 'Ö', Uuml: 'Ü', szlig: 'ß',
  middot: '·', rarr: '→', hellip: '…', ndash: '–', mdash: '—', nbsp: ' ',
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", eacute: 'é',
  rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', bdquo: '„', deg: '°', euro: '€',
  times: '×', laquo: '«', raquo: '»', shy: '', ensp: ' ', emsp: ' ', thinsp: ' ',
};
const decode = (s) => s.replace(/&([a-zA-Z]+);/g, (m, e) => (ENT[e] !== undefined ? ENT[e] : m))
  .replace(/&#(\d+);/g, (m, d) => String.fromCodePoint(+d));

// ── 1. themes ───────────────────────────────────────────────────────────
const catsBlock = html.match(/const CATS=\[([\s\S]*?)\];/)[1];
const themes = [...catsBlock.matchAll(/\["([^"]+)","([^"]+)"\]/g)].map(([, de, en]) => ({ de, en }));

// ── 2. cards ────────────────────────────────────────────────────────────
const cards = [];
let cat = '';
const bodyLines = html.split('\n');
for (const line of bodyLines) {
  const mCat = line.match(/^CAT="([^"]+)";/);
  if (mCat) { cat = mCat[1]; continue; }
  const mCard = line.match(/^c\("([\s\S]*)"\);\s*$/);
  if (!mCard) continue;
  const p = decode(mCard[1]).split('|');
  if (p.length < 11) throw new Error('short card: ' + line);
  cards.push({
    cat, gen: p[0], word: p[1], gloss: p[2],
    lines: [
      { de: p[3], en: p[4], ade: p[5], aen: p[6] },
      { de: p[7], en: p[8], ade: p[9], aen: p[10] },
    ],
  });
}

// ── 3. grammar boxes ────────────────────────────────────────────────────
const gramHtml = html.slice(html.indexOf('<div class="grammar">'), html.indexOf('<div class="section-head">'));
const boxes = [];
const boxRe = /<div class="gbox">([\s\S]*?)<\/div>\s*(?=<div class="gbox">|$)/g;

// split top-level gboxes by scanning (they contain nested <div class="rule">)
const parts = gramHtml.split('<div class="gbox">').slice(1);

/** Turn inline cell markup into a token array: {s, k} where k = style key. */
function tokens(raw) {
  const out = [];
  let rest = raw;
  const push = (s, k) => { if (s) out.push(k ? { s: decode(s), k } : { s: decode(s) }); };
  const re = /<(b|i|span)(?:\s+class="([^"]*)")?>([\s\S]*?)<\/\1>/;
  let m;
  while ((m = rest.match(re))) {
    push(rest.slice(0, m.index));
    const [, tag, cls, inner] = m;
    const text = inner.replace(/<[^>]+>/g, '');
    if (tag === 'b') push(text, 'b');
    else if (tag === 'i') push(text, 'i');
    else if (cls && /c-(der|die|das|pl|verb)/.test(cls)) push(text, cls.match(/c-(der|die|das|pl|verb)/)[1]);
    else if (cls === 'sub') push(text, 'sub');
    else push(text);
    rest = rest.slice(m.index + m[0].length);
  }
  push(rest.replace(/<[^>]+>/g, ''));
  return out.filter((t) => t.s.trim() !== '' || t.s === ' ');
}

for (const part of parts) {
  const h2m = part.match(/<h2>([\s\S]*?)<\/h2>/);
  const h2raw = h2m ? h2m[1] : '';
  const subM = h2raw.match(/<span>([\s\S]*?)<\/span>/);
  const title = decode(h2raw.replace(/<span>[\s\S]*?<\/span>/, '').replace(/<[^>]+>/g, '').trim());
  const subtitle = subM ? decode(subM[1].replace(/<[^>]+>/g, '').trim()) : '';

  const tables = [];
  for (const tm of part.matchAll(/<table(?:\s+class="([^"]*)")?[^>]*>([\s\S]*?)<\/table>/g)) {
    const [, tcls, inner] = tm;
    const head = [];
    const rows = [];
    for (const rm of inner.matchAll(/<tr(?:\s+class="([^"]*)")?>([\s\S]*?)<\/tr>/g)) {
      const [, rcls, cellsHtml] = rm;
      const ths = [...cellsHtml.matchAll(/<th(?:\s+colspan="(\d+)")?>([\s\S]*?)<\/th>/g)];
      if (ths.length) {
        ths.forEach(([, span, c]) => head.push({ t: tokens(c), span: span ? +span : 1 }));
        continue;
      }
      const cells = [...cellsHtml.matchAll(/<td(?:\s+class="([^"]*)")?>([\s\S]*?)<\/td>/g)]
        .map(([, ccls, c]) => {
          const cell = { t: tokens(c) };
          if (ccls) {
            if (/\bde\b/.test(ccls)) cell.de = 1;
            if (/\bkey\b/.test(ccls)) cell.key = 1;
            if (/\blab\b/.test(ccls)) cell.lab = 1;
            const g = ccls.match(/c-(der|die|das|pl|verb)/);
            if (g) cell.g = g[1];
          }
          return cell;
        });
      if (cells.length) rows.push(rcls === 'sep' ? { c: cells, sep: 1 } : { c: cells });
    }
    tables.push({ ...(tcls ? { cls: tcls } : {}), ...(head.length ? { head } : {}), rows });
  }

  const footM = part.match(/<p class="foot">([\s\S]*?)<\/p>/);
  const foot = footM ? tokens(footM[1]) : null;

  // colour swatch box has no tables — capture its list items instead
  const items = [...part.matchAll(/<li>([\s\S]*?)<\/li>/g)].map(([, li]) => tokens(li));

  boxes.push({
    title, subtitle,
    ...(tables.length ? { tables } : {}),
    ...(items.length ? { items } : {}),
    ...(foot ? { foot } : {}),
  });
}

// ── emit ────────────────────────────────────────────────────────────────
const j = (v) => JSON.stringify(v);
const body = `/**
 * Goethe A1 · Sprechen Teil 2 — "Fragen stellen" reference deck.
 *
 * Generated from A1_Sprechen_Teil2_CheatSheet_v2.0.html (scripts/buildSprechenTeil2.js).
 * ${cards.length} keyword cards across the ${themes.length} official Teil-2 themes; each card
 * carries a W-question and a Ja/Nein-question, both with a model answer.
 * Genders are colour-coded exactly like the printed sheet (der/die/das/Plural/Verb).
 *
 * Card shape: { cat, gen, word, gloss, lines: [{ de, en, ade, aen }, …] }
 *   de/en  = the question (German / English)
 *   ade/aen = the model answer (German / English)
 *
 * Grammar boxes are token arrays so they render with the app's own styling in
 * both themes: { s: text, k?: 'b'|'i'|'sub'|'der'|'die'|'das'|'pl'|'verb' }.
 */

export const T2_THEMES = ${j(themes)};

export const T2_GENDERS = [
  { key: 'der',  label: 'der',  de: 'maskulin' },
  { key: 'die',  label: 'die',  de: 'feminin' },
  { key: 'das',  label: 'das',  de: 'neutral' },
  { key: 'pl',   label: 'Plural', de: 'Plural' },
  { key: 'verb', label: 'Verb', de: 'Verb / Ausdruck' },
];

export const T2_CARDS = ${JSON.stringify(cards, null, 0)};

export const T2_GRAMMAR = ${JSON.stringify(boxes, null, 0)};

/** Cards for one theme (German theme name), in sheet order. */
export const cardsByTheme = (theme) => T2_CARDS.filter((c) => c.cat === theme);

/** Every question/answer pair flattened — used by the speaking drill. */
export const T2_PAIRS = T2_CARDS.flatMap((c) =>
  c.lines.map((l, i) => ({ ...l, cat: c.cat, word: c.word, gloss: c.gloss, gen: c.gen, kind: i === 0 ? 'w' : 'jn' })));
`;

fs.writeFileSync(OUT, body);

// Counts live in their own tiny module so pages that only advertise the deck
// (a link card on /sprechen) don't have to pull the whole 120 kB of cards.
fs.writeFileSync(OUT.replace(/\.js$/, 'Meta.js'), `/**
 * Sprechen Teil 2 deck size — generated alongside sprechenTeil2.js.
 * Import this (not the deck) when you only need the numbers.
 */

export const T2_CARD_COUNT = ${cards.length};
export const T2_THEME_COUNT = ${themes.length};
export const T2_QUESTION_COUNT = ${cards.length * 2};
`);
console.log('themes:', themes.length, '· cards:', cards.length, '· grammar boxes:', boxes.length);
console.log('pairs:', cards.length * 2);
console.log('bytes:', body.length);
console.log('\nsample card:', JSON.stringify(cards[0], null, 1));
console.log('\nsample box titles:', boxes.map((b) => b.title).join(' | '));
