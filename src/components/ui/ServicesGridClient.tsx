"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ServiceCard, type Service } from "@/components/ui/service-card";

/**
 * Bento-style services grid. Every card renders through the same
 * ServiceCard (equal visual weight by construction, per PRD §7) — the
 * "bento" variety comes only from grid cell sizing, not from ranking any
 * service above another. The first cell is given a larger footprint purely
 * to break the flat uniform-grid rhythm the brand's asymmetric identity
 * calls for; it carries no "featured" meaning and no extra data.
 *
 * On a 12-col desktop track, 10 services tile as: one wide lead cell
 * (spans 6), then the rest at 3 or 4 cols so rows stay full without gaps.
 */

// Column spans per card index on the lg (12-col) grid. Chosen so 10 cards
// tile edge-to-edge with no orphan gaps while keeping an irregular,
// asymmetric rhythm rather than a plain uniform grid.
const LG_SPANS = [6, 3, 3, 4, 4, 4, 3, 3, 3, 3];

export function ServicesGridClient({ services }: { services: Service[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(Array.from(grid.children), {
        opacity: 0,
        y: 32,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, [services.length]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6"
    >
      {services.map((service, index) => {
        const span = LG_SPANS[index] ?? 3;
        // Map the numeric span to explicit Tailwind classes (can't be
        // interpolated — Tailwind needs whole class names present at build).
        const lgSpanClass =
          span === 6
            ? "lg:col-span-6"
            : span === 4
              ? "lg:col-span-4"
              : "lg:col-span-3";

        return (
          <div key={service.id} className={lgSpanClass}>
            <ServiceCard
              service={service}
              index={index}
              featured={span === 6}
            />
          </div>
        );
      })}
    </div>
  );
}
