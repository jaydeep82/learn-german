import { Link } from 'react-router-dom';
import { PHRASEBOOK, WRITING_TEMPLATES } from '../data/phrasebook.js';
import AudioButton from '../components/AudioButton.jsx';

/**
 * A1 phrase bank (roadmap D1): situation phrases with audio, plus reusable
 * writing templates for Schreiben Teil 2.
 */
export default function Phrases() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <Link to="/exam" className="text-sm text-slate-500 hover:underline">← Exam trainer</Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">💬 Phrase bank</h1>
        <p className="text-slate-500 mt-1">
          Ready-made A1 chunks — say them until they’re automatic. The writing templates fit the exam’s
          ~30-word messages; swap the details for your own.
        </p>
      </div>

      {PHRASEBOOK.map((s) => (
        <section key={s.section} className="card" aria-labelledby={`ph-${s.section}`}>
          <h2 id={`ph-${s.section}`} className="font-extrabold mb-3"><span aria-hidden>{s.emoji}</span> {s.section}</h2>
          <ul className="divide-y divide-slate-100 dark:divide-slate-800">
            {s.phrases.map((p) => (
              <li key={p.de} className="py-2 first:pt-0 last:pb-0 flex items-start gap-2">
                <div className="flex-1 min-w-0">
                  <span lang="de" className="font-medium">{p.de}</span>
                  <span className="block text-sm text-slate-500">{p.en}</span>
                </div>
                <AudioButton text={p.de} size="sm" />
              </li>
            ))}
          </ul>
        </section>
      ))}

      <h2 className="text-lg font-extrabold pt-2">✍️ Writing templates — Schreiben Teil 2</h2>
      {WRITING_TEMPLATES.map((t) => (
        <section key={t.title} className="card bg-gradient-to-br from-violet-50 to-white dark:from-slate-800 dark:to-slate-900" aria-labelledby={`wt-${t.title}`}>
          <div className="flex items-center gap-2 mb-3">
            <h3 id={`wt-${t.title}`} className="font-bold flex-1"><span aria-hidden>{t.emoji}</span> {t.title}</h3>
            <AudioButton text={t.lines.map((l) => l.de).join(' ')} size="sm" label="Hear the whole template" />
          </div>
          <ul className="space-y-1.5">
            {t.lines.map((l) => (
              <li key={l.de} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                <span lang="de" className="font-medium">{l.de}</span>
                <span className="text-sm text-slate-500">{l.en}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800 pt-4">
        Practise using them: <Link to="/schreiben" className="text-brand-600 font-semibold hover:underline">✍️ Writing test</Link>
        {' '}· <Link to="/sprechen" className="text-brand-600 font-semibold hover:underline">🗣️ Speaking practice</Link>
      </p>
    </div>
  );
}
