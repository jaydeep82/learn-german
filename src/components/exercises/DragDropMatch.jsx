import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';
import SrStatus from '../SrStatus.jsx';

const shuffle = (arr) => arr.map((v) => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(([, v]) => v);

/**
 * Match a German tile to its English meaning. Three input modes:
 * drag & drop (mouse/touch), two-tap, and full keyboard — every tile is a
 * real <button>, so Tab + Enter works and matches are announced politely.
 */
export default function DragDropMatch({ pairs, onDone }) {
  const [left, setLeft] = useState(() => shuffle(pairs.map((p, i) => ({ ...p, id: i }))));
  const [right, setRight] = useState(() => shuffle(pairs.map((p, i) => ({ ...p, id: i }))));
  const [matched, setMatched] = useState({}); // id -> true
  const [pickedLeft, setPickedLeft] = useState(null);
  const [wrong, setWrong] = useState(0);
  const [status, setStatus] = useState('');

  const total = pairs.length;
  const matchedCount = Object.keys(matched).length;
  const done = matchedCount === total;

  const finish = () => {
    const correct = total - wrong;
    onDone?.({ correct: Math.max(0, correct), total });
  };

  const tryMatch = (leftId, rightId) => {
    if (leftId === rightId) {
      setMatched((m) => ({ ...m, [leftId]: true }));
      const now = matchedCount + 1;
      setStatus(now === total ? `All ${total} matched — well done!` : `Correct! ${now} of ${total} matched.`);
    } else {
      setWrong((w) => w + 1);
      setStatus('Not a match — try again.');
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
      <p className="text-sm text-slate-500 mb-3">
        Match each German word to its English meaning. Drag, or select one then the other (works with the keyboard too).
      </p>
      <SrStatus>{status}</SrStatus>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2" role="group" aria-label="German words">
          {left.map((it) => {
            const isMatched = matched[it.id];
            const isPicked = pickedLeft === it.id;
            return (
              <div
                key={`L-${it.id}`}
                draggable={!isMatched}
                onDragStart={(e) => onDragStart(e, it.id)}
                className={`flex items-center gap-2 select-none px-2 py-1.5 rounded-xl border-2 cursor-grab transition
                  ${isMatched ? 'bg-emerald-50 border-emerald-400 opacity-70 line-through' :
                    isPicked  ? 'bg-brand-50 border-brand-500' :
                                'bg-white border-slate-200 hover:border-brand-300 dark:bg-slate-900 dark:border-slate-700'}`}
              >
                <button
                  type="button"
                  disabled={isMatched}
                  onClick={() => setPickedLeft(it.id)}
                  aria-pressed={isPicked}
                  aria-label={`Select German word ${it.de}`}
                  className="flex-1 text-left font-semibold px-2 py-1.5 rounded-lg"
                >
                  <span lang="de">{it.de}</span>
                </button>
                <AudioButton text={it.de} size="sm" />
              </div>
            );
          })}
        </div>
        <div className="space-y-2" role="group" aria-label="English meanings">
          {right.map((it) => {
            const isMatched = matched[it.id];
            return (
              <button
                type="button"
                key={`R-${it.id}`}
                disabled={isMatched}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => onDrop(e, it.id)}
                onClick={() => pickedLeft != null && tryMatch(pickedLeft, it.id)}
                aria-label={`Match with English meaning: ${it.en}`}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition
                  ${isMatched ? 'bg-emerald-50 border-emerald-400 opacity-70' :
                                'bg-white border-dashed border-slate-300 hover:border-brand-400 dark:bg-slate-900 dark:border-slate-700'}`}
              >
                {it.en}
              </button>
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
