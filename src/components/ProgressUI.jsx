import { useApp } from '../store/AppContext.jsx';
import { BADGES } from '../data/badges.js';

export function XPBadge({ className = '' }) {
  const { state } = useApp();
  return (
    <span className={`pill bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 ${className}`}>
      ⭐ <span className="tabular-nums">{state.xp || 0}</span> XP
    </span>
  );
}

export function StreakIndicator({ className = '' }) {
  const { state } = useApp();
  const s = state.streak || 0;
  return (
    <span className={`pill bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200 ${className}`}>
      🔥 <span className="tabular-nums">{s}</span>{' '}{s === 1 ? 'day' : 'days'}
    </span>
  );
}

export function ProgressBar({ value, max = 1, label, className = '' }) {
  const pct = Math.max(0, Math.min(1, value / max)) * 100;
  return (
    <div className={`w-full ${className}`} aria-label={label}>
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-brand-700 transition-all"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}
        />
      </div>
    </div>
  );
}

export function BadgeWall() {
  const { state } = useApp();
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
      {BADGES.map((b) => {
        const earned = state.badges?.includes(b.id);
        return (
          <div
            key={b.id}
            className={`card text-center p-3 ${earned ? '' : 'opacity-40 grayscale'}`}
            title={b.desc}
          >
            <div className="text-3xl" aria-hidden>{b.emoji}</div>
            <div className="mt-1 text-xs font-semibold">{b.title}</div>
          </div>
        );
      })}
    </div>
  );
}
