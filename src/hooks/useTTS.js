import { useCallback, useEffect, useState } from 'react';

/**
 * Web Speech API wrapper. Picks a German voice when available and speaks with
 * lang="de-DE". Voices load asynchronously, so we also report whether they have
 * loaded yet and whether a German voice actually exists — the listening UI uses
 * that to fall back to a transcript when no German voice is available.
 *
 * NOTE: audio currently uses the browser's built-in voice; a future upgrade will
 * swap in pre-generated audio clips (see ROADMAP / listening-audio-strategy).
 *
 * Returns { speak, cancel, supported, voice, hasGermanVoice, voicesReady }.
 */
export default function useTTS() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [voice, setVoice] = useState(null);
  const [voicesReady, setVoicesReady] = useState(false);

  useEffect(() => {
    if (!supported) return undefined;
    const pick = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;
      setVoicesReady(true);
      const de =
        voices.find((v) => /^de[-_]DE/i.test(v.lang)) ||
        voices.find((v) => /^de([-_]|$)/i.test(v.lang)) ||
        voices.find((v) => /deutsch|german/i.test(v.name || ''));
      setVoice(de || null);
    };
    pick();
    window.speechSynthesis.addEventListener?.('voiceschanged', pick);
    window.speechSynthesis.onvoiceschanged = pick;
    return () => {
      window.speechSynthesis.removeEventListener?.('voiceschanged', pick);
      if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = null;
    };
  }, [supported]);

  const speak = useCallback((text, { rate = 0.95, pitch = 1 } = {}) => {
    if (!supported || !text) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE';
      if (voice) u.voice = voice;
      u.rate = rate;
      u.pitch = pitch;
      window.speechSynthesis.speak(u);
    } catch { /* ignore */ }
  }, [supported, voice]);

  const cancel = useCallback(() => {
    if (!supported) return;
    try { window.speechSynthesis.cancel(); } catch { /* ignore */ }
  }, [supported]);

  return { speak, cancel, supported, voice, hasGermanVoice: !!voice, voicesReady };
}
