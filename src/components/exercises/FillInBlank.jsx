import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';

const norm = (s) =>
  (s || '')
    .trim()
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[.,!?]/g, '')
    .replace(/\s+/g, ' ');

export default function FillInBlank({ sentence, answer, hint, onDone }) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const correct = norm(input) === norm(answer);

  const submit = (e) => {
    e?.preventDefault();
    if (submitted || !input.trim()) return;
    setSubmitted(true);
  };
  const next = () => onDone?.({ correct: correct ? 1 : 0, total: 1 });

  // visualise the blank with the user's input or a slot
  const display = sentence.replace('__', submitted ? answer : (input || '_____'));

  return (
    <form className="space-y-4" onSubmit={submit}>
      <div className="card">
        <div className="flex items-start gap-3">
          <p className="text-2xl font-semibold leading-relaxed flex-1">{display}</p>
          <AudioButton text={display.replace(/_/g, '')} />
        </div>
        {hint && <p className="mt-2 text-sm text-slate-500 italic">Hint: {hint}</p>}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={submitted}
          aria-label="Your answer"
          placeholder="Type your answer…"
          className="flex-1 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900
                     px-4 py-3 text-lg focus:border-brand-500"
        />
        <button type="submit" className="btn-primary" disabled={submitted || !input.trim()}>Check</button>
      </div>
      {submitted && (
        <>
          <div className={`card ${correct ? 'bg-emerald-50 border-emerald-300 dark:bg-emerald-900/30 dark:border-emerald-700'
                                         : 'bg-rose-50 border-rose-300 dark:bg-rose-900/30 dark:border-rose-700 animate-shake'}`}>
            {correct
              ? <span>✅ <strong>Genau!</strong></span>
              : <span>❌ <strong>Almost!</strong> The correct answer was <em>{answer}</em>.</span>}
          </div>
          <button type="button" className="btn-primary w-full" onClick={next}>Next →</button>
        </>
      )}
    </form>
  );
}
