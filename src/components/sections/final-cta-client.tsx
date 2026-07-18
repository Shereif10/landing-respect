"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

interface FinalCTAClientProps {
  heading: string;
  body: string;
  ctaLabel: string;
}

export function FinalCTAClient({
  heading,
  body,
  ctaLabel,
}: FinalCTAClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const buttonEl = buttonRef.current;
    let handleMouseEnter: (() => void) | undefined;
    let handleMouseLeave: (() => void) | undefined;

    const ctx = gsap.context(() => {
      // Heading fade + scale
      gsap.from(headingRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Body fade + slide
      gsap.from(bodyRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Button entrance + pulse glow on hover
      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        delay: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Button hover pulse glow animation
      if (!prefersReducedMotion) {
        handleMouseEnter = () => {
          gsap.to(buttonRef.current, {
            boxShadow: "0 0 30px rgba(239, 186, 67, 0.6)",
            duration: 0.4,
            ease: "power2.out",
          });
        };

        handleMouseLeave = () => {
          gsap.to(buttonRef.current, {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            duration: 0.4,
            ease: "power2.out",
          });
        };

        buttonEl?.addEventListener("mouseenter", handleMouseEnter);
        buttonEl?.addEventListener("mouseleave", handleMouseLeave);
      }
    }, sectionRef);

    return () => {
      if (handleMouseEnter)
        buttonEl?.removeEventListener("mouseenter", handleMouseEnter);
      if (handleMouseLeave)
        buttonEl?.removeEventListener("mouseleave", handleMouseLeave);
      ctx.revert();
    };
  }, [heading, body, ctaLabel]);

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      style={{
        borderEndEndRadius: "128px",
      }}
      className={[
        "relative w-full overflow-hidden",
        "from-brand-main to-brand-main/90 bg-gradient-to-br",
        "border-brand-normal border-4",
        "py-20 lg:py-24",
        "motion-reduce:transition-none",
      ].join(" ")}
    >
      {/* Decorative corner accent */}
      <span
        aria-hidden="true"
        style={{ borderStartStartRadius: "256px" }}
        className="bg-brand-normal/10 pointer-events-none absolute start-0 top-0 h-80 w-80 rounded-full"
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex max-w-[840px] flex-col items-center gap-6 px-6 text-center lg:gap-8 lg:px-16"
      >
        <h2
          ref={headingRef}
          className="text-brand-light text-3xl leading-tight font-bold md:text-4xl lg:text-5xl"
        >
          {heading}
        </h2>

        <p
          ref={bodyRef}
          className="text-brand-light/90  text-lg leading-relaxed font-medium md:text-xl lg:text-2xl"
        >
          {body}
        </p>

        {/* CTA Button */}
        <Link
          ref={buttonRef}
          href="#contact"
          className={[
            "mt-2 inline-block px-12 py-4 lg:px-16 lg:py-5",
            "border-brand-normal text-brand-normal border-2 bg-transparent",
            "text-lg font-bold lg:text-xl",
            "rounded-[12px_12px_96px_12px]",
            "transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out",
            "hover:bg-brand-normal hover:text-brand-main hover:-translate-y-1",
            "active:scale-95",
            "motion-reduce:transition-none",
            "shadow-md hover:shadow-lg",
          ].join(" ")}
        >
          {ctaLabel}
        </Link>
      </div>

      {/* Decorative bottom accent */}
      <span
        aria-hidden="true"
        style={{ borderEndStartRadius: "196px" }}
        className="bg-brand-normal/5 pointer-events-none absolute end-0 bottom-0 h-72 w-72 rounded-full"
      />
    </section>
  );
}
