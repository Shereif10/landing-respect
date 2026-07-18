"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { type StaticImageData } from "next/image";
import { gsap } from "@/lib/gsap";
import { CaseStudyCard } from "@/components/ui/case-study-card";

export type CaseStudy = {
  id: string;
  name: string;
  description: string;
  services: string[];
  image: StaticImageData;
};

const INITIAL_DISPLAY_COUNT = 6;

export function CaseStudiesGridClient({ items }: { items: CaseStudy[] }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const animatedCountRef = useRef(0);
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll
    ? items
    : items.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreItems = items.length > INITIAL_DISPLAY_COUNT;

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      animatedCountRef.current = grid.children.length;
      return;
    }

    // Only animate cards added since the last run (e.g. by "See More") —
    // re-animating Array.from(grid.children) in full would replay the
    // entrance on already-visible cards too.
    const newChildren = Array.from(grid.children).slice(
      animatedCountRef.current,
    );
    if (newChildren.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(newChildren, {
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

    animatedCountRef.current = grid.children.length;

    return () => ctx.revert();
  }, [displayedItems.length]);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  return (
    <div className="w-full">
      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
      >
        {displayedItems.map((item) => (
          <CaseStudyCard key={item.id} item={item} />
        ))}
      </div>

      {/* See More Button */}
      {hasMoreItems && !showAll && (
        <div className="mt-12 flex justify-center lg:mt-16">
          <button
            onClick={handleSeeMore}
            style={{
              borderRadius: "12px 12px 96px 12px",
            }}
            className={[
              "inline-block px-8 py-4 text-base font-bold",
              "bg-brand-main text-brand-light",
              "border-brand-main border-2",
              "transition-all duration-300 ease-out",
              "hover:bg-brand-light hover:text-brand-main hover:-translate-y-1 hover:shadow-lg",
              "active:scale-95",
              "motion-reduce:transition-none",
            ].join(" ")}
          >
            See More Cases
          </button>
        </div>
      )}
    </div>
  );
}
