"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ProcessCard, type Process } from "@/components/ui/process-card";

interface HowWeWorkClientProps {
  heading: string;
  intro: string;
  steps: Process[];
}

export function HowWeWorkClient({
  heading,
  intro,
  steps,
}: HowWeWorkClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      // Intro paragraph fade in
      gsap.from(".how-we-work-intro", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Process cards — stagger entrance with scale + opacity
      const cards = cardsRef.current?.querySelectorAll("[data-process-card]");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          scale: 0.85,
          y: 50,
          duration: 0.8,
          stagger: prefersReducedMotion ? 0 : 0.18,
          ease: "back.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }

      // Numbers animation — count up
      const numbers = cardsRef.current?.querySelectorAll("[data-step-number]");
      if (numbers && !prefersReducedMotion) {
        numbers.forEach((numEl, idx) => {
          gsap.fromTo(
            numEl,
            { innerText: "00" },
            {
              innerText: String(idx + 1).padStart(2, "0"),
              duration: 0.6,
              snap: { innerText: 1 },
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 70%",
                toggleActions: "play none none none",
              },
              delay: idx * 0.18,
            },
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [steps.length, intro]);

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24"
    >
      <h2 className="sr-only">{heading}</h2>

      {/* Intro */}
      <p className="how-we-work-intro text-grey-10 mx-auto mb-16  text-center text-2xl leading-[1.35] font-semibold tracking-[-0.01em] md:text-3xl lg:mb-20 lg:text-[40px] lg:leading-[1.3]">
        {intro}
      </p>

      {/* Process cards grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
      >
        {steps.map((step, index) => (
          <div
            key={step.id}
            data-process-card
            className="flex flex-col items-center"
          >
            {/* Circle connector node */}
            <div className="border-brand-main bg-brand-light hover:border-brand-normal mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              <span
                data-step-number
                className="text-brand-main text-2xl font-bold"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Card */}
            <ProcessCard process={step} />
          </div>
        ))}
      </div>
    </section>
  );
}
