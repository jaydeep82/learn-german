import { Link } from 'react-router-dom';
import { VERSION, RELEASE_DATE, RELEASES } from '../data/release.js';

const TYPE_STYLES = {
  feature:     { label: 'Feature',     class: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200' },
  fix:         { label: 'Fix',         class: 'bg-rose-100    text-rose-800    dark:bg-rose-900/40    dark:text-rose-200' },
  improvement: { label: 'Improvement', class: 'bg-sky-100     text-sky-800     dark:bg-sky-900/40     dark:text-sky-200' },
  content:     { label: 'Content',     class: 'bg-amber-100   text-amber-800   dark:bg-amber-900/40   dark:text-amber-200' },
};

function TypeBadge({ type }) {
  const meta = TYPE_STYLES[type] || TYPE_STYLES.feature;
  return <span className={`pill ${meta.class}`}>{meta.label}</span>;
}

const REPO_URL = 'https://github.com/jaydeep82/learn-german';

export default function About() {
  const latest = RELEASES[0];

  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm text-slate-500 hover:underline">← Back to dashboard</Link>

      {/* Hero */}
      <header className="rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 text-white p-6 sm:p-8 shadow-md">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="uppercase tracking-widest text-xs opacity-90">About this app</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-1 flex items-center gap-2">
              <span aria-hidden>🇩🇪</span>
              Deutsch<span className="text-amber-200">40</span>
            </h1>
            <p className="mt-2 max-w-prose opacity-90">
              An interactive 40-day German learning app for absolute beginners,
              built around proven techniques: spaced repetition, comprehensible
              input, contextual learning and instant audio feedback.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="pill bg-white/20 text-white text-base px-3 py-1">
              v{VERSION}
            </span>
            <span className="text-xs opacity-80">released {RELEASE_DATE}</span>
          </div>
        </div>
      </header>

      {/* What's new */}
      <section aria-labelledby="whats-new" className="card">
        <div className="flex items-center gap-3 mb-3">
          <h2 id="whats-new" className="text-xl font-bold flex-1">What&rsquo;s new in v{latest.version}</h2>
          <TypeBadge type={latest.type} />
        </div>
        <div className="text-sm text-slate-500 mb-2">{latest.title} · {latest.date}</div>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-200">
          {latest.notes.map((n) => <li key={n}>{n}</li>)}
        </ul>
      </section>

      {/* Full changelog */}
      <section aria-labelledby="changelog">
        <h2 id="changelog" className="text-xl font-bold mb-3">Release history</h2>
        <ol className="space-y-4">
          {RELEASES.map((r) => (
            <li key={r.version} className="card">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-lg font-bold">v{r.version}</span>
                <TypeBadge type={r.type} />
                <span className="text-sm text-slate-500 ml-auto tabular-nums">{r.date}</span>
              </div>
              <div className="mt-1 font-semibold">{r.title}</div>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                {r.notes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Versioning policy */}
      <section aria-labelledby="versioning" className="card">
        <h2 id="versioning" className="font-bold mb-2">Versioning</h2>
        <p className="text-sm text-slate-700 dark:text-slate-200">
          Deutsch30 follows a semver-style scheme.
        </p>
        <ul className="mt-2 text-sm space-y-1">
          <li><code className="font-mono text-brand-700 dark:text-brand-300">MAJOR</code> — breaking re-architecture (data model rewrite, framework swap).</li>
          <li><code className="font-mono text-brand-700 dark:text-brand-300">MINOR</code> — new functionality, new lesson content, new pages.</li>
          <li><code className="font-mono text-brand-700 dark:text-brand-300">PATCH</code> — bugfixes and copy edits, no behavioural change.</li>
        </ul>
      </section>

      {/* Tech + credits */}
      <section aria-labelledby="tech" className="grid sm:grid-cols-2 gap-4">
        <h2 id="tech" className="sr-only">Tech and credits</h2>
        <div className="card">
          <h3 className="font-bold mb-2">Built with</h3>
          <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-200">
            <li>React 18 · Vite 5</li>
            <li>Tailwind CSS 3</li>
            <li>React Router 6</li>
            <li>Web Speech API (German TTS)</li>
            <li>localStorage for progress persistence</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-bold mb-2">Source &amp; feedback</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href={REPO_URL} target="_blank" rel="noreferrer"
                 className="text-brand-700 dark:text-brand-300 hover:underline">
                GitHub repository ↗
              </a>
            </li>
            <li>
              <a href={`${REPO_URL}/issues/new`} target="_blank" rel="noreferrer"
                 className="text-brand-700 dark:text-brand-300 hover:underline">
                Report an issue ↗
              </a>
            </li>
            <li>
              <Link to="/settings" className="text-brand-700 dark:text-brand-300 hover:underline">
                Settings (audio · theme · reset)
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
