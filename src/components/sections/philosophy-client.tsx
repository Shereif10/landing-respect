"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import maeet1 from "../../assets/svg/maeet1.svg";

interface PhilosophyClientProps {
  navLabel: string;
  body: string;
}

export function PhilosophyClient({ navLabel, body }: PhilosophyClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Parse body into statements — split by common sentence markers
  const parseStatements = (text: string): string[] => {
    // Split by periods and filter empty strings
    const parts = text.split(/(?<=[..])\s+/).filter((s) => s.trim().length > 0);

    // If we have at least 3 parts, group them into 3 statements
    if (parts.length >= 3) {
      return [parts[0], parts.slice(1, -1).join(" "), parts[parts.length - 1]];
    }
    // If less than 3, return as is
    return parts.length > 0 ? parts : [text];
  };

  const statements = parseStatements(body);

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
  }, [body]);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24"
      style={{ direction: "ltr" }}
    >
      {/* Structural heading */}
      <h2 className="sr-only">{navLabel}</h2>

      {/* Two-column layout: Image LEFT + Text RIGHT */}
      <div className="flex flex-col-reverse gap-12 lg:flex-row-reverse lg:items-center lg:gap-20">
        {/* Right column: statements */}
        <div
          ref={textColumnRef}
          className="flex flex-1 flex-col gap-8 lg:gap-10"
        >
          {statements.map((statement, index) => (
            <div key={index} data-statement>
              <h3 className="text-brand-main text-2xl leading-snug font-bold md:text-[28px] lg:text-[32px]">
                {statement}
              </h3>
            </div>
          ))}
        </div>

        {/* Left column: illustration */}
        <div
          ref={imageRef}
          style={{
            borderStartStartRadius: "16px",
            borderStartEndRadius: "16px",
            borderEndStartRadius: "16px",
            borderEndEndRadius: "128px",
          }}
          className="relative h-[400px] w-full flex-shrink-0 overflow-hidden lg:h-[500px] lg:w-[45%]"
        >
          <Image
            src={maeet1}
            alt="Philosophy illustration"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-fill"
          />
        </div>
      </div>
    </section>
  );
}
