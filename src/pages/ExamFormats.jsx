import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EXAM_FORMATS } from '../data/examFormats.js';
import RichtigFalsch from '../components/exercises/RichtigFalsch.jsx';
import PictureMCQ from '../components/exercises/PictureMCQ.jsx';
import AdMatch from '../components/exercises/AdMatch.jsx';
import FormFill from '../components/exercises/FormFill.jsx';
import SpeakingCard from '../components/exercises/SpeakingCard.jsx';
import GuidedWriting from '../components/exercises/GuidedWriting.jsx';

/**
 * Preview of the Goethe A1 exam-format exercise types (roadmap A1).
 *
 * A living catalogue: each task type rendered with authentic A1 sample content,
 * fully interactive. These are the building blocks the Hören / Lesen / Schreiben
 * / Sprechen modules (A2–A6) will assemble into full exam practice.
 */
const COMPONENTS = {
  'richtig-falsch': RichtigFalsch,
  'picture-mcq': PictureMCQ,
  'ad-match': AdMatch,
  'form-fill': FormFill,
  'speaking-card': SpeakingCard,
  'guided-writing': GuidedWriting,
};

const SKILL_TONE = {
  Hören: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Lesen: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Schreiben: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  Sprechen: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
};

function FormatPreview({ fmt }) {
  const [run, setRun] = useState(0); // remount key to reset
  const [result, setResult] = useState(null);
  const Cmp = COMPONENTS[fmt.spec.type];

  return (
    <section className="space-y-3" aria-labelledby={`fmt-${fmt.id}`}>
      <div className="flex flex-wrap items-center gap-2">
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${SKILL_TONE[fmt.skill] || ''}`}>
          {fmt.emoji} {fmt.part}
        </span>
        <h2 id={`fmt-${fmt.id}`} className="text-lg font-extrabold">{fmt.heading}</h2>
        <code className="ml-auto text-[11px] text-slate-400">type: {fmt.spec.type}</code>
      </div>
      <p className="text-sm text-slate-500 max-w-2xl">{fmt.blurb}</p>

      <div className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 p-4">
        {result ? (
          <div className="text-center space-y-3 py-4">
            <div className="text-4xl" aria-hidden>{result.correct === result.total ? '🏆' : '👍'}</div>
            <p className="font-bold">{result.correct} / {result.total} correct</p>
            <button className="btn-secondary" onClick={() => { setResult(null); setRun((r) => r + 1); }}>
              Try again
            </button>
          </div>
        ) : (
          <Cmp key={run} {...fmt.spec} onDone={setResult} />
        )}
      </div>
    </section>
  );
}

export default function ExamFormats() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <Link to="/" className="text-sm text-slate-500 hover:underline">← Dashboard</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Exam task formats</h1>
        <p className="text-slate-500 max-w-2xl">
          A preview of the five Goethe A1 task types the exam trainer is built from — fully interactive, with
          real A1-level content. These are the foundation for the upcoming{' '}
          <strong>Hören · Lesen · Schreiben · Sprechen</strong> modules.
        </p>
      </header>

      {EXAM_FORMATS.map((fmt) => <FormatPreview key={fmt.id} fmt={fmt} />)}

      <p className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-4">
        Building blocks only — full timed modules and a mock exam come next on the roadmap.
      </p>
    </div>
  );
}
