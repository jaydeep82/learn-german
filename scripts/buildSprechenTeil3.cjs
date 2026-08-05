/* Convert A1_Sprechen_Teil3_CheatSheet_v2.0.html into a structured JS data module.
   Mirrors buildSprechenTeil2.cjs; Teil 3 cards carry the accusative form and
   requests that point at a shared answer bank. */
const fs = require('fs');

const SRC = '/Volumes/MacData/POC Projects/POC5/A1_Sprechen_Teil3_CheatSheet_v2.0.html';
const OUT = '/Volumes/MacData/POC Projects/POC5/poc5-german/src/data/sprechenTeil3.js';
const html = fs.readFileSync(SRC, 'utf8');

const ENT = {
  auml: 'ä', ouml: 'ö', uuml: 'ü', Auml: 'Ä', Ouml: 'Ö', Uuml: 'Ü', szlig: 'ß',
  middot: '·', rarr: '→', hellip: '…', ndash: '–', mdash: '—', nbsp: ' ',
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", eacute: 'é',
  rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', bdquo: '„', deg: '°', euro: '€',
  times: '×', laquo: '«', raquo: '»', shy: '', ensp: ' ', emsp: ' ', thinsp: ' ',
};
const decode = (s) => s.replace(/&([a-zA-Z]+);/g, (m, e) => (ENT[e] !== undefined ? ENT[e] : m))
  .replace(/&#(\d+);/g, (m, d) => String.fromCodePoint(+d));

// ── 1. answer bank ──────────────────────────────────────────────────────
const ansBlock = html.match(/const ANS=\{([\s\S]*?)\};/)[1];
const answers = {};
for (const [, key, de, en] of ansBlock.matchAll(/(\w+)\s*:\s*\["([^"]*)","([^"]*)"\]/g)) {
  answers[key] = { de: decode(de), en: decode(en) };
}

// ── 2. themes ───────────────────────────────────────────────────────────
const catsBlock = html.match(/const CATS=\[([\s\S]*?)\];/)[1];
const themes = [...catsBlock.matchAll(/\["([^"]+)","([^"]+)"\]/g)].map(([, de, en]) => ({ de, en }));

/**
 * Corrections applied to the source sheet during import.
 *
 * The sign cards insert "bitte" into a dürfen-nicht prohibition ("Sie dürfen
 * hier bitte nicht rauchen."), which is not idiomatic German — "bitte" softens
 * a request, not a statement of what is forbidden. The sheet's own grammar box
 * ("The four sentence patterns") gives the correct model without it:
 * "Sie dürfen hier nicht rauchen." Keyed by the source German sentence.
 */
const CORRECTIONS = {
  'Man darf hier bitte nicht rauchen.': { de: 'Man darf hier nicht rauchen.', en: 'You must not smoke here.' },
  'Sie dürfen hier bitte nicht essen.': { de: 'Sie dürfen hier nicht essen.', en: 'You must not eat here.' },
  'Sie dürfen hier bitte nicht parken.': { de: 'Sie dürfen hier nicht parken.', en: 'You must not park here.' },
  'Sie dürfen hier bitte nicht schwimmen.': { de: 'Sie dürfen hier nicht schwimmen.', en: 'You must not swim here.' },
  'Sie dürfen hier bitte nicht Fahrrad fahren.': { de: 'Sie dürfen hier nicht Fahrrad fahren.', en: 'You must not cycle here.' },
  'Sie dürfen hier bitte nicht fotografieren.': { de: 'Sie dürfen hier nicht fotografieren.', en: 'You must not take photos here.' },
  'Sie dürfen hier bitte nicht telefonieren.': { de: 'Sie dürfen hier nicht telefonieren.', en: 'You must not make calls here.' },
};
let corrected = 0;

// ── 3. cards (a c(...) call spans several lines) ────────────────────────
const cards = [];
let cat = '';
for (const line of html.split('\n')) {
  const mCat = line.match(/^CAT="([^"]+)";/);
  if (mCat) { cat = mCat[1]; continue; }
  if (/^c\(/.test(line)) cards.push({ cat, raw: line });
  else if (cards.length && cards[cards.length - 1].open !== false && /^\s*"/.test(line)) {
    cards[cards.length - 1].raw += '\n' + line;
  }
  if (cards.length && /\);\s*$/.test(line)) cards[cards.length - 1].open = false;
}

const parsed = cards.map(({ cat: c, raw }) => {
  const args = [...raw.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => decode(m[1]));
  const head = args[0].split('|');
  const lines = args.slice(1).map((l) => {
    const [srcDe, srcEn, ans] = l.split('~');
    const fix = CORRECTIONS[srcDe];
    if (fix) corrected++;
    const de = fix ? fix.de : srcDe;
    const en = fix ? fix.en : srcEn;
    // Most requests point at the shared answer bank by key, but the sheet also
    // allows a one-off answer written inline as "German|English".
    if (answers[ans]) return { de, en, ans };
    const [cde, cen] = (ans || '').split('|');
    return { de, en, custom: { de: cde, en: cen } };
  });
  return { cat: c, gen: head[0], word: head[1], gloss: head[2], acc: head[3] || '', lines };
});

// ── 4. grammar boxes (the four in .grammar plus the wide colour-code box) ─
const gramHtml = html.slice(html.indexOf('<div class="grammar">'), html.indexOf('<div class="controls">'));
const parts = gramHtml.split(/<div class="gbox(?: wide)?">/).slice(1);

/** Inline markup → token array: { s, k? } with k a style key. */
function tokens(raw) {
  const out = [];
  const push = (s, k) => { if (s && s.trim() !== '') out.push(k ? { s: decode(s), k } : { s: decode(s) }); };
  let rest = raw;
  const re = /<(b|i|em|span)(?:\s+class="([^"]*)")?>([\s\S]*?)<\/\1>/;
  let m;
  while ((m = rest.match(re))) {
    push(rest.slice(0, m.index));
    const [, tag, cls, inner] = m;
    const text = inner.replace(/<[^>]+>/g, '');
    if (tag === 'b') push(text, 'b');
    else if (tag === 'i' || tag === 'em') push(text, 'i');
    else if (cls && /\bpill\b/.test(cls)) {
      const g = cls.match(/\b(der|die|das|pl|verb|sign)\b/);
      push(text, `pill-${g ? g[1] : 'der'}`);
    } else if (cls === 'red') push(text, 'hi');
    else push(text);
    rest = rest.slice(m.index + m[0].length);
  }
  push(rest.replace(/<[^>]+>/g, ''));
  return out;
}

const boxes = [];
for (const part of parts) {
  const h2m = part.match(/<h2>([\s\S]*?)<\/h2>/);
  const titleTokens = h2m ? tokens(h2m[1]) : [];
  const title = titleTokens.map((t) => t.s).join('').trim();

  const tables = [];
  for (const tm of part.matchAll(/<table[^>]*>([\s\S]*?)<\/table>/g)) {
    const head = [];
    const rows = [];
    for (const rm of tm[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
      const ths = [...rm[1].matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)];
      if (ths.length) { ths.forEach(([, c]) => head.push({ t: tokens(c), span: 1 })); continue; }
      const cells = [...rm[1].matchAll(/<td(?:\s+class="([^"]*)")?(?:\s+style="([^"]*)")?>([\s\S]*?)<\/td>/g)]
        .map(([, ccls, style, c]) => {
          const cell = { t: tokens(c) };
          if (ccls) {
            if (/\bde\b/.test(ccls)) cell.de = 1;
            if (/\br\b/.test(ccls)) cell.key = 1;   // right-hand note column
            if (/\ben\b/.test(ccls)) cell.muted = 1;
          }
          // the sheet colours one cell inline: style="color:var(--der)"
          const inlineGen = style && style.match(/var\(--(der|die|das|pl|verb)\)/);
          if (inlineGen) cell.g = inlineGen[1];
          return cell;
        });
      if (cells.length) rows.push({ c: cells });
    }
    tables.push({ ...(head.length ? { head } : {}), rows });
  }

  // .swatches renders the colour legend as pills
  const swatch = part.match(/<div class="swatches">([\s\S]*?)<\/div>/);
  const items = swatch ? [tokens(swatch[1])] : [];

  const footM = part.match(/<p class="(?:foot|note)">([\s\S]*?)<\/p>/);

  boxes.push({
    title,
    ...(tables.length ? { tables } : {}),
    ...(items.length ? { items } : {}),
    ...(footM ? { foot: tokens(footM[1]) } : {}),
  });
}

// ── emit ────────────────────────────────────────────────────────────────
const j = (v) => JSON.stringify(v);
const sentences = parsed.reduce((n, c) => n + c.lines.length, 0);

fs.writeFileSync(OUT, `/**
 * Goethe A1 · Sprechen Teil 3 — "Bitten formulieren" request deck.
 *
 * Generated from A1_Sprechen_Teil3_CheatSheet_v2.0.html (scripts/buildSprechenTeil3.js).
 * ${parsed.length} picture-word cards across the ${themes.length} themes, ${sentences} model requests in all.
 * The exam flow is: picture → word → article → ACCUSATIVE → request → answer,
 * and the accusative is where Teil 3 is won or lost (only "der" changes: der → den).
 *
 * Card shape: { cat, gen, word, gloss, acc, lines: [{ de, en, ans }] }
 *   acc  = the word in the accusative, as you must say it in a request
 *   ans  = key into T3_ANSWERS, the short reply that fits that request
 *          (a handful of lines carry a one-off custom: { de, en } instead)
 *
 * Grammar boxes are token arrays so they render with the app's own styling in
 * both themes: { s, k?: 'b'|'i'|'hi'|'pill-der'|'pill-die'|… }.
 */

/** The short replies that always work — every request points at one of these. */
export const T3_ANSWERS = ${j(answers)};

export const T3_THEMES = ${j(themes)};

export const T3_GENDERS = [
  { key: 'der',  label: 'der',    de: 'maskulin' },
  { key: 'die',  label: 'die',    de: 'feminin' },
  { key: 'das',  label: 'das',    de: 'neutral' },
  { key: 'pl',   label: 'Plural', de: 'Plural' },
  { key: 'verb', label: 'Verb',   de: 'Verb / Ausdruck' },
  { key: 'sign', label: 'Schild', de: 'Verbotsschild' },
];

export const T3_CARDS = ${JSON.stringify(parsed)};

export const T3_GRAMMAR = ${JSON.stringify(boxes)};

/** Cards for one theme (German theme name), in sheet order. */
export const t3CardsByTheme = (theme) => T3_CARDS.filter((c) => c.cat === theme);

/** The reply for one request line, from the bank or the line's own override. */
export const t3AnswerOf = (line) => line.custom || T3_ANSWERS[line.ans] || null;

/** Every request flattened, with its answer resolved — used for drilling. */
export const T3_REQUESTS = T3_CARDS.flatMap((c) =>
  c.lines.map((l) => ({ ...l, answer: t3AnswerOf(l), cat: c.cat, word: c.word, gen: c.gen, acc: c.acc })));
`);

fs.writeFileSync(OUT.replace(/\.js$/, 'Meta.js'), `/**
 * Sprechen Teil 3 deck size — generated alongside sprechenTeil3.js.
 * Import this (not the deck) when you only need the numbers.
 */

export const T3_CARD_COUNT = ${parsed.length};
export const T3_THEME_COUNT = ${themes.length};
export const T3_REQUEST_COUNT = ${sentences};
`);

console.log('themes:', themes.length, '· cards:', parsed.length, '· requests:', sentences, '· grammar boxes:', boxes.length);
console.log('corrections applied:', corrected, 'of', Object.keys(CORRECTIONS).length);
if (corrected !== Object.keys(CORRECTIONS).length) {
  throw new Error('a correction no longer matches the source — re-check CORRECTIONS against the sheet');
}
console.log('answer bank:', Object.keys(answers).join(', '));
console.log('sample:', JSON.stringify(parsed[0]));
console.log('box titles:', boxes.map((b) => b.title).join(' | '));
