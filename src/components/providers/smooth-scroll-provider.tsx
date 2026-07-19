"use client";

import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";

type ScrollLockContextValue = {
  pause: () => void;
  resume: () => void;
};

// No-op default so consumers (e.g. modals) work even if ever rendered
// outside SmoothScrollProvider, or when Lenis never started (reduced motion).
const ScrollLockContext = createContext<ScrollLockContextValue>({
  pause: () => {},
  resume: () => {},
});

// Lets any descendant (e.g. a modal) pause/resume Lenis without needing a
// reference to the instance itself — used to stop Lenis's global wheel/touch
// interception while a modal's own internal content needs native scrolling.
export function useScrollLock() {
  return useContext(ScrollLockContext);
}

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
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis();
    lenisRef.current = lenis;

    const syncLenisWithGsapTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(syncLenisWithGsapTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(syncLenisWithGsapTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const pause = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const resume = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  return (
    <ScrollLockContext.Provider value={{ pause, resume }}>
      {children}
    </ScrollLockContext.Provider>
  );
}
