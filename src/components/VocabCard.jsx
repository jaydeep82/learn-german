import AudioButton from './AudioButton.jsx';
import Pron from './Pron.jsx';

/**
 * One vocabulary block. Two layouts:
 *   'compact'   — Option 1: audio on the left, word + details stacked,
 *                 example below a thin divider. (default — used by Day 1.)
 *   'spotlight' — Option 2: big emoji tile on the left, example in its own
 *                 tinted panel, soft-tinted block background. (Day 2+.)
 *
 * Choose per day via the day's `vocabLayout` field.
 *
 * Props:
 *   v        — { de, en, emoji?, hint?, example?, exampleEn? }
 *   layout   — 'compact' | 'spotlight'
 *   showHint — render the 💡 hint line (lesson intro only)
 *   badge    — optional node shown top-right (e.g. the "D2" day link)
 */
export default function VocabCard({ v, layout = 'compact', showHint = false, badge = null }) {
  if (layout === 'spotlight') {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          {v.emoji ? (
            <div className="h-14 w-14 shrink-0 rounded-2xl bg-brand-50 dark:bg-slate-800 border border-brand-100 dark:border-slate-700 flex items-center justify-center text-3xl" aria-hidden>
              {v.emoji}
            </div>
          ) : (
            <AudioButton text={v.de} size="md" />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg leading-tight truncate">{v.de}</span>
              {v.emoji && <AudioButton text={v.de} size="sm" />}
              {badge && <span className="ml-auto shrink-0">{badge}</span>}
            </div>
            <Pron de={v.de} />
            <div className="text-sm text-slate-500 truncate">{v.en}</div>
          </div>
        </div>
        {showHint && v.hint && <div className="text-xs italic text-slate-400 mt-2">💡 {v.hint}</div>}
        {v.example && (
          <div className="mt-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 px-3 py-2">
            <div className="flex items-start gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200 flex-1">{v.example}</span>
              <AudioButton text={v.example} size="sm" />
            </div>
            <Pron de={v.example} />
            <div className="text-xs text-slate-500 mt-0.5">{v.exampleEn}</div>
          </div>
        )}
      </div>
    );
  }

  // 'compact' (Option 1)
  return (
    <div className="card flex items-start gap-3 p-3">
      <AudioButton text={v.de} size="sm" />
      <div className="flex-1 min-w-0">
        <div className="font-semibold truncate">
          {v.emoji && <span className="mr-1.5" aria-hidden>{v.emoji}</span>}
          {v.de}
        </div>
        <Pron de={v.de} />
        <div className="text-sm text-slate-500 truncate">{v.en}</div>
        {showHint && v.hint && <div className="text-xs italic text-slate-400">💡 {v.hint}</div>}
        {v.example && (
          <div className="mt-1.5 border-t border-slate-100 dark:border-slate-800 pt-1.5">
            <div className="flex items-start gap-1.5">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200 flex-1">{v.example}</span>
              <AudioButton text={v.example} size="sm" />
            </div>
            <Pron de={v.example} />
            <div className="text-xs text-slate-500">{v.exampleEn}</div>
          </div>
        )}
      </div>
      {badge}
    </div>
  );
}
