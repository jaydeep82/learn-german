import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';

const norm = (s) => (s || '').trim().toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');

export default function ConjugationTable({ verb, en, rows, onDone }) {
  const [answers, setAnswers] = useState(rows.map(() => ''));
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (submitted) return;
    setSubmitted(true);
    const correct = answers.filter((a, i) => norm(a) === norm(rows[i].form)).length;
    setTimeout(() => onDone?.({ correct, total: rows.length }), 800);
  };

  return (
    <div className="space-y-4">
      <div className="card">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold flex-1">
            {verb} <span className="text-slate-500 font-medium">— {en}</span>
          </h3>
          <AudioButton text={verb} />
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-xs uppercase text-slate-500">
            <th className="py-2 pr-2">Pronoun</th>
            <th className="py-2">Form</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const ok = norm(answers[i]) === norm(r.form);
            return (
              <tr key={r.pronoun} className="border-t border-slate-200 dark:border-slate-800">
                <td className="py-2 pr-2 font-semibold whitespace-nowrap">{r.pronoun}</td>
                <td className="py-2">
                  {submitted ? (
                    <span className={`font-mono ${ok ? 'text-emerald-600' : 'text-rose-600 line-through'}`}>
                      {answers[i] || '—'}{!ok && <span className="ml-2 text-emerald-600 no-underline">→ {r.form}</span>}
                    </span>
                  ) : (
                    <input
                      value={answers[i]}
                      onChange={(e) => {
                        const next = answers.slice(); next[i] = e.target.value; setAnswers(next);
                      }}
                      className="w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5"
                      placeholder="…"
                      aria-label={`Form for ${r.pronoun}`}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {!submitted && <button className="btn-primary w-full" onClick={submit}>Check table</button>}
    </div>
  );
}
