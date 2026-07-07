import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';

/**
 * Goethe A1 picture multiple-choice — used in Hören Teil 1 (listen to a short
 * dialogue, choose the matching picture). Pictures are emoji tiles (matching the
 * app's style) or images via `img`.
 *
 * Spec:
 *   { type:'picture-mcq', q, audioText?, explain?,
 *     options: [{ value, emoji?, img?, label }], answer }  // answer = winning value
 * Emits { correct, total:1 }.
 */
export default function PictureMCQ({ q, audioText, options = [], answer, explain, onDone }) {
  const [picked, setPicked] = useState(null);
  const decided = picked != null;

  return (
    <div className="space-y-4">
      <div className="card">
        <div className="flex items-start gap-3">
          <h3 className="text-lg font-semibold flex-1">{q}</h3>
          {audioText && <AudioButton text={audioText} size="lg" label="Play the recording" />}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" role="group" aria-label="Picture options">
        {options.map((opt) => {
          const isPicked = picked === opt.value;
          const isAnswer = opt.value === answer;
          const tone = !decided
            ? 'border-slate-200 dark:border-slate-700 hover:border-brand-400'
            : isAnswer ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/30'
            : isPicked ? 'border-rose-400 bg-rose-50 dark:bg-rose-900/30 animate-shake'
            : 'border-slate-200 dark:border-slate-700 opacity-60';
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => !decided && setPicked(opt.value)}
              aria-pressed={isPicked}
              className={`rounded-2xl border-2 p-3 flex flex-col items-center gap-1.5 transition ${tone}`}
            >
              <span className="h-20 flex items-center justify-center">
                {opt.img
                  ? <img src={opt.img} alt={opt.label} className="max-h-20 max-w-full rounded-lg" />
                  : <span className="text-5xl" aria-hidden>{opt.emoji}</span>}
              </span>
              <span className="text-sm font-medium text-center">{opt.label}</span>
              {decided && isAnswer && <span aria-hidden>✅</span>}
              {decided && isPicked && !isAnswer && <span aria-hidden>❌</span>}
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
