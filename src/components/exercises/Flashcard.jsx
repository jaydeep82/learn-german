import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';

export default function Flashcard({ items, onDone }) {
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const item = items[i];
  const isLast = i === items.length - 1;

  const next = (gotIt) => {
    if (gotIt) setKnown((k) => k + 1);
    if (isLast) return onDone?.({ correct: gotIt ? known + 1 : known, total: items.length });
    setI((x) => x + 1);
    setFlipped(false);
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-slate-500">Card {i + 1} / {items.length}</div>
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="w-full min-h-[200px] sm:min-h-[260px] card flex flex-col items-center justify-center gap-3 text-center hover:shadow-md transition"
        aria-label="Flip card"
      >
        <div className="text-3xl sm:text-5xl font-bold tracking-tight">{flipped ? item.en : item.de}</div>
        {item.hint && flipped && (
          <div className="text-sm text-slate-500 italic">{item.hint}</div>
        )}
        <div className="text-xs text-slate-400">Click to flip</div>
      </button>
      <div className="flex items-center justify-center gap-2">
        <AudioButton text={item.de} size="lg" />
        <button className="btn-secondary" onClick={() => setFlipped((f) => !f)}>Flip</button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="btn-secondary" onClick={() => next(false)}>Still learning</button>
        <button className="btn-primary"   onClick={() => next(true)}>I knew it ✓</button>
      </div>
    </div>
  );
}
