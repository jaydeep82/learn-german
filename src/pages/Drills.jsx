import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ExerciseRunner from '../components/exercises/ExerciseRunner.jsx';
import { SECTION_DRILLS, drillByKey } from '../data/sectionDrills.js';
import { FORMS_DRILL, formById, asExercise } from '../data/formsDrill.js';

/**
 * Section drills — practise one exam task type at a time.
 *   /drills               → hub (one card per section)
 *   /drills/forms         → the 20 dedicated form tests (picker)
 *   /drills/forms/:formId → run one form
 *   /drills/:key          → run all tasks of a section, shuffled
 */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ResultCard({ title, result, onRetry, backTo, backLabel }) {
  const pct = Math.round(((result?.ratio) ?? 0) * 100);
  const passed = pct >= 60;
  return (
    <div className="card text-center max-w-md mx-auto">
      <div className="text-5xl mb-2" aria-hidden>{passed ? '🎉' : '🌱'}</div>
      <h1 className="text-2xl font-extrabold">{title}</h1>
      <div className="text-5xl font-bold mt-4 tabular-nums">{pct}%</div>
      <p className="text-slate-500 mt-1">{result.correct} / {result.total} correct</p>
      <div className={`mt-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold ${
        passed ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
               : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'}`}>
        {passed ? '✓ Above the 60% pass mark' : 'Below 60% — try it again'}
      </div>
      <div className="flex flex-wrap gap-2 justify-center mt-6">
        <button className="btn-primary" onClick={onRetry}>Try again</button>
        <Link to={backTo} className="btn-secondary">{backLabel}</Link>
        <Link to="/exam" className="btn-secondary">Exam trainer</Link>
      </div>
    </div>
  );
}

// ── one dedicated form test ──────────────────────────────────────────
function FormRun({ form }) {
  const [runId, setRunId] = useState(0);
  const [result, setResult] = useState(null);
  const idx = FORMS_DRILL.findIndex((f) => f.id === form.id);
  const next = FORMS_DRILL[idx + 1];

  if (result) {
    return (
      <div className="space-y-4">
        <ResultCard
          title={`Form ${form.id} done`}
          result={result}
          onRetry={() => { setResult(null); setRunId((r) => r + 1); }}
          backTo="/drills/forms"
          backLabel="All forms"
        />
        {next && (
          <p className="text-center">
            <Link to={`/drills/forms/${next.id}`} className="text-brand-600 font-semibold hover:underline">
              Next: {next.emoji} Form {next.id} · {next.title} →
            </Link>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-wrap">
        <Link to="/drills/forms" className="text-sm text-slate-500 hover:underline">← All forms</Link>
        <span className="text-xs text-slate-500 dark:text-slate-400 ml-auto">Form {form.id} of {FORMS_DRILL.length} · Schreiben Teil 1</span>
      </div>
      <ExerciseRunner
        key={`${form.id}-${runId}`}
        exercises={[asExercise(form)]}
        dayId={`drill-form-${form.id}`}
        onFinish={setResult}
      />
    </div>
  );
}

// ── forms picker ─────────────────────────────────────────────────────
function FormsPicker() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <Link to="/drills" className="text-sm text-slate-500 hover:underline">← Section drills</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">📋 Formulare — Schreiben Teil 1</h1>
        <p className="text-slate-500 mt-1">
          Twenty realistic forms, exactly like the exam sheet: read the text about a friend, then fill the five
          numbered gaps — copy the details, and tick the right box where you have to think (“keine
          Kreditkarte” → <em>Bar</em>).
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {FORMS_DRILL.map((f) => (
          <Link key={f.id} to={`/drills/forms/${f.id}`} className="card hover:shadow-md transition flex items-center gap-3">
            <span className="text-2xl" aria-hidden>{f.emoji}</span>
            <div className="min-w-0">
              <div className="font-bold truncate">Form {f.id}</div>
              <div lang="de" className="text-sm text-slate-500 truncate">{f.title}</div>
            </div>
            <span className="ml-auto text-xs font-semibold text-emerald-600 shrink-0">Start →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── aggregated section run ───────────────────────────────────────────
function SectionRun({ drill }) {
  const [exercises, setExercises] = useState(null);
  const [result, setResult] = useState(null);

  if (result) {
    return (
      <ResultCard
        title={`${drill.title} done`}
        result={result}
        onRetry={() => { setResult(null); setExercises(shuffle(drill.items)); }}
        backTo="/drills"
        backLabel="Section drills"
      />
    );
  }

  if (exercises) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-extrabold">{drill.emoji} {drill.title}</h1>
          <Link to="/drills" className="text-sm text-slate-500 hover:underline ml-auto">Exit</Link>
        </div>
        <ExerciseRunner exercises={exercises} dayId={`drill-${drill.key}`} onFinish={setResult} />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <Link to="/drills" className="text-sm text-slate-500 hover:underline">← Section drills</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">{drill.emoji} {drill.title} <span className="text-slate-400 font-normal text-xl">· {drill.part}</span></h1>
        <p className="text-slate-500 mt-1">
          {drill.items.length} tasks of this one type, gathered from all eight mock papers and shuffled —
          drill the format until it’s automatic.
        </p>
      </div>
      <button className="btn-primary w-full text-lg py-4" onClick={() => setExercises(shuffle(drill.items))}>
        Start — {drill.items.length} tasks →
      </button>
    </div>
  );
}

// ── hub ──────────────────────────────────────────────────────────────
function DrillsHub() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <Link to="/exam" className="text-sm text-slate-500 hover:underline">← Exam trainer</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">🎯 Section drills</h1>
        <p className="text-slate-500 mt-1">
          Weak in one part of the exam? Drill exactly that task type — nothing else — until it sits.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {SECTION_DRILLS.map((d) => (
          <Link
            key={d.key}
            to={d.dedicated ? '/drills/forms' : `/drills/${d.key}`}
            className="card hover:shadow-md transition flex items-start gap-3"
          >
            <span className="text-2xl" aria-hidden>{d.emoji}</span>
            <div className="min-w-0">
              <div className="font-bold">{d.title}</div>
              <div className="text-xs text-brand-600 font-semibold">{d.part}</div>
              <div className="text-sm text-slate-500 mt-0.5">{d.blurb || `${d.en} — ${d.items.length} tasks from all papers, shuffled.`}</div>
            </div>
            <span className="ml-auto text-xs font-semibold text-emerald-600 shrink-0">
              {d.count || d.items?.length} →
            </span>
          </Link>
        ))}
      </div>

      <p className="text-xs text-slate-400">
        Sections mirror the real exam parts. For a full sitting, take a <Link to="/mock" className="text-brand-600 hover:underline">mock exam →</Link>
      </p>
    </div>
  );
}

export default function Drills() {
  const { key, formId } = useParams();
  if (formId) {
    const form = formById(formId);
    return form ? <FormRun key={form.id} form={form} /> : <FormsPicker />;
  }
  if (key === 'forms') return <FormsPicker />;
  if (key) {
    const drill = drillByKey(key);
    if (drill && !drill.dedicated) return <SectionRun key={drill.key} drill={drill} />;
  }
  return <DrillsHub />;
}
