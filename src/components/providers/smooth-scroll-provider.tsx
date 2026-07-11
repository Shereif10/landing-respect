"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";

/**
 * Wires Lenis smooth scrolling to GSAP's ticker so scroll-driven GSAP
 * animations (e.g. ScrollTrigger) added later stay in sync. No-ops entirely
 * when the user prefers reduced motion, per CLAUDE.md's Animation Rules.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis();

    const syncLenisWithGsapTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(syncLenisWithGsapTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(syncLenisWithGsapTicker);
      lenis.destroy();
    };
  }, []);

  return children;
}
