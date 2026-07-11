import { useState } from 'react';
import { Link } from 'react-router-dom';
import { days, weeks, CONJ } from '../data/curriculum.js';
import { pronounce, PRONUNCIATION_KEY } from '../lib/pronounce.js';
import GrammarItem from '../components/grammar/GrammarItem.jsx';
import { weekTheme } from '../lib/weekTheme.js';

export default function Grammar() {
  const grammarDays = days.filter((d) => d.grammar?.length);
  const grammarWeeks = weeks.filter((w) => grammarDays.some((d) => d.week === w.n));

  // All weeks start expanded; collapsing a week is the way to tame the scroll.
  const [open, setOpen] = useState(() => new Set(grammarWeeks.map((w) => w.n)));
  const allOpen = open.size === grammarWeeks.length;

  const toggle = (n) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });

  const setAll = (openAll) =>
    setOpen(openAll ? new Set(grammarWeeks.map((w) => w.n)) : new Set());

  const jump = (n) => {
    setOpen((prev) => new Set(prev).add(n)); // ensure the target week is open
    requestAnimationFrame(() =>
      document.getElementById(`gw-${n}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    );
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Grammar reference</h1>
        <p className="text-slate-500">Every rule in the course — grouped by week, with audio examples. Tap a week to jump or collapse.</p>
      </header>

      <Link to="/checklist" className="block card bg-gradient-to-br from-emerald-50 to-white dark:from-slate-800 dark:to-slate-900 hover:shadow-md transition">
        <div className="flex items-center gap-3">
          <span className="text-3xl" aria-hidden>✅</span>
          <div className="flex-1">
            <div className="font-bold">Goethe A1 grammar checklist</div>
            <div className="text-sm text-slate-500">The official exam syllabus point by point — where each rule is taught, plus three extras covered right there.</div>
          </div>
          <span aria-hidden className="text-xl">→</span>
        </div>
      </Link>

      {/* Sticky jump-to-week tab bar */}
      <nav
        aria-label="Jump to week"
        className="sticky top-[102px] md:top-[53px] z-20 -mx-4 px-4 py-2 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur border-y border-slate-200 dark:border-slate-800"
      >
        <div className="flex items-center gap-2 overflow-x-auto">
          {grammarWeeks.map((w) => {
            const theme = weekTheme(w.n);
            return (
              <button
                key={w.n}
                type="button"
                onClick={() => jump(w.n)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold ${theme.chip} hover:opacity-80 transition`}
                title={`Week ${w.n} · ${w.title}`}
              >
                Week {w.n}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setAll(!allOpen)}
            className="shrink-0 ml-auto px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:opacity-80 transition"
          >
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
      </nav>

      <section className="card" aria-labelledby="pron-key">
        <h2 id="pron-key" className="font-bold mb-2">How to read the pronunciation guide</h2>
        <p className="text-sm text-slate-500 mb-3">
          Throughout the app you&rsquo;ll see brackets like <em>[ikh]</em> under each German word.
          Read the brackets like English — these are the symbols we use:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {PRONUNCIATION_KEY.map(([sym, desc]) => (
            <div key={sym} className="flex items-baseline gap-2 text-sm">
              <code className="font-mono text-brand-700 dark:text-brand-300">[{sym}]</code>
              <span className="text-slate-600 dark:text-slate-300">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Week groups */}
      {grammarWeeks.map((w) => {
        const theme = weekTheme(w.n);
        const wDays = grammarDays.filter((d) => d.week === w.n);
        const isOpen = open.has(w.n);
        return (
          <section key={w.n} id={`gw-${w.n}`} className="scroll-mt-[150px] md:scroll-mt-[100px] space-y-3">
            <button
              type="button"
              onClick={() => toggle(w.n)}
              aria-expanded={isOpen}
              className={`w-full card p-0 overflow-hidden text-left hover:shadow-md transition`}
            >
              <div className={`flex items-center gap-2 px-4 py-3 bg-gradient-to-br ${theme.headerGradient}`}>
                <span className={`text-xs font-bold uppercase tracking-wide ${theme.accent}`}>Week {w.n}</span>
                <span className="font-bold">{w.title}</span>
                <span className="text-sm text-slate-500 hidden sm:inline truncate">· {w.tagline}</span>
                <span className={`ml-auto shrink-0 text-lg ${theme.accent}`} aria-hidden>{isOpen ? '▾' : '▸'}</span>
              </div>
            </button>

            {isOpen && wDays.map((d) => (
              <section key={d.id} id={`g-${d.id}`} className="card p-0 overflow-hidden scroll-mt-[150px] md:scroll-mt-[100px]">
                <header className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-lg" aria-hidden>{d.emoji}</span>
                  <h3 className="font-bold text-sm">Day {d.id} · {d.title}</h3>
                  <Link to={`/day/${d.id}`} className={`ml-auto text-xs font-semibold ${theme.accent} hover:underline`}>Practise →</Link>
                </header>
                <ul className="space-y-3 px-4 py-3">
                  {d.grammar.map((g, i) => (
                    <GrammarItem key={`${g.rule}-${i}`} g={g} week={d.week} />
                  ))}
                </ul>
              </section>
            ))}
          </section>
        );
      })}

      <section className="card" aria-labelledby="conj">
        <h2 id="conj" className="font-bold mb-3">Conjugation cheat-sheet</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.entries(CONJ).map(([verb, rows]) => (
            <table key={verb} className="w-full text-sm">
              <caption className="font-semibold text-left pb-1">
                {verb}
                <span className="block text-xs italic text-slate-500 dark:text-slate-400 font-normal">[{pronounce(verb)}]</span>
              </caption>
              <tbody>
                {rows.map(([p, f]) => (
                  <tr key={p} className="border-t border-slate-200 dark:border-slate-800">
                    <td className="py-1 pr-2 text-slate-500">{p}</td>
                    <td className="py-1">
                      <span className="font-mono">{f}</span>
                      <span className="ml-2 text-xs italic text-slate-500 dark:text-slate-400">[{pronounce(f)}]</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </section>
    </div>
  );
}
