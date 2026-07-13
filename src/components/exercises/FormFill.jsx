import { useState } from 'react';
import SrStatus from '../SrStatus.jsx';

/**
 * Goethe A1 form-fill — used in Schreiben Teil 1 (complete an application /
 * registration form with details drawn from a short text about a friend).
 *
 * Mirrors the real exam sheet: some rows are PRE-FILLED (the printed example,
 * marked "0"), the numbered gaps are scored, and a gap can be a text field or
 * a CHOICE (tick the right box — e.g. Kurszeit von 9–12 / 13–16 / 17–20 Uhr),
 * which often requires inference ("Er hat am Vormittag Zeit" → 9–12).
 *
 * Field spec:
 *   { label, name, answer, placeholder?, hint? }                 → text gap
 *   { label, name, type:'choice', options:[...], answer }        → tick one
 *   { label, name, prefilled: 'value' }                          → shown, not scored
 * `answer` may be a string or an array of acceptable values.
 * Emits { correct, total } over the scored (non-prefilled) fields.
 */

// Compare tolerantly: keep the German ä→ae convention, then fold any remaining
// accents (so "Gómez" matches "Gomez"), ignore case, punctuation and spacing.
// Exported for unit tests.
export const norm = (s) =>
  (s || '').trim().toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .replace(/[.,!?]/g, '').replace(/\s+/g, ' ');

export const accepts = (answer, value) =>
  (Array.isArray(answer) ? answer : [answer]).some((a) => norm(a) === norm(value));

export default function FormFill({ title, context, fields = [], onDone }) {
  const scored = fields.filter((f) => f.prefilled == null);
  const [values, setValues] = useState(() => Object.fromEntries(scored.map((f) => [f.name, ''])));
  const [checked, setChecked] = useState(false);
  const allFilled = scored.every((f) => values[f.name]?.trim());

  const score = scored.reduce((n, f) => n + (accepts(f.answer, values[f.name]) ? 1 : 0), 0);
  const finish = () => onDone?.({ correct: score, total: scored.length });

  const submit = (e) => {
    e?.preventDefault();
    if (!checked && allFilled) setChecked(true);
  };

  return (
    <form className="space-y-4" onSubmit={submit}>
      {title && <h3 lang="de" className="text-lg font-bold">{title}</h3>}
      <SrStatus>{checked ? `Form checked: ${score} of ${scored.length} fields correct.` : ''}</SrStatus>
      {context && (
        <div className="card bg-brand-50 dark:bg-slate-800">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Information</p>
          <p lang="de" className="whitespace-pre-line leading-relaxed">{context}</p>
        </div>
      )}

      <div className="card divide-y divide-slate-100 dark:divide-slate-800">
        {fields.map((f) => {
          // ── pre-filled row (the printed example, like "(0)" on the real sheet)
          if (f.prefilled != null) {
            return (
              <div key={f.name} className="py-3 first:pt-0 last:pb-0 grid sm:grid-cols-[10rem,1fr,auto] gap-1 sm:gap-3 sm:items-center">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{f.label}</span>
                <div lang="de" className="rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2 text-slate-700 dark:text-slate-200">{f.prefilled}</div>
                <span className="text-[11px] text-slate-400 tabular-nums" title="Already filled in — the example">(0)</span>
              </div>
            );
          }

          const gapNo = scored.indexOf(f) + 1; // numbered like the real sheet: (1)…(5)
          const ok = checked && accepts(f.answer, values[f.name]);
          const bad = checked && !ok;

          // ── choice gap (tick the right box)
          if (f.type === 'choice') {
            return (
              <div key={f.name} className="py-3 first:pt-0 last:pb-0 grid sm:grid-cols-[10rem,1fr,auto] gap-1 sm:gap-3 sm:items-start">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 pt-1.5">{f.label}</span>
                <div role="radiogroup" aria-label={f.label} className="flex flex-col gap-1.5">
                  {f.options.map((opt) => {
                    const selected = values[f.name] === opt;
                    const isAnswer = checked && accepts(f.answer, opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        disabled={checked}
                        onClick={() => setValues((v) => ({ ...v, [f.name]: opt }))}
                        className={`flex items-center gap-2 text-left rounded-lg border-2 px-3 py-1.5 text-sm transition
                          ${checked && isAnswer ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/30'
                            : checked && selected ? 'border-rose-400 bg-rose-50 dark:bg-rose-900/30'
                            : selected ? 'border-brand-500 bg-brand-50 dark:bg-slate-800'
                            : 'border-slate-200 dark:border-slate-700 hover:border-brand-300'}`}
                      >
                        <span aria-hidden className={`w-4 h-4 shrink-0 rounded-sm border-2 flex items-center justify-center text-[10px] font-bold
                          ${selected ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300 dark:border-slate-600'}`}>
                          {selected ? '✕' : ''}
                        </span>
                        <span lang="de">{opt}</span>
                        {checked && isAnswer && <span className="ml-auto" aria-hidden>✅</span>}
                      </button>
                    );
                  })}
                  {bad && <p className="text-xs text-rose-600 dark:text-rose-400">Expected: <strong lang="de">{Array.isArray(f.answer) ? f.answer[0] : f.answer}</strong></p>}
                  {ok && <p className="text-xs text-emerald-600 dark:text-emerald-400">✓ Correct</p>}
                </div>
                <span className="text-[11px] text-slate-400 tabular-nums">({gapNo})</span>
              </div>
            );
          }

          // ── text gap
          return (
            <div key={f.name} className="py-3 first:pt-0 last:pb-0 grid sm:grid-cols-[10rem,1fr,auto] gap-1 sm:gap-3 sm:items-center">
              <label htmlFor={`ff-${f.name}`} className="text-sm font-semibold text-slate-600 dark:text-slate-300">{f.label}</label>
              <div>
                <input
                  id={`ff-${f.name}`}
                  lang="de"
                  value={values[f.name]}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  disabled={checked}
                  placeholder={f.placeholder || ''}
                  aria-label={f.label}
                  className={`w-full rounded-lg border-2 px-3 py-2 bg-white dark:bg-slate-900 focus:border-brand-500
                    ${ok ? 'border-emerald-400' : bad ? 'border-rose-400' : 'border-slate-200 dark:border-slate-700'}`}
                />
                {f.hint && !checked && <p className="mt-1 text-xs text-slate-400">{f.hint}</p>}
                {bad && <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">Expected: <strong lang="de">{Array.isArray(f.answer) ? f.answer[0] : f.answer}</strong></p>}
                {ok && <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">✓ Correct</p>}
              </div>
              <span className="text-[11px] text-slate-400 tabular-nums">({gapNo})</span>
            </div>
          );
        })}
      </div>

      {!checked ? (
        <button type="submit" className="btn-primary w-full" disabled={!allFilled}>Check form</button>
      ) : (
        <>
          <div className="text-center text-sm text-slate-500">{score} / {scored.length} fields correct</div>
          <button type="button" className="btn-primary w-full" onClick={finish}>Next →</button>
        </>
      )}
    </form>
  );
}
