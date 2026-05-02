import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';
import Pron from '../Pron.jsx';

const norm = (s) => (s || '').trim().toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');

export default function ConjugationTable({ verb, en, rows, onDone }) {
  const [answers, setAnswers] = useState(rows.map(() => ''));
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (submitted) return;
    setSubmitted(true);
  };

  const finish = () => {
    const correct = answers.filter((a, i) => norm(a) === norm(rows[i].form)).length;
    onDone?.({ correct, total: rows.length });
  };

  return (
    <div className="space-y-4">
      <div className="card">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-bold">
              {verb} <span className="text-slate-500 font-medium">— {en}</span>
            </h3>
            <Pron de={verb} size="md" />
          </div>
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
              <tr key={r.pronoun} className="border-t border-slate-200 dark:border-slate-800 align-top">
                <td className="py-3 pr-2 whitespace-nowrap">
                  <div className="font-semibold">{r.pronoun}</div>
                  {r.english && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-0.5">
                      = {r.english}
                    </div>
                  )}
                </td>
                <td className="py-3">
                  {submitted ? (
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className={`font-mono ${ok ? 'text-emerald-600' : 'text-rose-600 line-through'}`}>
                          {answers[i] || '—'}{!ok && <span className="ml-2 text-emerald-600 no-underline">→ {r.form}</span>}
                        </span>
                        <Pron de={r.form} />
                      </div>
                      {r.example && (
                        <div className="mt-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="font-semibold flex-1">{r.example.de}</span>
                            <AudioButton text={r.example.de} size="sm" />
                          </div>
                          <Pron de={r.example.de} />
                          <div className="text-slate-600 dark:text-slate-300 mt-1">{r.example.en}</div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <input
                      value={answers[i]}
                      onChange={(e) => {
                        const next = answers.slice(); next[i] = e.target.value; setAnswers(next);
                      }}
                      className="w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5"
                      placeholder="…"
                      aria-label={`Form for ${r.pronoun} (${r.english || ''})`}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {!submitted
        ? <button className="btn-primary w-full" onClick={submit}>Check table</button>
        : <button className="btn-primary w-full" onClick={finish}>Next →</button>}
    </div>
  );
}
