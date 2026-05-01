import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';

const shuffle = (arr) => arr.map((v) => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(([, v]) => v);

/**
 * Drag a German tile onto its English match — works on touch and mouse.
 * Falls back to two-tap behaviour when drag isn't available.
 */
export default function DragDropMatch({ pairs, onDone }) {
  const [left, setLeft] = useState(() => shuffle(pairs.map((p, i) => ({ ...p, id: i }))));
  const [right, setRight] = useState(() => shuffle(pairs.map((p, i) => ({ ...p, id: i }))));
  const [matched, setMatched] = useState({}); // id -> true
  const [pickedLeft, setPickedLeft] = useState(null);
  const [wrong, setWrong] = useState(0);

  const total = pairs.length;
  const done = Object.keys(matched).length === total;

  const finish = () => {
    const correct = total - wrong;
    onDone?.({ correct: Math.max(0, correct), total });
  };

  const tryMatch = (leftId, rightId) => {
    if (leftId === rightId) {
      setMatched((m) => ({ ...m, [leftId]: true }));
    } else {
      setWrong((w) => w + 1);
    }
    setPickedLeft(null);
  };

  const onDragStart = (e, id) => e.dataTransfer.setData('text/plain', String(id));
  const onDrop = (e, id) => {
    e.preventDefault();
    const dragged = Number(e.dataTransfer.getData('text/plain'));
    tryMatch(dragged, id);
  };

  return (
    <div>
      <p className="text-sm text-slate-500 mb-3">Match each German word to its English meaning. Drag, or tap one then the other.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2" aria-label="German words">
          {left.map((it) => {
            const isMatched = matched[it.id];
            const isPicked = pickedLeft === it.id;
            return (
              <div
                key={`L-${it.id}`}
                draggable={!isMatched}
                onDragStart={(e) => onDragStart(e, it.id)}
                onClick={() => !isMatched && setPickedLeft(it.id)}
                className={`flex items-center gap-2 select-none px-4 py-3 rounded-xl border-2 cursor-grab transition
                  ${isMatched ? 'bg-emerald-50 border-emerald-400 opacity-70 line-through' :
                    isPicked  ? 'bg-brand-50 border-brand-500' :
                                'bg-white border-slate-200 hover:border-brand-300 dark:bg-slate-900 dark:border-slate-700'}`}
              >
                <span className="flex-1 font-semibold">{it.de}</span>
                <AudioButton text={it.de} size="sm" />
              </div>
            );
          })}
        </div>
        <div className="space-y-2" aria-label="English meanings">
          {right.map((it) => {
            const isMatched = matched[it.id];
            return (
              <div
                key={`R-${it.id}`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => onDrop(e, it.id)}
                onClick={() => pickedLeft != null && !isMatched && tryMatch(pickedLeft, it.id)}
                className={`px-4 py-3 rounded-xl border-2 transition
                  ${isMatched ? 'bg-emerald-50 border-emerald-400 opacity-70' :
                                'bg-white border-dashed border-slate-300 hover:border-brand-400 dark:bg-slate-900 dark:border-slate-700'}`}
              >
                {it.en}
              </div>
            );
          })}
        </div>
      </div>
      {done && (
        <button className="btn-primary w-full mt-4" onClick={finish}>
          ✅ All matched — Next →
        </button>
      )}
    </div>
  );
}
