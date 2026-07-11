/**
 * Reserves layout space for a visual asset (logo, wordmark, photo, icon)
 * that has not been added to the project yet. Renders no fabricated visual
 * content — only the correctly sized/positioned box the real asset will
 * drop into later, so adding the file requires no layout changes.
 *
 * `label` gives the placeholder an accessible name when the asset conveys
 * meaning (e.g. a logo or logotype). Omit it for purely decorative assets
 * and the placeholder is hidden from assistive tech instead.
 */
export function AssetPlaceholder({
  label,
  className = "",
  style,
}: {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  if (label) {
    return (
      <span
        role="img"
        aria-label={label}
        className={`inline-block ${className}`}
        style={style}
      />
    );
  }

  return (
    <span aria-hidden="true" className={`inline-block ${className}`} style={style} />
  );
}
