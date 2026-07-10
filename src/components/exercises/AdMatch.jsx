import { useState } from 'react';
import SrStatus from '../SrStatus.jsx';

/**
 * Goethe A1 advert-matching — used in Lesen Teil 2 (read a person's situation,
 * then decide which of two small adverts / websites fits their need).
 *
 * Spec:
 *   { type:'ad-match', situation, explain?,
 *     options: [{ key:'a', title, body }, { key:'b', title, body }], answer }  // answer = winning key
 * Emits { correct, total:1 }.
 */
export default function AdMatch({ situation, options = [], answer, explain, onDone }) {
  const [picked, setPicked] = useState(null);
  const decided = picked != null;

  return (
    <div className="space-y-4">
      <SrStatus>{decided ? (picked === answer ? 'Correct!' : 'Not quite — the right advert is highlighted.') : ''}</SrStatus>
      <div className="card bg-brand-50 dark:bg-slate-800">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Situation</p>
        <p lang="de" className="leading-relaxed">{situation}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3" role="group" aria-label="Advert options">
        {options.map((opt) => {
          const isPicked = picked === opt.key;
          const isAnswer = opt.key === answer;
          const tone = !decided
            ? 'border-slate-200 dark:border-slate-700 hover:border-brand-400'
            : isAnswer ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/30'
            : isPicked ? 'border-rose-400 bg-rose-50 dark:bg-rose-900/30 animate-shake'
            : 'border-slate-200 dark:border-slate-700 opacity-60';
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => !decided && setPicked(opt.key)}
              aria-pressed={isPicked}
              className={`text-left rounded-2xl border-2 p-4 transition ${tone}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center uppercase">
                  {opt.key}
                </span>
                <span lang="de" className="font-bold">{opt.title}</span>
                {decided && isAnswer && <span className="ml-auto" aria-hidden>✅</span>}
                {decided && isPicked && !isAnswer && <span className="ml-auto" aria-hidden>❌</span>}
              </div>
              <p lang="de" className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">{opt.body}</p>
            </button>
          );
        })}
      </div>

      {decided && explain && (
        <div className="card bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700">
          <strong>Why:</strong> {explain}
        </div>
      )}
      {decided && (
        <button className="btn-primary w-full" onClick={() => onDone?.({ correct: picked === answer ? 1 : 0, total: 1 })}>
          Next →
        </button>
      )}
    </div>
  );
}
