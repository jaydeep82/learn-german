import AudioButton from '../AudioButton.jsx';
import Pron from '../Pron.jsx';
import GrammarTable from './GrammarTable.jsx';
import { splitRuleIcon, weekTheme } from '../../lib/weekTheme.js';

/**
 * Renders ONE grammar rule. The single shared renderer used by the Grammar
 * page (and, in later steps, the DayLesson intro + Review).
 *
 * Data contract (additive, backward-compatible):
 *   required:  { rule: string, body: string }
 *   optional:  { icon?, summary?, table?, bullets?[], examples?[{de,en,note}], tip?, warn? }
 *
 * Step 2 ships the LEGACY path for every item: the leading emoji in `rule` is
 * promoted to a coloured icon tile, the title shows clean beside it, and the
 * multi-line `body` renders in the (now-fixed) monospace block. The rich
 * sub-renders (summary / bullets / examples / table / callouts) are wired and
 * will light up automatically as days are migrated to the richer shape in
 * later steps — un-migrated days keep this exact legacy render.
 */

/** True when an item carries any of the optional rich fields. */
export function isRich(g) {
  return Boolean(g && (g.summary || g.table || g.bullets || g.examples || g.tip || g.warn));
}

/** One tappable worked example: German (+ 🔊 + [pron]) and its English gloss. */
function ExampleRow({ ex }) {
  return (
    <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 px-3 py-2">
      <div className="flex items-start gap-2">
        <span className="text-sm font-medium text-slate-800 dark:text-slate-100 flex-1">{ex.de}</span>
        <AudioButton text={ex.de} size="sm" />
      </div>
      <Pron de={ex.de} />
      {ex.en && <div className="text-xs text-slate-500 mt-0.5">{ex.en}</div>}
      {ex.note && <div className="text-xs italic text-slate-400 mt-0.5">💡 {ex.note}</div>}
    </div>
  );
}

function Callout({ kind, children }) {
  const styles = kind === 'warn'
    ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100'
    : 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100';
  const mark = kind === 'warn' ? '⚠️' : '💡';
  return (
    <div className={`mt-2 rounded-xl border px-3 py-2 text-sm ${styles}`}>
      <span className="mr-1.5" aria-hidden>{mark}</span>{children}
    </div>
  );
}

export default function GrammarItem({ g, week }) {
  const theme = weekTheme(week);
  const { icon, text } = splitRuleIcon(g.rule);

  return (
    <li className="flex gap-3">
      {/* Emoji / icon tile */}
      <div
        className={`mt-0.5 h-9 w-9 shrink-0 rounded-xl border flex items-center justify-center text-xl ${theme.tile}`}
        aria-hidden
      >
        {icon || g.icon || '📝'}
      </div>

      <div className="flex-1 min-w-0">
        <div className={`font-semibold ${theme.accent}`}>{text}</div>

        {/* One-line summary (rich) */}
        {g.summary && (
          <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{g.summary}</p>
        )}

        {/* Bullet list (rich) */}
        {g.bullets?.length > 0 && (
          <ul className="mt-1.5 space-y-1">
            {g.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700 dark:text-slate-200">
                <span className={theme.accent} aria-hidden>•</span>
                <span className="whitespace-pre-wrap">{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Real responsive table (rich) — replaces an ASCII grid */}
        {g.table && <GrammarTable table={g.table} week={week} />}

        {/* Legacy multi-line body. Kept whenever there's no structured
            replacement (summary/bullets/table). It can coexist WITH examples —
            the body explains the rule, the examples make it tappable/audible.
            Monospace + horizontal scroll keeps any remaining ASCII aligned. */}
        {g.body && !g.summary && !g.bullets && !g.table && (
          <p className="mt-0.5 whitespace-pre font-mono text-sm overflow-x-auto text-slate-700 dark:text-slate-200">
            {g.body}
          </p>
        )}

        {/* Worked examples — tappable audio + pronunciation (VocabCard style) */}
        {g.examples?.length > 0 && (
          <div className="mt-2 space-y-1.5">
            {g.examples.map((ex, i) => (
              <ExampleRow key={i} ex={ex} />
            ))}
          </div>
        )}

        {/* Callouts (rich) */}
        {g.tip && <Callout kind="tip">{g.tip}</Callout>}
        {g.warn && <Callout kind="warn">{g.warn}</Callout>}
      </div>
    </li>
  );
}
