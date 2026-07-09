import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../store/AppContext.jsx';
import { buildSession, todayStr, INTERVALS } from '../data/srs.js';
import AudioButton from '../components/AudioButton.jsx';
import Pron from '../components/Pron.jsx';
import { ProgressBar } from '../components/ProgressUI.jsx';

const NEW_PER_DAY = 10;
const MAX_SESSION = 30;

/**
 * Daily spaced-repetition review (roadmap B1).
 * Builds today's deck once (due cards + a few new words), shows each as a
 * flip card, and reschedules on the learner's self-graded recall. A lapsed
 * card is requeued once more this session so it's seen again before finishing.
 */
export default function DailyReview() {
  const { state, reviewSrs, addXP, touchStreak } = useApp();

  // Build the deck once on entry so grading doesn't reshuffle it mid-session.
  const [session] = useState(() => buildSession(state.srs, { today: todayStr(), newPerDay: NEW_PER_DAY, max: MAX_SESSION }));
  const [extra, setExtra] = useState([]);
  const [pos, setPos] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [stats, setStats] = useState({ reviewed: 0, again: 0, learned: 0 });
  const requeued = useRef(new Set());
  const streaked = useRef(false);

  if (!streaked.current) { streaked.current = true; touchStreak(); }

  const queue = [...session, ...extra];
  const card = queue[pos];

  const grade = (g) => {
    reviewSrs(card.de, g);
    addXP(g === 'again' ? 1 : 3);
    setStats((s) => ({
      reviewed: s.reviewed + 1,
      again: s.again + (g === 'again' ? 1 : 0),
      learned: s.learned + (card.kind === 'new' && g !== 'again' ? 1 : 0),
    }));
    if (g === 'again' && !requeued.current.has(card.de)) {
      requeued.current.add(card.de);
      setExtra((e) => [...e, card]);
    }
    setRevealed(false);
    setPos((p) => p + 1);
  };

  // ── nothing due ────────────────────────────────────────────────────
  if (session.length === 0) {
    return (
      <div className="card text-center max-w-md mx-auto">
        <div className="text-5xl mb-2" aria-hidden>🎉</div>
        <h1 className="text-2xl font-extrabold">All caught up!</h1>
        <p className="text-slate-500 mt-2">No words are due for review right now. Come back tomorrow, or learn new words in Practice.</p>
        <div className="flex flex-wrap gap-2 justify-center mt-5">
          <Link to="/practice" className="btn-primary">Practice words</Link>
          <Link to="/" className="btn-secondary">Dashboard</Link>
        </div>
      </div>
    );
  }

  // ── session finished ───────────────────────────────────────────────
  if (!card) {
    return (
      <div className="card text-center max-w-md mx-auto">
        <div className="text-5xl mb-2" aria-hidden>✅</div>
        <h1 className="text-2xl font-extrabold">Daily review done</h1>
        <p className="text-slate-500 mt-2">
          You reviewed <strong>{stats.reviewed}</strong> {stats.reviewed === 1 ? 'card' : 'cards'}
          {stats.learned > 0 && <> and started <strong>{stats.learned}</strong> new {stats.learned === 1 ? 'word' : 'words'}</>}.
        </p>
        <p className="text-sm text-slate-400 mt-1">Come back tomorrow to keep them fresh — that’s how spaced repetition works.</p>
        <div className="flex flex-wrap gap-2 justify-center mt-5">
          <Link to="/practice" className="btn-primary">Practice more</Link>
          <Link to="/" className="btn-secondary">Dashboard</Link>
        </div>
      </div>
    );
  }

  const nextInterval = (g) => {
    const lvl = g === 'again' ? 1 : g === 'easy' ? Math.min((card.card?.level || 0) + 2, INTERVALS.length - 1) : Math.min((card.card?.level || 0) + 1, INTERVALS.length - 1);
    const d = INTERVALS[Math.max(1, lvl)];
    return d === 1 ? '1 day' : `${d} days`;
  };

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <span className="font-extrabold text-slate-700 dark:text-slate-200">🔁 Daily review</span>
        <span className="ml-auto tabular-nums">{pos + 1} / {queue.length}</span>
      </div>
      <ProgressBar value={pos} max={queue.length} label="Review progress" />

      <div className="flex justify-center">
        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
          card.kind === 'new'
            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
            : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'}`}>
          {card.kind === 'new' ? '✨ New word' : `🔁 Review · level ${card.card?.level ?? 1}`}
        </span>
      </div>

      <div className="card min-h-[220px] flex flex-col items-center justify-center gap-3 text-center">
        <div className="text-3xl sm:text-5xl font-bold tracking-tight">{card.de}</div>
        <Pron de={card.de} size="md" />
        <AudioButton text={card.de} size="lg" />
        {revealed && (
          <div className="mt-2 space-y-2">
            <div className="text-xl font-semibold text-brand-700 dark:text-brand-300">{card.en}</div>
            {card.example && <p className="text-sm text-slate-500 italic">“{card.example}”</p>}
          </div>
        )}
      </div>

      {!revealed ? (
        <button className="btn-primary w-full text-lg py-3" onClick={() => setRevealed(true)}>Show answer</button>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          <button className="rounded-xl border-2 border-rose-300 text-rose-700 dark:text-rose-300 dark:border-rose-700 py-2.5 font-semibold hover:bg-rose-50 dark:hover:bg-rose-900/30"
            onClick={() => grade('again')}>
            Again<span className="block text-[11px] font-normal opacity-70">{nextInterval('again')}</span>
          </button>
          <button className="rounded-xl border-2 border-brand-400 bg-brand-500 text-white py-2.5 font-semibold hover:bg-brand-600"
            onClick={() => grade('good')}>
            Good<span className="block text-[11px] font-normal opacity-80">{nextInterval('good')}</span>
          </button>
          <button className="rounded-xl border-2 border-emerald-400 text-emerald-700 dark:text-emerald-300 dark:border-emerald-700 py-2.5 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
            onClick={() => grade('easy')}>
            Easy<span className="block text-[11px] font-normal opacity-70">{nextInterval('easy')}</span>
          </button>
        </div>
      )}
    </div>
  );
}
