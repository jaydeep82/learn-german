/**
 * Per-week colour identity for the Grammar page (and reusable elsewhere).
 *
 * Mirrors the palette the 7 Cheatsheet pages already use, extended to all
 * eight weeks of the curriculum:
 *   W1 sky/blue · W2 emerald · W3 rose/amber · W4 violet/indigo ·
 *   W5 teal/cyan · W6 rose/orange · W7 amber/orange (past tense) ·
 *   W8 slate/gold (mastery).
 *
 * IMPORTANT: every Tailwind class is written out in full as a static string
 * so the JIT compiler keeps it (no dynamic `bg-${x}-50` interpolation, which
 * would be purged from the production build).
 */
export const WEEK_THEME = {
  1: {
    name: 'sky',
    tile: 'bg-sky-50 dark:bg-slate-800 border-sky-100 dark:border-slate-700',
    accent: 'text-sky-700 dark:text-sky-300',
    headerGradient: 'from-sky-50 to-blue-50 dark:from-slate-900 dark:to-slate-950',
    chip: 'bg-sky-100 text-sky-800',
  },
  2: {
    name: 'emerald',
    tile: 'bg-emerald-50 dark:bg-slate-800 border-emerald-100 dark:border-slate-700',
    accent: 'text-emerald-700 dark:text-emerald-300',
    headerGradient: 'from-emerald-50 to-brand-50 dark:from-slate-900 dark:to-slate-950',
    chip: 'bg-emerald-100 text-emerald-800',
  },
  3: {
    name: 'rose',
    tile: 'bg-rose-50 dark:bg-slate-800 border-rose-100 dark:border-slate-700',
    accent: 'text-rose-700 dark:text-rose-300',
    headerGradient: 'from-rose-50 to-amber-50 dark:from-slate-900 dark:to-slate-950',
    chip: 'bg-rose-100 text-rose-800',
  },
  4: {
    name: 'violet',
    tile: 'bg-violet-50 dark:bg-slate-800 border-violet-100 dark:border-slate-700',
    accent: 'text-violet-700 dark:text-violet-300',
    headerGradient: 'from-violet-50 to-indigo-50 dark:from-slate-900 dark:to-slate-950',
    chip: 'bg-violet-100 text-violet-800',
  },
  5: {
    name: 'teal',
    tile: 'bg-teal-50 dark:bg-slate-800 border-teal-100 dark:border-slate-700',
    accent: 'text-teal-700 dark:text-teal-300',
    headerGradient: 'from-teal-50 to-cyan-50 dark:from-slate-900 dark:to-slate-950',
    chip: 'bg-teal-100 text-teal-800',
  },
  6: {
    name: 'orange',
    tile: 'bg-orange-50 dark:bg-slate-800 border-orange-100 dark:border-slate-700',
    accent: 'text-orange-700 dark:text-orange-300',
    headerGradient: 'from-rose-50 to-orange-50 dark:from-slate-900 dark:to-slate-950',
    chip: 'bg-orange-100 text-orange-800',
  },
  7: {
    name: 'amber',
    tile: 'bg-amber-50 dark:bg-slate-800 border-amber-100 dark:border-slate-700',
    accent: 'text-amber-700 dark:text-amber-300',
    headerGradient: 'from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-950',
    chip: 'bg-amber-100 text-amber-800',
  },
  8: {
    name: 'slate',
    tile: 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
    accent: 'text-slate-700 dark:text-slate-300',
    headerGradient: 'from-slate-100 to-amber-50 dark:from-slate-900 dark:to-slate-950',
    chip: 'bg-slate-200 text-slate-800',
  },
};

/** Safe lookup with a neutral fallback. */
export function weekTheme(week) {
  return WEEK_THEME[week] || WEEK_THEME[8];
}

/**
 * Split a grammar rule title into its leading emoji (if any) and the rest.
 * ~211 of 259 rule titles already start with an emoji (⭐ 🟦 🚫 🔗 🎯 …);
 * we promote that into the icon tile and show the clean title beside it.
 *
 * Returns { icon, text }. icon is null when the title has no leading emoji.
 */
export function splitRuleIcon(rule = '') {
  // Match a leading "extended pictographic" run (emoji incl. ZWJ sequences,
  // variation selectors, combining marks) followed by optional separators.
  const m = rule.match(/^(\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic}|\p{Emoji_Modifier})*)\s*[—·-]?\s*/u);
  if (m) {
    return { icon: m[1], text: rule.slice(m[0].length).trim() || rule };
  }
  return { icon: null, text: rule };
}
