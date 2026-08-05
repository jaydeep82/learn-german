import { useState } from 'react';
import { Link } from 'react-router-dom';
import AudioButton from '../components/AudioButton.jsx';
import DeckShell, { GEN_STYLE } from '../components/DeckShell.jsx';
import { T3_CARDS, T3_THEMES, T3_GENDERS, T3_GRAMMAR, t3AnswerOf } from '../data/sprechenTeil3.js';

/**
 * Sprechen Teil 3 · Bitten formulieren — the request deck.
 *
 * You get a picture card and must make a polite request with that word; your
 * partner replies. The whole part hinges on the accusative — only "der" changes
 * (der Apfel → den Apfel), and getting that wrong is the classic Teil 3 slip —
 * so every card shows the accusative form it wants you to say.
 */

const haystackOf = (c) => {
  const answers = c.lines.map((l) => t3AnswerOf(l)).filter(Boolean).flatMap((a) => [a.de, a.en]);
  return [c.word, c.gloss, c.acc, c.cat, ...c.lines.flatMap((l) => [l.de, l.en]), ...answers].join(' ');
};

function RequestLine({ line, hide }) {
  const [shown, setShown] = useState(false);
  const answer = t3AnswerOf(line);
  const reveal = !hide || shown;
  return (
    <li className="py-2.5 first:pt-0 last:pb-0">
      <div className="flex items-start gap-2">
        <div className="flex-1 min-w-0">
          <span lang="de" className="font-semibold">{line.de}</span>
          <span className="block text-xs text-slate-500">{line.en}</span>
        </div>
        <AudioButton text={line.de} size="sm" label="Hear the request" />
      </div>

      {answer && (
        <div className="mt-1.5 pl-4">
          {reveal ? (
            <div className="flex items-start gap-2">
              <div className="flex-1 min-w-0 border-l-2 border-emerald-400 dark:border-emerald-600 pl-2.5">
                <span lang="de" className="text-emerald-800 dark:text-emerald-300 font-medium">{answer.de}</span>
                <span className="block text-xs text-slate-500">{answer.en}</span>
              </div>
              <AudioButton text={answer.de} size="sm" label="Hear the reply" />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShown(true)}
              className="text-xs font-semibold text-brand-600 dark:text-brand-300 hover:underline border border-dashed border-slate-300 dark:border-slate-600 rounded px-2 py-1"
            >
              Say it, then show the reply →
            </button>
          )}
        </div>
      )}
    </li>
  );
}

function Card({ card, hide }) {
  const g = GEN_STYLE[card.gen] || GEN_STYLE.verb;
  const label = card.gen === 'pl' ? 'die (Pl.)' : card.gen === 'sign' ? 'Schild' : card.gen === 'verb' ? 'Verb' : card.gen;
  return (
    <article className="card h-full relative overflow-hidden pl-5">
      <span aria-hidden className={`absolute left-0 top-0 bottom-0 w-1.5 ${g.bar}`} />
      <div className="flex items-baseline gap-2 flex-wrap">
        <h3 lang="de" className={`font-extrabold text-lg ${g.text}`}>{card.word}</h3>
        <span className={`text-[10px] font-bold uppercase tracking-wide rounded-full border px-2 py-0.5 ${g.chip} ${g.text}`}>
          {label}
        </span>
        <span className="text-sm text-slate-500">{card.gloss}</span>
      </div>

      {/* The accusative is what you actually have to say — "der" is the trap. */}
      {card.acc && (
        <p className="mt-1.5 text-sm">
          <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400 mr-1.5">Akkusativ</span>
          <span lang="de" className={`font-bold ${g.text}`}>{card.acc}</span>
          {card.gen === 'der' && (
            <span className="ml-2 text-[11px] text-rose-600 dark:text-rose-400 font-semibold">der → den</span>
          )}
        </p>
      )}

      <ul className="divide-y divide-slate-100 dark:divide-slate-800 mt-2">
        {card.lines.map((l) => <RequestLine key={l.de} line={l} hide={hide} />)}
      </ul>
    </article>
  );
}

export default function SprechenBitten() {
  const requests = T3_CARDS.reduce((n, c) => n + c.lines.length, 0);
  return (
    <DeckShell
      backTo="/sprechen"
      backLabel="Sprechen"
      title="🙏 Sprechen Teil 3 — Bitten formulieren"
      intro={
        <>
          The request deck: {T3_CARDS.length} picture words across {T3_THEMES.length} themes with {requests} model
          requests and their replies. The exam flow is <em>picture → word → article → accusative → request → answer</em>.
          Everything hinges on the accusative: only <strong>der</strong> changes (<span lang="de">der Apfel</span> →
          {' '}<span lang="de">den Apfel</span>). Always say <em>bitte</em>, never <em>du</em>, and keep the reply short.
        </>
      }
      cards={T3_CARDS}
      themes={T3_THEMES}
      genders={T3_GENDERS}
      grammar={T3_GRAMMAR}
      haystackOf={haystackOf}
      keyOf={(c) => `${c.cat}-${c.word}`}
      searchPlaceholder="Suchen: Wort, Bitte, Antwort oder englische Bedeutung"
      hideLabel="Hide replies"
      footer={
        <>
          Previous part: <Link to="/sprechen/karten" className="text-brand-600 font-semibold hover:underline">🗂️ Teil 2 — Fragen</Link>
          {' '}· Practise out loud: <Link to="/sprechen" className="text-brand-600 font-semibold hover:underline">🗣️ Speaking test</Link>
          {' '}· More chunks: <Link to="/phrases" className="text-brand-600 font-semibold hover:underline">💬 Phrase bank</Link>
        </>
      }
    >
      {(card, hide) => <Card card={card} hide={hide} />}
    </DeckShell>
  );
}
