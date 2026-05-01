import { useCallback, useEffect, useState } from 'react';

/**
 * Web Speech API wrapper. Picks a German voice when available; falls back
 * to default voice with lang="de-DE". Returns { speak, supported, voice }.
 */
export default function useTTS() {
  const [voice, setVoice] = useState(null);
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    if (!supported) return;
    const pick = () => {
      const voices = window.speechSynthesis.getVoices();
      const de = voices.find((v) => /de(-DE|_DE|$)/i.test(v.lang)) || voices.find((v) => v.lang?.startsWith('de'));
      if (de) setVoice(de);
    };
    pick();
    window.speechSynthesis.onvoiceschanged = pick;
    return () => { if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = null; };
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

  return { speak, supported, voice };
}
