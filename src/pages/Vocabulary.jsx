import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { vocabByTopic, allVocab } from '../data/vocabulary.js';
import AudioButton from '../components/AudioButton.jsx';
import Pron from '../components/Pron.jsx';

export default function Vocabulary() {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    if (!q.trim()) return null;
    const needle = q.trim().toLowerCase();
    return allVocab.filter(
      (v) => v.de.toLowerCase().includes(needle) || v.en.toLowerCase().includes(needle)
    );
  }, [q]);

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end gap-3 justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">Vocabulary</h1>
          <p className="text-slate-500">{allVocab.length} words and phrases, grouped by topic.</p>
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

      {filtered ? (
        <section className="card">
          <h2 className="font-bold mb-3">{filtered.length} match{filtered.length === 1 ? '' : 'es'} for &ldquo;{q}&rdquo;</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {filtered.map((v, i) => (
              <li key={`${v.de}-${i}`} className="flex items-center gap-3 p-2 border border-slate-200 dark:border-slate-800 rounded-lg">
                <AudioButton text={v.de} size="sm" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">{v.de}</div>
                  <Pron de={v.de} />
                  <div className="text-sm text-slate-500 truncate">{v.en}</div>
                </div>
                <Link to={`/day/${v.day}`} className="text-xs text-brand-600 hover:underline">D{v.day}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        vocabByTopic.map((t) => (
          <section key={t.day} className="space-y-2" aria-labelledby={`v-${t.day}`}>
            <h2 id={`v-${t.day}`} className="font-bold flex items-center gap-2">
              <span aria-hidden>{t.emoji}</span>
              <span>Day {t.day} · {t.title}</span>
              <Link to={`/day/${t.day}`} className="ml-auto text-xs text-brand-600 hover:underline">Open lesson →</Link>
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {t.items.map((v) => (
                <li key={v.de} className="flex items-center gap-3 p-2 border border-slate-200 dark:border-slate-800 rounded-lg">
                  <AudioButton text={v.de} size="sm" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{v.de}</div>
                    <div className="text-sm text-slate-500 truncate">{v.en}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
