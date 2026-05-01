import { NavLink, Link } from 'react-router-dom';
import { XPBadge, StreakIndicator } from './ProgressUI.jsx';
import { useApp } from '../store/AppContext.jsx';

const navCls = ({ isActive }) =>
  `px-3 py-1.5 rounded-lg text-sm font-medium transition ${
    isActive
      ? 'bg-brand-600 text-white'
      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
  }`;

export default function Layout({ children }) {
  const { state, updateSettings } = useApp();

  return (
    <div className="min-h-full flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 btn-primary">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 backdrop-blur bg-white/85 dark:bg-slate-950/85 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span aria-hidden>🇩🇪</span>
            <span>Deutsch<span className="text-brand-600">30</span></span>
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-1 ml-4">
            <NavLink to="/"           end className={navCls}>Dashboard</NavLink>
            <NavLink to="/vocabulary"     className={navCls}>Vocabulary</NavLink>
            <NavLink to="/grammar"        className={navCls}>Grammar</NavLink>
            <NavLink to="/review/weekly"  className={navCls}>Review</NavLink>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <StreakIndicator className="hidden sm:inline-flex" />
            <XPBadge className="hidden sm:inline-flex" />
            <button
              className="btn-ghost px-2 py-1.5"
              aria-label={`Toggle ${state.settings?.kid ? 'adult' : 'kid'} mode`}
              title={`Toggle ${state.settings?.kid ? 'adult' : 'kid'} mode`}
              onClick={() => updateSettings({ kid: !state.settings?.kid })}
            >
              {state.settings?.kid ? '🧒' : '🧑'}
            </button>
            <button
              className="btn-ghost px-2 py-1.5"
              aria-label="Toggle dark mode"
              onClick={() =>
                updateSettings({
                  theme: (state.settings?.theme === 'dark' ? 'light' : 'dark'),
                })
              }
            >
              {state.settings?.theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <NavLink to="/settings" className={navCls} aria-label="Settings">⚙️</NavLink>
          </div>
        </div>
        {/* Mobile nav */}
        <nav aria-label="Primary mobile" className="md:hidden border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-2 py-2 flex gap-1 overflow-x-auto">
            <NavLink to="/"           end className={navCls}>Dashboard</NavLink>
            <NavLink to="/vocabulary"     className={navCls}>Vocab</NavLink>
            <NavLink to="/grammar"        className={navCls}>Grammar</NavLink>
            <NavLink to="/review/weekly"  className={navCls}>Review</NavLink>
          </div>
        </nav>
      </header>

      <main id="main" className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        {children}
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-sm text-slate-500">
        <div>Deutsch30 · 30 days from absolute beginner to confident self-introduction.</div>
        <div className="mt-1">Audio uses your browser&rsquo;s speech engine — install a German voice for best quality.</div>
      </footer>
    </div>
  );
}
