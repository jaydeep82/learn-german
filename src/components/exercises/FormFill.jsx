import { useState } from 'react';

/**
 * Goethe A1 form-fill — used in Schreiben Teil 1 (complete an application /
 * registration form with the right details drawn from a short prompt).
 *
 * Spec:
 *   { type:'form-fill', title?, context?,
 *     fields: [{ label, name, answer, placeholder?, hint? }] }
 *     - answer: the expected value, or an array of acceptable values.
 * Emits { correct, total: fields.length }.
 */

// Compare tolerantly: keep the German ä→ae convention, then fold any remaining
// accents (so "Gómez" matches "Gomez"), ignore case, punctuation and spacing.
const norm = (s) =>
  (s || '').trim().toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .replace(/[.,!?]/g, '').replace(/\s+/g, ' ');

const accepts = (answer, value) =>
  (Array.isArray(answer) ? answer : [answer]).some((a) => norm(a) === norm(value));

export default function FormFill({ title, context, fields = [], onDone }) {
  const [values, setValues] = useState(() => Object.fromEntries(fields.map((f) => [f.name, ''])));
  const [checked, setChecked] = useState(false);
  const allFilled = fields.every((f) => values[f.name]?.trim());

  const score = fields.reduce((n, f) => n + (accepts(f.answer, values[f.name]) ? 1 : 0), 0);
  const finish = () => onDone?.({ correct: score, total: fields.length });

  const submit = (e) => {
    e?.preventDefault();
    if (!checked && allFilled) setChecked(true);
  };

  return (
    <form className="space-y-4" onSubmit={submit}>
      {title && <h3 className="text-lg font-bold">{title}</h3>}
      {context && (
        <div className="card bg-brand-50 dark:bg-slate-800">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Information</p>
          <p className="whitespace-pre-line leading-relaxed">{context}</p>
        </div>
      )}

      <div className="card divide-y divide-slate-100 dark:divide-slate-800">
        {fields.map((f) => {
          const ok = checked && accepts(f.answer, values[f.name]);
          const bad = checked && !ok;
          return (
            <div key={f.name} className="py-3 first:pt-0 last:pb-0 grid sm:grid-cols-[9rem,1fr] gap-1 sm:gap-3 sm:items-center">
              <label htmlFor={`ff-${f.name}`} className="text-sm font-semibold text-slate-600 dark:text-slate-300">{f.label}</label>
              <div>
                <input
                  id={`ff-${f.name}`}
                  value={values[f.name]}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  disabled={checked}
                  placeholder={f.placeholder || ''}
                  aria-label={f.label}
                  className={`w-full rounded-lg border-2 px-3 py-2 bg-white dark:bg-slate-900 focus:border-brand-500
                    ${ok ? 'border-emerald-400' : bad ? 'border-rose-400' : 'border-slate-200 dark:border-slate-700'}`}
                />
                {f.hint && !checked && <p className="mt-1 text-xs text-slate-400">{f.hint}</p>}
                {bad && <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">Expected: <strong>{Array.isArray(f.answer) ? f.answer[0] : f.answer}</strong></p>}
                {ok && <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">✓ Correct</p>}
              </div>
            </div>
          );
        })}
      </div>

      {!checked ? (
        <button type="submit" className="btn-primary w-full" disabled={!allFilled}>Check form</button>
      ) : (
        <>
          <div className="text-center text-sm text-slate-500">{score} / {fields.length} fields correct</div>
          <button type="button" className="btn-primary w-full" onClick={finish}>Next →</button>
        </>
      )}
    </form>
  );
}
