"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ValueCard, type Value } from "@/components/ui/value-card";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ValuesGridClient({ values }: { values: Value[] }) {
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
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, [values.length]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
    >
      {values.map((value) => (
        <ValueCard key={value.id} value={value} />
      ))}
    </div>
  );
}
