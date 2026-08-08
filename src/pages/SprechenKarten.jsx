import { useState } from 'react';
import { Link } from 'react-router-dom';
import AudioButton from '../components/AudioButton.jsx';
import DeckShell, { GEN_STYLE } from '../components/DeckShell.jsx';
import { T2_CARDS, T2_THEMES, T2_GENDERS, T2_GRAMMAR } from '../data/sprechenTeil2.js';

/**
 * Sprechen Teil 2 · Fragen und Antworten — the full keyword deck.
 *
 * In the exam you draw a theme card plus a keyword and have to ASK a whole
 * question; your partner answers. This page is that deck: every keyword with a
 * W-question and a Ja/Nein-question, each with a model answer, colour-coded by
 * gender exactly like the printed sheet — plus audio and a hide-answers mode
 * the paper version can't give you.
 */

const haystackOf = (c) =>
  [c.word, c.gloss, c.cat, ...c.lines.flatMap((l) => [l.de, l.en, l.ade, l.aen])].join(' ');

/** Cover for a hidden line: says what to produce, reveals on click. */
function Reveal({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs font-semibold text-brand-600 dark:text-brand-300 hover:underline
                 border border-dashed border-slate-300 dark:border-slate-600 rounded px-2 py-1"
    >
      {label}
    </button>
  );
}

function QaLine({ line, kind, hidden }) {
  const [showQ, setShowQ] = useState(false);
  const [showA, setShowA] = useState(false);
  const revealQ = !hidden.prompt || showQ;
  // The answer can only appear once the question does — otherwise a covered
  // question is given away by the model answer sitting right underneath it.
  const revealA = revealQ && (!hidden.reply || showA);

  // The badge stays: in the exam you know which kind of question is wanted,
  // you just have to build it. Everything else — the German, the English and
  // the model answer — is covered by this one control.
  const badge = (
    <span
      aria-hidden
      className="mt-0.5 text-[10px] font-bold uppercase tracking-wide rounded px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0"
    >
      {kind === 'w' ? 'W' : 'Ja/Nein'}
    </span>
  );

  if (!revealQ) {
    return (
      <li className="py-2.5 first:pt-0 last:pb-0">
        <div className="flex items-start gap-2">
          {badge}
          <div className="flex-1 min-w-0">
            <Reveal
              label={kind === 'w' ? 'Ask a W-question, then check →' : 'Ask a Ja/Nein-question, then check →'}
              onClick={() => setShowQ(true)}
            />
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className="py-2.5 first:pt-0 last:pb-0">
      <div className="flex items-start gap-2">
        {badge}
        <div className="flex-1 min-w-0">
          <span lang="de" className="font-semibold">{line.de}</span>
          <span className="block text-xs text-slate-500">{line.en}</span>
        </div>
        <AudioButton text={line.de} size="sm" label="Hear the question" />
      </div>

      <div className="mt-1.5 pl-8">
        {revealA ? (
          <div className="flex items-start gap-2">
            <div className="flex-1 min-w-0 border-l-2 border-emerald-400 dark:border-emerald-600 pl-2.5">
              <span lang="de" className="text-emerald-800 dark:text-emerald-300 font-medium">{line.ade}</span>
              <span className="block text-xs text-slate-500">{line.aen}</span>
            </div>
            <AudioButton text={line.ade} size="sm" label="Hear the answer" />
          </div>
        ) : (
          <Reveal label="Say it, then show the answer →" onClick={() => setShowA(true)} />
        )}
      </div>
    </li>
  );
}

function Card({ card, hidden }) {
  const g = GEN_STYLE[card.gen] || GEN_STYLE.verb;
  const article = card.gen === 'pl' ? 'die (Pl.)' : card.gen === 'verb' ? 'Verb' : card.gen;
  return (
    <article className="card h-full relative overflow-hidden pl-5">
      <span aria-hidden className={`absolute left-0 top-0 bottom-0 w-1.5 ${g.bar}`} />
      <div className="flex items-baseline gap-2 flex-wrap">
        <h3 lang="de" className={`font-extrabold text-lg ${g.text}`}>{card.word}</h3>
        <span className={`text-[10px] font-bold uppercase tracking-wide rounded-full border px-2 py-0.5 ${g.chip} ${g.text}`}>
          {article}
        </span>
        <span className="text-sm text-slate-500">{card.gloss}</span>
      </div>
      <ul className="divide-y divide-slate-100 dark:divide-slate-800 mt-2">
        {card.lines.map((l, i) => (
          <QaLine key={l.de} line={l} kind={i === 0 ? 'w' : 'jn'} hidden={hidden} />
        ))}
      </ul>
    </article>
  );
}

export default function SprechenKarten() {
  return (
    <DeckShell
      backTo="/sprechen"
      backLabel="Sprechen"
      title="🗂️ Sprechen Teil 2 — Fragen und Antworten"
      intro={
        <>
          The full keyword deck: {T2_CARDS.length} cards across the {T2_THEMES.length} official themes, each with a
          <strong> W-question</strong> and a <strong> Ja/Nein-question</strong> plus a model answer. In the exam you draw
          a theme and a keyword and must ask a <em>whole</em> question — never just the word. Pick <em>du</em> or
          <em> Sie</em> and stay with it.
        </>
      }
      cards={T2_CARDS}
      themes={T2_THEMES}
      genders={T2_GENDERS}
      grammar={T2_GRAMMAR}
      haystackOf={haystackOf}
      keyOf={(c) => `${c.cat}-${c.word}`}
      searchPlaceholder="Suchen: Stichwort, Frage, Antwort oder englische Bedeutung"
      footer={
        <>
          Next part: <Link to="/sprechen/bitten" className="text-brand-600 font-semibold hover:underline">🙏 Teil 3 — Bitten</Link>
          {' '}· Practise out loud: <Link to="/sprechen" className="text-brand-600 font-semibold hover:underline">🗣️ Speaking test</Link>
          {' '}· More chunks: <Link to="/phrases" className="text-brand-600 font-semibold hover:underline">💬 Phrase bank</Link>
        </>
      }
    >
      {(card, hidden) => <Card card={card} hidden={hidden} />}
    </DeckShell>
  );
}
