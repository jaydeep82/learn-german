import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SrStatus from './SrStatus.jsx';

/**
 * Shared chrome for the Sprechen reference decks (Teil 2 questions, Teil 3
 * requests): search, theme and gender filters, the grammar boxes, paged
 * rendering and a hide-answers self-test toggle. Each deck supplies its own
 * card renderer through `children`.
 */

const PAGE = 48;

// Gender colours — matched to the printed sheets (der blue · die pink · das green
// · Plural amber · Verb violet · Schild rose), with dark-mode variants.
export const GEN_STYLE = {
  der:  { bar: 'bg-blue-600',    text: 'text-blue-700 dark:text-blue-300',       chip: 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/30' },
  die:  { bar: 'bg-pink-600',    text: 'text-pink-700 dark:text-pink-300',       chip: 'border-pink-300 dark:border-pink-700 bg-pink-50 dark:bg-pink-900/30' },
  das:  { bar: 'bg-emerald-700', text: 'text-emerald-700 dark:text-emerald-300', chip: 'border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/30' },
  pl:   { bar: 'bg-amber-600',   text: 'text-amber-700 dark:text-amber-300',     chip: 'border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/30' },
  verb: { bar: 'bg-violet-600',  text: 'text-violet-700 dark:text-violet-300',   chip: 'border-violet-300 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/30' },
  sign: { bar: 'bg-rose-600',    text: 'text-rose-700 dark:text-rose-300',       chip: 'border-rose-300 dark:border-rose-700 bg-rose-50 dark:bg-rose-900/30' },
};

// Two foldings, because searchers type umlauts three different ways: "Brötchen",
// "Broetchen" (German convention) and "Brotchen" (plain ASCII). Cards are indexed
// under both spellings and the needle is tried both ways, so all three hit.
export const foldDe = (s) => (s || '').toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
export const foldAscii = (s) => (s || '').toLowerCase()
  .replace(/ß/g, 'ss').normalize('NFD').replace(/\p{Diacritic}/gu, '');

export const indexText = (raw) => `${foldDe(raw)} ${foldAscii(raw)}`;
export const matchesNeedle = (h, needle) => h.includes(foldDe(needle)) || h.includes(foldAscii(needle));

/** Render a grammar-box token array ({ s, k }) with the app's styling. */
export function Tokens({ tokens }) {
  return tokens.map((t, i) => {
    if (t.k === 'b') return <strong key={i}>{t.s}</strong>;
    if (t.k === 'i') return <em key={i} className="text-slate-500">{t.s}</em>;
    if (t.k === 'hi') return <strong key={i} className="text-rose-600 dark:text-rose-400">{t.s}</strong>;
    if (t.k === 'sub') return <span key={i} className="block text-xs font-normal text-slate-500 mt-0.5">{t.s}</span>;
    if (t.k?.startsWith('pill-')) {
      const g = GEN_STYLE[t.k.slice(5)] || GEN_STYLE.der;
      return (
        <span key={i} className={`inline-block text-[11px] font-bold rounded-full border px-2 py-0.5 mr-1 ${g.chip} ${g.text}`}>
          {t.s}
        </span>
      );
    }
    if (GEN_STYLE[t.k]) return <span key={i} className={`font-semibold ${GEN_STYLE[t.k].text}`}>{t.s}</span>;
    return <span key={i}>{t.s}</span>;
  });
}

export function GrammarBox({ box }) {
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
                          : cell.key || cell.muted ? 'text-slate-500 font-normal'
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

export default function DeckShell({
  backTo, backLabel, title, intro,
  cards, themes, genders, grammar,
  haystackOf, keyOf, searchPlaceholder,
  hidePromptLabel = 'Hide questions', hideReplyLabel = 'Hide answers',
  footer, children,
}) {
  const [q, setQ] = useState('');
  const [theme, setTheme] = useState('');
  const [gen, setGen] = useState('');
  // Two independent covers. Hiding the prompt is the real exam drill — you get
  // only the keyword (or the picture) and have to produce the sentence yourself.
  const [hidePrompt, setHidePrompt] = useState(false);
  const [hideReply, setHideReply] = useState(false);
  const [showGrammar, setShowGrammar] = useState(false);
  const [limit, setLimit] = useState(PAGE);

  const hay = useMemo(() => cards.map((c) => ({ card: c, h: indexText(haystackOf(c)) })), [cards, haystackOf]);
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
        <Link to={backTo} className="text-sm text-slate-500 hover:underline">← {backLabel}</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">{title}</h1>
        <div className="text-slate-500 mt-1 max-w-3xl">{intro}</div>
      </div>

      <div className="card space-y-3">
        <label className="block">
          <span className="sr-only">Search the deck</span>
          <input
            type="search"
            value={q}
            onChange={(e) => reset(setQ)(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:border-brand-500"
          />
        </label>

        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by theme">
          <button type="button" className={chip(!theme)} onClick={() => reset(setTheme)('')}>Alle Themen</button>
          {themes.map((t) => (
            <button key={t.de} type="button" lang="de" title={t.en} className={chip(theme === t.de)}
              onClick={() => reset(setTheme)(theme === t.de ? '' : t.de)}>
              {t.de}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by gender">
          <button type="button" className={chip(!gen)} onClick={() => reset(setGen)('')}>Alle</button>
          {genders.map((g) => (
            <button key={g.key} type="button" lang="de" title={g.de}
              className={`${chip(gen === g.key)} ${gen === g.key ? '' : GEN_STYLE[g.key].text}`}
              onClick={() => reset(setGen)(gen === g.key ? '' : g.key)}>
              {g.label}
            </button>
          ))}
          <span className="ml-auto flex items-center gap-3 flex-wrap">
            <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 cursor-pointer">
              <input type="checkbox" checked={hidePrompt} onChange={(e) => setHidePrompt(e.target.checked)} className="rounded" />
              {hidePromptLabel}
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 cursor-pointer">
              <input type="checkbox" checked={hideReply} onChange={(e) => setHideReply(e.target.checked)} className="rounded" />
              {hideReplyLabel}
            </label>
            <button type="button" onClick={() => setShowGrammar((v) => !v)}
              className="text-sm font-semibold text-brand-600 dark:text-brand-300 hover:underline">
              {showGrammar ? 'Hide grammar' : `Grammar (${grammar.length})`}
            </button>
          </span>
        </div>

        <p className="text-sm text-slate-500 tabular-nums" aria-live="polite">
          {matches.length} {matches.length === 1 ? 'Karte' : 'Karten'}
          {theme && <> · <span lang="de">{theme}</span></>}
        </p>
      </div>

      {showGrammar && (
        <div className="grid md:grid-cols-2 gap-3">
          {grammar.map((b) => <GrammarBox key={b.title} box={b} />)}
        </div>
      )}

      <SrStatus>{`${matches.length} cards match.`}</SrStatus>
      {matches.length === 0 ? (
        <div className="card text-center text-slate-500">
          Keine Karte gefunden. <button type="button" className="text-brand-600 font-semibold hover:underline"
            onClick={() => { setQ(''); setTheme(''); setGen(''); setLimit(PAGE); }}>Filter zurücksetzen</button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-3">
          {visible.map((c) => <div key={keyOf(c)}>{children(c, { prompt: hidePrompt, reply: hideReply })}</div>)}
        </div>
      )}

      {visible.length < matches.length && (
        <button type="button" className="btn-secondary w-full" onClick={() => setLimit((n) => n + PAGE)}>
          Show more ({matches.length - visible.length} left)
        </button>
      )}

      <p className="text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800 pt-4">{footer}</p>
    </div>
  );
}
