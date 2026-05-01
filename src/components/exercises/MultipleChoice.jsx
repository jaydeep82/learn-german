import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';

export default function MultipleChoice({ q, options, answer, explain, onDone }) {
  const [picked, setPicked] = useState(null);
  const decided = picked != null;

  const choose = (opt) => {
    if (decided) return;
    setPicked(opt);
  };

  const next = () => {
    onDone?.({ correct: picked === answer ? 1 : 0, total: 1 });
  };

  return (
    <div className="space-y-4">
      <div className="card">
        <div className="flex items-start gap-3">
          <h3 className="text-xl font-semibold flex-1">{q}</h3>
          {/^[A-Za-zäöüÄÖÜß ?!.,]+$/.test(q) && <AudioButton text={q.replace(/[?_]/g,'').trim()} />}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => {
          const isPicked = picked === opt;
          const isAnswer = opt === answer;
          const tone =
            !decided
              ? 'bg-white hover:bg-brand-50 border-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800'
              : isAnswer
                ? 'bg-emerald-50 border-emerald-400 dark:bg-emerald-900/40 dark:border-emerald-700'
                : isPicked
                  ? 'bg-rose-50 border-rose-400 dark:bg-rose-900/40 dark:border-rose-700 animate-shake'
                  : 'bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-700 opacity-70';
          return (
            <button
              key={opt}
              onClick={() => choose(opt)}
              className={`text-left rounded-xl border-2 px-4 py-3 transition font-medium ${tone}`}
              aria-pressed={isPicked}
            >
              <span className="flex items-center gap-2">
                <span className="flex-1">{opt}</span>
                {decided && isAnswer && <span aria-hidden>✅</span>}
                {decided && isPicked && !isAnswer && <span aria-hidden>❌</span>}
              </span>
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
        <button className="btn-primary w-full" onClick={next}>Next →</button>
      )}
    </div>
  );
}
