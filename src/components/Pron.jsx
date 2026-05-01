import { pronounce } from '../lib/pronounce.js';

/**
 * Renders the English-phonetic approximation of a German string in
 * brackets, in muted italic. Use it directly under a German word.
 */
export default function Pron({ de, size = 'sm', className = '' }) {
  if (!de) return null;
  const sizes = {
    xs: 'text-[11px]',
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };
  return (
    <span
      className={`block italic text-slate-500 dark:text-slate-400 ${sizes[size] || sizes.sm} ${className}`}
      aria-label={`Pronounced ${pronounce(de)}`}
    >
      [{pronounce(de)}]
    </span>
  );
}
