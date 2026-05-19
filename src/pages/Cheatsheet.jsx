import { Link, useParams } from 'react-router-dom';
import { CONJ } from '../data/curriculum.js';
import AudioButton from '../components/AudioButton.jsx';
import Pron from '../components/Pron.jsx';

/* ============================================================
   Slug-based router. Add a new entry here to ship more cheatsheets.
   ============================================================ */
export default function Cheatsheet() {
  const { slug = 'aux-verbs' } = useParams();

  if (slug === 'aux-verbs')          return <AuxVerbsCheatsheet />;
  if (slug === 'regular-verbs')      return <RegularVerbsCheatsheet />;
  if (slug === 'questions-numbers')  return <QuestionsNumbersCheatsheet />;
  if (slug === 'cases')              return <CasesCheatsheet />;
  if (slug === 'real-life')          return <RealLifeCheatsheet />;
  if (slug === 'pronouns-modals')    return <PronounsModalsCheatsheet />;

  return (
    <div className="card">
      Unknown cheatsheet. <Link to="/" className="text-brand-600">Back home</Link>
    </div>
  );
}

/* Cross-reference card linking to other cheatsheets — shown at the foot of each. */
function OtherCheatsheets({ except }) {
  const all = [
    { slug: 'aux-verbs',         emoji: '📋', title: 'Week 1 · sein · haben · werden' },
    { slug: 'regular-verbs',     emoji: '🧰', title: 'Week 2 · regular & separable verbs · TFP order' },
    { slug: 'questions-numbers', emoji: '❓', title: 'Week 3 · questions · numbers · prices' },
    { slug: 'cases',             emoji: '📐', title: 'Week 4 · cases — Akkusativ · Dativ · pronouns' },
    { slug: 'pronouns-modals',   emoji: '🧭', title: 'Week 5 · Dativ pronouns · Wechsel · possessives · modals' },
    { slug: 'real-life',         emoji: '🍽️', title: 'Week 6 · real life — modals II · glue · scenarios · negation' },
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

/* ===================== WEEK 3 — questions · numbers · prices ===================== */

const WK3_W_WORDS = [
  { de: 'wer',       en: 'who',           example: 'Wer ist das?',                  exEn: 'Who is that?' },
  { de: 'was',       en: 'what',          example: 'Was machst du?',                exEn: 'What are you doing?' },
  { de: 'wo',        en: 'where (at)',    example: 'Wo wohnst du?',                 exEn: 'Where do you live?' },
  { de: 'wohin',     en: 'where to',      example: 'Wohin gehst du?',               exEn: 'Where are you going?' },
  { de: 'woher',     en: 'where from',    example: 'Woher kommst du?',              exEn: 'Where are you from?' },
  { de: 'wann',      en: 'when',          example: 'Wann kommst du nach Hause?',    exEn: 'When are you coming home?' },
  { de: 'warum',     en: 'why',           example: 'Warum lernst du Deutsch?',      exEn: 'Why are you learning German?' },
  { de: 'wie',       en: 'how / what',    example: 'Wie heißt du?',                 exEn: 'What is your name?' },
  { de: 'welcher',   en: 'which (m)',     example: 'Welcher Tag ist heute?',        exEn: 'Which day is it today?' },
  { de: 'wie viel',  en: 'how much',      example: 'Wie viel kostet das?',          exEn: 'How much does it cost?' },
  { de: 'wie viele', en: 'how many',      example: 'Wie viele Bücher hast du?',     exEn: 'How many books do you have?' },
];

const WK3_NUMBER_BLOCKS = [
  { range: 'Units 0-12',     items: ['null','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf'] },
  { range: 'Teens 13-19',    items: ['dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn'] },
  { range: 'Tens 20-90',     items: ['zwanzig','dreißig','vierzig','fünfzig','sechzig','siebzig','achtzig','neunzig'] },
  { range: 'Big',            items: ['hundert','tausend','Million'] },
];

const WK3_NUMBER_RECIPES = [
  { num: '21',         spelled: 'einundzwanzig',                                  note: 'unit + UND + ten — drop the "s" of eins' },
  { num: '47',         spelled: 'siebenundvierzig',                               note: '"seven-and-forty"' },
  { num: '99',         spelled: 'neunundneunzig',                                 note: '' },
  { num: '125',        spelled: 'einhundertfünfundzwanzig',                       note: 'hundred + remaining tens, all one word' },
  { num: '365',        spelled: 'dreihundertfünfundsechzig',                      note: '' },
  { num: '1 234',      spelled: 'eintausendzweihundertvierunddreißig',            note: 'thousand + hundreds + flipped tens' },
  { num: '24 499',     spelled: 'vierundzwanzigtausendvierhundertneunundneunzig', note: 'still one word in classical style' },
  { num: '1 000 000',  spelled: 'eine Million',                                    note: 'feminine — eine Million, capital M' },
];

const WK3_PRICE_PHRASES = [
  { de: 'Wie viel kostet das?',         en: 'How much does it cost?' },
  { de: 'Was kostet das?',              en: 'What does that cost? (informal alt.)' },
  { de: 'Das kostet 13 Euro.',          en: 'That costs €13.' },
  { de: 'Das kostet 13 Euro fünfzig.',  en: 'That costs €13.50.' },
  { de: 'Ich möchte das kaufen.',       en: 'I would like to buy that.' },
  { de: 'Ich zahle mit Karte.',         en: 'I pay with card.' },
  { de: 'Das ist (zu) teuer.',          en: 'That is (too) expensive.' },
  { de: 'Das ist günstig.',             en: 'That is good value.' },
];

const WK3_COMMON_MISTAKES = [
  {
    wrong: '✗ Wo gehst du?',
    right: '✓ Wohin gehst du?',
    why:   '"wo" = where AT (no movement). Use "wohin" for where TO (movement).',
  },
  {
    wrong: '✗ Bist du nicht müde? — Ja!',
    right: '✓ Bist du nicht müde? — Doch! (yes, I am — contradicting)',
    why:   'After a NEGATIVE question, "doch" is the contradiction. "Ja" would mean "no, you\'re right, I\'m not tired".',
  },
  {
    wrong: '✗ einsundzwanzig',
    right: '✓ einundzwanzig',
    why:   '21 drops the -s of "eins" before -und. Same pattern at 31, 41, 51, 61, 71, 81, 91.',
  },
  {
    wrong: '✗ "1.234,56" reads as "one comma two three four"',
    right: '✓ "1.234,56" = "eintausendzweihundertvierunddreißig Euro sechsundfünfzig"',
    why:   'In German the DOT is the thousands separator and the COMMA is the decimal point — the opposite of English.',
  },
  {
    wrong: '✗ Du heißt wie?',
    right: '✓ Wie heißt du?',
    why:   'A W-question opens with the W-word; the verb stays in slot 2; the subject moves after the verb.',
  },
];

function QuestionsNumbersCheatsheet() {
  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm text-slate-500 hover:underline">← Back to dashboard</Link>

      <header className="rounded-3xl bg-gradient-to-br from-rose-600 via-orange-500 to-amber-500 text-white p-6 sm:p-8 shadow-md">
        <p className="uppercase tracking-widest text-xs opacity-90">Week 3 · Revision</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
          Cheatsheet: <span className="font-mono">questions · numbers · prices</span>
        </h1>
        <p className="mt-2 max-w-2xl opacity-90">
          Two ways to ask anything in German, eleven W-words, every number from
          0 to a million, and the comma-vs-dot rule that catches every English speaker.
        </p>
        <div className="mt-4 flex gap-2 flex-wrap">
          <button onClick={() => window.print()} className="btn bg-white text-rose-700 hover:bg-rose-50">
            🖨️ Print / Save as PDF
          </button>
          <Link to="/day/16" className="btn bg-white/10 text-white hover:bg-white/20">Practise Yes/No</Link>
          <Link to="/day/17" className="btn bg-white/10 text-white hover:bg-white/20">Practise W-questions</Link>
          <Link to="/day/18" className="btn bg-white/10 text-white hover:bg-white/20">Practise 100-1000</Link>
          <Link to="/day/19" className="btn bg-white/10 text-white hover:bg-white/20">Practise prices</Link>
        </div>
      </header>

      {/* Two question shapes */}
      <section aria-labelledby="q-shapes" className="card">
        <h2 id="q-shapes" className="font-bold mb-3">Two question shapes</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-rose-200 dark:border-rose-700/50 p-4 bg-gradient-to-br from-rose-50 to-white dark:from-slate-900 dark:to-slate-950">
            <div className="text-xs uppercase tracking-wide text-rose-700 dark:text-rose-300 mb-1">Yes / No question</div>
            <p className="font-bold">Verb in slot 1.</p>
            <p className="font-mono mt-2 text-sm">Bist du müde?</p>
            <p className="font-mono text-sm">Hat sie Hunger?</p>
            <p className="font-mono text-sm">Wohnst du in Berlin?</p>
            <p className="text-xs text-slate-500 mt-2">Answer with ja / nein / doch.</p>
          </div>
          <div className="rounded-xl border border-amber-200 dark:border-amber-700/50 p-4 bg-gradient-to-br from-amber-50 to-white dark:from-slate-900 dark:to-slate-950">
            <div className="text-xs uppercase tracking-wide text-amber-700 dark:text-amber-300 mb-1">W-question</div>
            <p className="font-bold">W-word slot 1 · verb slot 2 · subject slot 3.</p>
            <p className="font-mono mt-2 text-sm">Wer ist das?</p>
            <p className="font-mono text-sm">Wo wohnst du?</p>
            <p className="font-mono text-sm">Warum lernst du Deutsch?</p>
            <p className="text-xs text-slate-500 mt-2">Answer with full information.</p>
          </div>
        </div>
      </section>

      {/* All 11 W-words */}
      <section aria-labelledby="w-words" className="card overflow-x-auto">
        <h2 id="w-words" className="font-bold mb-3">All 11 W-words at a glance</h2>
        <table className="w-full text-left text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3">W-word</th>
              <th className="py-2 pr-3">Meaning</th>
              <th className="py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {WK3_W_WORDS.map((w) => (
              <tr key={w.de} className="border-t border-slate-200 dark:border-slate-800 align-top">
                <td className="py-2 pr-3 whitespace-nowrap">
                  <div className="font-mono font-bold">{w.de}</div>
                  <Pron de={w.de} />
                </td>
                <td className="py-2 pr-3 text-slate-600 dark:text-slate-300">{w.en}</td>
                <td className="py-2">
                  <div className="flex items-start gap-2">
                    <span className="font-medium flex-1">{w.example}</span>
                    <AudioButton text={w.example} size="sm" />
                  </div>
                  <Pron de={w.example} />
                  <div className="text-xs text-slate-500">{w.exEn}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* wo / wohin / woher trio */}
      <section aria-labelledby="wo-trio" className="card bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700">
        <h2 id="wo-trio" className="font-bold mb-2">⚠ The wo / wohin / woher trio</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3">Word</th>
              <th className="py-2 pr-3">Meaning</th>
              <th className="py-2">When you ask…</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-amber-200 dark:border-amber-800">
              <td className="py-2 pr-3 font-mono font-bold">wo</td>
              <td className="py-2 pr-3">where (at)</td>
              <td className="py-2">no movement: "Wo ist der Bahnhof?"</td>
            </tr>
            <tr className="border-t border-amber-200 dark:border-amber-800">
              <td className="py-2 pr-3 font-mono font-bold">wohin</td>
              <td className="py-2 pr-3">where TO</td>
              <td className="py-2">movement away: "Wohin gehst du?"</td>
            </tr>
            <tr className="border-t border-amber-200 dark:border-amber-800">
              <td className="py-2 pr-3 font-mono font-bold">woher</td>
              <td className="py-2 pr-3">where FROM</td>
              <td className="py-2">origin: "Woher kommst du?"</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Yes/No answer trio */}
      <section aria-labelledby="answer-trio" className="card">
        <h2 id="answer-trio" className="font-bold mb-2">Answering Yes/No: ja · nein · doch</h2>
        <ul className="space-y-2 text-sm">
          <li><strong className="font-mono">ja</strong> — yes, to a positive question. <em>Bist du müde? — Ja!</em></li>
          <li><strong className="font-mono">nein</strong> — no. <em>Bist du müde? — Nein!</em></li>
          <li><strong className="font-mono">doch</strong> — YES (contradicting a negative). <em>Bist du nicht müde? — Doch!</em> ("Yes I am — you assumed wrong.")</li>
        </ul>
        <div className="mt-3 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-700 p-3 text-sm">
          <strong>Hard fact:</strong> English has no "doch" — speakers usually emphasise "yes I AM!".
          German has the dedicated word; use it after every negative question.
        </div>
      </section>

      {/* Number building blocks */}
      <section aria-labelledby="num-blocks" className="card">
        <h2 id="num-blocks" className="font-bold mb-3">Number building blocks</h2>
        <div className="grid gap-3">
          {WK3_NUMBER_BLOCKS.map((b) => (
            <div key={b.range} className="rounded-xl border border-slate-200 dark:border-slate-700 p-3">
              <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">{b.range}</div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm">
                {b.items.map((it) => <span key={it}>{it}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 p-3 text-sm">
          <strong>The flip rule (21+):</strong> read units BEFORE tens. 21 = <em>einundzwanzig</em> ("one-and-twenty"),
          76 = <em>sechsundsiebzig</em> ("six-and-seventy"). German keeps this even at 1234.
        </div>
      </section>

      {/* Number recipes */}
      <section aria-labelledby="num-recipes" className="card overflow-x-auto">
        <h2 id="num-recipes" className="font-bold mb-3">How big numbers are built</h2>
        <table className="w-full text-left text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3">Number</th>
              <th className="py-2 pr-3">Spoken</th>
              <th className="py-2">Pattern note</th>
            </tr>
          </thead>
          <tbody>
            {WK3_NUMBER_RECIPES.map((n) => (
              <tr key={n.num} className="border-t border-slate-200 dark:border-slate-800 align-top">
                <td className="py-2 pr-3 font-mono font-bold tabular-nums whitespace-nowrap">{n.num}</td>
                <td className="py-2 pr-3">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm flex-1">{n.spelled}</span>
                    <AudioButton text={n.spelled} size="sm" />
                  </div>
                  <Pron de={n.spelled} />
                </td>
                <td className="py-2 text-xs text-slate-500">{n.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Comma vs dot */}
      <section aria-labelledby="comma-dot" className="card bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700">
        <h2 id="comma-dot" className="font-bold mb-2">⚠ Comma vs dot — opposite of English</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 p-3">
            <div className="text-xs uppercase tracking-wide text-slate-500">English</div>
            <p className="font-mono text-base mt-1">1,234.56</p>
            <p className="text-xs text-slate-500 mt-1">comma = thousands · dot = decimal</p>
          </div>
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 p-3">
            <div className="text-xs uppercase tracking-wide text-slate-500">German</div>
            <p className="font-mono text-base mt-1">1.234,56</p>
            <p className="text-xs text-slate-500 mt-1">DOT = thousands · COMMA = decimal</p>
          </div>
        </div>
        <p className="mt-3 text-sm">
          1.234,56 € reads as <em>"eintausendzweihundertvierunddreißig Euro sechsundfünfzig"</em>
          (or just <em>"…fünfzig"</em> — Cents are usually dropped in speech).
        </p>
      </section>

      {/* Price phrases */}
      <section aria-labelledby="prices" className="card">
        <h2 id="prices" className="font-bold mb-3">Asking and giving prices</h2>
        <ul className="space-y-2 text-sm">
          {WK3_PRICE_PHRASES.map((p) => (
            <li key={p.de} className="border-t border-slate-200 dark:border-slate-800 pt-2 first:border-0 first:pt-0">
              <div className="flex items-start gap-2">
                <span className="font-semibold flex-1">{p.de}</span>
                <AudioButton text={p.de} size="sm" />
              </div>
              <Pron de={p.de} />
              <div className="text-xs text-slate-500">{p.en}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Common mistakes */}
      <section aria-labelledby="wk3-mistakes" className="card">
        <h2 id="wk3-mistakes" className="font-bold mb-3">Common mistakes</h2>
        <ul className="space-y-3">
          {WK3_COMMON_MISTAKES.map((m) => (
            <li key={m.right} className="border-t border-slate-200 dark:border-slate-800 pt-3 first:border-0 first:pt-0">
              <div className="text-rose-600 dark:text-rose-400 font-mono">{m.wrong}</div>
              <div className="text-emerald-700 dark:text-emerald-400 font-mono">{m.right}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">{m.why}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Memory hooks */}
      <section aria-labelledby="wk3-hooks" className="card">
        <h2 id="wk3-hooks" className="font-bold mb-2">Memory hooks</h2>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-200">
          <li><strong>Yes/No = verb forward.</strong> The verb walks to slot 1 and asks the question itself — no helper word needed.</li>
          <li><strong>W-word = priority pass.</strong> Whatever info you want most goes first; the verb still keeps slot 2.</li>
          <li><strong>wo / wohin / woher</strong> form a movement triangle: AT · TO · FROM. Picture an arrow.</li>
          <li><strong>doch</strong> only fires after a NEGATIVE question. Default to ja for everything else.</li>
          <li><strong>Numbers flip in the tens:</strong> 21 = "one and twenty", 99 = "nine and ninety". Units come before tens once you cross 20.</li>
          <li><strong>Big numbers are LEGO:</strong> hundreds + tens-flip, written as ONE word in classical style. Modern usage allows spaces for readability.</li>
          <li><strong>Decimal trap:</strong> a German comma is what an American calls a decimal point.</li>
        </ul>
      </section>

      <OtherCheatsheets except="questions-numbers" />

      <footer className="text-center text-sm text-slate-500 pb-4">
        Ready for Week 4? <Link to="/day/22" className="font-semibold text-rose-700 dark:text-rose-300 hover:underline">→ Go to Day 22 (Akkusativ — feminine, neuter, plural)</Link>
      </footer>
    </div>
  );
}

/* ===================== WEEK 4 — cases · Akkusativ · Dativ · pronouns ===================== */

/* Big article table — rows are gender, columns are Nom / Akk / Dat. */
const WK4_ARTICLE_ROWS = [
  {
    label: 'masculine (der)',
    accent: 'from-violet-500/15 to-violet-500/5',
    examples: 'der Mann · der Tisch · der Hund',
    def:   { Nom: 'der',  Akk: 'den',  Dat: 'dem'   },
    indef: { Nom: 'ein',  Akk: 'einen', Dat: 'einem' },
    flag: 'Akk + Dat both change. The masculine column is the busiest in German.',
  },
  {
    label: 'feminine (die)',
    accent: 'from-rose-500/15 to-rose-500/5',
    examples: 'die Frau · die Tasche · die Stadt',
    def:   { Nom: 'die', Akk: 'die', Dat: 'der' },
    indef: { Nom: 'eine', Akk: 'eine', Dat: 'einer' },
    flag: 'Akk = Nom (no change). Only Dat changes (die → der).',
  },
  {
    label: 'neuter (das)',
    accent: 'from-amber-500/15 to-amber-500/5',
    examples: 'das Buch · das Kind · das Handy',
    def:   { Nom: 'das', Akk: 'das', Dat: 'dem' },
    indef: { Nom: 'ein', Akk: 'ein', Dat: 'einem' },
    flag: 'Akk = Nom (no change). Only Dat changes (das → dem).',
  },
  {
    label: 'plural (die)',
    accent: 'from-emerald-500/15 to-emerald-500/5',
    examples: 'die Bücher · die Kinder · die Leute',
    def:   { Nom: 'die', Akk: 'die', Dat: 'den + n' },
    indef: { Nom: '—', Akk: '—', Dat: '—' },
    flag: 'Plural Dat: article = den, AND the noun adds -n if it doesn\'t already end in one (Bücher → den Büchern).',
  },
];

const WK4_AKK_PRONOUNS = [
  { nom: 'ich',     akk: 'mich',  en: 'me' },
  { nom: 'du',      akk: 'dich',  en: 'you (1 friend)' },
  { nom: 'er',      akk: 'ihn',   en: 'him' },
  { nom: 'sie',     akk: 'sie',   en: 'her  (unchanged)' },
  { nom: 'es',      akk: 'es',    en: 'it  (unchanged)' },
  { nom: 'wir',     akk: 'uns',   en: 'us' },
  { nom: 'ihr',     akk: 'euch',  en: 'you all' },
  { nom: 'sie/Sie', akk: 'sie/Sie', en: 'them / formal you  (unchanged)' },
];

const WK4_DATIV_PREPS = [
  { de: 'mit',        en: 'with' },
  { de: 'bei',        en: 'at / near / with (a person)' },
  { de: 'zu',         en: 'to (a place / person)' },
  { de: 'von',        en: 'from / of' },
  { de: 'nach',       en: 'to (city / country) · after' },
  { de: 'aus',        en: 'out of / from (origin)' },
  { de: 'seit',       en: 'since / for (a duration)' },
  { de: 'gegenüber',  en: 'opposite' },
];

const WK4_DATIV_VERBS = [
  { de: 'helfen',     en: 'to help (someone)',         example: 'Ich helfe dem Vater.' },
  { de: 'danken',     en: 'to thank',                  example: 'Wir danken der Lehrerin.' },
  { de: 'gehören',    en: 'to belong to',              example: 'Das Buch gehört dem Kind.' },
  { de: 'gefallen',   en: 'to please / to be liked by', example: 'Die Stadt gefällt mir.' },
  { de: 'antworten',  en: 'to answer (someone)',       example: 'Du antwortest den Kollegen.' },
  { de: 'glauben',    en: 'to believe (someone)',      example: 'Ich glaube der Frau.' },
  { de: 'gratulieren',en: 'to congratulate',            example: 'Wir gratulieren dem Chef.' },
];

const WK4_CONTRACTIONS = [
  { combo: 'in + dem', short: 'im',   case: 'Dat',    example: 'Ich bin im Restaurant.' },
  { combo: 'an + dem', short: 'am',   case: 'Dat',    example: 'Ich arbeite am Wochenende.' },
  { combo: 'bei + dem',short: 'beim', case: 'Dat',    example: 'Ich bin beim Bäcker.' },
  { combo: 'von + dem',short: 'vom',  case: 'Dat',    example: 'Ich komme vom Bahnhof.' },
  { combo: 'zu + dem', short: 'zum',  case: 'Dat',    example: 'Ich gehe zum Arzt.' },
  { combo: 'zu + der', short: 'zur',  case: 'Dat',    example: 'Ich gehe zur Schule.' },
];

const WK4_COMMON_MISTAKES = [
  {
    wrong: '✗ Ich sehe der Tisch.',
    right: '✓ Ich sehe den Tisch.',
    why:   'sehen takes Akkusativ, and masculine der → den. (sehen-mistakes are the #1 case error.)',
  },
  {
    wrong: '✗ Ich helfe den Vater.',
    right: '✓ Ich helfe dem Vater.',
    why:   'helfen takes Dativ. Masculine Dat = dem. Memorise: helfen / danken / gefallen / gehören / antworten / glauben → all Dativ.',
  },
  {
    wrong: '✗ Ich fahre mit das Auto.',
    right: '✓ Ich fahre mit dem Auto.',
    why:   '"mit" is one of the eight always-Dativ prepositions. Neuter Dat = dem.',
  },
  {
    wrong: '✗ Ich sehe du.',
    right: '✓ Ich sehe dich.',
    why:   'After an Akk verb, pronouns shape-shift: du → dich. (mich/dich/ihn → Akk pronouns.)',
  },
  {
    wrong: '✗ Ich liebe die Stadt — die Stadt gefällt mich.',
    right: '✓ Die Stadt gefällt mir.',
    why:   'gefallen + DATIV. The thing is the subject; the person is in Dat. "I like X" → "X gefällt mir".',
  },
  {
    wrong: '✗ Ich gehe in den Bahnhof am Wochenende.   (a sentence-ending nest of cases)',
    right: '✓ Am Wochenende gehe ich zum Bahnhof.',
    why:   'zu (always Dat) + dem → zum. Plus: when time leads (Am Wochenende) the verb keeps slot 2 — subject moves after.',
  },
];

function CasesCheatsheet() {
  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm text-slate-500 hover:underline">← Back to dashboard</Link>

      <header className="rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-500 to-brand-500 text-white p-6 sm:p-8 shadow-md">
        <p className="uppercase tracking-widest text-xs opacity-90">Week 4 · Revision</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
          Cheatsheet: <span className="font-mono">cases — Akkusativ · Dativ · pronouns</span>
        </h1>
        <p className="mt-2 max-w-2xl opacity-90">
          The single most decisive revision in Week 4. Twelve article slots, eight always-Dativ
          prepositions, seven Dativ verbs, eight Akkusativ pronouns — and a decision tree that
          tells you which case to use in 5 seconds.
        </p>
        <div className="mt-4 flex gap-2 flex-wrap">
          <button onClick={() => window.print()} className="btn bg-white text-violet-700 hover:bg-violet-50">
            🖨️ Print / Save as PDF
          </button>
          <Link to="/day/22" className="btn bg-white/10 text-white hover:bg-white/20">Practise Akk f/n/pl</Link>
          <Link to="/day/25" className="btn bg-white/10 text-white hover:bg-white/20">Practise Dat preps</Link>
          <Link to="/day/26" className="btn bg-white/10 text-white hover:bg-white/20">Practise Dat verbs</Link>
          <Link to="/day/28" className="btn bg-white/10 text-white hover:bg-white/20">Practise Akk pronouns</Link>
        </div>
      </header>

      {/* The big article table */}
      <section aria-labelledby="big-table" className="card overflow-x-auto">
        <h2 id="big-table" className="font-bold mb-3">The 12 article slots — definite & indefinite × Nom / Akk / Dat</h2>
        <table className="w-full text-left text-sm border-collapse min-w-[760px]">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3 border-b-2 border-slate-200 dark:border-slate-700">Gender</th>
              <th className="py-2 px-2 border-b-2 border-slate-200 dark:border-slate-700">Nom</th>
              <th className="py-2 px-2 border-b-2 border-slate-200 dark:border-slate-700">Akk</th>
              <th className="py-2 px-2 border-b-2 border-slate-200 dark:border-slate-700">Dat</th>
              <th className="py-2 px-2 border-b-2 border-slate-200 dark:border-slate-700">Indef.&nbsp;Nom</th>
              <th className="py-2 px-2 border-b-2 border-slate-200 dark:border-slate-700">Indef.&nbsp;Akk</th>
              <th className="py-2 pl-2 border-b-2 border-slate-200 dark:border-slate-700">Indef.&nbsp;Dat</th>
            </tr>
          </thead>
          <tbody>
            {WK4_ARTICLE_ROWS.map((row) => (
              <tr key={row.label} className={`border-b border-slate-100 dark:border-slate-800 align-top bg-gradient-to-br ${row.accent}`}>
                <td className="py-3 pr-3">
                  <div className="font-semibold whitespace-nowrap">{row.label}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">{row.examples}</div>
                  <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">{row.flag}</div>
                </td>
                {['Nom','Akk','Dat'].map((c) => (
                  <td key={`d-${c}`} className="py-3 px-2 font-mono font-bold">{row.def[c]}</td>
                ))}
                {['Nom','Akk','Dat'].map((c) => (
                  <td key={`i-${c}`} className="py-3 px-2 font-mono">{row.indef[c]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-slate-500 mt-3">
          The masculine column does ALL the case work. Feminine + neuter only change in the Dativ.
        </p>
      </section>

      {/* The decision tree */}
      <section aria-labelledby="decision-tree" className="card">
        <h2 id="decision-tree" className="font-bold mb-3">Decision tree — which case do I need?</h2>
        <ol className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-200">
          <li><strong>Is the noun the subject (the doer)?</strong> → Nominativ.   Ask "<em>Wer / Was?</em>".</li>
          <li><strong>Is it the direct object (what is being verbed)?</strong> → Akkusativ.   Ask "<em>Wen / Was?</em>".</li>
          <li><strong>Is it after one of the 8 Dativ prepositions?</strong>  (<em>mit · bei · zu · von · nach · aus · seit · gegenüber</em>) → Dativ.</li>
          <li><strong>Is it the object of a Dativ verb?</strong>  (<em>helfen · danken · gehören · gefallen · antworten · glauben · gratulieren</em>) → Dativ.</li>
          <li>Otherwise → Akkusativ is the safer default at A1.</li>
        </ol>
      </section>

      {/* Akkusativ pronouns */}
      <section aria-labelledby="akk-pronouns" className="card overflow-x-auto">
        <h2 id="akk-pronouns" className="font-bold mb-3">Akkusativ pronouns — most change shape</h2>
        <table className="w-full text-left text-sm border-collapse min-w-[520px]">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3">Subject (Nom)</th>
              <th className="py-2 pr-3">Object (Akk)</th>
              <th className="py-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {WK4_AKK_PRONOUNS.map((row) => (
              <tr key={row.nom} className="border-t border-slate-200 dark:border-slate-800">
                <td className="py-2 pr-3 font-mono">{row.nom}</td>
                <td className="py-2 pr-3 font-mono font-bold text-violet-700 dark:text-violet-300">{row.akk}</td>
                <td className="py-2 text-slate-600 dark:text-slate-300">{row.en}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-slate-500 mt-2">
          sie / es / sie(pl) / Sie keep the same form across cases. Everything else shape-shifts.
        </p>
      </section>

      {/* Dativ — preps + verbs */}
      <section aria-labelledby="dativ" className="grid md:grid-cols-2 gap-4">
        <h2 id="dativ" className="sr-only">Dativ — prepositions and verbs</h2>
        <div className="card">
          <h3 className="font-bold mb-2">8 always-Dativ prepositions</h3>
          <p className="text-sm text-slate-500 mb-2">Every noun after these is in Dativ. Memorise as one block.</p>
          <ul className="space-y-2 text-sm">
            {WK4_DATIV_PREPS.map((p) => (
              <li key={p.de} className="border-t border-slate-200 dark:border-slate-800 pt-2 first:border-0 first:pt-0">
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold flex-1">{p.de}</span>
                  <AudioButton text={p.de} size="sm" />
                </div>
                <Pron de={p.de} />
                <div className="text-xs text-slate-500">{p.en}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="font-bold mb-2">7 Dativ verbs</h3>
          <p className="text-sm text-slate-500 mb-2">Their human object goes in Dativ — not Akkusativ.</p>
          <ul className="space-y-2 text-sm">
            {WK4_DATIV_VERBS.map((v) => (
              <li key={v.de} className="border-t border-slate-200 dark:border-slate-800 pt-2 first:border-0 first:pt-0">
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold flex-1">{v.de}</span>
                  <AudioButton text={v.de} size="sm" />
                </div>
                <Pron de={v.de} />
                <div className="text-xs text-slate-500">{v.en}</div>
                <div className="mt-1 text-xs italic text-slate-600 dark:text-slate-300">e.g. „{v.example}"</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contractions */}
      <section aria-labelledby="contractions" className="card">
        <h2 id="contractions" className="font-bold mb-3">Common contractions you'll hear every day</h2>
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3">Combo</th>
              <th className="py-2 pr-3">Short form</th>
              <th className="py-2 pr-3">Case</th>
              <th className="py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            {WK4_CONTRACTIONS.map((c) => (
              <tr key={c.short} className="border-t border-slate-200 dark:border-slate-800">
                <td className="py-2 pr-3 font-mono">{c.combo}</td>
                <td className="py-2 pr-3 font-mono font-bold text-violet-700 dark:text-violet-300">{c.short}</td>
                <td className="py-2 pr-3 text-xs">{c.case}</td>
                <td className="py-2">
                  <div className="flex items-start gap-2">
                    <span className="font-medium flex-1">{c.example}</span>
                    <AudioButton text={c.example} size="sm" />
                  </div>
                  <Pron de={c.example} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-slate-500 mt-3">
          Wechselpräpositionen (in / an / auf with switching cases) and their Akk-side contractions
          ins / ans land in Week 5.
        </p>
      </section>

      {/* gefallen — flipped meaning callout */}
      <section aria-labelledby="gefallen" className="card bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700">
        <h2 id="gefallen" className="font-bold mb-2">⚠ "I like X" in German is BACKWARDS</h2>
        <p className="text-sm text-slate-700 dark:text-slate-200 mb-2">
          English: "<em>I like the city.</em>" — subject is "I".
          <br />
          German:&nbsp; "<em>Die Stadt gefällt mir.</em>" — literally <strong>"The city pleases me."</strong>
        </p>
        <ul className="text-sm space-y-1">
          <li><span className="font-mono">Die Stadt</span> = subject (Nominativ)</li>
          <li><span className="font-mono">gefällt</span> = verb (3rd singular agreeing with Stadt)</li>
          <li><span className="font-mono">mir</span> = the person being pleased (Dativ)</li>
        </ul>
        <p className="mt-2 text-sm">
          Same shape for <em>schmecken</em> (to taste good), <em>passen</em> (to fit), <em>gehören</em> (to belong).
          The THING is the subject, the PERSON is in Dativ.
        </p>
      </section>

      {/* Common mistakes */}
      <section aria-labelledby="wk4-mistakes" className="card">
        <h2 id="wk4-mistakes" className="font-bold mb-3">Common mistakes</h2>
        <ul className="space-y-3">
          {WK4_COMMON_MISTAKES.map((m) => (
            <li key={m.right} className="border-t border-slate-200 dark:border-slate-800 pt-3 first:border-0 first:pt-0">
              <div className="text-rose-600 dark:text-rose-400 font-mono">{m.wrong}</div>
              <div className="text-emerald-700 dark:text-emerald-400 font-mono">{m.right}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">{m.why}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Memory hooks */}
      <section aria-labelledby="wk4-hooks" className="card">
        <h2 id="wk4-hooks" className="font-bold mb-2">Memory hooks</h2>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-200">
          <li><strong>Masculine carries the load.</strong> Only der/ein change in Akk. Only der/ein/das change in Dat. Feminine + plural Nom and Akk are identical — that's why most of German feels easier than expected.</li>
          <li><strong>Dat plural = den + n.</strong> "Ich spreche mit den Studenten." Always add the -n if the noun doesn't already have one.</li>
          <li><strong>Sing the eight Dativ preps</strong> as one breath: <em>mit · bei · zu · von · nach · aus · seit · gegenüber</em>. Once they're a chant, you never miss them in a sentence.</li>
          <li><strong>Helfen, danken, gehören, gefallen, antworten, glauben, gratulieren</strong> — all Dativ. The trick: most of them have a HUMAN as the indirect object — you help / thank / answer / believe / congratulate <em>someone</em>.</li>
          <li><strong>Akk-pronoun shortcut:</strong> three end in <em>-ich</em> (mich, dich), three drop to schwa-y forms (ihn, uns, euch). sie / es / Sie don't move.</li>
          <li><strong>Contractions are habits, not exceptions.</strong> Native speakers always say "im / am / beim / vom / zum / zur" — never "in dem / an dem". Pick one a day to use.</li>
          <li><strong>"I like X" lives in your bones.</strong> Don't translate word for word — flip it: <em>X gefällt mir</em>.</li>
        </ul>
      </section>

      <OtherCheatsheets except="cases" />

      <footer className="text-center text-sm text-slate-500 pb-4">
        Ready for Week 5? <Link to="/day/29" className="font-semibold text-violet-700 dark:text-violet-300 hover:underline">→ Go to Day 29 (Dativ pronouns)</Link>
      </footer>
    </div>
  );
}

/* ===================== WEEK 5 — Dativ pronouns · Wechsel · possessives · modals ===================== */

/* Akkusativ + Dativ pronoun pair table — side-by-side for instant comparison */
const WK5_PRONOUN_PAIRS = [
  { nom: 'ich',     akk: 'mich', dat: 'mir',   en: 'I / me / to me' },
  { nom: 'du',      akk: 'dich', dat: 'dir',   en: 'you / you / to you (1 friend)' },
  { nom: 'er',      akk: 'ihn',  dat: 'ihm',   en: 'he / him / to him' },
  { nom: 'sie',     akk: 'sie',  dat: 'ihr',   en: 'she / her / to her' },
  { nom: 'es',      akk: 'es',   dat: 'ihm',   en: 'it / it / to it' },
  { nom: 'wir',     akk: 'uns',  dat: 'uns',   en: 'we / us / to us  ✓ same in both' },
  { nom: 'ihr',     akk: 'euch', dat: 'euch',  en: 'you all / you all / to you all  ✓ same in both' },
  { nom: 'sie/Sie', akk: 'sie/Sie', dat: 'ihnen/Ihnen', en: 'they / them / to them  (Sie/Ihnen for formal you)' },
];

const WK5_WECHSEL_PREPS = [
  { de: 'in',     en: 'in / into',         wo: 'in dem (im)',     wohin: 'in das (ins)' },
  { de: 'an',     en: 'at / on',           wo: 'an dem (am)',     wohin: 'an das (ans)' },
  { de: 'auf',    en: 'on / onto',         wo: 'auf dem',         wohin: 'auf das (aufs)' },
  { de: 'unter',  en: 'under / beneath',   wo: 'unter dem',       wohin: 'unter den/die/das' },
  { de: 'über',   en: 'over / above',      wo: 'über dem',        wohin: 'über den/die/das' },
  { de: 'vor',    en: 'in front of',       wo: 'vor dem',         wohin: 'vor den/die/das' },
  { de: 'hinter', en: 'behind',            wo: 'hinter dem',      wohin: 'hinter den/die/das' },
  { de: 'neben',  en: 'next to',           wo: 'neben dem',       wohin: 'neben den/die/das' },
  { de: 'zwischen', en: 'between',          wo: 'zwischen dem',    wohin: 'zwischen den/die/das' },
];

/* Possessivpronomen — every person × every case-and-gender */
const WK5_POSSESSIVES = [
  { person: 'ich',     pos: 'mein',  meaning: 'my' },
  { person: 'du',      pos: 'dein',  meaning: 'your (1 friend)' },
  { person: 'er',      pos: 'sein',  meaning: 'his' },
  { person: 'sie',     pos: 'ihr',   meaning: 'her' },
  { person: 'es',      pos: 'sein',  meaning: 'its' },
  { person: 'wir',     pos: 'unser', meaning: 'our' },
  { person: 'ihr',     pos: 'euer',  meaning: 'your (group of friends)' },
  { person: 'sie',     pos: 'ihr',   meaning: 'their' },
  { person: 'Sie',     pos: 'Ihr',   meaning: 'your (formal — capital I)' },
];

/* Possessive declension table using mein as the template — all other persons follow the same shape */
const WK5_MEIN_DECLENSION = [
  { case: 'Nominativ', m: 'mein',   f: 'meine',  n: 'mein',   pl: 'meine' },
  { case: 'Akkusativ', m: 'meinen', f: 'meine',  n: 'mein',   pl: 'meine' },
  { case: 'Dativ',     m: 'meinem', f: 'meiner', n: 'meinem', pl: 'meinen +n' },
];

/* Standalone (independent) possessive — used WITHOUT a noun after it ("It's mine"). */
const WK5_MEIN_STANDALONE = [
  { case: 'Nominativ', m: 'meiner', f: 'meine',  n: 'mein(e)s', pl: 'meine' },
  { case: 'Akkusativ', m: 'meinen', f: 'meine',  n: 'mein(e)s', pl: 'meine' },
  { case: 'Dativ',     m: 'meinem', f: 'meiner', n: 'meinem',   pl: 'meinen' },
];

/* Modal verbs (Day 35 — können · müssen · wollen) */
const WK5_MODALS = [
  {
    verb: 'können', en: 'can / to be able to', emoji: '💪',
    accent: 'from-teal-500/20 to-teal-500/5',
    rows: [['ich','kann'],['du','kannst'],['er/sie/es','kann'],['wir','können'],['ihr','könnt'],['sie/Sie','können']],
    example: 'Ich kann Deutsch sprechen.',
  },
  {
    verb: 'müssen', en: 'must / have to', emoji: '⚠',
    accent: 'from-rose-500/20 to-rose-500/5',
    rows: [['ich','muss'],['du','musst'],['er/sie/es','muss'],['wir','müssen'],['ihr','müsst'],['sie/Sie','müssen']],
    example: 'Ich muss heute arbeiten.',
  },
  {
    verb: 'wollen', en: 'to want to', emoji: '🎯',
    accent: 'from-amber-500/20 to-amber-500/5',
    rows: [['ich','will'],['du','willst'],['er/sie/es','will'],['wir','wollen'],['ihr','wollt'],['sie/Sie','wollen']],
    example: 'Ich will einen Kaffee trinken.',
  },
];

const WK5_FAMILY_QUICK = [
  { de: 'der Vater',    en: 'father' },
  { de: 'die Mutter',   en: 'mother' },
  { de: 'der Bruder',   en: 'brother' },
  { de: 'die Schwester', en: 'sister' },
  { de: 'der Sohn',     en: 'son' },
  { de: 'die Tochter',  en: 'daughter' },
  { de: 'die Eltern',   en: 'parents' },
  { de: 'die Großeltern', en: 'grandparents' },
];

const WK5_ROUTINE_QUICK = [
  { de: 'aufstehen',  en: 'to get up',          time: 'morgens' },
  { de: 'frühstücken', en: 'to have breakfast', time: 'morgens' },
  { de: 'arbeiten',   en: 'to work',             time: 'vormittags' },
  { de: 'Mittagessen', en: 'lunch',              time: 'mittags' },
  { de: 'nach Hause gehen', en: 'go home',       time: 'abends' },
  { de: 'fernsehen',  en: 'watch TV',            time: 'abends' },
  { de: 'schlafen',   en: 'to sleep',            time: 'nachts' },
];

const WK5_COMMON_MISTAKES = [
  {
    wrong: '✗ Er hilft mich.',
    right: '✓ Er hilft mir.',
    why:   'helfen takes DATIV — and "me" in Dativ is "mir", not "mich". Same for danken / gefallen / gehören.',
  },
  {
    wrong: '✗ Ich gehe in der Stadt.',
    right: '✓ Ich gehe in die Stadt.   (= I go INTO town)',
    why:   'in + Wohin? (movement INTO) → Akkusativ → in DIE Stadt. "in der Stadt" means "I am IN the city" (location, no movement) → Dativ.',
  },
  {
    wrong: '✗ Mein Mutter ist Lehrerin.',
    right: '✓ Meine Mutter ist Lehrerin.',
    why:   'Possessives take the same endings as ein/eine. Mutter is feminine → meine (Nominativ).',
  },
  {
    wrong: '✗ Ich kann Deutsch sprechen heute.',
    right: '✓ Ich kann heute Deutsch sprechen.',
    why:   'After a modal, the SECOND infinitive (sprechen) must be the very LAST word in the sentence. Time, place and object squeeze in BETWEEN the modal and the infinitive.',
  },
  {
    wrong: '✗ Ich muss aufstehen um 7 Uhr.',
    right: '✓ Ich muss um 7 Uhr aufstehen.',
    why:   'Same rule — separable infinitive at the very end after a modal.',
  },
  {
    wrong: '✗ Ich euer Auto.',
    right: '✓ Ich liebe euer Auto.',
    why:   'euer drops the e in feminine/Akk masc plural: eure / euren / euren / eurem. But before a neuter Akk like Auto, it stays as "euer".',
  },
];

function PronounsModalsCheatsheet() {
  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm text-slate-500 hover:underline">← Back to dashboard</Link>

      <header className="rounded-3xl bg-gradient-to-br from-teal-600 via-cyan-500 to-sky-500 text-white p-6 sm:p-8 shadow-md">
        <p className="uppercase tracking-widest text-xs opacity-90">Week 5 · Revision</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
          Cheatsheet: <span className="font-mono">pronouns · prepositions · modals</span>
        </h1>
        <p className="mt-2 max-w-2xl opacity-90">
          Everything you can&rsquo;t lose from Week 5. Dativ-pronoun table side-by-side with
          Akkusativ. Wechselpräpositionen Wo? vs Wohin? decision tree. Possessivpronomen across
          three cases. Three modal verbs with the sandwich rule. Plus the family + routine + hobby
          essentials.
        </p>
        <div className="mt-4 flex gap-2 flex-wrap">
          <button onClick={() => window.print()} className="btn bg-white text-teal-700 hover:bg-teal-50">
            🖨️ Print / Save as PDF
          </button>
          <Link to="/day/29" className="btn bg-white/10 text-white hover:bg-white/20">Dat pronouns</Link>
          <Link to="/day/30" className="btn bg-white/10 text-white hover:bg-white/20">Wechsel preps</Link>
          <Link to="/day/31" className="btn bg-white/10 text-white hover:bg-white/20">Possessives</Link>
          <Link to="/day/35" className="btn bg-white/10 text-white hover:bg-white/20">Modals</Link>
        </div>
      </header>

      {/* ⭐ Akkusativ + Dativ pronouns side-by-side */}
      <section aria-labelledby="pronoun-pair" className="card overflow-x-auto">
        <h2 id="pronoun-pair" className="font-bold mb-1">⭐ Akkusativ + Dativ pronouns — side by side</h2>
        <p className="text-sm text-slate-500 mb-3">
          The pair you'll use every day. Two columns shape-shift; <strong>wir</strong> and{' '}
          <strong>ihr</strong> stay the same.
        </p>
        <table className="w-full text-left border-collapse min-w-[560px]">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3 border-b-2 border-slate-200 dark:border-slate-700">Subject (Nom)</th>
              <th className="py-2 px-3 border-b-2 border-slate-200 dark:border-slate-700 bg-violet-50 dark:bg-violet-900/20">Akkusativ <span className="text-[10px] block font-normal normal-case">(direct object)</span></th>
              <th className="py-2 px-3 border-b-2 border-slate-200 dark:border-slate-700 bg-teal-50 dark:bg-teal-900/20">Dativ <span className="text-[10px] block font-normal normal-case">(indirect / after Dat-prep)</span></th>
              <th className="py-2 pl-3 border-b-2 border-slate-200 dark:border-slate-700">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {WK5_PRONOUN_PAIRS.map((r) => {
              const sameInBoth = r.akk === r.dat;
              return (
                <tr key={r.nom} className="border-b border-slate-100 dark:border-slate-800 align-top">
                  <td className="py-2 pr-3 font-semibold font-mono">{r.nom}</td>
                  <td className="py-2 px-3 font-mono font-bold bg-violet-50/40 dark:bg-violet-900/10">{r.akk}</td>
                  <td className={`py-2 px-3 font-mono font-bold bg-teal-50/40 dark:bg-teal-900/10 ${sameInBoth ? 'text-emerald-700 dark:text-emerald-300' : ''}`}>{r.dat}</td>
                  <td className="py-2 pl-3 text-sm text-slate-600 dark:text-slate-300">{r.en}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-xs text-slate-500 mt-3">
          Triggered by: <strong>Akkusativ</strong> = direct-object verbs (sehen, kaufen, lieben, treffen) and Akk prepositions (für, um, ohne).
          <br />
          <strong>Dativ</strong> = Dat verbs (helfen, danken, gehören, gefallen) and Dat prepositions (mit, bei, zu, von, nach, aus, seit, gegenüber).
        </p>
      </section>

      {/* ⭐ Wechselpräpositionen — Wo? vs Wohin? */}
      <section aria-labelledby="wechsel" className="card overflow-x-auto">
        <h2 id="wechsel" className="font-bold mb-1">⭐ Wechselpräpositionen — the Wo? vs Wohin? decision</h2>
        <p className="text-sm text-slate-500 mb-3">
          Nine prepositions take EITHER Dativ or Akkusativ. The question you can ask the sentence decides:
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl border-2 border-teal-300 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/20 p-3">
            <div className="font-bold mb-1">📍 Wo? — LOCATION</div>
            <div className="text-sm text-slate-700 dark:text-slate-200">No movement. You are simply somewhere.</div>
            <div className="mt-2 font-mono text-sm">→ Dativ (dem · der · dem · den+n)</div>
            <div className="mt-2 text-sm italic">"Ich bin <strong>in der</strong> Stadt."  (I am in the city.)</div>
          </div>
          <div className="rounded-xl border-2 border-violet-300 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/20 p-3">
            <div className="font-bold mb-1">➡️ Wohin? — MOVEMENT INTO</div>
            <div className="text-sm text-slate-700 dark:text-slate-200">You move FROM A INTO B.</div>
            <div className="mt-2 font-mono text-sm">→ Akkusativ (den · die · das · die)</div>
            <div className="mt-2 text-sm italic">"Ich gehe <strong>in die</strong> Stadt."  (I go into the city.)</div>
          </div>
        </div>

        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3 border-b-2 border-slate-200 dark:border-slate-700">Preposition</th>
              <th className="py-2 pr-3 border-b-2 border-slate-200 dark:border-slate-700">Meaning</th>
              <th className="py-2 pr-3 border-b-2 border-slate-200 dark:border-slate-700 bg-teal-50 dark:bg-teal-900/20">Wo? → Dativ</th>
              <th className="py-2 pl-3 border-b-2 border-slate-200 dark:border-slate-700 bg-violet-50 dark:bg-violet-900/20">Wohin? → Akkusativ</th>
            </tr>
          </thead>
          <tbody>
            {WK5_WECHSEL_PREPS.map((p) => (
              <tr key={p.de} className="border-b border-slate-100 dark:border-slate-800 align-top">
                <td className="py-2 pr-3 font-mono font-bold">{p.de}</td>
                <td className="py-2 pr-3 text-sm text-slate-600 dark:text-slate-300">{p.en}</td>
                <td className="py-2 pr-3 font-mono text-sm bg-teal-50/40 dark:bg-teal-900/10">{p.wo}</td>
                <td className="py-2 pl-3 font-mono text-sm bg-violet-50/40 dark:bg-violet-900/10">{p.wohin}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-slate-500 mt-3">
          Always-Dat (mit · bei · zu · von · nach · aus · seit · gegenüber) and always-Akk (für · um · ohne)
          take only one case. See the Week 4 cheatsheet for those.
        </p>
      </section>

      {/* ⭐ Possessivpronomen */}
      <section aria-labelledby="possessives" className="card overflow-x-auto">
        <h2 id="possessives" className="font-bold mb-1">⭐ Possessivpronomen — all nine persons</h2>
        <p className="text-sm text-slate-500 mb-3">
          Replace "m" in <strong>mein-</strong> with the right person prefix to get all the others.
          The case-and-gender endings stay identical.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-500">
                <th className="py-2 pr-3">Person</th>
                <th className="py-2 pr-3">Possessive</th>
                <th className="py-2 pl-3">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {WK5_POSSESSIVES.map((p) => (
                <tr key={p.person + p.pos} className="border-t border-slate-200 dark:border-slate-800">
                  <td className="py-2 pr-3 font-mono">{p.person}</td>
                  <td className="py-2 pr-3 font-mono font-bold">{p.pos}</td>
                  <td className="py-2 pl-3 text-slate-600 dark:text-slate-300">{p.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-3">
            <h3 className="font-bold text-sm mb-1">mein- + noun  <span className="font-normal text-slate-500">— attributive</span></h3>
            <p className="text-xs text-slate-500 mb-2">Used BEFORE a noun: "mein Bruder", "meine Tasche".</p>
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-1 pr-2">Case</th>
                  <th className="py-1 pr-2">m</th>
                  <th className="py-1 pr-2">f</th>
                  <th className="py-1 pr-2">n</th>
                  <th className="py-1 pl-2">pl</th>
                </tr>
              </thead>
              <tbody>
                {WK5_MEIN_DECLENSION.map((row) => (
                  <tr key={row.case} className="border-t border-slate-200 dark:border-slate-800">
                    <td className="py-1 pr-2 font-semibold">{row.case}</td>
                    <td className="py-1 pr-2 font-mono">{row.m}</td>
                    <td className="py-1 pr-2 font-mono">{row.f}</td>
                    <td className="py-1 pr-2 font-mono">{row.n}</td>
                    <td className="py-1 pl-2 font-mono">{row.pl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-500 mt-2">
              euer drops its "e" before any non-empty ending: eure · euren · eurer · eurem.
            </p>
          </div>
        </div>

        {/* ⭐ NEW — standalone "mine" forms */}
        <div className="grid md:grid-cols-3 gap-3">
          <div className="rounded-xl border-2 border-teal-300 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/20 p-3 md:col-span-2">
            <h3 className="font-bold text-sm mb-1">⭐ "mine" — standalone  <span className="font-normal text-slate-500">— used WITHOUT a noun after it</span></h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
              When the possessive STANDS ALONE (English "mine / yours / his"), it carries the same
              endings as <code className="font-mono">der/die/das</code>. The masculine and neuter
              forms grow an extra ending compared to the attributive table above:
            </p>
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-1 pr-2">Case</th>
                  <th className="py-1 pr-2">m</th>
                  <th className="py-1 pr-2">f</th>
                  <th className="py-1 pr-2">n</th>
                  <th className="py-1 pl-2">pl</th>
                </tr>
              </thead>
              <tbody>
                {WK5_MEIN_STANDALONE.map((row) => (
                  <tr key={row.case} className="border-t border-teal-200 dark:border-teal-800">
                    <td className="py-1 pr-2 font-semibold">{row.case}</td>
                    <td className="py-1 pr-2 font-mono font-bold text-teal-700 dark:text-teal-300">{row.m}</td>
                    <td className="py-1 pr-2 font-mono">{row.f}</td>
                    <td className="py-1 pr-2 font-mono font-bold text-teal-700 dark:text-teal-300">{row.n}</td>
                    <td className="py-1 pl-2 font-mono">{row.pl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-500 mt-2">
              The (e) in <strong>mein(e)s</strong> is optional in writing — "meins" and "meines"
              are both accepted; "meins" is what you almost always hear in conversation.
            </p>
          </div>

          {/* 💡 TIP card — attributive vs standalone */}
          <div className="rounded-xl border-2 border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 p-3">
            <h3 className="font-bold mb-2">💡 Tip — attributive vs standalone</h3>
            <p className="text-xs text-slate-700 dark:text-slate-200 mb-2">
              Ask: <strong>is there a noun right after the possessive?</strong>
            </p>
            <ul className="text-xs space-y-2">
              <li>
                <span className="font-semibold">YES → attributive form (Day 31 table):</span>
                <div className="mt-0.5 italic">"Das ist <strong>mein</strong> Buch."  →  That's my book.</div>
                <div className="italic">"Das ist <strong>meine</strong> Tasche."  →  That's my bag.</div>
              </li>
              <li>
                <span className="font-semibold">NO → standalone form (table on left):</span>
                <div className="mt-0.5 italic">"Das Buch ist <strong>meins</strong>."  →  The book is mine.</div>
                <div className="italic">"Wem gehört das? — <strong>Mir</strong>." (Dat — "to me")</div>
                <div className="italic">"Ist das dein Stift? — Ja, das ist <strong>meiner</strong>." (masc.)</div>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">
              Same logic for dein / sein / ihr / unser / euer / Ihr — replace "m" with the right
              prefix, the endings stay identical.
            </p>
          </div>
        </div>
      </section>

      {/* ⭐ Modal verbs */}
      <section aria-labelledby="modals" className="card overflow-x-auto">
        <h2 id="modals" className="font-bold mb-1">⭐ Modal verbs — Day 35 trio</h2>
        <p className="text-sm text-slate-500 mb-3">
          Modals always come paired with a second verb. The modal sits in slot 2 (conjugated); the
          OTHER verb flies to the very end of the sentence as an infinitive.
        </p>

        {/* The sandwich rule visualisation */}
        <div className="mb-4 rounded-xl border-2 border-teal-300 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/20 p-3">
          <div className="font-bold mb-2">🥪 The modal sandwich</div>
          <pre className="text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
{`   slot 1   slot 2 (modal)   ……  middle  ……      slot ∞ (infinitive)
   Ich      KANN             heute Deutsch        SPRECHEN.
   Wir      MÜSSEN           am Samstag           ARBEITEN.
   Du       WILLST           einen Kaffee         TRINKEN.

   Separable verb? Re-glue it at the end as one word:
   Ich      MUSS             um sieben Uhr        AUFSTEHEN.`}
          </pre>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          {WK5_MODALS.map((m) => (
            <div key={m.verb} className={`rounded-xl bg-gradient-to-br ${m.accent} border border-slate-200 dark:border-slate-700 p-3`}>
              <div className="flex items-center gap-2">
                <span aria-hidden className="text-xl">{m.emoji}</span>
                <h3 className="font-extrabold text-lg">{m.verb}</h3>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 mb-2">{m.en}</div>
              <table className="w-full text-sm">
                <tbody>
                  {m.rows.map(([p, f]) => (
                    <tr key={p} className="border-t border-slate-200/60 dark:border-slate-700/60">
                      <td className="py-1 pr-2 text-slate-500 font-mono text-xs">{p}</td>
                      <td className="py-1 font-mono font-bold">{f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-2 text-xs italic flex items-center gap-2">
                <span>"{m.example}"</span>
                <AudioButton text={m.example} size="sm" />
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-3">
          Pattern note: in singular (ich / du / er-sie-es), the stem vowel CHANGES in können (ö → a) and müssen (ü → u),
          and the ich + er forms are IDENTICAL — never mark a 3rd-person -t on the modal. Day 36 adds dürfen ·
          sollen · mögen / möchten (the polite-restaurant version).
        </p>
      </section>

      {/* Life-vocab quick cards */}
      <section aria-labelledby="life-vocab" className="grid md:grid-cols-2 gap-4">
        <h2 id="life-vocab" className="sr-only">Life vocabulary</h2>
        <div className="card">
          <h3 className="font-bold mb-2">👨‍👩‍👧 Family — quick list</h3>
          <ul className="space-y-2 text-sm">
            {WK5_FAMILY_QUICK.map((v) => (
              <li key={v.de} className="border-t border-slate-200 dark:border-slate-800 pt-2 first:border-0 first:pt-0">
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold flex-1">{v.de}</span>
                  <AudioButton text={v.de} size="sm" />
                </div>
                <Pron de={v.de} />
                <div className="text-xs text-slate-500">{v.en}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="font-bold mb-2">🌅 Daily routine — quick list</h3>
          <ul className="space-y-2 text-sm">
            {WK5_ROUTINE_QUICK.map((v) => (
              <li key={v.de} className="border-t border-slate-200 dark:border-slate-800 pt-2 first:border-0 first:pt-0">
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold flex-1">{v.de}</span>
                  <span className="text-xs text-slate-500 italic">{v.time}</span>
                  <AudioButton text={v.de} size="sm" />
                </div>
                <Pron de={v.de} />
                <div className="text-xs text-slate-500">{v.en}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ⚠ gefallen / Wo-Wohin callout */}
      <section aria-labelledby="wk5-gotcha" className="card bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700">
        <h2 id="wk5-gotcha" className="font-bold mb-2">⚠ The two killer pairs in Week 5</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg border border-amber-300 dark:border-amber-700 bg-white dark:bg-slate-900 p-3">
            <div className="font-bold mb-1">mich vs mir</div>
            <p>"He sees me." → Er sieht <strong>mich</strong>. (Akk verb)</p>
            <p>"He helps me." → Er hilft <strong>mir</strong>. (Dat verb)</p>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
              When unsure: ask "Wen/Was?" → Akk (mich) · "Wem?" → Dat (mir).
            </p>
          </div>
          <div className="rounded-lg border border-amber-300 dark:border-amber-700 bg-white dark:bg-slate-900 p-3">
            <div className="font-bold mb-1">in der Stadt vs in die Stadt</div>
            <p>"I am IN the city." → Ich bin <strong>in der</strong> Stadt. (Wo? = Dat)</p>
            <p>"I go INTO the city." → Ich gehe <strong>in die</strong> Stadt. (Wohin? = Akk)</p>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
              The English preposition is the same; the German case decides movement vs location.
            </p>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section aria-labelledby="wk5-mistakes" className="card">
        <h2 id="wk5-mistakes" className="font-bold mb-3">Common mistakes</h2>
        <ul className="space-y-3">
          {WK5_COMMON_MISTAKES.map((m) => (
            <li key={m.right} className="border-t border-slate-200 dark:border-slate-800 pt-3 first:border-0 first:pt-0">
              <div className="text-rose-600 dark:text-rose-400 font-mono">{m.wrong}</div>
              <div className="text-emerald-700 dark:text-emerald-400 font-mono">{m.right}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">{m.why}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Memory hooks */}
      <section aria-labelledby="wk5-hooks" className="card">
        <h2 id="wk5-hooks" className="font-bold mb-2">Memory hooks</h2>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-200">
          <li><strong>Dat pronouns end in -r or -m.</strong> mi<strong>r</strong>, di<strong>r</strong>, ih<strong>m</strong>, ih<strong>r</strong>, ih<strong>n</strong>en. Akk pronouns mostly end in -ch or -s: mich, dich, uns. The shape gives away the case.</li>
          <li><strong>wir / ihr never change.</strong> uns = us in both Akk and Dat. euch = you-all in both. That's the discount you get for the others changing.</li>
          <li><strong>Wechsel decision = ask Wohin? first.</strong> If the answer is YES (movement INTO), use Akk. If the answer is NO (just located there), use Dat. One question, every time.</li>
          <li><strong>Modal sandwich:</strong> if you have a modal, the other verb is the LAST word. No exceptions.</li>
          <li><strong>möchten is NOT in this trio.</strong> It's a polite form of mögen (Konjunktiv II) and lives on Day 36. Today is the can-must-want set.</li>
          <li><strong>euer drops its e</strong> before a non-empty ending: eure Mutter · eure Bücher · euren Vater. Never "euere" or "euern".</li>
        </ul>
      </section>

      <OtherCheatsheets except="pronouns-modals" />

      <footer className="text-center text-sm text-slate-500 pb-4">
        Ready for Week 6? <Link to="/day/36" className="font-semibold text-teal-700 dark:text-teal-300 hover:underline">→ Go to Day 36 (Modals II: dürfen · sollen · mögen)</Link>
      </footer>
    </div>
  );
}

/* ===================== WEEK 6 — real life: modals · glue · scenarios · negation ===================== */

/* All Week 6 modals laid out side-by-side for fast comparison. */
const WK6_MODALS = [
  { key: 'dürfen',  en: 'be allowed', accent: 'from-rose-500/15 to-rose-500/5',
    rows: [['ich','darf'],['du','darfst'],['er/sie/es','darf'],['wir','dürfen'],['ihr','dürft'],['sie/Sie','dürfen']] },
  { key: 'sollen',  en: 'should',     accent: 'from-orange-500/15 to-orange-500/5',
    rows: [['ich','soll'],['du','sollst'],['er/sie/es','soll'],['wir','sollen'],['ihr','sollt'],['sie/Sie','sollen']] },
  { key: 'mögen',   en: 'to like',    accent: 'from-amber-500/15 to-amber-500/5',
    rows: [['ich','mag'],['du','magst'],['er/sie/es','mag'],['wir','mögen'],['ihr','mögt'],['sie/Sie','mögen']] },
  { key: 'möchten', en: '"would like" (Konj. II of mögen — polite request)', accent: 'from-pink-500/15 to-pink-500/5',
    rows: [['ich','möchte'],['du','möchtest'],['er/sie/es','möchte'],['wir','möchten'],['ihr','möchtet'],['sie/Sie','möchten']] },
];

/* Sentence connectors: split into "no-change" vs "verb-to-end" buckets. */
const WK6_CONNECTORS_NO_CHANGE = [
  { de: 'und',   en: 'and',     example: 'Ich lerne Deutsch UND ich arbeite viel.' },
  { de: 'oder',  en: 'or',      example: 'Ich trinke Kaffee ODER ich trinke Tee.' },
  { de: 'aber',  en: 'but',     example: 'Das ist lecker, ABER es ist teuer.' },
  { de: 'denn',  en: 'because', example: 'Ich gehe, DENN ich bin hungrig.' },
  { de: 'dann',  en: 'then',    example: 'Ich lerne Deutsch, DANN gehe ich nach Hause.' },
];

const WK6_CONNECTORS_VERB_END = [
  { de: 'weil',  en: 'because', example: 'Ich lerne Deutsch, WEIL ich in Deutschland ARBEITE.' },
  { de: 'wenn',  en: 'if / when',example: 'Ich komme, WENN ich Zeit HABE.' },
  { de: 'dass',  en: 'that',    example: 'Ich denke, DASS er müde IST.' },
];

const WK6_DEMONSTRATIVE = [
  { article: 'der',  dem: 'dieser', example: 'dieser Mann' },
  { article: 'die',  dem: 'diese',  example: 'diese Frau' },
  { article: 'das',  dem: 'dieses', example: 'dieses Kind' },
  { article: 'die (pl)', dem: 'diese', example: 'diese Leute' },
];

const WK6_INDEFINITES = [
  { de: 'jemand',  en: 'someone',         akk: 'jemanden',  dat: 'jemandem' },
  { de: 'niemand', en: 'nobody',          akk: 'niemanden', dat: 'niemandem' },
  { de: 'etwas',   en: 'something',       akk: 'etwas',     dat: 'etwas' },
  { de: 'nichts',  en: 'nothing',         akk: 'nichts',    dat: 'nichts' },
  { de: 'alles',   en: 'everything',      akk: 'alles',     dat: 'allem' },
  { de: 'man',     en: 'one / people',    akk: 'einen',     dat: 'einem' },
];

const WK6_KEIN_TABLE = [
  { case: 'Nominativ', m: 'kein',    f: 'keine',  n: 'kein',    pl: 'keine' },
  { case: 'Akkusativ', m: 'keinen',  f: 'keine',  n: 'kein',    pl: 'keine' },
  { case: 'Dativ',     m: 'keinem',  f: 'keiner', n: 'keinem',  pl: 'keinen +n' },
];

const WK6_RESTAURANT = [
  { de: 'Ich hätte gerne …',           en: 'I would like to have … (most natural request)' },
  { de: 'Ich möchte … bestellen.',      en: 'I would like to order …' },
  { de: 'Die Speisekarte, bitte.',      en: 'The menu, please.' },
  { de: 'Wie viel kostet das?',         en: 'How much does that cost?' },
  { de: 'Zahlen, bitte.',                en: 'The bill, please.' },
  { de: 'Die Rechnung, bitte.',         en: '"" (alt.)' },
  { de: 'Mit Karte oder bar?',          en: 'With card or cash?' },
  { de: 'Guten Appetit!',                en: 'Enjoy your meal!' },
];

const WK6_SHOPPING = [
  { de: 'Was kostet das?',              en: 'What does that cost?' },
  { de: 'Haben Sie das in Größe …?',     en: 'Do you have this in size …?' },
  { de: 'Kann ich das anprobieren?',     en: 'Can I try this on?' },
  { de: 'Das ist zu teuer.',             en: 'That is too expensive.' },
  { de: 'Ich nehme es.',                  en: 'I\'ll take it.' },
  { de: 'Wo ist die Kasse?',             en: 'Where is the checkout?' },
];

const WK6_TRAVEL = [
  { de: 'Wo ist der Bahnhof?',          en: 'Where is the train station?' },
  { de: 'Eine Fahrkarte nach … , bitte.', en: 'A ticket to … , please.' },
  { de: 'Einfach oder hin und zurück?', en: 'One way or return?' },
  { de: 'Wann fährt der nächste Zug?',   en: 'When does the next train leave?' },
  { de: 'Geradeaus, dann links / rechts.', en: 'Straight on, then left / right.' },
  { de: 'Ich habe eine Reservierung.',   en: 'I have a reservation.' },
];

const WK6_COMMON_MISTAKES = [
  {
    wrong: '✗ Ich will einen Kaffee.',
    right: '✓ Ich möchte einen Kaffee, bitte.',
    why:   'wollen sounds blunt in service contexts. möchte (Konjunktiv II of mögen) is the polite request form — always pair it with bitte.',
  },
  {
    wrong: '✗ Ich gehe, weil ich bin hungrig.',
    right: '✓ Ich gehe, weil ich hungrig BIN.',
    why:   'After weil / wenn / dass, the conjugated verb jumps to the END of the sub-clause. Use denn (verb stays slot 2) if you don\'t want to move it.',
  },
  {
    wrong: '✗ Ich habe nicht Zeit.',
    right: '✓ Ich habe keine Zeit.',
    why:   'kein replaces ein/nothing before a NOUN. Use nicht only for verbs, adjectives or whole sentences.',
  },
  {
    wrong: '✗ Ich kaufe das Buch nicht.   (translates "I am not buying THE book")',
    right: '✓ Ich kaufe kein Buch.        (translates "I am not buying A/ANY book")',
    why:   'Both can be correct — pick by whether you mean a SPECIFIC item (nicht) or NO item at all (kein).',
  },
  {
    wrong: '✗ Niemand ist hier nicht.',
    right: '✓ Niemand ist hier.',
    why:   'German does NOT stack negatives. niemand / nichts already mean "no one / nothing"; don\'t add nicht.',
  },
];

function RealLifeCheatsheet() {
  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm text-slate-500 hover:underline">← Back to dashboard</Link>

      <header className="rounded-3xl bg-gradient-to-br from-rose-500 via-orange-500 to-amber-500 text-white p-6 sm:p-8 shadow-md">
        <p className="uppercase tracking-widest text-xs opacity-90">Week 6 · Revision</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
          Cheatsheet: <span className="font-mono">real life</span>
        </h1>
        <p className="mt-2 max-w-2xl opacity-90">
          The week where you go from drills to actual conversations. Four polite-modal tables,
          two flavours of sentence glue, a demonstrative + indefinite pronoun pair, three
          real-life scripts (restaurant · shopping · travel), and the kein-vs-nicht decision
          tree — all on one printable page.
        </p>
        <div className="mt-4 flex gap-2 flex-wrap">
          <button onClick={() => window.print()} className="btn bg-white text-rose-700 hover:bg-rose-50">
            🖨️ Print / Save as PDF
          </button>
          <Link to="/day/36" className="btn bg-white/10 text-white hover:bg-white/20">Modals II</Link>
          <Link to="/day/37" className="btn bg-white/10 text-white hover:bg-white/20">Connectors</Link>
          <Link to="/day/38" className="btn bg-white/10 text-white hover:bg-white/20">Demonstratives</Link>
          <Link to="/day/39" className="btn bg-white/10 text-white hover:bg-white/20">Restaurant</Link>
          <Link to="/day/42" className="btn bg-white/10 text-white hover:bg-white/20">Negation</Link>
        </div>
      </header>

      {/* MODALS II — full 4-verb table */}
      <section aria-labelledby="wk6-modals" className="card overflow-x-auto">
        <h2 id="wk6-modals" className="font-bold mb-3">Modals II — dürfen · sollen · mögen · möchten</h2>
        <p className="text-sm text-slate-500 mb-3">
          All four side-by-side. Note that <strong>mögen</strong> ("to like") is used WITHOUT a second verb
          ("Ich mag Pizza"), while <strong>möchten</strong> (its Konjunktiv II form, "would like") is the
          polite request word you\'ll use in every café.
        </p>
        <table className="w-full text-left text-sm border-collapse min-w-[560px]">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-3 border-b-2 border-slate-200 dark:border-slate-700">Pronoun</th>
              {WK6_MODALS.map((m) => (
                <th key={m.key} className="py-2 px-3 border-b-2 border-slate-200 dark:border-slate-700">
                  <div className="text-base font-extrabold text-slate-900 dark:text-slate-100">{m.key}</div>
                  <div className="font-normal text-xs text-slate-500 normal-case">{m.en}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[0,1,2,3,4,5].map((i) => (
              <tr key={i} className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-2 pr-3 font-semibold whitespace-nowrap">{WK6_MODALS[0].rows[i][0]}</td>
                {WK6_MODALS.map((m) => (
                  <td key={m.key} className={`py-2 px-3 bg-gradient-to-br ${m.accent} rounded`}>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold">{m.rows[i][1]}</span>
                      <AudioButton text={m.rows[i][1]} size="sm" />
                    </div>
                    <Pron de={m.rows[i][1]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-slate-500 mt-3">
          Same V2 rule + sandwich structure as Modals I — modal in slot 2, main verb infinitive at the end:
          "Ich möchte einen Kaffee <strong>bestellen</strong>." · "Du sollst pünktlich <strong>kommen</strong>."
        </p>
      </section>

      {/* SENTENCE CONNECTORS — two-column visual */}
      <section aria-labelledby="wk6-connectors" className="grid md:grid-cols-2 gap-4">
        <h2 id="wk6-connectors" className="sr-only">Sentence connectors</h2>

        <div className="card bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-700">
          <h3 className="font-bold mb-1">🟢 No change · verb stays slot 2</h3>
          <p className="text-xs text-slate-500 mb-3">Coordinating connectors — the second clause behaves like a normal main clause.</p>
          <ul className="space-y-2 text-sm">
            {WK6_CONNECTORS_NO_CHANGE.map((c) => (
              <li key={c.de} className="border-t border-emerald-200/60 dark:border-emerald-800/60 pt-2 first:border-0 first:pt-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold flex-1">{c.de}</span>
                  <span className="text-xs text-slate-500">{c.en}</span>
                </div>
                <div className="mt-1 text-xs italic text-slate-600 dark:text-slate-300">e.g. „{c.example}"</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 border-rose-200 dark:border-rose-700">
          <h3 className="font-bold mb-1">🔴 Verb JUMPS to the end</h3>
          <p className="text-xs text-slate-500 mb-3">Subordinating connectors — the conjugated verb flies to the END of the sub-clause.</p>
          <ul className="space-y-2 text-sm">
            {WK6_CONNECTORS_VERB_END.map((c) => (
              <li key={c.de} className="border-t border-rose-200/60 dark:border-rose-800/60 pt-2 first:border-0 first:pt-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold flex-1">{c.de}</span>
                  <span className="text-xs text-slate-500">{c.en}</span>
                </div>
                <div className="mt-1 text-xs italic text-slate-600 dark:text-slate-300">e.g. „{c.example}"</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card md:col-span-2 bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700">
          <h3 className="font-bold mb-1">⚠ denn vs weil — same meaning, OPPOSITE word order</h3>
          <p className="text-sm text-slate-700 dark:text-slate-200">
            Both translate "because". Pick by the word order you want:
          </p>
          <ul className="mt-2 text-sm space-y-1">
            <li>„Ich gehe, <strong>denn</strong> ich bin hungrig."   — verb stays slot 2</li>
            <li>„Ich gehe, <strong>weil</strong> ich hungrig <strong>bin</strong>."   — verb to the end</li>
          </ul>
          <p className="mt-2 text-xs text-slate-500">Modern spoken German leans on <strong>weil</strong> for "because" almost everywhere.</p>
        </div>
      </section>

      {/* DEMONSTRATIVES + INDEFINITES */}
      <section aria-labelledby="wk6-dem-ind" className="grid md:grid-cols-2 gap-4">
        <h2 id="wk6-dem-ind" className="sr-only">Demonstratives & indefinites</h2>

        <div className="card">
          <h3 className="font-bold mb-1">👉 Demonstratives — "this / these"</h3>
          <p className="text-xs text-slate-500 mb-3">
            <code className="font-mono">dieser</code> replaces <code className="font-mono">der/die/das</code> to mean
            "THIS particular one". Same case endings as the article.
          </p>
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-500">
                <th className="py-1 pr-2">Article</th>
                <th className="py-1 pr-2">Demonstrative</th>
                <th className="py-1">Example</th>
              </tr>
            </thead>
            <tbody>
              {WK6_DEMONSTRATIVE.map((d) => (
                <tr key={d.article} className="border-t border-slate-200 dark:border-slate-800">
                  <td className="py-1 pr-2 font-mono">{d.article}</td>
                  <td className="py-1 pr-2 font-mono font-bold text-rose-700 dark:text-rose-300">{d.dem}</td>
                  <td className="py-1 text-slate-600 dark:text-slate-300">{d.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-slate-500 mt-2">
            Pattern: swap the "d-" of <em>der/die/das</em> for "dies-" — keep the same ending.
          </p>
        </div>

        <div className="card">
          <h3 className="font-bold mb-1">👤 Indefinite pronouns — "someone / nothing / one"</h3>
          <p className="text-xs text-slate-500 mb-3">
            jemand / niemand can change shape in Akk + Dat. etwas / nichts / alles don\'t move (except alles → allem).
          </p>
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-500">
                <th className="py-1 pr-2">Nom</th>
                <th className="py-1 pr-2">Meaning</th>
                <th className="py-1 pr-2">Akk</th>
                <th className="py-1">Dat</th>
              </tr>
            </thead>
            <tbody>
              {WK6_INDEFINITES.map((p) => (
                <tr key={p.de} className="border-t border-slate-200 dark:border-slate-800">
                  <td className="py-1 pr-2 font-mono font-bold">{p.de}</td>
                  <td className="py-1 pr-2 text-slate-600 dark:text-slate-300">{p.en}</td>
                  <td className="py-1 pr-2 font-mono">{p.akk}</td>
                  <td className="py-1 font-mono">{p.dat}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-slate-500 mt-2">
            <strong>man</strong> always takes a 3rd-singular verb: <em>man arbeitet · man sagt · man trinkt</em>.
            In Akk/Dat it borrows <em>einen / einem</em>.
          </p>
        </div>
      </section>

      {/* REAL-LIFE SCENARIOS — restaurant + shopping + travel */}
      <section aria-labelledby="wk6-scenarios" className="grid md:grid-cols-3 gap-4">
        <h2 id="wk6-scenarios" className="sr-only">Scenarios</h2>

        <div className="card bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20">
          <h3 className="font-bold mb-2">🍽️ At the restaurant</h3>
          <ul className="space-y-2 text-sm">
            {WK6_RESTAURANT.map((p) => (
              <li key={p.de} className="border-t border-rose-200/60 dark:border-rose-800/60 pt-2 first:border-0 first:pt-0">
                <div className="flex items-start gap-2">
                  <span className="font-semibold flex-1">{p.de}</span>
                  <AudioButton text={p.de} size="sm" />
                </div>
                <Pron de={p.de} />
                <div className="text-xs text-slate-500">{p.en}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20">
          <h3 className="font-bold mb-2">🛒 Shopping</h3>
          <ul className="space-y-2 text-sm">
            {WK6_SHOPPING.map((p) => (
              <li key={p.de} className="border-t border-orange-200/60 dark:border-orange-800/60 pt-2 first:border-0 first:pt-0">
                <div className="flex items-start gap-2">
                  <span className="font-semibold flex-1">{p.de}</span>
                  <AudioButton text={p.de} size="sm" />
                </div>
                <Pron de={p.de} />
                <div className="text-xs text-slate-500">{p.en}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
          <h3 className="font-bold mb-2">✈️ Travel</h3>
          <ul className="space-y-2 text-sm">
            {WK6_TRAVEL.map((p) => (
              <li key={p.de} className="border-t border-amber-200/60 dark:border-amber-800/60 pt-2 first:border-0 first:pt-0">
                <div className="flex items-start gap-2">
                  <span className="font-semibold flex-1">{p.de}</span>
                  <AudioButton text={p.de} size="sm" />
                </div>
                <Pron de={p.de} />
                <div className="text-xs text-slate-500">{p.en}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NEGATION — decision tree + kein table */}
      <section aria-labelledby="wk6-negation" className="grid md:grid-cols-2 gap-4">
        <h2 id="wk6-negation" className="sr-only">Negation</h2>

        <div className="card bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700">
          <h3 className="font-bold mb-2">🚫 kein vs nicht — 5-second decision tree</h3>
          <ol className="list-decimal pl-5 text-sm space-y-2 text-slate-700 dark:text-slate-200">
            <li>
              <strong>Are you negating a NOUN that would take ein / no article?</strong>
              <div className="text-xs text-slate-500 italic">("a coffee" → "no coffee" · "Zeit" → "keine Zeit")</div>
              → use <code className="font-mono">kein</code>.
            </li>
            <li>
              <strong>Are you negating a noun that already has der / die / das / a possessive?</strong>
              <div className="text-xs text-slate-500 italic">("the book" — definite reference)</div>
              → use <code className="font-mono">nicht</code> before the noun.
            </li>
            <li>
              <strong>Everything else?</strong> (verb · adjective · adverb · whole sentence)
              <div className="text-xs text-slate-500 italic">("not tired" · "doesn\'t come" · "not at the office")</div>
              → use <code className="font-mono">nicht</code>.
            </li>
          </ol>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-lg border border-amber-300 dark:border-amber-700 p-2">
              <div className="font-semibold mb-1">kein examples</div>
              <div className="italic">Ich habe keine Zeit.</div>
              <div className="italic">Wir trinken keinen Kaffee.</div>
              <div className="italic">Er hat kein Geld.</div>
            </div>
            <div className="rounded-lg border border-amber-300 dark:border-amber-700 p-2">
              <div className="font-semibold mb-1">nicht examples</div>
              <div className="italic">Ich komme heute nicht.</div>
              <div className="italic">Das Buch ist nicht teuer.</div>
              <div className="italic">Ich kaufe das Buch nicht.</div>
            </div>
          </div>
        </div>

        <div className="card overflow-x-auto">
          <h3 className="font-bold mb-2">kein — full declension</h3>
          <p className="text-xs text-slate-500 mb-2">Same endings as ein. Plural kein/keine works (unlike ein, which has no plural).</p>
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-500">
                <th className="py-1 pr-2">Case</th>
                <th className="py-1 pr-2">m</th>
                <th className="py-1 pr-2">f</th>
                <th className="py-1 pr-2">n</th>
                <th className="py-1 pl-2">pl</th>
              </tr>
            </thead>
            <tbody>
              {WK6_KEIN_TABLE.map((row) => (
                <tr key={row.case} className="border-t border-slate-200 dark:border-slate-800">
                  <td className="py-1 pr-2 font-semibold">{row.case}</td>
                  <td className="py-1 pr-2 font-mono">{row.m}</td>
                  <td className="py-1 pr-2 font-mono">{row.f}</td>
                  <td className="py-1 pr-2 font-mono">{row.n}</td>
                  <td className="py-1 pl-2 font-mono">{row.pl}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-slate-500 mt-2">
            <strong>nicht</strong> position rule: it goes BEFORE the part you negate. End of the sentence
            for whole-clause negation; right before an adjective/adverb otherwise:
            <em> "Ich arbeite heute nicht." · "Das ist nicht gut."</em>
          </p>
        </div>
      </section>

      {/* 💡 TIP — möchte */}
      <section className="card bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-pink-200 dark:border-pink-700">
        <h2 className="font-bold mb-2">💡 Tip — möchte is the magic word for service contexts</h2>
        <p className="text-sm text-slate-700 dark:text-slate-200 mb-2">
          In a café, shop, hotel or ticket office, ALWAYS use <strong>möchte</strong> (not wollen).
          It is grammatically the Konjunktiv II of mögen — but for A1 you just treat it as the polite
          way to say "I would like".
        </p>
        <ul className="text-sm space-y-1">
          <li>✗ <em>Ich will einen Kaffee.</em>         — sounds blunt / childish.</li>
          <li>✓ <em>Ich möchte einen Kaffee, bitte.</em> — natural polite request.</li>
          <li>✓ <em>Ich hätte gerne einen Kaffee.</em>   — even warmer ("I would like to have").</li>
        </ul>
        <p className="mt-2 text-xs text-slate-500">
          Stress-free fallback: just add <strong>bitte</strong> to ANY möchte/hätte-gerne sentence and you sound right.
        </p>
      </section>

      {/* COMMON MISTAKES */}
      <section aria-labelledby="wk6-mistakes" className="card">
        <h2 id="wk6-mistakes" className="font-bold mb-3">Common mistakes</h2>
        <ul className="space-y-3">
          {WK6_COMMON_MISTAKES.map((m) => (
            <li key={m.right} className="border-t border-slate-200 dark:border-slate-800 pt-3 first:border-0 first:pt-0">
              <div className="text-rose-600 dark:text-rose-400 font-mono">{m.wrong}</div>
              <div className="text-emerald-700 dark:text-emerald-400 font-mono">{m.right}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">{m.why}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* MEMORY HOOKS */}
      <section aria-labelledby="wk6-hooks" className="card">
        <h2 id="wk6-hooks" className="font-bold mb-2">Memory hooks</h2>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-200">
          <li><strong>möchten is the safe-mode "I want".</strong> Café? Shop? Office? Use möchte + bitte and you can\'t go wrong.</li>
          <li><strong>denn vs weil — same meaning, opposite shape.</strong> Pick weil and put the verb at the end; pick denn and don\'t move anything.</li>
          <li><strong>kein replaces "ein" / "no article".</strong> nicht negates everything else.</li>
          <li><strong>kein is decline-friendly</strong> — it follows the same endings as ein, including a PLURAL form that ein lacks (keine Freunde, keine Bücher).</li>
          <li><strong>dieser = der + endings.</strong> Same case logic — just swap the prefix.</li>
          <li><strong>niemand and nichts are already negative.</strong> Don\'t add nicht. ✗ niemand ist hier nicht.</li>
          <li><strong>man = the general "one / people"</strong>, never refers to a male specifically. Verb stays 3rd-singular: man trinkt, man sagt.</li>
          <li><strong>Restaurant trio:</strong> Speisekarte → Bestellen → Zahlen, bitte. Three sentences carry you through any A1 dining scene.</li>
          <li><strong>Direction trio:</strong> geradeaus · links · rechts. Combined with "Wo ist …?" you can find anything.</li>
        </ul>
      </section>

      <OtherCheatsheets except="real-life" />

      <footer className="text-center text-sm text-slate-500 pb-4">
        Ready for Week 7? <Link to="/day/45" className="font-semibold text-rose-700 dark:text-rose-300 hover:underline">→ Go to Day 45 (Perfekt I — haben + Partizip II)</Link>
      </footer>
    </div>
  );
}
