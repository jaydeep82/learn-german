import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { vocabByTopic, allVocab } from '../data/vocabulary.js';
import { collections } from '../data/taggedVocab.js';
import VocabCard from '../components/VocabCard.jsx';

const courseCount = allVocab.length;
const taggedCount = collections.reduce((n, c) => n + c.flat.length, 0);

// Scope chips: All · Course · then one per tagged collection.
const SCOPES = [
  { key: 'all',    label: 'All' },
  { key: 'course', label: 'Course · 50 days' },
  ...collections.map((c) => ({ key: c.key, label: `${c.emoji} ${c.tag}` })),
];

export default function Vocabulary() {
  const [q, setQ] = useState('');
  const [scope, setScope] = useState('all');

  // Unified search across the course + every tagged collection, respecting scope.
  const results = useMemo(() => {
    if (!q.trim()) return null;
    const n = q.trim().toLowerCase();
    const hit = (v) => v.de.toLowerCase().includes(n) || v.en.toLowerCase().includes(n);
    const out = [];
    if (scope === 'all' || scope === 'course') allVocab.filter(hit).forEach((v) => out.push({ v, kind: 'course' }));
    collections.forEach((c) => {
      if (scope === 'all' || scope === c.key) c.flat.filter(hit).forEach((v) => out.push({ v, kind: c.key, c }));
    });
    return out;
  }, [q, scope]);

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end gap-3 justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">Vocabulary</h1>
          <p className="text-slate-500">{courseCount + taggedCount} words — the 50-day course plus the Goethe A1 word lists.</p>
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
              {results.map(({ v, kind, c }, i) => (
                <li key={`${v.de}-${i}`}>
                  <VocabCard
                    v={v}
                    layout={kind === 'course' ? v.layout : 'compact'}
                    badge={
                      kind === 'course'
                        ? <Link to={`/day/${v.day}`} className="text-xs text-brand-600 hover:underline shrink-0">D{v.day}</Link>
                        : <span className="text-[11px] text-brand-600 shrink-0" title={`${c.tag} · ${v.group}`}>{c.emoji}&nbsp;A1</span>
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
          {(scope === 'all' || scope === 'course') &&
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

          {/* Each tagged Goethe A1 collection — grouped by theme/letter */}
          {collections.map((c) =>
            (scope === 'all' || scope === c.key) ? (
              <section key={c.key} className="space-y-4" aria-labelledby={`coll-${c.key}`}>
                <header className="card bg-gradient-to-br from-brand-50 to-white dark:from-slate-800 dark:to-slate-900">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 id={`coll-${c.key}`} className="text-lg font-extrabold">{c.emoji} {c.tag}</h2>
                    <span className="shrink-0 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-100 dark:border-slate-700 px-2 py-0.5 text-[11px] font-semibold">
                      {c.emoji} {c.tag}
                    </span>
                    <Link to={`/practice/${c.key}`} className="ml-auto btn-primary text-sm py-1.5 px-3 shrink-0">
                      Practice these →
                    </Link>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    {c.flat.length} words from the official <strong>{c.source}</strong> word list, grouped by theme.
                  </p>
                </header>

                {c.groups.map((g) => (
                  <section key={g.title} className="space-y-2" aria-labelledby={`${c.key}-${g.title}`}>
                    <h3 id={`${c.key}-${g.title}`} className="font-bold flex items-center gap-2">
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
            ) : null
          )}
        </>
      )}
    </div>
  );
}
