import { useApp } from '../store/AppContext.jsx';
import useTTS from '../hooks/useTTS.js';

export default function Settings() {
  const { state, updateSettings, resetAll } = useApp();
  const { supported, voice } = useTTS();

  const set = (k) => (e) =>
    updateSettings({ [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  return (
    <div className="space-y-5 max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-extrabold">Settings</h1>

      <section className="card space-y-4">
        <h2 className="font-bold">Theme & audience</h2>
        <label className="flex items-center justify-between gap-4">
          <span>Theme</span>
          <select
            value={state.settings?.theme || 'system'}
            onChange={set('theme')}
            className="rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <label className="flex items-center justify-between gap-4">
          <span>Kid-friendly mode <span className="text-slate-500 text-sm">(rounder font, larger touch targets)</span></span>
          <input type="checkbox" checked={!!state.settings?.kid} onChange={set('kid')} className="h-5 w-5" />
        </label>
        <label className="flex items-center justify-between gap-4">
          <span>Audio (TTS)</span>
          <input type="checkbox" checked={!!state.settings?.audio} onChange={set('audio')} className="h-5 w-5" />
        </label>
        <p className="text-sm text-slate-500">
          {supported
            ? voice ? <>Using voice <strong>{voice.name}</strong> ({voice.lang}).</>
                    : <>Speech is supported but no German voice was found. macOS: System Settings → Accessibility → Spoken Content → System Voice → Anna/Markus. Chrome on Windows installs voices automatically.</>
            : <>This browser does not support speech synthesis.</>}
        </p>
      </section>

      <section className="card">
        <h2 className="font-bold mb-2">Progress</h2>
        <p className="text-sm text-slate-500 mb-3">XP: {state.xp || 0} · Streak: {state.streak || 0} · Days passed: {Object.values(state.completed||{}).filter(c=>c.score>=0.7).length}</p>
        <button onClick={resetAll} className="btn-secondary border-rose-300 text-rose-700 hover:border-rose-500">
          Reset all progress
        </button>
      </section>

      <section className="card">
        <h2 className="font-bold mb-2">Accessibility</h2>
        <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600 dark:text-slate-300">
          <li>Keyboard-only navigation works everywhere — try tabbing through.</li>
          <li>Animations honour <code>prefers-reduced-motion</code>.</li>
          <li>Buttons and inputs use semantic HTML and ARIA labels.</li>
          <li>Colour contrast is targeted at WCAG AA in both themes.</li>
        </ul>
      </section>
    </div>
  );
}
