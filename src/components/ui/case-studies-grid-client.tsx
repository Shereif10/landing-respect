"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CaseStudyCard } from "@/components/ui/case-study-card";

type CaseStudy = {
  id: string;
  name: string;
  description: string;
  services: string[];
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CaseStudiesGridClient({ items }: { items: CaseStudy[] }) {
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
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, [items.length]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
    >
      {items.map((item) => (
        <CaseStudyCard key={item.id} item={item} />
      ))}
    </div>
  );
}
