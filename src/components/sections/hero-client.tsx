"use client";

import { useId, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/assets/svg/arrow-right.svg";
import RespectWordmark from "@/assets/svg/respect.svg";

// Tight geometry of the brand "R" mark, isolated from
// src/assets/svg/hero-illustration.svg (that file also bundles a decorative
// line-art overlay around this path — deliberately left out here so the R
// stands alone as the Hero's one visual focal point).
const R_PATH =
  "M469.331 331.328H398.695C518.764 270.41 634.992 168.028 634.992 0L138 82.832V248.496L303.661 220.896C303.665 244.043 295.454 266.441 280.491 284.101C265.527 301.762 244.782 313.539 221.949 317.336L138 331.328V414.168H220.831C242.799 414.168 263.867 422.895 279.401 438.429C294.934 453.963 303.661 475.032 303.661 497H634.992C634.994 475.244 630.711 453.7 622.386 433.599C614.062 413.499 601.859 395.235 586.476 379.85C571.093 364.466 552.83 352.263 532.73 343.937C512.63 335.612 491.086 331.327 469.331 331.328Z";

// Bounding box of R_PATH (x: 138–634.994, y: 0–497), padded slightly so the
// mark isn't cropped edge-to-edge inside its square.
const R_VIEWBOX = "118 -20 540 540";

type HeroClientProps = {
  locale: string;
  headlinePart1: string;
  headlinePart2: string;
  wordmarkAlt: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

/**
 * Client half of Hero: owns every ref-driven GSAP timeline. Receives
 * already-translated strings as props instead of calling useTranslations
 * itself, so Hero's copy never has to join NextIntlClientProvider's client
 * bundle (see layout.tsx's comment on why only the "Nav" namespace is
 * exposed there).
 */
export function HeroClient({
  locale,
  headlinePart1,
  headlinePart2,
  wordmarkAlt,
  body,
  ctaPrimary,
  ctaSecondary,
}: HeroClientProps) {
  const clipId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const washRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect (not useEffect) so the hidden/offset starting state GSAP
  // applies via `.from()` is set before the browser paints — GreenSock's own
  // React guidance for this, avoiding a one-frame flash of the fully-visible
  // state before the entrance plays.
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // No-JS and reduced-motion visitors both get the section already in its
    // final, fully-visible layout (nothing here ever sets a hidden default
    // outside this effect), matching CLAUDE.md's motion rules.
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(washRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power1.out",
        })
        .from(
          visualRef.current,
          { opacity: 0, scale: 0.96, duration: 0.8 },
          "-=0.7",
        )
        .from(videoRef.current, { opacity: 0, duration: 0.6 }, "-=0.3")
        .from(
          headlineRef.current ? Array.from(headlineRef.current.children) : [],
          { opacity: 0, y: 26, duration: 0.7, stagger: 0.12 },
          "-=0.4",
        )
        .from(bodyRef.current, { opacity: 0, y: 16, duration: 0.6 }, "-=0.3")
        .from(
          ctaGroupRef.current ? Array.from(ctaGroupRef.current.children) : [],
          { opacity: 0, y: 16, duration: 0.5, stagger: 0.08 },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative mx-auto w-full max-w-[1280px] overflow-hidden px-6 pt-2 pb-24 lg:px-16 lg:pt-2 lg:pb-32"
    >
      {/* Ambient light, not decoration: one large, extremely soft, low-opacity
          wash tying the background to the navbar above and the R below it.
          Hidden from assistive tech, never intercepts pointer events. If it's
          consciously noticeable, it's too strong. */}
      <div
        ref={washRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="bg-brand-main/[0.015] absolute end-[10%] top-0 h-[760px] w-[760px] rounded-full blur-[160px]" />
      </div>

      <div className="relative flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-16">
        <div className="order-2 flex w-full flex-col items-start gap-8 lg:order-1 lg:w-2/5">
          <h1
            ref={headlineRef}
            className="text-grey-10 flex flex-col gap-4 text-[44px] leading-[1.12] md:text-[60px] lg:text-[76px] ltr:tracking-[0.02em]"
          >
            <span className="font-black">{headlinePart1}</span>

            <span className="text-brand-main font-[750]">{headlinePart2}</span>

            <span className="pt-1">
              {locale === "ar" ? (
                <span className="text-brand-normal font-black">الاحترام</span>
              ) : (
                <Image
                  src={RespectWordmark}
                  alt={wordmarkAlt}
                  className="h-auto w-[180px] md:w-[240px] lg:w-[300px]"
                  priority
                />
              )}
            </span>
          </h1>

          <p
            ref={bodyRef}
            className="text-grey-10 max-w-[420px] text-lg leading-[1.2] font-medium"
          >
            {body}
          </p>

          {/* GSAP animates these wrapper spans, not the Buttons themselves —
              Button's hover feedback sets its own CSS `transition` on
              transform/opacity, which would otherwise fight GSAP's inline
              per-frame writes to those same properties on the same element
              and leave the entrance tween stuck partway. */}
          <div
            ref={ctaGroupRef}
            className="mt-3 flex flex-wrap items-center gap-[18px]"
          >
            <span className="inline-flex">
              <Button
                href="#contact"
                variant="primary"
                className="shadow-sm !transition-[background-color,box-shadow,transform] duration-[250ms] ease-out hover:-translate-y-px hover:shadow-md motion-reduce:transition-none"
              >
                {ctaPrimary}

                <Image
                  src={ArrowRight}
                  alt=""
                  width={52}
                  height={11}
                  className="h-[11px] w-[52px]"
                />
              </Button>
            </span>

            <span className="inline-flex">
              <Button
                href="#work"
                variant="secondary"
                className="!transition-[opacity,transform] duration-[250ms] ease-out hover:-translate-y-px motion-reduce:transition-none"
              >
                {ctaSecondary}
              </Button>
            </span>
          </div>
        </div>

        <div className="order-1 w-full lg:order-2 lg:w-3/5">
          <div
            ref={visualRef}
            className="relative mx-auto aspect-square w-full max-w-[560px] lg:max-w-none"
          >
            <svg
              viewBox={R_VIEWBOX}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <clipPath id={clipId}>
                  <path d={R_PATH} />
                </clipPath>
              </defs>

              {/* Solid brand-green fallback: the R reads as a complete,
                  confident shape on its own. The video plays on top,
                  cropped to the exact same silhouette. */}
              <path d={R_PATH} className="fill-brand-main" />

              <foreignObject
                x="138"
                y="0"
                width="497"
                height="497"
                clipPath={`url(#${clipId})`}
              >
                <video
                  src="/videos/video5.mp4"
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
