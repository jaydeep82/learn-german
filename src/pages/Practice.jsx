import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { allVocab, vocabByTopic } from '../data/vocabulary.js';
import { collections } from '../data/taggedVocab.js';
import ExerciseRunner from '../components/exercises/ExerciseRunner.jsx';

/**
 * Practice mode — turn any vocabulary set (the 50-day course or a tagged
 * Goethe A1 collection) into a flashcard drill or a multiple-choice quiz.
 *
 * It reuses ExerciseRunner (XP / streak / scoring) by generating exercise
 * specs on the fly from the chosen word set — nothing new in the data layer.
 */

// Practice sources: the course vocab + every tagged collection.
const SOURCES = [
  {
    key: 'course', emoji: '📚', tag: 'Course · 50 days', flat: allVocab,
    groups: vocabByTopic.map((t) => ({ title: `Day ${t.day} · ${t.title}`, items: t.items })),
  },
  ...collections.map((c) => ({ key: c.key, emoji: c.emoji, tag: c.tag, flat: c.flat, groups: c.groups })),
];

const LENGTHS = [10, 20, 0]; // 0 = all

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// One multiple-choice spec per test item: German prompt, 4 English options.
function buildQuiz(testItems, distractorPool, count) {
  const pool = shuffle(testItems).slice(0, count || testItems.length);
  const allEn = [...new Set(distractorPool.map((x) => x.en))];
  return pool.map((it) => {
    const distractors = shuffle(allEn.filter((e) => e !== it.en)).slice(0, 3);
    return {
      type: 'multiple-choice',
      q: it.de,
      options: shuffle([it.en, ...distractors]),
      answer: it.en,
      explain: it.example || undefined,
    };
  });
}

export default function Practice() {
  const { preset } = useParams();
  const initial = SOURCES.some((s) => s.key === preset) ? preset : 'adults';

  const [sourceKey, setSourceKey] = useState(initial);
  const [groupIdx, setGroupIdx] = useState(-1); // -1 = all words
  const [mode, setMode] = useState('flashcards'); // 'flashcards' | 'quiz'
  const [length, setLength] = useState(10);
  const [stage, setStage] = useState('setup'); // 'setup' | 'run' | 'done'
  const [exercises, setExercises] = useState(null);
  const [result, setResult] = useState(null);

  const source = useMemo(() => SOURCES.find((s) => s.key === sourceKey) || SOURCES[0], [sourceKey]);
  const groupItems = groupIdx < 0 ? source.flat : (source.groups[groupIdx]?.items || source.flat);
  const available = groupItems.length;
  const willUse = length === 0 ? available : Math.min(length, available);

  const start = () => {
    const items = shuffle(groupItems);
    if (mode === 'quiz') {
      setExercises(buildQuiz(items, source.flat, willUse));
    } else {
      // one flashcard deck; surface the example on the flipped side via `hint`
      const deck = items.slice(0, willUse).map((it) => ({ ...it, hint: it.example }));
      setExercises([{ type: 'flashcards', items: deck }]);
    }
    setResult(null);
    setStage('run');
  };

  const reset = () => { setStage('setup'); setExercises(null); setResult(null); };

  if (stage === 'done') {
    const pct = Math.round(((result?.ratio) ?? 0) * 100);
    const label = mode === 'quiz' ? 'correct' : 'knew';
    return (
      <div className="card text-center">
        <div className="text-5xl mb-2" aria-hidden>{pct >= 80 ? '🏆' : pct >= 50 ? '👏' : '🌱'}</div>
        <h1 className="text-2xl font-extrabold">Practice complete!</h1>
        <div className="text-5xl font-bold mt-4 tabular-nums">{pct}%</div>
        <p className="text-slate-500 mt-1">{result.correct} / {result.total} {label}</p>
        <div className="flex flex-wrap gap-2 justify-center mt-5">
          <button className="btn-primary" onClick={start}>Practice again</button>
          <button className="btn-secondary" onClick={reset}>Change set</button>
          <Link to="/vocabulary" className="btn-secondary">Vocabulary</Link>
        </div>
      </div>
    );
  }

  if (stage === 'run') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <button className="text-sm text-slate-500 hover:underline" onClick={reset}>← Change set</button>
          <span className="text-sm text-slate-400">
            {source.emoji} {source.tag} · {mode === 'quiz' ? 'German → English' : 'Flashcards'}
          </span>
        </div>
        <ExerciseRunner
          exercises={exercises}
          vocabulary={[]}
          dayId={`practice-${sourceKey}`}
          onFinish={(r) => { setResult(r); setStage('done'); }}
        />
      </div>
    );
  }

  // ── setup ──────────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Practice</h1>
        <p className="text-slate-500">Drill any word set with flashcards or a quick quiz. Earns XP and keeps your streak alive.</p>
      </header>

      {/* 1 · word set */}
      <section className="space-y-2">
        <h2 className="font-bold text-sm uppercase tracking-wide text-slate-500">1 · Word set</h2>
        <div className="flex flex-wrap gap-2">
          {SOURCES.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => { setSourceKey(s.key); setGroupIdx(-1); }}
              aria-pressed={sourceKey === s.key}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition ${
                sourceKey === s.key ? 'bg-brand-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:opacity-80'
              }`}
            >
              {s.emoji} {s.tag} <span className="opacity-70">· {s.flat.length}</span>
            </button>
          ))}
        </div>
        <select
          value={groupIdx}
          onChange={(e) => setGroupIdx(Number(e.target.value))}
          className="mt-1 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 w-full sm:w-96"
          aria-label="Topic group"
        >
          <option value={-1}>All words ({source.flat.length})</option>
          {source.groups.map((g, i) => (
            <option key={g.title} value={i}>{g.title} ({g.items.length})</option>
          ))}
        </select>
      </section>

      {/* 2 · mode */}
      <section className="space-y-2">
        <h2 className="font-bold text-sm uppercase tracking-wide text-slate-500">2 · Mode</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { key: 'flashcards', emoji: '🃏', title: 'Flashcards', sub: 'Flip & self-rate' },
            { key: 'quiz', emoji: '✅', title: 'Quiz', sub: 'German → English' },
          ].map((m) => (
            <button
              key={m.key}
              type="button"
              onClick={() => setMode(m.key)}
              aria-pressed={mode === m.key}
              className={`card text-left transition ${mode === m.key ? 'ring-2 ring-brand-500' : 'hover:shadow-md'}`}
            >
              <div className="text-2xl" aria-hidden>{m.emoji}</div>
              <div className="font-bold mt-1">{m.title}</div>
              <div className="text-xs text-slate-500">{m.sub}</div>
            </button>
          ))}
        </div>
      </section>

      {/* 3 · length */}
      <section className="space-y-2">
        <h2 className="font-bold text-sm uppercase tracking-wide text-slate-500">3 · How many</h2>
        <div className="flex flex-wrap gap-2">
          {LENGTHS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setLength(n)}
              aria-pressed={length === n}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${
                length === n ? 'bg-brand-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:opacity-80'
              }`}
            >
              {n === 0 ? `All (${available})` : n}
            </button>
          ))}
        </div>
      </section>

      <button
        className="btn-primary w-full text-lg py-4 disabled:opacity-50"
        onClick={start}
        disabled={available === 0}
      >
        Start {mode === 'quiz' ? 'quiz' : 'flashcards'} — {willUse} word{willUse === 1 ? '' : 's'} →
      </button>
    </div>
  );
}
