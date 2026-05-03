import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';
import { BADGES } from '../data/badges.js';

/**
 * Single source of truth for learner state. Persisted to localStorage so
 * progress survives reloads. Shape:
 *  {
 *    xp: number,
 *    streak: number,
 *    lastActiveDate: 'YYYY-MM-DD',
 *    completed: { [dayId]: { score: 0..1, attempts, completedAt } },
 *    answered:  { [dayId]: { [exerciseIdx]: 'correct'|'wrong' } },
 *    badges: string[],
 *    settings: { audio: bool, kid: bool, theme: 'light'|'dark'|'system' }
 *  }
 */

/**
 * v2.0.0 reshape (Deutsch30 → Deutsch40) renumbered every day past 11,
 * so a saved progress map keyed under deutsch30:v1 would now point at
 * the wrong lessons. Bumping the storage key forces a clean slate.
 */
const KEY = 'deutsch40:v1';

const defaults = {
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  completed: {},
  answered: {},
  badges: [],
  settings: { audio: true, kid: false, theme: 'system' },
};

const AppContext = createContext(null);
export const useApp = () => useContext(AppContext);

const today = () => new Date().toISOString().slice(0, 10);
const yesterdayOf = (iso) => {
  const d = new Date(iso); d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
};

export function AppProvider({ children }) {
  const [state, setState] = useLocalStorage(KEY, defaults);

  /* Apply theme + kid-mode to <html>. */
  useEffect(() => {
    const root = document.documentElement;
    const t = state.settings?.theme || 'system';
    const dark =
      t === 'dark' ||
      (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.classList.toggle('dark', !!dark);
    document.body.classList.toggle('kid-mode', !!state.settings?.kid);
  }, [state.settings?.theme, state.settings?.kid]);

  /* Recompute streak on mount and at midnight when the user returns. */
  useEffect(() => {
    setState((s) => {
      if (!s.lastActiveDate) return s;
      const t = today();
      if (s.lastActiveDate === t) return s;
      if (s.lastActiveDate === yesterdayOf(t)) return s; // streak still alive, will update on next action
      return { ...s, streak: 0 }; // missed at least a day
    });
    // run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const touchStreak = useCallback(() => {
    setState((s) => {
      const t = today();
      if (s.lastActiveDate === t) return s;
      const streak = s.lastActiveDate === yesterdayOf(t) ? (s.streak || 0) + 1 : 1;
      return { ...s, streak, lastActiveDate: t };
    });
  }, [setState]);

  const addXP = useCallback((amount) => {
    setState((s) => ({ ...s, xp: (s.xp || 0) + amount }));
  }, [setState]);

  const recordAnswer = useCallback((dayId, idx, correct) => {
    setState((s) => ({
      ...s,
      answered: {
        ...s.answered,
        [dayId]: { ...(s.answered?.[dayId] || {}), [idx]: correct ? 'correct' : 'wrong' },
      },
    }));
  }, [setState]);

  const completeDay = useCallback((dayId, score) => {
    setState((s) => {
      const prev = s.completed?.[dayId] || { attempts: 0, score: 0 };
      return {
        ...s,
        completed: {
          ...s.completed,
          [dayId]: {
            score: Math.max(prev.score || 0, score),
            attempts: (prev.attempts || 0) + 1,
            completedAt: today(),
          },
        },
      };
    });
  }, [setState]);

  const updateSettings = useCallback((patch) => {
    setState((s) => ({ ...s, settings: { ...s.settings, ...patch } }));
  }, [setState]);

  const resetAll = useCallback(() => {
    if (!confirm('Reset all progress, XP, badges and settings? This cannot be undone.')) return;
    setState(defaults);
  }, [setState]);

  /* Recompute earned badges whenever relevant fields change. */
  useEffect(() => {
    const earned = BADGES.filter((b) => b.when(state)).map((b) => b.id);
    if (earned.length !== state.badges?.length || earned.some((id) => !state.badges?.includes(id))) {
      setState((s) => ({ ...s, badges: earned }));
    }
  }, [state.xp, state.streak, state.completed, setState, state]);

  const isUnlocked = useCallback((dayId) => {
    if (dayId === 1) return true;
    const prev = state.completed?.[dayId - 1];
    return !!prev && prev.score >= 0.7;
  }, [state.completed]);

  const value = useMemo(() => ({
    state, setState,
    addXP, touchStreak, recordAnswer, completeDay, updateSettings, resetAll,
    isUnlocked,
  }), [state, setState, addXP, touchStreak, recordAnswer, completeDay, updateSettings, resetAll, isUnlocked]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
