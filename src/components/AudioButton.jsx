import useTTS from '../hooks/useTTS.js';
import { useApp } from '../store/AppContext.jsx';

export default function AudioButton({ text, label = 'Hear pronunciation', size = 'md', className = '' }) {
  const { speak, supported } = useTTS();
  const { state } = useApp();
  if (!supported || !state.settings?.audio) return null;

  const sizes = { sm: 'h-7 w-7 text-sm', md: 'h-9 w-9 text-base', lg: 'h-11 w-11 text-lg' };
  return (
    <button
      type="button"
      onClick={() => speak(text)}
      aria-label={`${label}: ${text}`}
      title={label}
      className={`inline-flex items-center justify-center rounded-full bg-brand-50 text-brand-700 hover:bg-brand-100
                  dark:bg-slate-800 dark:text-brand-300 dark:hover:bg-slate-700
                  border border-brand-200 dark:border-slate-700 transition ${sizes[size]} ${className}`}
    >
      <span aria-hidden>🔊</span>
    </button>
  );
}
