import type { ReactNode } from "react";

/**
 * DESIGN_SYSTEM.md's documented "Service card" shell (Main Colors/Light
 * fill, Main Colors/Normal 2px border, asymmetric radius). Shared by every
 * card-style grid item so the visual language stays in one place.
 */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`radius-card flex h-full flex-col gap-4 border-2 border-brand-normal bg-brand-light p-8 ${className}`}
    >
      {children}
    </article>
  );
}
