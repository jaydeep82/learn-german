import { Link } from 'react-router-dom';
import { days, CONJ } from '../data/curriculum.js';

export default function Grammar() {
  const grammarDays = days.filter((d) => d.grammar?.length);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Grammar reference</h1>
        <p className="text-slate-500">Bookmark this page — every rule introduced in the 30-day course.</p>
      </header>

      {grammarDays.map((d) => (
        <section key={d.id} className="card" aria-labelledby={`g-${d.id}`}>
          <header className="flex items-center gap-2 mb-2">
            <span aria-hidden>{d.emoji}</span>
            <h2 id={`g-${d.id}`} className="font-bold">Day {d.id} · {d.title}</h2>
            <Link to={`/day/${d.id}`} className="ml-auto text-xs text-brand-600 hover:underline">Practise →</Link>
          </header>
          <ul className="space-y-2">
            {d.grammar.map((g) => (
              <li key={g.rule}>
                <div className="font-semibold text-brand-700 dark:text-brand-300">{g.rule}</div>
                <p className="text-slate-700 dark:text-slate-200">{g.body}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="card" aria-labelledby="conj">
        <h2 id="conj" className="font-bold mb-3">Conjugation cheat-sheet</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.entries(CONJ).map(([verb, rows]) => (
            <table key={verb} className="w-full text-sm">
              <caption className="font-semibold text-left pb-1">{verb}</caption>
              <tbody>
                {rows.map(([p, f]) => (
                  <tr key={p} className="border-t border-slate-200 dark:border-slate-800">
                    <td className="py-1 pr-2 text-slate-500">{p}</td>
                    <td className="py-1 font-mono">{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </section>
    </div>
  );
}
