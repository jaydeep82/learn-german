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

function RequestLine({ line, n, hidden }) {
  const [showReq, setShowReq] = useState(false);
  const [showAns, setShowAns] = useState(false);
  const answer = t3AnswerOf(line);
  const revealReq = !hidden.prompt || showReq;
  // The reply can only appear once the request does — otherwise a covered
  // request is given away by the model reply sitting right underneath it.
  const revealAns = revealReq && (!hidden.reply || showAns);

  const num = (
    <span
      aria-hidden
      className="shrink-0 mt-0.5 grid place-items-center w-5 h-5 rounded-full text-[11px] font-bold tabular-nums
                 bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
    >
      {n}
    </span>
  );

  if (!revealReq) {
    return (
      <li className="p-4 pl-5">
        <div className="flex items-start gap-2.5">
          {num}
          <div className="flex-1 min-w-0">
            {/* Picture + word + accusative are still on the card — that's the prompt. */}
            <button
              type="button"
              onClick={() => setShowReq(true)}
              className="text-xs font-semibold text-brand-600 dark:text-brand-300 hover:underline
                         border border-dashed border-slate-300 dark:border-slate-600 rounded px-2 py-1"
            >
              Make a request, then check →
            </button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className="p-4 pl-5">
      <div className="flex items-start gap-2.5">
        {num}
        <div className="flex-1 min-w-0">
          <span lang="de" className="font-semibold text-slate-900 dark:text-slate-100">{line.de}</span>
          <span className="block text-xs text-slate-500 mt-0.5">{line.en}</span>
        </div>
        <AudioButton text={line.de} size="sm" label="Hear the request" />
      </div>

      {answer && (
        <div className="mt-2 ml-7 pl-3 border-l-2 border-emerald-300 dark:border-emerald-700">
          {revealAns ? (
            <div className="flex items-start gap-2">
              <div className="flex-1 min-w-0">
                <span lang="de" className="text-emerald-700 dark:text-emerald-300 font-semibold">{answer.de}</span>
                <span className="block text-xs text-slate-500 mt-0.5">{answer.en}</span>
              </div>
              <AudioButton text={answer.de} size="sm" label="Hear the reply" />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowAns(true)}
              className="text-xs font-semibold text-brand-600 dark:text-brand-300 hover:underline"
            >
              Say it, then show the reply →
            </button>
          )}
        </div>
      )}
    </li>
  );
}

function Card({ card, hidden }) {
  const g = GEN_STYLE[card.gen] || GEN_STYLE.verb;
  const label = card.gen === 'pl' ? 'die · Plural' : card.gen === 'sign' ? 'Schild' : card.gen === 'verb' ? 'Verb' : card.gen;
  return (
    <article className="card h-full relative overflow-hidden !p-0">
      <span aria-hidden className={`absolute left-0 top-0 bottom-0 w-1 ${g.bar}`} />

      {/* Header — the picture card as the examiner hands it to you */}
      <header className="flex items-start gap-3.5 p-4 pl-5">
        <span
          aria-hidden
          className={`shrink-0 grid place-items-center w-14 h-14 rounded-2xl border text-3xl leading-none
                      shadow-sm ${g.chip}`}
        >
          {card.icon}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 lang="de" className="font-extrabold text-xl leading-tight text-slate-900 dark:text-slate-50">
              {card.word}
            </h3>
            <span className={`text-[10px] font-bold uppercase tracking-widest rounded-full border px-2 py-0.5 ${g.chip} ${g.text}`}>
              {label}
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-0.5">{card.gloss}</p>

          {/* The accusative is what you actually have to say — "der" is the trap. */}
          {card.acc && (
            <p className="mt-2 flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Akkusativ</span>
              <span lang="de" className={`font-bold text-base ${g.text}`}>{card.acc}</span>
              {card.gen === 'der' && (
                <span className="text-[10px] font-bold uppercase tracking-wide rounded px-1.5 py-0.5
                                 bg-rose-50 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">
                  der → den
                </span>
              )}
            </p>
          )}
        </div>
      </header>

      <ol className="border-t border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
        {card.lines.map((l, i) => <RequestLine key={l.de} line={l} n={i + 1} hidden={hidden} />)}
      </ol>
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
      hidePromptLabel="Hide requests"
      hideReplyLabel="Hide replies"
      footer={
        <>
          Previous part: <Link to="/sprechen/karten" className="text-brand-600 font-semibold hover:underline">🗂️ Teil 2 — Fragen</Link>
          {' '}· Practise out loud: <Link to="/sprechen" className="text-brand-600 font-semibold hover:underline">🗣️ Speaking test</Link>
          {' '}· More chunks: <Link to="/phrases" className="text-brand-600 font-semibold hover:underline">💬 Phrase bank</Link>
        </>
      }
    >
      {(card, hidden) => <Card card={card} hidden={hidden} />}
    </DeckShell>
  );
}
