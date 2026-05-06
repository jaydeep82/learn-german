import { Link, useParams } from 'react-router-dom';
import { CONJ } from '../data/curriculum.js';
import AudioButton from '../components/AudioButton.jsx';
import Pron from '../components/Pron.jsx';

/* ============================================================
   Slug-based router. Add a new entry here to ship more cheatsheets.
   ============================================================ */
export default function Cheatsheet() {
  const { slug = 'aux-verbs' } = useParams();

  if (slug === 'aux-verbs')      return <AuxVerbsCheatsheet />;
  if (slug === 'regular-verbs')  return <RegularVerbsCheatsheet />;

  return (
    <div className="card">
      Unknown cheatsheet. <Link to="/" className="text-brand-600">Back home</Link>
    </div>
  );
}

/* Cross-reference card linking to other cheatsheets — shown at the foot of each. */
function OtherCheatsheets({ except }) {
  const all = [
    { slug: 'aux-verbs',     emoji: '📋', title: 'Week 1 · sein · haben · werden' },
    { slug: 'regular-verbs', emoji: '🧰', title: 'Week 2 · regular & separable verbs · TFP order' },
  ];
  const others = all.filter((c) => c.slug !== except);
  if (!others.length) return null;
  return (
    <section className="card" aria-labelledby="other-cheats">
      <h2 id="other-cheats" className="font-bold mb-2">Other cheatsheets</h2>
      <ul className="space-y-2">
        {others.map((c) => (
          <li key={c.slug}>
            <Link
              to={`/cheatsheet/${c.slug}`}
              className="flex items-center gap-3 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-400 transition"
            >
              <span className="text-2xl" aria-hidden>{c.emoji}</span>
              <span className="font-semibold flex-1">{c.title}</span>
              <span aria-hidden>→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ===================== WEEK 1 — sein · haben · werden ===================== */

const WK1_ROW_LABELS = [
  { en: 'I',                            note: '' },
  { en: 'you (1 friend)',               note: 'informal singular' },
  { en: 'he / she / it',                note: 'singular 3rd' },
  { en: 'we',                           note: '' },
  { en: 'you all (group of friends)',  note: 'informal plural' },
  { en: 'they / you (formal)',         note: 'plural 3rd · formal "you"' },
];

const WK1_VERBS = [
  { key: 'sein',   en: 'to be',     accent: 'from-sky-500/20    to-sky-500/5'    },
  { key: 'haben',  en: 'to have',   accent: 'from-emerald-500/20 to-emerald-500/5' },
  { key: 'werden', en: 'to become', accent: 'from-amber-500/20  to-amber-500/5'  },
];

const WK1_EXAMPLES = {
  sein:   ['Ich bin müde.',         'Wir sind Kollegen.',     'Sie ist Lehrerin.'],
  haben:  ['Ich habe Hunger.',      'Wir haben Zeit.',        'Sie hat eine Idee.'],
  werden: ['Ich werde müde.',       'Es wird besser.',         'Sie werden langsamer.'],
};

const WK1_WHEN_TO_USE = [
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

const WK1_COMMON_MISTAKES = [
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

function AuxVerbsCheatsheet() {
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
          everything you build in Weeks 2–8 stands on these eighteen forms.
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
              {WK1_VERBS.map((v) => (
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
            {WK1_ROW_LABELS.map((label, i) => (
              <tr key={i} className="border-b border-slate-100 dark:border-slate-800 align-top">
                <td className="py-3 pr-3 whitespace-nowrap">
                  <div className="font-semibold">{CONJ.sein[i][0]}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">= {label.en}</div>
                  {label.note && (
                    <div className="text-[11px] text-slate-400 dark:text-slate-500 italic">{label.note}</div>
                  )}
                </td>
                {WK1_VERBS.map((v) => {
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
        {WK1_VERBS.map((v) => (
          <div key={v.key} className={`card bg-gradient-to-br ${v.accent}`}>
            <div className="font-extrabold text-xl">{v.key}</div>
            <div className="text-sm text-slate-500 mb-3">{v.en}</div>
            <ul className="space-y-2 text-sm">
              {WK1_EXAMPLES[v.key].map((s) => (
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
            {WK1_WHEN_TO_USE.map((row) => (
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
          {WK1_COMMON_MISTAKES.map((m) => (
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

      <OtherCheatsheets except="aux-verbs" />

      <footer className="text-center text-sm text-slate-500 pb-4">
        Ready for Week 2? <Link to="/day/8" className="font-semibold text-brand-700 dark:text-brand-300 hover:underline">→ Go to Day 8 (Numbers 30–100)</Link>
      </footer>
    </div>
  );
}

/* ===================== WEEK 2 — regular & separable verbs · TFP order ===================== */

const WK2_PRONOUNS = ['ich','du','er/sie/es','wir','ihr','sie/Sie'];

/* Regular-verb side-by-side. arbeiten illustrates the -t-stem extra-e rule. */
const WK2_REGULAR_VERBS = [
  { key: 'machen',   en: 'to do/make',  accent: 'from-brand-500/20    to-brand-500/5' },
  { key: 'lernen',   en: 'to learn',    accent: 'from-emerald-500/20  to-emerald-500/5' },
  { key: 'spielen',  en: 'to play',     accent: 'from-amber-500/20    to-amber-500/5' },
  { key: 'arbeiten', en: 'to work',     accent: 'from-rose-500/20     to-rose-500/5'    },
];

/* Stem-change irregulars commonly hit at A1. Only the singular changes. */
const WK2_STEM_CHANGERS = [
  { de: 'essen',    type: 'e → i',  forms: ['esse',    'isst',     'isst',    'essen',    'esst',    'essen']    },
  { de: 'sehen',    type: 'e → ie', forms: ['sehe',    'siehst',   'sieht',   'sehen',    'seht',    'sehen']    },
  { de: 'lesen',    type: 'e → ie', forms: ['lese',    'liest',    'liest',   'lesen',    'lest',    'lesen']    },
  { de: 'sprechen', type: 'e → i',  forms: ['spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen'] },
  { de: 'fahren',   type: 'a → ä',  forms: ['fahre',   'fährst',   'fährt',   'fahren',   'fahrt',   'fahren']   },
];

/* TFP word-order example list. */
const WK2_TFP_EXAMPLES = [
  { de: 'Ich höre am Wochenende oft gerne Musik.',           en: 'On the weekend, I often gladly listen to music.' },
  { de: 'Wir spielen jeden Tag manchmal Fußball.',           en: 'Every day, we sometimes play football.' },
  { de: 'Du trinkst nach der Arbeit immer Kaffee.',          en: 'After work, you always drink coffee.' },
  { de: 'Sie kocht in ihrer Freizeit gerne indisches Essen.', en: 'She gladly cooks Indian food in her free time.' },
];

const WK2_SEPARABLE_EXAMPLES = [
  { de: 'Ich stehe um sieben Uhr auf.',          en: 'I get up at seven.', verb: 'aufstehen' },
  { de: 'Wir kaufen am Samstag ein.',            en: 'We shop on Saturday.', verb: 'einkaufen' },
  { de: 'Du machst das Fenster auf.',            en: 'You open the window.', verb: 'aufmachen' },
  { de: 'Ich rufe meinen Freund an.',            en: 'I call my friend.', verb: 'anrufen' },
  { de: 'Mit Modal: Ich muss um sieben Uhr aufstehen.', en: 'With modal: no split — full infinitive at the end.', verb: 'aufstehen + müssen' },
];

const WK2_COMMON_MISTAKES = [
  {
    wrong: '✗ Du arbeitst viel.',
    right: '✓ Du arbeitest viel.',
    why:   'When the stem ends in -t / -d, slip an extra -e before -st / -t / -et. Same for redest, antwortest, findest.',
  },
  {
    wrong: '✗ Ich aufstehe um sieben Uhr.',
    right: '✓ Ich stehe um sieben Uhr auf.',
    why:   'Separable verbs SPLIT in a normal sentence — stem (stehe) in slot 2, prefix (auf) at the very end.',
  },
  {
    wrong: '✗ Ich rufe an meinen Freund.',
    right: '✓ Ich rufe meinen Freund an.',
    why:   'The prefix doesn\'t glue to the stem — it goes to the END of the clause.',
  },
  {
    wrong: '✗ Ich höre Musik gerne jeden Tag.',
    right: '✓ Ich höre jeden Tag gerne Musik.',
    why:   'Order of adverbs: TIME → FREQUENCY → PREFERENCE → OBJECT. The object lands LAST.',
  },
  {
    wrong: '✗ Du isst gerne Pizza? Ich auch esse Pizza gerne.',
    right: '✓ Ich esse auch gerne Pizza.',
    why:   'Stem-change verbs (essen → du isst / er isst) — but ich and the plurals stay regular. Plus "auch" goes near the verb, not at the start of an answer.',
  },
];

function RegularVerbsCheatsheet() {
  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm text-slate-500 hover:underline">← Back to dashboard</Link>

      <header className="rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-brand-500 text-white p-6 sm:p-8 shadow-md">
        <p className="uppercase tracking-widest text-xs opacity-90">Week 2 · Revision</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
          Cheatsheet: <span className="font-mono">regular · separable · TFP</span>
        </h1>
        <p className="mt-2 max-w-2xl opacity-90">
          Take any verb stem, add six endings, and you can build hundreds of sentences.
          Layer in separable prefixes and the time-frequency-preference order — and you
          have everything Week 2 demanded.
        </p>
        <div className="mt-4 flex gap-2 flex-wrap">
          <button onClick={() => window.print()} className="btn bg-white text-emerald-700 hover:bg-emerald-50">
            🖨️ Print / Save as PDF
          </button>
          <Link to="/day/10" className="btn bg-white/10 text-white hover:bg-white/20">Practise endings</Link>
          <Link to="/day/11" className="btn bg-white/10 text-white hover:bg-white/20">Practise common verbs</Link>
          <Link to="/day/12" className="btn bg-white/10 text-white hover:bg-white/20">Practise separables</Link>
          <Link to="/day/13" className="btn bg-white/10 text-white hover:bg-white/20">Practise TFP</Link>
        </div>
      </header>

      {/* The 6 endings — at-a-glance card */}
      <section aria-labelledby="endings" className="card">
        <h2 id="endings" className="font-bold mb-3">The six regular endings — memorise these</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
          {[
            ['ich',         '-e',  'mache, lerne, spiele'],
            ['du',          '-st', 'machst, lernst, spielst'],
            ['er/sie/es',   '-t',  'macht, lernt, spielt'],
            ['wir',         '-en', 'machen, lernen, spielen'],
            ['ihr',         '-t',  'macht, lernt, spielt'],
            ['sie / Sie',   '-en', 'machen, lernen, spielen'],
          ].map(([p, end, ex]) => (
            <div key={p} className="rounded-xl border border-emerald-200 dark:border-emerald-700/50 p-3 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950">
              <div className="text-xs uppercase tracking-wide text-slate-500">{p}</div>
              <div className="font-mono text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">{end}</div>
              <div className="text-xs text-slate-500 mt-1">{ex}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 p-3 text-sm">
          <strong>The -t / -d stem rule:</strong> if the stem ends in <code className="font-mono">-t</code> or <code className="font-mono">-d</code>
          (arbeiten, antworten, finden, reden), slip an <code className="font-mono">-e-</code> before <code className="font-mono">-st</code>, <code className="font-mono">-t</code> and <code className="font-mono">-et</code>.
          So: <em>du arbeitest, er arbeitet, ihr arbeitet</em> — never <em>du arbeitst</em>.
        </div>
      </section>

      {/* Big side-by-side regular conjugation table */}
      <section aria-labelledby="big-table" className="card overflow-x-auto">
        <h2 id="big-table" className="font-bold mb-3">Four regular verbs · all six pronouns</h2>
        <table className="w-full text-left border-collapse min-w-[720px]">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3 border-b-2 border-slate-200 dark:border-slate-700">Pronoun</th>
              {WK2_REGULAR_VERBS.map((v) => (
                <th key={v.key} className="py-2 px-3 border-b-2 border-slate-200 dark:border-slate-700">
                  <div className="text-base font-extrabold text-slate-900 dark:text-slate-100">{v.key}</div>
                  <div className="font-normal text-xs text-slate-500 normal-case">{v.en}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {WK2_PRONOUNS.map((pronoun, i) => (
              <tr key={pronoun} className="border-b border-slate-100 dark:border-slate-800 align-top">
                <td className="py-3 pr-3 whitespace-nowrap font-semibold">{pronoun}</td>
                {WK2_REGULAR_VERBS.map((v) => {
                  const form = CONJ[v.key]?.[i]?.[1];
                  if (!form) return <td key={v.key} className="py-3 px-3 text-slate-400">—</td>;
                  return (
                    <td key={v.key} className={`py-3 px-3 bg-gradient-to-br ${v.accent} rounded`}>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-base font-bold">{form}</span>
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
        <p className="text-xs text-slate-500 mt-2">
          Note <em>arbeiten</em>: stem ends in <code className="font-mono">-t</code> → an extra <code className="font-mono">-e-</code> sneaks in for du / er / ihr.
        </p>
      </section>

      {/* Stem-change irregulars */}
      <section aria-labelledby="irregs" className="card overflow-x-auto">
        <h2 id="irregs" className="font-bold mb-2">High-frequency stem-change verbs (du / er / sie / es ONLY)</h2>
        <p className="text-sm text-slate-500 mb-3">
          The vowel inside the stem changes only in the singular 2nd & 3rd person. ich and the plurals stay regular.
        </p>
        <table className="w-full text-left text-sm border-collapse min-w-[720px]">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3">Verb</th>
              <th className="py-2 pr-3">Pattern</th>
              {WK2_PRONOUNS.map((p) => (
                <th key={p} className="py-2 px-2 font-semibold normal-case">{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {WK2_STEM_CHANGERS.map((v) => (
              <tr key={v.de} className="border-t border-slate-200 dark:border-slate-800 align-top">
                <td className="py-2 pr-3 font-semibold whitespace-nowrap">
                  {v.de}
                  <Pron de={v.de} />
                </td>
                <td className="py-2 pr-3 font-mono text-xs whitespace-nowrap">{v.type}</td>
                {v.forms.map((f, i) => {
                  const changed = (i === 1 || i === 2);
                  return (
                    <td key={i} className={`py-2 px-2 font-mono ${changed ? 'text-rose-600 dark:text-rose-400 font-bold' : ''}`}>
                      {f}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Separable verbs */}
      <section aria-labelledby="separables" className="card">
        <h2 id="separables" className="font-bold mb-3">Separable verbs — the sandwich rule</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-brand-200 dark:border-brand-700/50 p-4 bg-gradient-to-br from-brand-50 to-white dark:from-slate-900 dark:to-slate-950">
            <div className="text-xs uppercase tracking-wide text-brand-700 dark:text-brand-300 mb-1">Plain sentence</div>
            <p className="font-bold">Stem in slot 2 · prefix at the very END.</p>
            <p className="font-mono mt-2 text-sm">Ich  stehe  um sieben Uhr  <span className="text-rose-600 dark:text-rose-400 font-bold">auf</span>.</p>
            <p className="font-mono text-sm">Wir  kaufen  am Samstag  <span className="text-rose-600 dark:text-rose-400 font-bold">ein</span>.</p>
          </div>
          <div className="rounded-xl border border-amber-200 dark:border-amber-700/50 p-4 bg-gradient-to-br from-amber-50 to-white dark:from-slate-900 dark:to-slate-950">
            <div className="text-xs uppercase tracking-wide text-amber-700 dark:text-amber-300 mb-1">With a modal — NO split</div>
            <p className="font-bold">Modal in slot 2 · full infinitive at the end.</p>
            <p className="font-mono mt-2 text-sm">Ich  muss  um sieben Uhr  <strong>aufstehen</strong>.</p>
            <p className="font-mono text-sm">Wir  wollen  am Samstag  <strong>einkaufen</strong>.</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Worked examples</div>
          <ul className="space-y-2 text-sm">
            {WK2_SEPARABLE_EXAMPLES.map((ex) => (
              <li key={ex.de} className="border-t border-slate-200 dark:border-slate-800 pt-2 first:border-0 first:pt-0">
                <div className="flex items-start gap-2">
                  <span className="font-semibold flex-1">{ex.de}</span>
                  <AudioButton text={ex.de} size="sm" />
                </div>
                <Pron de={ex.de} />
                <div className="text-xs text-slate-500">{ex.en} · <span className="italic">({ex.verb})</span></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TFP word order */}
      <section aria-labelledby="tfp" className="card">
        <h2 id="tfp" className="font-bold mb-3">Word order: Subject · Verb · Time · Frequency · Preference · Object</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[720px]">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-500">
                <th className="py-2 pr-3">Subject</th>
                <th className="py-2 pr-3">Verb (slot 2)</th>
                <th className="py-2 pr-3">Time</th>
                <th className="py-2 pr-3">Frequency</th>
                <th className="py-2 pr-3">Preference</th>
                <th className="py-2">Object</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="py-2 pr-3 font-mono">Ich</td>
                <td className="py-2 pr-3 font-mono font-bold text-emerald-700 dark:text-emerald-300">höre</td>
                <td className="py-2 pr-3 font-mono">am Wochenende</td>
                <td className="py-2 pr-3 font-mono">oft</td>
                <td className="py-2 pr-3 font-mono">gerne</td>
                <td className="py-2 font-mono">Musik.</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="py-2 pr-3 font-mono">Wir</td>
                <td className="py-2 pr-3 font-mono font-bold text-emerald-700 dark:text-emerald-300">spielen</td>
                <td className="py-2 pr-3 font-mono">jeden Tag</td>
                <td className="py-2 pr-3 font-mono">manchmal</td>
                <td className="py-2 pr-3 font-mono">—</td>
                <td className="py-2 font-mono">Fußball.</td>
              </tr>
              <tr className="border-t border-slate-200 dark:border-slate-800">
                <td className="py-2 pr-3 font-mono">Du</td>
                <td className="py-2 pr-3 font-mono font-bold text-emerald-700 dark:text-emerald-300">trinkst</td>
                <td className="py-2 pr-3 font-mono">nach der Arbeit</td>
                <td className="py-2 pr-3 font-mono">immer</td>
                <td className="py-2 pr-3 font-mono">—</td>
                <td className="py-2 font-mono">Kaffee.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
          <strong>Front-loading time</strong>: you can lead with the time phrase
          for emphasis — but the verb still keeps slot 2, so the subject moves AFTER the verb:
          <br />
          <span className="font-mono">→ Am Wochenende höre ich oft gerne Musik.</span>
        </p>
        <div className="mt-3 rounded-xl border border-slate-200 dark:border-slate-700 p-3">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Spoken examples</div>
          <ul className="space-y-2 text-sm">
            {WK2_TFP_EXAMPLES.map((ex) => (
              <li key={ex.de} className="border-t border-slate-200 dark:border-slate-800 pt-2 first:border-0 first:pt-0">
                <div className="flex items-start gap-2">
                  <span className="font-semibold flex-1">{ex.de}</span>
                  <AudioButton text={ex.de} size="sm" />
                </div>
                <Pron de={ex.de} />
                <div className="text-xs text-slate-500">{ex.en}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Self-introduction template */}
      <section aria-labelledby="intro" className="card bg-gradient-to-br from-brand-50 to-emerald-50 dark:from-slate-900 dark:to-slate-900 border-brand-200 dark:border-slate-700">
        <h2 id="intro" className="font-bold mb-2">Self-introduction template</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
          Mix-and-match these openers with vocab you already know. Memorise the SHAPE — fill in the blanks for any version of "you".
        </p>
        <ul className="space-y-2 text-sm font-mono">
          <li>Hallo! Mein Name ist <span className="text-rose-600">___</span>.</li>
          <li>Ich heiße <span className="text-rose-600">___</span>.</li>
          <li>Ich bin <span className="text-rose-600">___</span> Jahre alt.</li>
          <li>Ich komme aus <span className="text-rose-600">___</span>.</li>
          <li>Ich wohne in <span className="text-rose-600">___</span>.</li>
          <li>Ich arbeite als <span className="text-rose-600">___</span>.</li>
          <li>Ich lerne Deutsch.</li>
          <li>In meiner Freizeit <span className="text-rose-600">___</span> ich gerne <span className="text-rose-600">___</span>.</li>
        </ul>
      </section>

      {/* Common mistakes */}
      <section aria-labelledby="wk2-mistakes" className="card">
        <h2 id="wk2-mistakes" className="font-bold mb-3">Common mistakes</h2>
        <ul className="space-y-3">
          {WK2_COMMON_MISTAKES.map((m) => (
            <li key={m.right} className="border-t border-slate-200 dark:border-slate-800 pt-3 first:border-0 first:pt-0">
              <div className="text-rose-600 dark:text-rose-400 font-mono">{m.wrong}</div>
              <div className="text-emerald-700 dark:text-emerald-400 font-mono">{m.right}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">{m.why}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Memory hooks */}
      <section aria-labelledby="wk2-hooks" className="card">
        <h2 id="wk2-hooks" className="font-bold mb-2">Memory hooks</h2>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-200">
          <li>The endings sing-song: <em>e · st · t · en · t · en</em>. Six syllables. Drum it out for thirty seconds.</li>
          <li><strong>du and ihr share a "t"</strong> — easy to mix up. Listen for the <em>-st</em>: only du takes it.</li>
          <li>Stem ends in <em>-t / -d</em>? An <em>-e-</em> shows up to keep it pronounceable: arbeit-e-st, find-e-t, antwort-e-t.</li>
          <li>Separable verbs are like a sandwich: <em>stem · everything else · prefix</em>. The prefix LEAVES home, but always comes back at the end.</li>
          <li>TFP is alphabetical: <strong>T</strong>ime → <strong>F</strong>requency → <strong>P</strong>reference → object. The object lands last because the rest is "context" that prepares it.</li>
          <li>"gerne" is your one-word warmth dial. Drop it before the object to mean "I like to ___": <em>Ich trinke gerne Kaffee</em>.</li>
        </ul>
      </section>

      <OtherCheatsheets except="regular-verbs" />

      <footer className="text-center text-sm text-slate-500 pb-4">
        Ready for Week 3? <Link to="/day/15" className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">→ Go to Day 15 (Week 1+2 review)</Link>
      </footer>
    </div>
  );
}
