import { useEffect, useRef, useState } from 'react';

export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw != null ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  const ref = useRef(value);
  ref.current = value;

  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* quota or private mode */ }
  }, [key, value]);

  return [value, setValue];
}
