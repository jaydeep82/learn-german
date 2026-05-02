import { Link, useParams } from 'react-router-dom';
import { CONJ } from '../data/curriculum.js';
import AudioButton from '../components/AudioButton.jsx';
import Pron from '../components/Pron.jsx';

/* Per-pronoun English label, shared across the three aux verbs. */
const ROW_LABELS = [
  { en: 'I',                            note: '' },
  { en: 'you (1 friend)',               note: 'informal singular' },
  { en: 'he / she / it',                note: 'singular 3rd' },
  { en: 'we',                           note: '' },
  { en: 'you all (group of friends)',  note: 'informal plural' },
  { en: 'they / you (formal)',         note: 'plural 3rd · formal "you"' },
];

const VERBS = [
  { key: 'sein',   en: 'to be',     accent: 'from-sky-500/20    to-sky-500/5'    },
  { key: 'haben',  en: 'to have',   accent: 'from-emerald-500/20 to-emerald-500/5' },
  { key: 'werden', en: 'to become', accent: 'from-amber-500/20  to-amber-500/5'  },
];

const EXAMPLES = {
  sein:   ['Ich bin müde.',         'Wir sind Kollegen.',     'Sie ist Lehrerin.'],
  haben:  ['Ich habe Hunger.',      'Wir haben Zeit.',        'Sie hat eine Idee.'],
  werden: ['Ich werde müde.',       'Es wird besser.',         'Sie werden langsamer.'],
};

const WHEN_TO_USE = [
  {
    verb: 'sein', emoji: '🟦',
    use: 'State of being · profession · location',
    examples: [
      ['Ich bin Softwareentwickler.', 'I am a software developer.'],
      ['Du bist hier.',                'You are here.'],
      ['Es ist spät.',                 'It is late.'],
    ],
  },
  {
    verb: 'haben', emoji: '🟩',
    use: 'Ownership · body states (hunger, thirst, fear)',
    examples: [
      ['Ich habe ein Buch.',  'I have a book.'],
      ['Wir haben Hunger.',   'We are hungry.  (literally: we have hunger)'],
      ['Du hast Stress.',     'You are stressed.'],
    ],
  },
  {
    verb: 'werden', emoji: '🟨',
    use: 'Becoming · changing state · future hint',
    examples: [
      ['Es wird kalt.',       'It is getting cold.'],
      ['Ich werde müde.',     'I am becoming tired.'],
      ['Sie wird Ärztin.',    'She is becoming a doctor.'],
    ],
  },
];

const COMMON_MISTAKES = [
  {
    wrong: '✗ Ich bin Hunger.',
    right: '✓ Ich habe Hunger.',
    why:   'Hunger / Durst / Angst use HABEN in German, not sein.',
  },
  {
    wrong: '✗ Ich bin müde, du bin auch.',
    right: '✓ Ich bin müde, du bist auch.',
    why:   'Each pronoun gets its own form — never copy the form from "ich".',
  },
  {
    wrong: '✗ sie hat haben.',
    right: '✓ Sie haben.  / Sie hat.',
    why:   'Pick ONE: sie haben (they / formal you) OR sie hat (she). The verb form is your only clue to which "sie" you mean.',
  },
];

export default function Cheatsheet() {
  const { slug = 'aux-verbs' } = useParams();

  // Currently only one cheatsheet exists. Reserve room for more.
  if (slug !== 'aux-verbs') {
    return (
      <div className="card">
        Unknown cheatsheet. <Link to="/" className="text-brand-600">Back home</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm text-slate-500 hover:underline">← Back to dashboard</Link>

      <header className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-400 text-white p-6 sm:p-8 shadow-md">
        <p className="uppercase tracking-widest text-xs opacity-90">Week 1 · Revision</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
          Cheatsheet: <span className="font-mono">sein · haben · werden</span>
        </h1>
        <p className="mt-2 max-w-2xl opacity-90">
          The three auxiliary verbs side-by-side. Print it, screenshot it, drill it —
          everything you build in Weeks 2–5 stands on these eighteen forms.
        </p>
        <div className="mt-4 flex gap-2 flex-wrap">
          <button onClick={() => window.print()} className="btn bg-white text-brand-700 hover:bg-brand-50">
            🖨️ Print / Save as PDF
          </button>
          <Link to="/day/5" className="btn bg-white/10 text-white hover:bg-white/20">Practise sein</Link>
          <Link to="/day/6" className="btn bg-white/10 text-white hover:bg-white/20">Practise haben</Link>
          <Link to="/day/7" className="btn bg-white/10 text-white hover:bg-white/20">Practise werden</Link>
        </div>
      </header>

      {/* The big side-by-side table */}
      <section aria-labelledby="big-table" className="card overflow-x-auto">
        <h2 id="big-table" className="font-bold mb-3">All three verbs · all six pronouns</h2>
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3 border-b-2 border-slate-200 dark:border-slate-700">Pronoun</th>
              {VERBS.map((v) => (
                <th key={v.key} className="py-2 px-3 border-b-2 border-slate-200 dark:border-slate-700">
                  <div className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                    {v.key}
                  </div>
                  <div className="font-normal text-xs text-slate-500 normal-case">{v.en}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROW_LABELS.map((label, i) => (
              <tr key={i} className="border-b border-slate-100 dark:border-slate-800 align-top">
                <td className="py-3 pr-3 whitespace-nowrap">
                  <div className="font-semibold">{CONJ.sein[i][0]}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">= {label.en}</div>
                  {label.note && (
                    <div className="text-[11px] text-slate-400 dark:text-slate-500 italic">{label.note}</div>
                  )}
                </td>
                {VERBS.map((v) => {
                  const form = CONJ[v.key][i][1];
                  return (
                    <td key={v.key} className={`py-3 px-3 bg-gradient-to-br ${v.accent} rounded`}>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-lg font-bold">{form}</span>
                        <AudioButton text={form} size="sm" />
                      </div>
                      <Pron de={form} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Quick worked examples per verb */}
      <section aria-labelledby="examples" className="grid md:grid-cols-3 gap-4">
        <h2 id="examples" className="sr-only">Examples per verb</h2>
        {VERBS.map((v) => (
          <div key={v.key} className={`card bg-gradient-to-br ${v.accent}`}>
            <div className="font-extrabold text-xl">{v.key}</div>
            <div className="text-sm text-slate-500 mb-3">{v.en}</div>
            <ul className="space-y-2 text-sm">
              {EXAMPLES[v.key].map((s) => (
                <li key={s} className="border-t border-slate-200/60 dark:border-slate-700/60 pt-2 first:border-0 first:pt-0">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold flex-1">{s}</span>
                    <AudioButton text={s} size="sm" />
                  </div>
                  <Pron de={s} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* When to use which */}
      <section aria-labelledby="when" className="card">
        <h2 id="when" className="font-bold mb-3">When to use which?</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3">Verb</th>
              <th className="py-2 pr-3">Use it for…</th>
              <th className="py-2">Examples</th>
            </tr>
          </thead>
          <tbody>
            {WHEN_TO_USE.map((row) => (
              <tr key={row.verb} className="border-t border-slate-200 dark:border-slate-800 align-top">
                <td className="py-3 pr-3 whitespace-nowrap font-semibold">
                  <span className="mr-1" aria-hidden>{row.emoji}</span>{row.verb}
                </td>
                <td className="py-3 pr-3">{row.use}</td>
                <td className="py-3">
                  <ul className="space-y-1">
                    {row.examples.map(([de, en]) => (
                      <li key={de}>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{de}</span>
                          <AudioButton text={de} size="sm" />
                        </div>
                        <Pron de={de} />
                        <div className="text-xs text-slate-500">{en}</div>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* The three "sies" callout */}
      <section aria-labelledby="sies" className="card bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700">
        <h2 id="sies" className="font-bold mb-2">⚠ The three "sies" — verb form is your decoder</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3">Sentence</th>
              <th className="py-2 pr-3">Verb form</th>
              <th className="py-2">"sie" actually means…</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-amber-200 dark:border-amber-800">
              <td className="py-2 pr-3"><strong>Sie ist</strong> Lehrerin.</td>
              <td className="py-2 pr-3 font-mono">ist (singular)</td>
              <td className="py-2">she</td>
            </tr>
            <tr className="border-t border-amber-200 dark:border-amber-800">
              <td className="py-2 pr-3"><strong>Sie sind</strong> Kollegen.</td>
              <td className="py-2 pr-3 font-mono">sind (plural)</td>
              <td className="py-2">they  <em className="text-slate-500">— or formal "you"</em></td>
            </tr>
            <tr className="border-t border-amber-200 dark:border-amber-800">
              <td className="py-2 pr-3"><strong>Sie haben</strong> einen Termin.</td>
              <td className="py-2 pr-3 font-mono">haben (plural)</td>
              <td className="py-2">they  <em className="text-slate-500">— or formal "you" (context decides)</em></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Common mistakes */}
      <section aria-labelledby="mistakes" className="card">
        <h2 id="mistakes" className="font-bold mb-3">Common mistakes</h2>
        <ul className="space-y-3">
          {COMMON_MISTAKES.map((m) => (
            <li key={m.right} className="border-t border-slate-200 dark:border-slate-800 pt-3 first:border-0 first:pt-0">
              <div className="text-rose-600 dark:text-rose-400 font-mono">{m.wrong}</div>
              <div className="text-emerald-700 dark:text-emerald-400 font-mono">{m.right}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">{m.why}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Memory hooks */}
      <section aria-labelledby="hooks" className="card">
        <h2 id="hooks" className="font-bold mb-2">Memory hooks</h2>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-200">
          <li><strong>sein</strong> ≈ "to be" — every form contains an <em>s</em>… except <em>bin / bist</em>. Memorise those two as a pair.</li>
          <li><strong>haben</strong> drops the "b" in <em>du hast</em> and <em>er hat</em>. Whisper "ha-st, ha-t, ha-ben" three times and it sticks.</li>
          <li><strong>werden</strong> changes vowel in singular: <em>werde / wirst / wird</em> — then snaps back to <em>e</em> for the plural.</li>
          <li>The three plural forms (wir / sie / Sie) ALWAYS take the bare infinitive ending: <em>sind, haben, werden</em>.</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-slate-500 pb-4">
        Ready for Week 2? <Link to="/day/8" className="font-semibold text-brand-700 dark:text-brand-300 hover:underline">→ Go to Day 8 (Numbers 30–100)</Link>
      </footer>
    </div>
  );
}
