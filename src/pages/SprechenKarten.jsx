import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AudioButton from '../components/AudioButton.jsx';
import SrStatus from '../components/SrStatus.jsx';
import { T2_CARDS, T2_THEMES, T2_GENDERS, T2_GRAMMAR } from '../data/sprechenTeil2.js';

/**
 * Sprechen Teil 2 · Fragen und Antworten — the full keyword deck.
 *
 * In the exam you draw a theme card plus a keyword and have to ASK a whole
 * question; your partner answers. This page is that deck: every keyword with a
 * W-question and a Ja/Nein-question, each with a model answer, colour-coded by
 * gender exactly like the printed sheet — plus audio and a hide-answers mode
 * the paper version can't give you.
 */

const PAGE = 48;

// Gender colours — matched to the printed sheet (der blue · die pink · das green
// · Plural amber · Verb violet), with dark-mode variants.
const GEN_STYLE = {
  der:  { bar: 'bg-blue-600',    text: 'text-blue-700 dark:text-blue-300',       chip: 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/30' },
  die:  { bar: 'bg-pink-600',    text: 'text-pink-700 dark:text-pink-300',       chip: 'border-pink-300 dark:border-pink-700 bg-pink-50 dark:bg-pink-900/30' },
  das:  { bar: 'bg-emerald-700', text: 'text-emerald-700 dark:text-emerald-300', chip: 'border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/30' },
  pl:   { bar: 'bg-amber-600',   text: 'text-amber-700 dark:text-amber-300',     chip: 'border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/30' },
  verb: { bar: 'bg-violet-600',  text: 'text-violet-700 dark:text-violet-300',   chip: 'border-violet-300 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/30' },
};

// Two foldings, because searchers type umlauts three different ways: "Brötchen",
// "Broetchen" (German convention) and "Brotchen" (plain ASCII). Cards are indexed
// under both spellings and the needle is tried both ways, so all three hit.
const foldDe = (s) => (s || '').toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
const foldAscii = (s) => (s || '').toLowerCase()
  .replace(/ß/g, 'ss').normalize('NFD').replace(/\p{Diacritic}/gu, '');

const haystack = (c) => {
  const raw = [c.word, c.gloss, c.cat, ...c.lines.flatMap((l) => [l.de, l.en, l.ade, l.aen])].join(' ');
  return `${foldDe(raw)} ${foldAscii(raw)}`;
};

const matchesNeedle = (h, needle) => h.includes(foldDe(needle)) || h.includes(foldAscii(needle));

/** Render a grammar-box token array ({ s, k }) with the app's styling. */
function Tokens({ tokens }) {
  return tokens.map((t, i) => {
    if (t.k === 'b') return <strong key={i}>{t.s}</strong>;
    if (t.k === 'i') return <em key={i} className="text-slate-500">{t.s}</em>;
    if (t.k === 'sub') return <span key={i} className="block text-xs font-normal text-slate-500 mt-0.5">{t.s}</span>;
    if (GEN_STYLE[t.k]) return <span key={i} className={`font-semibold ${GEN_STYLE[t.k].text}`}>{t.s}</span>;
    return <span key={i}>{t.s}</span>;
  });
}

function GrammarBox({ box }) {
  return (
    <section className="card" aria-labelledby={`gb-${box.title}`}>
      <h3 id={`gb-${box.title}`} lang="de" className="font-bold leading-tight">
        {box.title}{' '}
        {box.subtitle && <span className="font-normal text-sm text-slate-400" lang="en">{box.subtitle}</span>}
      </h3>
      <div className="h-px bg-slate-200 dark:bg-slate-700 my-3" />

      {box.tables?.map((tbl, ti) => (
        <div key={ti} className={`overflow-x-auto ${ti ? 'mt-3' : ''}`}>
          <table className="w-full text-sm border-collapse">
            {tbl.head && (
              <thead>
                <tr className="text-[11px] uppercase tracking-wide text-slate-400">
                  {tbl.head.map((h, i) => (
                    <th key={i} colSpan={h.span} className="text-left font-bold pb-1.5 pr-3 border-b border-slate-200 dark:border-slate-700">
                      <Tokens tokens={h.t} />
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {tbl.rows.map((r, ri) => (
                <tr key={ri} className={r.sep ? 'border-t border-slate-200 dark:border-slate-700' : ''}>
                  {r.c.map((cell, ci) => (
                    <td
                      key={ci}
                      lang={cell.de ? 'de' : undefined}
                      // Exactly one colour class per cell: a gender colour must not be
                      // paired with a neutral one, or Tailwind's source order decides
                      // the winner and the colour-coding silently disappears.
                      className={[
                        'py-1.5 pr-3 align-top',
                        cell.de ? 'font-semibold' : '',
                        cell.lab ? 'font-bold' : '',
                        cell.key || cell.lab ? 'whitespace-nowrap' : '',
                        cell.g ? GEN_STYLE[cell.g].text
                          : cell.key ? 'text-slate-500 font-normal'
                          : cell.lab ? 'text-slate-700 dark:text-slate-200'
                          : cell.de ? 'text-slate-900 dark:text-slate-100'
                          : '',
                      ].filter(Boolean).join(' ')}
                    >
                      <Tokens tokens={cell.t} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {box.items && (
        <ul className="space-y-1 text-sm">
          {box.items.map((it, i) => <li key={i} lang="de"><Tokens tokens={it} /></li>)}
        </ul>
      )}

      {box.foot && (
        <p lang="de" className="text-xs text-slate-500 leading-relaxed mt-3">
          <Tokens tokens={box.foot} />
        </p>
      )}
    </section>
  );
}

function QaLine({ line, kind, hide }) {
  const [shown, setShown] = useState(false);
  const reveal = !hide || shown;
  return (
    <li className="py-2.5 first:pt-0 last:pb-0">
      <div className="flex items-start gap-2">
        <span
          aria-hidden
          className="mt-0.5 text-[10px] font-bold uppercase tracking-wide rounded px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0"
        >
          {kind === 'w' ? 'W' : 'Ja/Nein'}
        </span>
        <div className="flex-1 min-w-0">
          <span lang="de" className="font-semibold">{line.de}</span>
          <span className="block text-xs text-slate-500">{line.en}</span>
        </div>
        <AudioButton text={line.de} size="sm" label="Hear the question" />
      </div>

      <div className="mt-1.5 pl-8">
        {reveal ? (
          <div className="flex items-start gap-2">
            <div className="flex-1 min-w-0 border-l-2 border-emerald-400 dark:border-emerald-600 pl-2.5">
              <span lang="de" className="text-emerald-800 dark:text-emerald-300 font-medium">{line.ade}</span>
              <span className="block text-xs text-slate-500">{line.aen}</span>
            </div>
            <AudioButton text={line.ade} size="sm" label="Hear the answer" />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShown(true)}
            className="text-xs font-semibold text-brand-600 dark:text-brand-300 hover:underline border border-dashed border-slate-300 dark:border-slate-600 rounded px-2 py-1"
          >
            Say it, then show the answer →
          </button>
        )}
      </div>
    </li>
  );
}

function Card({ card, hide }) {
  const g = GEN_STYLE[card.gen] || GEN_STYLE.verb;
  const article = card.gen === 'pl' ? 'die (Pl.)' : card.gen === 'verb' ? 'Verb' : card.gen;
  return (
    <article className="card relative overflow-hidden pl-5">
      <span aria-hidden className={`absolute left-0 top-0 bottom-0 w-1.5 ${g.bar}`} />
      <div className="flex items-baseline gap-2 flex-wrap">
        <h3 lang="de" className={`font-extrabold text-lg ${g.text}`}>{card.word}</h3>
        <span className={`text-[10px] font-bold uppercase tracking-wide rounded-full border px-2 py-0.5 ${g.chip} ${g.text}`}>
          {article}
        </span>
        <span className="text-sm text-slate-500">{card.gloss}</span>
      </div>
      <ul className="divide-y divide-slate-100 dark:divide-slate-800 mt-2">
        {card.lines.map((l, i) => (
          <QaLine key={l.de} line={l} kind={i === 0 ? 'w' : 'jn'} hide={hide} />
        ))}
      </ul>
    </article>
  );
}

export default function SprechenKarten() {
  const [q, setQ] = useState('');
  const [theme, setTheme] = useState('');
  const [gen, setGen] = useState('');
  const [hide, setHide] = useState(false);
  const [showGrammar, setShowGrammar] = useState(false);
  const [limit, setLimit] = useState(PAGE);

  const hay = useMemo(() => T2_CARDS.map((c) => ({ card: c, h: haystack(c) })), []);
  const matches = useMemo(() => {
    const needle = q.trim();
    return hay
      .filter(({ card, h }) =>
        (!theme || card.cat === theme) &&
        (!gen || card.gen === gen) &&
        (!needle || matchesNeedle(h, needle)))
      .map(({ card }) => card);
  }, [hay, q, theme, gen]);

  // any filter change starts the list again from the top
  const reset = (fn) => (v) => { fn(v); setLimit(PAGE); };
  const visible = matches.slice(0, limit);

  const chip = (active) =>
    `text-sm rounded-full border px-3 py-1 transition ${active
      ? 'border-brand-500 bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 font-semibold'
      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-brand-300'}`;

  return (
    <div className="space-y-5">
      <div>
        <Link to="/sprechen" className="text-sm text-slate-500 hover:underline">← Sprechen</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">🗂️ Sprechen Teil 2 — Fragen und Antworten</h1>
        <p className="text-slate-500 mt-1 max-w-3xl">
          The full keyword deck: {T2_CARDS.length} cards across the {T2_THEMES.length} official themes, each with a
          <strong> W-question</strong> and a <strong> Ja/Nein-question</strong> plus a model answer. In the exam you draw a
          theme and a keyword and must ask a <em>whole</em> question — never just the word. Pick <em>du</em> or
          <em> Sie</em> and stay with it.
        </p>
      </div>

      {/* ── controls ─────────────────────────────────────────────── */}
      <div className="card space-y-3">
        <label className="block">
          <span className="sr-only">Search keyword, question, answer or English meaning</span>
          <input
            type="search"
            value={q}
            onChange={(e) => reset(setQ)(e.target.value)}
            placeholder="Suchen: Stichwort, Frage, Antwort oder englische Bedeutung"
            className="w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:border-brand-500"
          />
        </label>

        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by theme">
          <button type="button" className={chip(!theme)} onClick={() => reset(setTheme)('')}>Alle Themen</button>
          {T2_THEMES.map((t) => (
            <button key={t.de} type="button" lang="de" title={t.en} className={chip(theme === t.de)}
              onClick={() => reset(setTheme)(theme === t.de ? '' : t.de)}>
              {t.de}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by gender">
          <button type="button" className={chip(!gen)} onClick={() => reset(setGen)('')}>Alle</button>
          {T2_GENDERS.map((g) => (
            <button key={g.key} type="button" lang="de" title={g.de}
              className={`${chip(gen === g.key)} ${gen === g.key ? '' : GEN_STYLE[g.key].text}`}
              onClick={() => reset(setGen)(gen === g.key ? '' : g.key)}>
              {g.label}
            </button>
          ))}
          <span className="ml-auto flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 cursor-pointer">
              <input type="checkbox" checked={hide} onChange={(e) => setHide(e.target.checked)} className="rounded" />
              Hide answers
            </label>
            <button type="button" onClick={() => setShowGrammar((v) => !v)}
              className="text-sm font-semibold text-brand-600 dark:text-brand-300 hover:underline">
              {showGrammar ? 'Hide grammar' : `Grammar (${T2_GRAMMAR.length})`}
            </button>
          </span>
        </div>

        <p className="text-sm text-slate-500 tabular-nums" aria-live="polite">
          {matches.length} {matches.length === 1 ? 'Karte' : 'Karten'}
          {theme && <> · <span lang="de">{theme}</span></>}
        </p>
      </div>

      {/* ── grammar reference ────────────────────────────────────── */}
      {showGrammar && (
        <div className="grid md:grid-cols-2 gap-3">
          {T2_GRAMMAR.map((b) => <GrammarBox key={b.title} box={b} />)}
        </div>
      )}

      {/* ── cards ────────────────────────────────────────────────── */}
      <SrStatus>{`${matches.length} cards match.`}</SrStatus>
      {matches.length === 0 ? (
        <div className="card text-center text-slate-500">
          Keine Karte gefunden. <button type="button" className="text-brand-600 font-semibold hover:underline"
            onClick={() => { setQ(''); setTheme(''); setGen(''); setLimit(PAGE); }}>Filter zurücksetzen</button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-3">
          {visible.map((c) => <Card key={`${c.cat}-${c.word}`} card={c} hide={hide} />)}
        </div>
      )}

      {visible.length < matches.length && (
        <button type="button" className="btn-secondary w-full" onClick={() => setLimit((n) => n + PAGE)}>
          Show more ({matches.length - visible.length} left)
        </button>
      )}

      <p className="text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800 pt-4">
        Practise out loud: <Link to="/sprechen" className="text-brand-600 font-semibold hover:underline">🗣️ Speaking test</Link>
        {' '}· More chunks: <Link to="/phrases" className="text-brand-600 font-semibold hover:underline">💬 Phrase bank</Link>
        {' '}· Drill one part: <Link to="/drills" className="text-brand-600 font-semibold hover:underline">🎯 Section drills</Link>
      </p>
    </div>
  );
}
