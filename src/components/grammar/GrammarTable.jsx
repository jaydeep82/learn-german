import { weekTheme } from '../../lib/weekTheme.js';

/**
 * A real, responsive grammar table — replaces the hand-aligned ASCII grids.
 *
 * data shape:
 *   { head: [<cell>, ...], rows: [[<cell>, ...], ...] }
 *   where <cell> is either:
 *     - a string                      → plain cell
 *     - { t: string, hl?: boolean }   → cell text; hl highlights it (the
 *                                        "what changes" cells, e.g. den / dem)
 *   The first column of each row is treated as a row-label (semibold, muted).
 *
 * Wrapped in overflow-x-auto so wide case grids scroll on small screens
 * instead of squashing.
 */
function cellText(c) {
  return c && typeof c === 'object' ? c.t : c;
}
function cellHl(c) {
  return Boolean(c && typeof c === 'object' && c.hl);
}

export default function GrammarTable({ table, week }) {
  if (!table?.rows?.length) return null;
  const theme = weekTheme(week);
  const hasHead = Array.isArray(table.head) && table.head.length > 0;

  return (
    <div className="mt-2 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
      <table className="w-full text-sm border-collapse">
        {hasHead && (
          <thead>
            <tr className={`bg-gradient-to-br ${theme.headerGradient}`}>
              {table.head.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className={`px-3 py-2 text-left font-semibold whitespace-nowrap ${i === 0 ? theme.accent : 'text-slate-700 dark:text-slate-200'}`}
                >
                  {cellText(h)}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className="border-t border-slate-200 dark:border-slate-800">
              {row.map((c, ci) => {
                const txt = cellText(c);
                const hl = cellHl(c);
                if (ci === 0) {
                  return (
                    <th
                      key={ci}
                      scope="row"
                      className={`px-3 py-1.5 text-left font-semibold whitespace-nowrap ${theme.accent}`}
                    >
                      {txt}
                    </th>
                  );
                }
                return (
                  <td
                    key={ci}
                    className={`px-3 py-1.5 font-mono whitespace-nowrap ${
                      hl
                        ? `font-bold rounded ${theme.chip}`
                        : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {txt}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
