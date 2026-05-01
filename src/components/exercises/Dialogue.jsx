import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';

export default function Dialogue({ lines, onDone }) {
  const [revealed, setRevealed] = useState(() => lines.map(() => false));

  const reveal = (i) => {
    const next = revealed.slice(); next[i] = true; setRevealed(next);
  };

  const allRevealed = revealed.every(Boolean);

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500">Tap each line to hear it. Reveal the English when you need it. Then take both roles aloud.</p>
      <ol className="space-y-2">
        {lines.map((l, i) => {
          const right = i % 2 === 1;
          return (
            <li key={i} className={`flex ${right ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 border-2 ${
                right
                  ? 'bg-brand-50 border-brand-200 dark:bg-brand-900/30 dark:border-brand-700'
                  : 'bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-700'
              }`}>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">{l.speaker}</div>
                <div className="flex items-start gap-2">
                  <p className="font-semibold text-lg flex-1">{l.de}</p>
                  <AudioButton text={l.de} size="sm" />
                </div>
                <button
                  type="button"
                  onClick={() => reveal(i)}
                  className="mt-1 text-sm text-brand-600 dark:text-brand-300 hover:underline"
                >
                  {revealed[i] ? l.en : 'Show English'}
                </button>
              </div>
            </li>
          );
        })}
      </ol>
      <button
        className="btn-primary w-full"
        onClick={() => onDone?.({ correct: 1, total: 1 })}
        disabled={!allRevealed}
        title={allRevealed ? 'Continue' : 'Reveal each line first'}
      >
        I&rsquo;ve got it →
      </button>
    </div>
  );
}
