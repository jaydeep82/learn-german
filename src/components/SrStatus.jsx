/**
 * Visually-hidden live region for screen-reader announcements (answer
 * feedback, match progress). Render it permanently and swap its text —
 * live regions must exist in the DOM before their content changes.
 */
export default function SrStatus({ children }) {
  return (
    <p role="status" aria-live="polite" className="sr-only">
      {children}
    </p>
  );
}
