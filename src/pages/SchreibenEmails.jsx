import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AudioButton from '../components/AudioButton.jsx';
import SrStatus from '../components/SrStatus.jsx';
import { EMAIL_TASKS, EMAIL_COMPARE, EMAIL_SENTENCES, EMAIL_GRAMMAR } from '../data/schreibenEmails.js';

/**
 * Schreiben Teil 2 · E-Mails — the writing deck.
 *
 * In the exam you get a short situation with three bullet points and write a
 * ~30-word email covering all three. Everything here is that task: 94 of them
 * with a full model answer translated line by line, plus the openings, closings
 * and grammar the part is marked on. Cards can hide the model so you write
 * first and check afterwards.
 */

const PAGE = 12;

const REG = {
  formell: {
    label: 'formell · Sie',
    bar: 'bg-blue-600',
    text: 'text-blue-700 dark:text-blue-300',
    chip: 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/30',
  },
  informell: {
    label: 'informell · du',
    bar: 'bg-pink-600',
    text: 'text-pink-700 dark:text-pink-300',
    chip: 'border-pink-300 dark:border-pink-700 bg-pink-50 dark:bg-pink-900/30',
  },
};

// Umlauts get typed three ways — ö, oe and plain o — so index both foldings.
const foldDe = (s) => (s || '').toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
const foldAscii = (s) => (s || '').toLowerCase()
  .replace(/ß/g, 'ss').normalize('NFD').replace(/\p{Diacritic}/gu, '');
const haystack = (t) => {
  const raw = [t.title, t.titleEn, t.situation, t.situationEn, ...t.points,
    ...t.model.flatMap((m) => [m.de, m.en])].join(' ');
  return `${foldDe(raw)} ${foldAscii(raw)}`;
};

const SectionLabel = ({ children }) => (
  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{children}</p>
);

function TaskCard({ task, hideModel }) {
  const [shown, setShown] = useState(false);
  const r = REG[task.register];
  const reveal = !hideModel || shown;
  const fullEmail = task.model.map((m) => m.de).join('\n');

  return (
    <article className="card relative overflow-hidden !p-0">
      <span aria-hidden className={`absolute left-0 top-0 bottom-0 w-1 ${r.bar}`} />

      <header className="flex items-start gap-3 p-4 pl-5">
        <span
          aria-hidden
          className={`shrink-0 grid place-items-center w-9 h-9 rounded-xl border font-extrabold tabular-nums ${r.chip} ${r.text}`}
        >
          {task.id}
        </span>
        <div className="min-w-0 flex-1">
          <h3 lang="de" className="font-extrabold text-lg leading-tight text-slate-900 dark:text-slate-50">{task.title}</h3>
          <p className="text-sm text-slate-500">{task.titleEn}</p>
        </div>
        <span lang="de" className={`shrink-0 text-[10px] font-bold uppercase tracking-widest rounded-full border px-2 py-0.5 ${r.chip} ${r.text}`}>
          {r.label}
        </span>
      </header>

      {/* ── the task, exactly as the exam states it ── */}
      <div className="px-4 pl-5 pb-4 border-t border-slate-100 dark:border-slate-800 pt-3">
        <SectionLabel>Aufgabe · task</SectionLabel>
        <p lang="de" className="mt-1 font-medium text-slate-800 dark:text-slate-100">{task.situation}</p>
        <ul className="mt-2 space-y-1">
          {task.points.map((p) => (
            <li key={p} lang="de" className="flex gap-2 text-sm text-slate-700 dark:text-slate-200">
              <span aria-hidden className={`font-bold ${r.text}`}>•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-slate-500 leading-relaxed">{task.situationEn}</p>
      </div>

      {/* ── the model email ── */}
      <div className="px-4 pl-5 pb-4 border-t border-slate-100 dark:border-slate-800 pt-3">
        <div className="flex items-center gap-2">
          <SectionLabel>Musterantwort · model answer</SectionLabel>
          {reveal && <AudioButton text={fullEmail} size="sm" label="Hear the whole email" className="ml-auto" />}
        </div>

        {reveal ? (
          <div className="mt-2 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-900/10 divide-y divide-emerald-100 dark:divide-emerald-900/40">
            {task.model.map((m) => (
              <div key={m.de} className="grid md:grid-cols-2 gap-x-4 gap-y-0.5 p-3">
                <p lang="de" className="text-emerald-900 dark:text-emerald-200 font-medium whitespace-pre-line">{m.de}</p>
                <p className="text-xs md:text-sm text-slate-500 whitespace-pre-line">{m.en}</p>
              </div>
            ))}
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShown(true)}
            className="mt-2 w-full text-sm font-semibold text-brand-600 dark:text-brand-300 hover:underline
                       border border-dashed border-slate-300 dark:border-slate-600 rounded-xl px-3 py-3"
          >
            Write your email first, then show the model →
          </button>
        )}
      </div>
    </article>
  );
}

/* ── reference: formell beside informell ─────────────────────────────── */
function CompareTable() {
  return (
    <div className="space-y-3">
      {EMAIL_COMPARE.map((g) => (
        <section key={g.group} className="card" aria-labelledby={`cmp-${g.group}`}>
          <h3 id={`cmp-${g.group}`} lang="de" className="font-bold">
            {g.group} {g.en && <span className="font-normal text-sm text-slate-400" lang="en">{g.en}</span>}
          </h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[520px]">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest">
                  <th className="text-left pb-2 pr-3 font-bold text-slate-400 w-32">&nbsp;</th>
                  <th className={`text-left pb-2 pr-3 font-bold ${REG.formell.text}`}>formell · Sie</th>
                  <th className={`text-left pb-2 font-bold ${REG.informell.text}`}>informell · du</th>
                </tr>
              </thead>
              <tbody>
                {g.rows.map((row) => (
                  <tr key={row.label} className="border-t border-slate-100 dark:border-slate-800 align-top">
                    <td className="py-2 pr-3 text-[11px] uppercase tracking-wide text-slate-400 font-semibold">{row.label}</td>
                    {['formell', 'informell'].map((c) => (
                      <td key={c} className="py-2 pr-3">
                        <span lang="de" className="font-semibold text-slate-900 dark:text-slate-100">{row[c].de}</span>
                        {row[c].en && <span className="block text-xs text-slate-500">{row[c].en}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}

function SentenceBank() {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {EMAIL_SENTENCES.map((g) => (
        <section key={g.group} className="card" aria-labelledby={`snt-${g.group}`}>
          <h3 id={`snt-${g.group}`} lang="de" className="font-bold">
            {g.group} {g.en && <span className="font-normal text-sm text-slate-400" lang="en">{g.en}</span>}
          </h3>
          <ul className="mt-2 divide-y divide-slate-100 dark:divide-slate-800">
            {g.items.map((s) => (
              <li key={s.de} className="py-2 first:pt-0 last:pb-0 flex items-start gap-2">
                <div className="flex-1 min-w-0">
                  <span lang="de" className="font-medium">{s.de}</span>
                  <span className="block text-xs text-slate-500">{s.en}</span>
                </div>
                <AudioButton text={s.de} size="sm" />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function GrammarTable() {
  return (
    <div className="space-y-3">
      {EMAIL_GRAMMAR.map((g) => (
        <section key={g.group} className="card" aria-labelledby={`gr-${g.group}`}>
          <h3 id={`gr-${g.group}`} lang="de" className="font-bold">
            {g.group} {g.en && <span className="font-normal text-sm text-slate-400" lang="en">{g.en}</span>}
          </h3>
          <ul className="mt-2 divide-y divide-slate-100 dark:divide-slate-800">
            {g.rows.map((row) => (
              <li key={row.pattern} className="py-3 first:pt-0 last:pb-0 grid md:grid-cols-[10rem,1fr,1fr] gap-x-4 gap-y-1">
                <span lang="de" className="font-bold text-slate-900 dark:text-slate-100">{row.pattern}</span>
                <span className="text-sm">
                  <span lang="de" className="text-slate-700 dark:text-slate-200">{row.ruleDe}</span>
                  <span className="block text-xs text-slate-500">{row.ruleEn}</span>
                </span>
                <span className="text-sm">
                  <span lang="de" className="font-medium text-brand-700 dark:text-brand-300">{row.exampleDe}</span>
                  <span className="block text-xs text-slate-500">{row.exampleEn}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

const TABS = [
  { key: 'compare', label: 'Anrede & Gruß', hint: 'formell vs informell' },
  { key: 'sentences', label: 'Feste Sätze', hint: 'sentences that always fit' },
  { key: 'grammar', label: 'Grammatik', hint: 'word order and cases' },
];

export default function SchreibenEmails() {
  const [q, setQ] = useState('');
  const [register, setRegister] = useState('');
  const [hideModel, setHideModel] = useState(false);
  const [ref, setRef] = useState('');
  const [limit, setLimit] = useState(PAGE);

  const hay = useMemo(() => EMAIL_TASKS.map((t) => ({ t, h: haystack(t) })), []);
  const matches = useMemo(() => {
    const needle = q.trim();
    return hay
      .filter(({ t, h }) => (!register || t.register === register)
        && (!needle || h.includes(foldDe(needle)) || h.includes(foldAscii(needle))))
      .map(({ t }) => t);
  }, [hay, q, register]);

  const reset = (fn) => (v) => { fn(v); setLimit(PAGE); };
  const visible = matches.slice(0, limit);

  const chip = (active) =>
    `text-sm rounded-full border px-3 py-1 transition ${active
      ? 'border-brand-500 bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 font-semibold'
      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-brand-300'}`;

  return (
    <div className="space-y-5">
      <div>
        <Link to="/schreiben" className="text-sm text-slate-500 hover:underline">← Schreiben</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">📧 Schreiben Teil 2 — E-Mails</h1>
        <p className="text-slate-500 mt-1 max-w-3xl">
          {EMAIL_TASKS.length} exam tasks with a full model answer, translated line by line. Every task gives you a
          situation and <strong>three points</strong> — your email has to cover all three. The one decision that shapes
          everything else is <span className={REG.formell.text}>formell (Sie)</span> or{' '}
          <span className={REG.informell.text}>informell (du)</span>: pick one and keep it from the greeting to the sign-off.
        </p>
      </div>

      {/* ── reference tabs ── */}
      <div className="card space-y-3">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Reference sections">
          {TABS.map((t) => (
            <button key={t.key} type="button" className={chip(ref === t.key)} title={t.hint}
              onClick={() => setRef(ref === t.key ? '' : t.key)}>
              {t.label}
            </button>
          ))}
          <span className="text-xs text-slate-400 self-center ml-1">
            {ref ? 'tap again to close' : 'the cheat sheet — open any time'}
          </span>
        </div>
      </div>
      {ref === 'compare' && <CompareTable />}
      {ref === 'sentences' && <SentenceBank />}
      {ref === 'grammar' && <GrammarTable />}

      {/* ── task controls ── */}
      <div className="card space-y-3">
        <label className="block">
          <span className="sr-only">Search the tasks</span>
          <input
            type="search"
            value={q}
            onChange={(e) => reset(setQ)(e.target.value)}
            placeholder="Suchen: Thema, Situation, Satz oder englische Bedeutung"
            className="w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:border-brand-500"
          />
        </label>
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by register">
          <button type="button" className={chip(!register)} onClick={() => reset(setRegister)('')}>Alle</button>
          {['formell', 'informell'].map((k) => (
            <button key={k} type="button" lang="de"
              className={`${chip(register === k)} ${register === k ? '' : REG[k].text}`}
              onClick={() => reset(setRegister)(register === k ? '' : k)}>
              {REG[k].label}
            </button>
          ))}
          <label className="ml-auto flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 cursor-pointer">
            <input type="checkbox" checked={hideModel} onChange={(e) => setHideModel(e.target.checked)} className="rounded" />
            Hide model answers
          </label>
        </div>
        <p className="text-sm text-slate-500 tabular-nums" aria-live="polite">
          {matches.length} {matches.length === 1 ? 'Aufgabe' : 'Aufgaben'}
        </p>
      </div>

      <SrStatus>{`${matches.length} tasks match.`}</SrStatus>
      {matches.length === 0 ? (
        <div className="card text-center text-slate-500">
          Keine Aufgabe gefunden.{' '}
          <button type="button" className="text-brand-600 font-semibold hover:underline"
            onClick={() => { setQ(''); setRegister(''); setLimit(PAGE); }}>Filter zurücksetzen</button>
        </div>
      ) : (
        <div className="space-y-3">
          {visible.map((t) => <TaskCard key={t.id} task={t} hideModel={hideModel} />)}
        </div>
      )}

      {visible.length < matches.length && (
        <button type="button" className="btn-secondary w-full" onClick={() => setLimit((n) => n + PAGE)}>
          Show more ({matches.length - visible.length} left)
        </button>
      )}

      <p className="text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800 pt-4">
        Practise writing one: <Link to="/schreiben" className="text-brand-600 font-semibold hover:underline">✍️ Writing test</Link>
        {' '}· Fill a form: <Link to="/drills/forms" className="text-brand-600 font-semibold hover:underline">📋 Teil 1 forms</Link>
        {' '}· More chunks: <Link to="/phrases" className="text-brand-600 font-semibold hover:underline">💬 Phrase bank</Link>
      </p>
    </div>
  );
}
