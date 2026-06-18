import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { vocabByTopic, allVocab } from '../data/vocabulary.js';
import { goetheA1, goetheA1Flat } from '../data/goetheA1.js';
import VocabCard from '../components/VocabCard.jsx';

const SCOPES = [
  { key: 'all',    label: 'All' },
  { key: 'course', label: 'Course · 50 days' },
  { key: 'goethe', label: `🧒 ${goetheA1.tag}` },
];

const TagChip = () => (
  <span className="shrink-0 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-100 dark:border-slate-700 px-2 py-0.5 text-[11px] font-semibold">
    🧒 {goetheA1.tag}
  </span>
);

export default function Vocabulary() {
  const [q, setQ] = useState('');
  const [scope, setScope] = useState('all');

  const totalCount = allVocab.length + goetheA1Flat.length;

  // Unified search across both collections, respecting the active scope.
  const results = useMemo(() => {
    if (!q.trim()) return null;
    const n = q.trim().toLowerCase();
    const hit = (v) => v.de.toLowerCase().includes(n) || v.en.toLowerCase().includes(n);
    const out = [];
    if (scope !== 'goethe') allVocab.filter(hit).forEach((v) => out.push({ v, kind: 'course' }));
    if (scope !== 'course') goetheA1Flat.filter(hit).forEach((v) => out.push({ v, kind: 'goethe' }));
    return out;
  }, [q, scope]);

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end gap-3 justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">Vocabulary</h1>
          <p className="text-slate-500">{totalCount} words and phrases — the 50-day course plus the Goethe A1 (Fit&nbsp;1) list.</p>
        </div>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search German or English…"
          className="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 w-full sm:w-72"
          aria-label="Search vocabulary"
        />
      </header>

      {/* Scope filter chips */}
      <div className="flex items-center gap-2 overflow-x-auto -mx-4 px-4">
        {SCOPES.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setScope(s.key)}
            aria-pressed={scope === s.key}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
              scope === s.key
                ? 'bg-brand-600 text-white'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:opacity-80'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {results ? (
        <section className="card">
          <h2 className="font-bold mb-3">{results.length} match{results.length === 1 ? '' : 'es'} for &ldquo;{q}&rdquo;</h2>
          {results.length === 0 ? (
            <p className="text-sm text-slate-500">No words found. Try a different spelling, or switch the filter above.</p>
          ) : (
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {results.map(({ v, kind }, i) => (
                <li key={`${v.de}-${i}`}>
                  <VocabCard
                    v={v}
                    layout={kind === 'goethe' ? 'compact' : v.layout}
                    badge={
                      kind === 'goethe'
                        ? <span className="text-[11px] text-brand-600 shrink-0" title={`${goetheA1.tag} · ${v.group}`}>🧒&nbsp;A1</span>
                        : <Link to={`/day/${v.day}`} className="text-xs text-brand-600 hover:underline shrink-0">D{v.day}</Link>
                    }
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : (
        <>
          {/* Course vocab — grouped by day */}
          {scope !== 'goethe' &&
            vocabByTopic.map((t) => (
              <section key={t.day} className="space-y-2" aria-labelledby={`v-${t.day}`}>
                <h2 id={`v-${t.day}`} className="font-bold flex items-center gap-2">
                  <span aria-hidden>{t.emoji}</span>
                  <span>Day {t.day} · {t.title}</span>
                  <Link to={`/day/${t.day}`} className="ml-auto text-xs text-brand-600 hover:underline">Open lesson →</Link>
                </h2>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {t.items.map((v, i) => (
                    <li key={`${v.de}-${i}`}><VocabCard v={v} layout={t.layout} /></li>
                  ))}
                </ul>
              </section>
            ))}

          {/* Goethe A1 (Fit 1) — tagged "Children & young people", grouped by theme */}
          {scope !== 'course' && (
            <section className="space-y-4" aria-labelledby="goethe-a1">
              <header className="card bg-gradient-to-br from-brand-50 to-white dark:from-slate-800 dark:to-slate-900">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 id="goethe-a1" className="text-lg font-extrabold">🧒 {goetheA1.tag}</h2>
                  <TagChip />
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  {goetheA1Flat.length} words from the official <strong>{goetheA1.source}</strong> word list (the youth A1 exam), grouped by theme.
                </p>
              </header>

              {goetheA1.groups.map((g) => (
                <section key={g.title} className="space-y-2" aria-labelledby={`g-${g.title}`}>
                  <h3 id={`g-${g.title}`} className="font-bold flex items-center gap-2">
                    <span aria-hidden>{g.emoji}</span>
                    <span>{g.title}</span>
                    {g.titleDe && <span className="text-sm text-slate-400 font-normal">· {g.titleDe}</span>}
                    <span className="ml-auto text-xs text-slate-400">{g.items.length}</span>
                  </h3>
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {g.items.map((v, i) => (
                      <li key={`${v.de}-${i}`}><VocabCard v={v} layout="compact" /></li>
                    ))}
                  </ul>
                </section>
              ))}
            </section>
          )}
        </>
      )}
    </div>
  );
}
