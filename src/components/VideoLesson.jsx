import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * An embedded YouTube lesson.
 *
 * Nothing is requested from YouTube until you press play — until then this is a
 * local thumbnail and a button, so the page stays fast and the embed can't
 * track you for merely visiting. Once playing it offers three sizes: the normal
 * inline player, a wide "theatre" width, and real fullscreen. The player's own
 * fullscreen button works too, which is the fallback on iOS where the
 * Fullscreen API isn't available for ordinary elements.
 */
export default function VideoLesson({ id, title, channel, blurb }) {
  const [playing, setPlaying] = useState(false);
  const [wide, setWide] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);
  const frameRef = useRef(null);

  // Keep the button label honest when the user leaves fullscreen with Esc.
  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement || document.webkitFullscreenElement));
    document.addEventListener('fullscreenchange', onChange);
    document.addEventListener('webkitfullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      document.removeEventListener('webkitfullscreenchange', onChange);
    };
  }, []);

  const canFullscreen = typeof document !== 'undefined'
    && (document.fullscreenEnabled || document.webkitFullscreenEnabled);

  const toggleFullscreen = useCallback(() => {
    const el = frameRef.current;
    if (!el) return;
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    } else {
      setPlaying(true); // going fullscreen on the placeholder would show a black box
      (el.requestFullscreen || el.webkitRequestFullscreen).call(el);
    }
  }, []);

  const btn = 'inline-flex items-center gap-1.5 text-xs font-semibold rounded-lg border px-2.5 py-1.5 transition '
    + 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-300';

  return (
    <section className={`card ${wide ? '' : 'max-w-3xl'}`} aria-labelledby={`vid-${id}`}>
      <div className="flex items-start gap-3 flex-wrap">
        <div className="min-w-0 flex-1">
          <h2 id={`vid-${id}`} className="font-bold leading-tight">
            <span aria-hidden>🎬</span> {title}
          </h2>
          {(channel || blurb) && (
            <p className="text-sm text-slate-500 mt-0.5">
              {blurb}
              {channel && <span className="block text-xs mt-0.5">Video by {channel} · YouTube</span>}
            </p>
          )}
        </div>
        <div className="flex gap-1.5 shrink-0">
          <button type="button" className={btn} onClick={() => setWide((v) => !v)}
            aria-pressed={wide} title={wide ? 'Back to normal width' : 'Make the player wider'}>
            {wide ? '↙ Normal size' : '↗ Bigger'}
          </button>
          {canFullscreen && (
            <button type="button" className={btn} onClick={toggleFullscreen}
              title={fullscreen ? 'Leave fullscreen' : 'Watch fullscreen'}>
              {fullscreen ? '⤡ Exit fullscreen' : '⛶ Fullscreen'}
            </button>
          )}
        </div>
      </div>

      <div
        ref={frameRef}
        className={`mt-3 relative overflow-hidden bg-black ${fullscreen ? 'w-screen h-screen' : 'aspect-video rounded-xl'}`}
      >
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full grid place-items-center"
            aria-label={`Play video: ${title}`}
          >
            {!thumbFailed && (
              <img
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt=""
                aria-hidden
                // Not lazy: this is the section's hero, and deferring it leaves
                // a black box on the very screen the user is looking at.
                onError={() => setThumbFailed(true)}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition"
              />
            )}
            <span aria-hidden
              className="relative grid place-items-center w-16 h-16 rounded-full bg-white/95 text-brand-700 text-2xl
                         shadow-lg group-hover:scale-105 transition">
              ▶
            </span>
          </button>
        )}
      </div>

      <p className="text-xs text-slate-400 mt-2">
        Trouble playing it here?{' '}
        <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer"
          className="text-brand-600 dark:text-brand-300 hover:underline font-semibold">
          Watch on YouTube ↗
        </a>
        {' '}· needs an internet connection.
      </p>
    </section>
  );
}
