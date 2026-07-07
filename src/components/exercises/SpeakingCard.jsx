import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';

/**
 * Goethe A1 speaking practice — used across Sprechen (introduce yourself; ask &
 * answer with a keyword card; make & respond to requests). The exam is spoken in
 * a group and can't be auto-graded, so each card scaffolds one turn: a prompt to
 * speak, an on-demand model answer with audio, and an honest self-rating.
 *
 * Spec:
 *   { type:'speaking-card', instruction?, cards: [{ keyword, prompt?, model? }] }
 * Emits { correct, total: cards.length } where correct = cards self-rated "could say it".
 */
export default function SpeakingCard({ instruction, cards = [], onDone }) {
  const [i, setI] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const [got, setGot] = useState(0);
  const card = cards[i];
  const isLast = i === cards.length - 1;

  const rate = (couldSay) => {
    const nextGot = got + (couldSay ? 1 : 0);
    if (isLast) return onDone?.({ correct: nextGot, total: cards.length });
    setGot(nextGot);
    setShowModel(false);
    setI((x) => x + 1);
  };

  return (
    <div className="space-y-4">
      {instruction && <p className="text-sm text-slate-500">{instruction}</p>}
      <div className="text-xs text-slate-400">Card {i + 1} / {cards.length}</div>

      <div className="card min-h-[160px] flex flex-col items-center justify-center gap-2 text-center
                      bg-gradient-to-br from-brand-50 to-white dark:from-slate-800 dark:to-slate-900">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">Sprechen</span>
        <span className="text-3xl sm:text-4xl font-extrabold">{card.keyword}</span>
        {card.prompt && <p className="text-slate-500 max-w-sm">{card.prompt}</p>}
      </div>

      <p className="text-center text-sm text-slate-500">🗣️ Say it aloud, then check the model answer.</p>

      {!showModel ? (
        <button className="btn-secondary w-full" onClick={() => setShowModel(true)}>Show model answer</button>
      ) : (
        <div className="card bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-700">
          <div className="flex items-start gap-3">
            <p className="flex-1 font-medium">{card.model}</p>
            {card.model && <AudioButton text={card.model} />}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2">
        <button className="btn-secondary" onClick={() => rate(false)}>Need practice</button>
        <button className="btn-primary" onClick={() => rate(true)}>I could say it ✓</button>
      </div>
    </div>
  );
}
