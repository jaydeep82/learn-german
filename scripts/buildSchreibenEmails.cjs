/* Convert A1_Schreiben_Teil2_Emails_Cheatsheet_v1.0.pdf into a structured JS data module.
   Mirrors the Sprechen generators.

   The PDF is a WeasyPrint render whose design encodes meaning in colour and
   size, which is exactly what this parser keys off — no fragile text matching:
     #16191d          German (task text, reference tables)
     #6b7280          English gloss / translation
     #0d4f3a          German model answer
     #3b4046          German grammar rule
     #868d95          small-caps labels and section markers
     #ffffff          group headers (white on a dark band)
     #1d4ed8 #be1550  formell (Sie) / informell (du)

   Requires poppler's pdftohtml on PATH (brew install poppler). */
const fs = require('fs');
const { execFileSync } = require('child_process');

const SRC = '/Volumes/MacData/POC Projects/POC5/A1_Schreiben_Teil2_Emails_Cheatsheet_v1.0.pdf';
const OUT = '/Volumes/MacData/POC Projects/POC5/poc5-german/src/data/schreibenEmails.js';

const xml = execFileSync('pdftohtml', ['-xml', '-i', '-stdout', SRC], { maxBuffer: 64 * 1024 * 1024 }).toString('utf8');

const FONTS = {};
for (const m of xml.matchAll(/<fontspec id="(\d+)" size="(\d+)"[^>]*color="(#[0-9a-f]{6})"/g)) {
  FONTS[m[1]] = { size: +m[2], color: m[3] };
}

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const decode = (s) => s
  .replace(/<[^>]+>/g, '')
  .replace(/&([a-zA-Z]+);/g, (m, e) => (ENT[e] !== undefined ? ENT[e] : m))
  .replace(/&#(\d+);/g, (m, d) => String.fromCodePoint(+d));

/** The sheet letter-spaces its headings ("W A N N   B E N U T Z E"). Single
 *  spaces separate letters, runs of 2+ separate words — so rebuild on that. */
const unletter = (raw) => {
  const toks = raw.trim().split(/\s+/);
  const spaced = toks.length > 3 && toks.filter((t) => t.length === 1).length / toks.length > 0.6;
  if (!spaced) return raw.replace(/\s+/g, ' ').trim();
  return raw.trim().split(/\s{2,}/).map((w) => w.replace(/\s+/g, '')).join(' ');
};

// ── text elements in reading order ──────────────────────────────────────
const els = [];
xml.split('<page number=').slice(1).forEach((page, pi) => {
  for (const m of page.matchAll(/<text top="(-?\d+)" left="(-?\d+)" width="(-?\d+)" height="(-?\d+)" font="(\d+)">([\s\S]*?)<\/text>/g)) {
    const f = FONTS[m[5]] || { size: 0, color: '?' };
    const raw = decode(m[6]);
    const text = raw.replace(/\s+/g, ' ').trim();
    if (!text) continue;
    els.push({ page: pi, top: +m[1], left: +m[2], size: f.size, color: f.color, text, raw });
  }
});
els.sort((a, b) => a.page - b.page || a.top - b.top || a.left - b.left);

const DE = '#16191d', GLOSS = '#6b7280', MODEL = '#0d4f3a', RULE = '#3b4046', LABEL = '#868d95', HEAD = '#ffffff';
const REGISTER = { '#1d4ed8': 'formell', '#be1550': 'informell' };

/** Merge a column's lines into paragraphs; a large vertical jump starts a new one. */
const paras = (lines, gap = 16) => {
  const out = [];
  let cur = null, last = null;
  for (const l of [...lines].sort((a, b) => a.page - b.page || a.top - b.top || a.left - b.left)) {
    if (!cur || l.page !== cur.page || l.top - last > gap) { cur = { page: l.page, top: l.top, parts: [l.text] }; out.push(cur); }
    else cur.parts.push(l.text);
    last = l.top;
  }
  return out.map((p) => ({ page: p.page, top: p.top, text: p.parts.join(' ').replace(/\s+/g, ' ').trim() }));
};
const joinCol = (lines) => paras(lines, 9999).map((p) => p.text).join(' ');

// ── section boundaries: the three numbered headings are the only size-21 text ──
const heads = els.filter((e) => e.size === 21 && e.color === DE).map((e, i) => ({ i: els.indexOf(e), n: i + 1, text: e.text }));
const secRange = (n) => {
  const a = heads.find((h) => h.n === n);
  const b = heads.find((h) => h.n === n + 1);
  return els.slice(a.i + 1, b ? b.i : els.length);
};

// ── 1 · Anrede und Gruß — formell vs informell ─────────────────────────
function parseCompare(block) {
  const groups = [];
  let g = null;
  for (const e of block) {
    if (e.color === HEAD && e.left < 150) { g = { group: unletter(e.raw), en: '', rows: [] }; groups.push(g); continue; }
    if (e.color === HEAD && g && !g.en) { g.en = e.text; continue; }
    if (!g) continue;
    const col = e.left >= 480 ? 'informell' : e.left >= 160 ? 'formell' : 'label';
    if (col === 'label') {
      if (e.color !== LABEL) continue;
      const near = g.rows.find((r) => Math.abs(r.top - e.top) < 20);
      if (near) near.label += ' ' + e.text;
      else g.rows.push({ top: e.top, label: e.text, formell: { de: '', en: '' }, informell: { de: '', en: '' } });
      continue;
    }
    const lang = e.size >= 12 ? 'de' : 'en';
    let row = g.rows.find((r) => Math.abs(r.top - e.top) < 24);
    if (!row) { row = { top: e.top, label: '', formell: { de: '', en: '' }, informell: { de: '', en: '' } }; g.rows.push(row); }
    row[col][lang] = (row[col][lang] ? row[col][lang] + ' ' : '') + e.text;
  }
  groups.forEach((x) => {
    x.rows.sort((a, b) => a.top - b.top);
    // A cell that wraps can open a label-less row; merge it back into the row above.
    x.rows = x.rows.reduce((acc, r) => {
      const prev = acc[acc.length - 1];
      if (!r.label.trim() && prev) {
        for (const c of ['formell', 'informell']) for (const l of ['de', 'en'])
          if (r[c][l]) prev[c][l] = (prev[c][l] ? prev[c][l] + ' ' : '') + r[c][l];
        return acc;
      }
      return acc.concat(r);
    }, []);
    x.rows.forEach((r) => {
      delete r.top;
      r.label = r.label.replace(/\s+/g, ' ').trim();
      for (const c of ['formell', 'informell']) for (const l of ['de', 'en']) r[c][l] = r[c][l].replace(/\s+/g, ' ').trim();
    });
  });
  return groups;
}

// ── 2 · Sätze, die immer passen — two de/en pairs per row ──────────────
function parseSentences(block) {
  const groups = [];
  let g = null;
  for (const e of block) {
    if (e.color === HEAD && e.left < 150) { g = { group: unletter(e.raw), en: '', items: [] }; groups.push(g); continue; }
    if (e.color === HEAD && g && !g.en) { g.en = e.text; continue; }
    if (!g || (e.color !== DE && e.color !== GLOSS)) continue;
    // four columns: de(74) en(263) de(453) en(642)
    const slot = e.left >= 600 ? 3 : e.left >= 420 ? 2 : e.left >= 230 ? 1 : 0;
    const pair = slot >= 2 ? 1 : 0;
    const lang = slot % 2 === 0 ? 'de' : 'en';
    let row = g.items.find((r) => Math.abs(r.top - e.top) < 20);
    if (!row) { row = { top: e.top, cells: [{ de: '', en: '' }, { de: '', en: '' }] }; g.items.push(row); }
    row.cells[pair][lang] = (row.cells[pair][lang] ? row.cells[pair][lang] + ' ' : '') + e.text;
  }
  // flatten each row's two cells into a flat sentence list, dropping empties
  return groups.map((x) => ({
    group: x.group, en: x.en,
    items: x.items.sort((a, b) => a.top - b.top).flatMap((r) => r.cells).filter((c) => c.de && c.en),
  }));
}

// ── 3 · Grammatik und Satzbau ──────────────────────────────────────────
function parseGrammar(block) {
  // Split into groups first, then anchor each group's rows on its pattern cells.
  const groups = [];
  let g = null;
  for (const e of block) {
    if (e.color === HEAD && e.left < 150) { g = { group: unletter(e.raw), en: '', els: [] }; groups.push(g); continue; }
    if (e.color === HEAD && g && !g.en) { g.en = e.text; continue; }
    if (!g) continue;
    if (e.color === LABEL && e.left < 250 && /^(MUSTER|REGEL|BEISPIEL)/.test(e.text)) continue; // column headings
    g.els.push(e);
  }

  for (const grp of groups) {
    // Anchors are the pattern cells; a pattern that wraps stays one anchor.
    const anchors = [];
    for (const e of grp.els) {
      if (e.left >= 200 || e.color !== DE || e.size < 12) continue;
      const prev = anchors[anchors.length - 1];
      if (prev && e.top - prev.lastTop <= 20) { prev.pattern += ' ' + e.text; prev.lastTop = e.top; }
      else anchors.push({ top: e.top, lastTop: e.top, pattern: e.text, ruleDe: '', ruleEn: '', exampleDe: '', exampleEn: '' });
    }
    // Assign every other cell to the last anchor at or just above it — the sheet
    // sometimes emits a rule one pixel higher than the pattern it belongs to.
    for (const e of grp.els) {
      if (e.left < 200 && e.color === DE && e.size >= 12) continue;
      let row = null;
      for (const a of anchors) if (a.top <= e.top + 5) row = a;
      if (!row) continue;
      const col = e.left >= 470 ? 'example' : e.left >= 200 ? 'rule' : 'pattern';
      const add = (k) => { row[k] = (row[k] ? row[k] + ' ' : '') + e.text; };
      if (col === 'rule') { if (e.color === RULE) add('ruleDe'); else if (e.color === LABEL) add('ruleEn'); }
      else if (col === 'example') { if (e.color === LABEL) add('exampleEn'); else add('exampleDe'); }
    }
    grp.rows = anchors;
    delete grp.els;
  }
  groups.forEach((x) => {
    x.rows.forEach((r) => {
      delete r.top; delete r.lastTop;
      Object.keys(r).forEach((k) => { r[k] = r[k].replace(/\s+/g, ' ').replace(/\s+([.,?!])/g, '$1').trim(); });
    });
    x.rows = x.rows.filter((r) => r.pattern);
  });
  return groups;
}

// ── the 94 tasks ────────────────────────────────────────────────────────
const starts = [];
els.forEach((e, i) => {
  if (e.size >= 14 && REGISTER[e.color] && /^\d+$/.test(e.text)) starts.push({ i, n: +e.text, register: REGISTER[e.color] });
});

// A task's title is typeset slightly ABOVE its number, so a block starts at
// whichever of the two comes first and ends where the next task's does.
starts.forEach((s) => {
  const num = els[s.i];
  const ti = els.findIndex((e) => e.size === 13 && e.color === DE && e.page === num.page && Math.abs(e.top - num.top) < 26);
  s.start = ti === -1 ? s.i : Math.min(ti, s.i);
});

const tasks = starts.map((s, si) => {
  const num = els[s.i];
  const from = s.start;
  const to = si + 1 < starts.length ? starts[si + 1].start : els.length;
  const block = els.slice(from, to).filter((e) => !(e.color === '#b9bec5') && !(e.color === LABEL && e.left > 400 && /^\d+$/.test(e.text)));

  const near = (e) => e.page === num.page && Math.abs(e.top - num.top) < 26;
  const titleDe = block.find((e) => e.size === 13 && e.color === DE && near(e));
  const titleEn = block.find((e) => e.size === 10 && e.color === GLOSS && e.left > 90 && e.left < 260 && e.page === num.page && e.top > num.top - 10 && e.top < num.top + 30);
  const badge = block.find((e) => e.left > 600 && /FORMELL/i.test(e.text.replace(/\s+/g, '')));

  const mi = block.findIndex((e) => /MUSTERANTWORT/i.test(e.text.replace(/\s+/g, '')));
  const taskPart = mi === -1 ? block : block.slice(0, mi);
  const modelPart = mi === -1 ? [] : block.slice(mi + 1);

  const sit = taskPart.filter((e) => e.color === DE && e.size === 11 && e.left < 85);
  const bullets = taskPart.filter((e) => e.color === DE && e.size === 11 && e.left >= 85);
  const sitEn = taskPart.filter((e) => e.color === GLOSS && e.size === 10 && e.left < 200 && e !== titleEn);

  const de = paras(modelPart.filter((e) => e.color === MODEL));
  const en = paras(modelPart.filter((e) => e.color === GLOSS && e.left > 300));
  const model = de.map((p) => {
    let best = null, bestD = Infinity;
    for (const q of en) {
      if (q.page !== p.page) continue;
      const d = Math.abs(q.top - p.top);
      if (d < bestD) { bestD = d; best = q; }
    }
    return { de: p.text, en: bestD <= 14 && best ? best.text : '' };
  });

  // The sign-off is two lines in a real e-mail ("Viele Grüße" / name), but the
  // PDF wraps them into one paragraph. Put the break back so it reads correctly.
  const SIGNOFF_DE = /^(Mit freundlichen Grüßen|Freundliche Grüße|Herzliche Grüße|Viele Grüße|Liebe Grüße|Beste Grüße)\s+(.+)$/;
  const SIGNOFF_EN = /^(Kind regards|Best wishes|Best regards|Love \/ warm wishes|Warm wishes|Regards)\s+(.+)$/;
  const last = model[model.length - 1];
  if (last) {
    const d = last.de.match(SIGNOFF_DE);
    if (d) last.de = `${d[1]}\n${d[2]}`;
    const e = last.en.match(SIGNOFF_EN);
    if (e) last.en = `${e[1]}\n${e[2]}`;
  }

  return {
    id: s.n,
    register: s.register,
    title: titleDe ? titleDe.text : '',
    titleEn: titleEn ? titleEn.text : '',
    situation: joinCol(sit),
    points: bullets.map((b) => b.text),
    situationEn: joinCol(sitEn),
    model,
  };
});

// ── validate ────────────────────────────────────────────────────────────
const problems = [];
tasks.forEach((t) => {
  if (!t.title) problems.push(`${t.id}: no title`);
  if (!t.titleEn) problems.push(`${t.id}: no English title`);
  if (!t.situation) problems.push(`${t.id}: no situation`);
  if (!t.situationEn) problems.push(`${t.id}: no English situation`);
  if (!t.points.length) problems.push(`${t.id}: no bullet points`);
  if (t.model.length < 3) problems.push(`${t.id}: model has ${t.model.length} paragraph(s)`);
  t.model.forEach((m, i) => { if (!m.en) problems.push(`${t.id}: model para ${i + 1} has no translation`); });
});
if (tasks.length !== 94) problems.push(`expected 94 tasks, got ${tasks.length}`);
tasks.forEach((t, i) => { if (t.id !== i + 1) problems.push(`task ${i} has id ${t.id}`); });

const compare = parseCompare(secRange(1));
const sentences = parseSentences(secRange(2));
const grammar = parseGrammar(secRange(3).filter((e) => els.indexOf(e) < starts[0].start));

console.log('tasks:', tasks.length, '·', tasks.filter((t) => t.register === 'formell').length, 'formell /', tasks.filter((t) => t.register === 'informell').length, 'informell');
console.log('model paragraphs:', tasks.reduce((n, t) => n + t.model.length, 0));
console.log('compare groups:', compare.map((g) => `${g.group}(${g.rows.length})`).join(' · '));
console.log('sentence groups:', sentences.map((g) => `${g.group}(${g.items.length})`).join(' · '));
console.log('grammar groups:', grammar.map((g) => `${g.group}(${g.rows.length})`).join(' · '));
if (problems.length) { console.log('\nPROBLEMS (' + problems.length + '):'); problems.slice(0, 25).forEach((p) => console.log('  -', p)); }
else console.log('\nno problems');

if (process.env.EMIT === '1') {
  const sentenceCount = sentences.reduce((n, g) => n + g.items.length, 0);
  fs.writeFileSync(OUT, `/**
 * Goethe A1 · Schreiben Teil 2 — E-Mails.
 *
 * Generated from A1_Schreiben_Teil2_Emails_Cheatsheet_v1.0.pdf
 * (scripts/buildSchreibenEmails.cjs — re-run it if the sheet is revised).
 *
 * ${tasks.length} exam tasks, each with the situation, its three bullet points and a
 * full model email translated paragraph by paragraph, plus the reference
 * sections: formell/informell openings and sign-offs, ${sentenceCount} reusable
 * sentences, and the grammar that Teil 2 actually tests.
 *
 * Task shape: { id, register, title, titleEn, situation, points[], situationEn,
 *               model: [{ de, en }] }   register = 'formell' (Sie) | 'informell' (du)
 */

export const EMAIL_TASKS = ${JSON.stringify(tasks)};

/** Openings, first sentences, requests and sign-offs — formell beside informell. */
export const EMAIL_COMPARE = ${JSON.stringify(compare)};

/** Sentences that fit almost any task. */
export const EMAIL_SENTENCES = ${JSON.stringify(sentences)};

/** Word order and the grammar Teil 2 is marked on. */
export const EMAIL_GRAMMAR = ${JSON.stringify(grammar)};

export const emailTaskById = (id) => EMAIL_TASKS.find((t) => t.id === Number(id)) || null;
`);
  fs.writeFileSync(OUT.replace(/\.js$/, 'Meta.js'), `/**
 * Schreiben Teil 2 deck size — generated alongside schreibenEmails.js.
 * Import this (not the deck) when you only need the numbers.
 */

export const EMAIL_TASK_COUNT = ${tasks.length};
export const EMAIL_SENTENCE_COUNT = ${sentenceCount};
export const EMAIL_FORMELL_COUNT = ${tasks.filter((t) => t.register === 'formell').length};
export const EMAIL_INFORMELL_COUNT = ${tasks.filter((t) => t.register === 'informell').length};
`);
  console.log('\nwrote', OUT);
}
