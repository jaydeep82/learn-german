import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';

/**
 * Goethe A1 "richtig / falsch" task — used in Hören Teil 2 (announcements) and
 * Lesen Teil 1 & 3 (emails, signs). A shared stimulus (a text to read and/or an
 * audio clip to hear) followed by one or more statements marked true or false.
 *
 * Spec:
 *   { type:'richtig-falsch', title?, context?, audioText?,
 *     statements: [{ text, answer: true|false }] }
 *     - context   : visible reference text (reading tasks)
 *     - audioText  : spoken text played via the audio button (listening tasks)
 * Emits { correct, total } where total = statements.length.
 */
export default function RichtigFalsch({ title, context, audioText, statements = [], onDone }) {
  const [picks, setPicks] = useState(() => statements.map(() => null));
  const [checked, setChecked] = useState(false);
  const allAnswered = picks.every((p) => p !== null);

  const set = (i, val) => {
    if (checked) return;
    setPicks((p) => p.map((x, j) => (j === i ? val : x)));
  };

  const score = statements.reduce((n, s, i) => n + (picks[i] === s.answer ? 1 : 0), 0);
  const finish = () => onDone?.({ correct: score, total: statements.length });

  return (
    <div className="space-y-4">
      {title && <h3 className="text-lg font-bold">{title}</h3>}

      {audioText && (
        <div className="card flex items-center gap-3 bg-brand-50 dark:bg-slate-800">
          <AudioButton text={audioText} size="lg" label="Play the recording" />
          <span className="text-sm text-slate-500">Listen — you can replay it.</span>
        </div>
      )}

      {context && (
        <div className="card">
          <div className="flex items-start gap-3">
            <p className="flex-1 whitespace-pre-line leading-relaxed">{context}</p>
            <AudioButton text={context} />
          </div>
        </div>
      )}

      <ul className="space-y-2" role="group" aria-label="Statements">
        {statements.map((s, i) => {
          const right = s.answer;
          const mine = picks[i];
          return (
            <li key={i} className={`card ${checked ? (mine === right
              ? 'bg-emerald-50 border-emerald-300 dark:bg-emerald-900/30 dark:border-emerald-700'
              : 'bg-rose-50 border-rose-300 dark:bg-rose-900/30 dark:border-rose-700') : ''}`}>
              <div className="flex items-center gap-3">
                <p className="flex-1">{s.text}</p>
                <div className="flex gap-1 shrink-0">
                  {[{ v: true, l: 'Richtig' }, { v: false, l: 'Falsch' }].map(({ v, l }) => {
                    const active = mine === v;
                    const isRight = checked && right === v;
                    return (
                      <button
                        key={l}
                        type="button"
                        onClick={() => set(i, v)}
                        aria-pressed={active}
                        disabled={checked}
                        className={`px-3 py-1.5 rounded-lg text-sm font-semibold border-2 transition
                          ${isRight ? 'border-emerald-500 bg-emerald-500 text-white'
                            : active ? 'border-brand-500 bg-brand-500 text-white'
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-brand-300'}`}
                      >
                        {l}
                      </button>
                    );
                  })}
                </div>
              </div>
              {checked && mine !== right && (
                <p className="mt-2 text-xs text-slate-500">Correct answer: <strong>{right ? 'Richtig' : 'Falsch'}</strong></p>
              )}
            </li>
          );
        })}
      </ul>

      {!checked ? (
        <button className="btn-primary w-full" disabled={!allAnswered} onClick={() => setChecked(true)}>
          Check {statements.length > 1 ? 'answers' : 'answer'}
        </button>
      ) : (
        <>
          <div className="text-center text-sm text-slate-500">{score} / {statements.length} correct</div>
          <button className="btn-primary w-full" onClick={finish}>Next →</button>
        </>
      )}
    </div>
  );
}
