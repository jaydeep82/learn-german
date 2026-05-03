import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';
import Pron from '../Pron.jsx';

/**
 * "Say it back" oral grammar review (PPT slides 266-267).
 *
 * Shape:
 *   {
 *     type: 'oral-prompt',
 *     prompts: [
 *       { q: 'English question', answer: 'Model answer', example?: 'German example' }
 *     ]
 *   }
 *
 * For each prompt the learner reads the question, says the answer aloud,
 * then taps to reveal. Self-grades with "Need more practice" / "Got it".
 */
export default function OralPrompt({ prompts, onDone }) {
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [known, setKnown] = useState(0);

  const item = prompts[i];
  const isLast = i === prompts.length - 1;

  const next = (gotIt) => {
    const newKnown = gotIt ? known + 1 : known;
    if (gotIt) setKnown(newKnown);
    if (isLast) {
      onDone?.({ correct: newKnown, total: prompts.length });
      return;
    }
    setI((x) => x + 1);
    setRevealed(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-xs text-slate-500">
        <span>Prompt {i + 1} / {prompts.length}</span>
        <span aria-hidden>·</span>
        <span>{known} got it</span>
      </div>

      <div className="card min-h-[200px] flex flex-col justify-center text-center">
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">Read aloud · then say your answer</div>
        <p className="text-xl sm:text-2xl font-bold leading-snug">{item.q}</p>
      </div>

      {!revealed ? (
        <button className="btn-primary w-full text-lg py-4" onClick={() => setRevealed(true)}>
          🎙️ Reveal the answer
        </button>
      ) : (
        <div className="space-y-3">
          <div className="card bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-700">
            <div className="text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-300 mb-1">Model answer</div>
            <p className="text-lg font-semibold whitespace-pre-line">{item.answer}</p>
            {item.example && (
              <div className="mt-3 rounded-lg border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-slate-900 px-3 py-2">
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">Example</div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold flex-1">{item.example}</span>
                  <AudioButton text={item.example} size="sm" />
                </div>
                <Pron de={item.example} />
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="btn-secondary" onClick={() => next(false)}>Need more practice</button>
            <button className="btn-primary"   onClick={() => next(true)}>Got it ✓</button>
          </div>
        </div>
      )}
    </div>
  );
}
