import { useState } from 'react';
import AudioButton from '../AudioButton.jsx';

/**
 * Goethe A1 guided writing — used in Schreiben Teil 2 (write a short ~30-word
 * message that addresses three given points / Leitpunkte).
 *
 * Free writing can't be auto-graded, so the task scaffolds it: the three points
 * to cover, a live word count, then a model answer with audio to compare against
 * and an honest self-check of which points were addressed.
 *
 * Spec:
 *   { type:'guided-writing', situation, points:[string,string,string],
 *     minWords?=25, model }
 * Emits { correct, total: points.length } (correct = points self-marked as covered).
 */
export default function GuidedWriting({ situation, points = [], minWords = 25, model, onDone }) {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('write'); // 'write' | 'review'
  const [covered, setCovered] = useState(() => points.map(() => false));

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const enough = words >= minWords;

  const toggle = (i) => setCovered((c) => c.map((v, j) => (j === i ? !v : v)));
  const finish = () => onDone?.({ correct: covered.filter(Boolean).length, total: points.length });

  if (phase === 'review') {
    return (
      <div className="space-y-4">
        <div className="card">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Your message · {words} words</p>
          <p lang="de" className="whitespace-pre-line leading-relaxed">{text}</p>
        </div>

        <div className="card bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-700">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300 mb-1">Model answer</p>
              <p lang="de" className="whitespace-pre-line leading-relaxed">{model}</p>
            </div>
            {model && <AudioButton text={model} />}
          </div>
        </div>

        <div className="card">
          <p className="font-semibold mb-2">Did your message cover each point?</p>
          <ul className="space-y-2">
            {points.map((p, i) => (
              <li key={i}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={covered[i]} onChange={() => toggle(i)} className="w-4 h-4 accent-brand-600" />
                  <span lang="de">{p}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <button className="btn-primary w-full" onClick={finish}>
          Finish — {covered.filter(Boolean).length} / {points.length} points covered
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="card bg-brand-50 dark:bg-slate-800">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Your task</p>
        <p lang="de" className="leading-relaxed">{situation}</p>
      </div>

      <div className="card">
        <p className="text-sm font-semibold mb-2">Cover all three points:</p>
        <ul className="space-y-1 text-sm">
          {points.map((p, i) => (
            <li key={i} className="flex gap-2"><span className="text-brand-600" aria-hidden>▸</span><span lang="de">{p}</span></li>
          ))}
        </ul>
      </div>

      <div>
        <textarea
          lang="de"
          spellCheck
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          aria-label="Write your message"
          placeholder="Schreiben Sie hier Ihre Nachricht…"
          className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 leading-relaxed focus:border-brand-500"
        />
        <div className={`mt-1 text-xs ${enough ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
          {words} word{words === 1 ? '' : 's'} {enough ? '✓' : `· aim for about 30 (at least ${minWords})`}
        </div>
      </div>

      <button className="btn-primary w-full" disabled={words === 0} onClick={() => setPhase('review')}>
        Compare with model answer →
      </button>
    </div>
  );
}
