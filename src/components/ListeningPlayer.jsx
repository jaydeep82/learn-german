import { useState } from 'react';
import useTTS from '../hooks/useTTS.js';

/**
 * Trustworthy listening widget for the Hören tasks (roadmap A4).
 *
 * Audio uses the browser voice for now (a future upgrade swaps in pre-generated
 * clips). To stay reliable regardless of the device's voices, it always offers:
 *   - Play / replay (the exam lets you listen twice)
 *   - a slower-playback toggle
 *   - a transcript fallback — shown on demand, and automatically when the
 *     browser has no German voice, so a listening task is never a dead end.
 */
export default function ListeningPlayer({ text, label = 'Recording' }) {
  const { speak, supported, hasGermanVoice, voicesReady } = useTTS();
  const [plays, setPlays] = useState(0);
  const [slow, setSlow] = useState(false);
  const [showText, setShowText] = useState(false);

  // Only treat "no voice" as certain once voices have loaded (they load async).
  const noVoice = !supported || (voicesReady && !hasGermanVoice);

  const play = () => {
    speak(text, { rate: slow ? 0.7 : 0.95 });
    setPlays((p) => p + 1);
  };

  return (
    <div className="card bg-brand-50 dark:bg-slate-800 space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xl" aria-hidden>🎧</span>
        {!noVoice && (
          <>
            <button type="button" onClick={play} className="btn-primary py-2 px-4">
              {plays === 0 ? '▶ Play' : '🔁 Play again'}
            </button>
            <button type="button" onClick={() => setSlow((s) => !s)} aria-pressed={slow}
              className={`text-sm rounded-lg border-2 px-3 py-2 font-semibold transition ${
                slow ? 'border-brand-500 bg-brand-500 text-white' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'}`}>
              🐢 Slower
            </button>
          </>
        )}
        <span className="text-xs text-slate-500">{label}{plays > 0 ? ` · played ${plays}×` : ''}</span>
      </div>

      {noVoice && (
        <p className="text-xs text-amber-700 dark:text-amber-400">
          No German voice on this device — read the recording below instead.
        </p>
      )}

      {noVoice || showText ? (
        <p lang="de" className="text-sm whitespace-pre-line leading-relaxed text-slate-700 dark:text-slate-200">{text}</p>
      ) : (
        <button type="button" className="text-xs text-slate-500 underline hover:text-slate-700 dark:hover:text-slate-300"
          onClick={() => setShowText(true)}>
          Can’t hear it? Show the text
        </button>
      )}
    </div>
  );
}
