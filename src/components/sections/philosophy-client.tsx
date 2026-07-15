"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PhilosophyClientProps {
  navLabel: string;
  body: string;
}

export function PhilosophyClient({ navLabel, body }: PhilosophyClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Parse the philosophy body into 3 key statements
  // Statement 1: "We believe..." (first sentence up to "system.")
  // Statement 2: "So we don't..." (from "So we" up to "what's next.")
  // Statement 3: "To us..." (rest)
  const statements = [
    "We believe most companies don't fail for lack of effort they fail for lack of a system.",
    "So we don't chase trends or sell campaigns. We build the brand and business foundations beneath the marketing, honoring what makes each company unique while shaping it for what's next.",
    "To us, growth isn't a lucky accident. It's a system you can design, measure, and repeat.",
  ];

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Text column slides in from right + fades
      gsap.from(textColumnRef.current, {
        opacity: 0,
        x: 60,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Image slides in from left + scales
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -60,
        scale: 0.92,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Stagger individual statements
      const statementElements =
        textColumnRef.current?.querySelectorAll("[data-statement]");
      if (statementElements) {
        gsap.from(statementElements, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Placeholder illustration — replace with real brand asset
  const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='600'%3E%3Crect fill='%23F5F5F5' width='500' height='600'/%3E%3Ccircle cx='100' cy='100' r='60' fill='%2300770E' opacity='0.1'/%3E%3Ccircle cx='400' cy='150' r='80' fill='%23EFBA43' opacity='0.1'/%3E%3Crect x='80' y='300' width='120' height='120' fill='%2300770E' opacity='0.08'/%3E%3Cpath d='M200 200 L300 250 L250 350 Z' fill='%23EFBA43' opacity='0.08'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23999' text-anchor='middle' dy='.3em' transform='translate(0, 100)'%3ESystem Illustration%3C/text%3E%3C/svg%3E`;

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24"
    >
      {/* Structural heading */}
      <h2 className="sr-only">{navLabel}</h2>

      {/* Two-column layout: text left, image right */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Left column: statements */}
        <div ref={textColumnRef} className="flex flex-col gap-8 lg:gap-10">
          {statements.map((statement, index) => (
            <div key={index} data-statement>
              <h3 className="text-brand-main text-2xl leading-snug font-bold md:text-[28px] lg:text-[32px]">
                {statement}
              </h3>
            </div>
          ))}
        </div>

        {/* Right column: illustration placeholder */}
        <div
          ref={imageRef}
          style={{
            borderStartStartRadius: "16px",
            borderStartEndRadius: "16px",
            borderEndStartRadius: "16px",
            borderEndEndRadius: "128px",
          }}
          className="border-grey-1 bg-grey-1 relative h-[400px] w-full overflow-hidden border-2 lg:h-[500px]"
        >
          <Image
            src={placeholderImage}
            alt="Philosophy illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
