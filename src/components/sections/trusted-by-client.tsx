"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { gsap } from "@/lib/gsap";

export type ClientLogo = {
  key: string;
  src: StaticImageData;
};

const DESKTOP_SPEED_PX_PER_SEC = 30;
const MOBILE_SPEED_PX_PER_SEC = 30;
const MOBILE_BREAKPOINT_PX = 768;

function distributeRoundRobin<T>(arr: T[], buckets: number): T[][] {
  // Deterministic distribution: same output on server and client, so the
  // SSR'd HTML always matches hydration (Math.random() here previously
  // produced a different order on each side → hydration mismatch).
  // Round-robin still interleaves neighboring logos across rows, which
  // reads as "mixed" without any randomness.
  const result: T[][] = Array.from({ length: buckets }, () => []);
  arr.forEach((item, i) => {
    result[i % buckets].push(item);
  });
  return result;
}

export function TrustedByClient({
  heading,
  logos,
}: {
  heading: string;
  logos: ClientLogo[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const track3Ref = useRef<HTMLDivElement>(null);

  // Pure, deterministic split — identical on server and client, so no
  // hydration mismatch and no extra render cycle.
  const [row1Logos, row2Logos, row3Logos] = distributeRoundRobin(logos, 3);

  // Layout effect only for the ScrollTrigger-gated fade-in: it must set the
  // hidden (opacity: 0) starting state before the browser paints, same
  // reasoning as Hero's entrance timeline — otherwise a fast scroll could
  // show one frame of the tracks at full opacity before GSAP hides them.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([track1Ref.current, track2Ref.current, track3Ref.current], {
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [logos]);

  // Marquee loop has no hidden/visible state to protect — the tracks' plain
  // flex layout is already a valid single frame of the same animation before
  // it starts moving — so this can safely run in a normal (post-paint)
  // effect instead of useLayoutEffect. That moves its forced-synchronous
  // `scrollWidth` reads (×3, needed for the loop-distance math) out of the
  // pre-paint blocking phase, where they'd otherwise stack up against every
  // other section's own mount-time GSAP/ScrollTrigger setup running in the
  // same commit — this is the actual "second section" the Hero hands off
  // to, so its mount-time cost is what a first scroll would run into.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const isRTL = getComputedStyle(sectionRef.current!).direction === "rtl";
      let marquee1: gsap.core.Tween | undefined;
      let marquee2: gsap.core.Tween | undefined;
      let marquee3: gsap.core.Tween | undefined;

      const startMarquees = () => {
        marquee1?.kill();
        marquee2?.kill();
        marquee3?.kill();

        const speed =
          window.innerWidth < MOBILE_BREAKPOINT_PX
            ? MOBILE_SPEED_PX_PER_SEC
            : DESKTOP_SPEED_PX_PER_SEC;

        // Row 1 - moves right to left
        if (track1Ref.current) {
          const setWidth = track1Ref.current.scrollWidth / 2;
          const duration = setWidth / speed;
          const dir1 = isRTL ? 1 : -1;

          gsap.set(track1Ref.current, { x: 0 });
          marquee1 = gsap.to(track1Ref.current, {
            x: dir1 * setWidth,
            duration,
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize((x) => {
                let v = parseFloat(x) % setWidth;
                if (dir1 < 0 && v > 0) v -= setWidth;
                if (dir1 > 0 && v < 0) v += setWidth;
                return v;
              }),
            },
          });
        }

        // Row 2 - moves left to right
        if (track2Ref.current) {
          const setWidth = track2Ref.current.scrollWidth / 2;
          const duration = setWidth / speed;
          const dir2 = isRTL ? -1 : 1;

          gsap.set(track2Ref.current, { x: dir2 < 0 ? setWidth : -setWidth });
          marquee2 = gsap.to(track2Ref.current, {
            x: 0,
            duration,
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize((x) => {
                let v = parseFloat(x) % setWidth;
                if (dir2 > 0 && v > 0) v -= setWidth;
                if (dir2 < 0 && v < 0) v += setWidth;
                return v;
              }),
            },
            onRepeat: () => {
              gsap.set(track2Ref.current, {
                x: dir2 < 0 ? setWidth : -setWidth,
              });
            },
          });
        }

        // Row 3 - moves right to left (same as row 1)
        if (track3Ref.current) {
          const setWidth = track3Ref.current.scrollWidth / 2;
          const duration = setWidth / speed;
          const dir3 = isRTL ? 1 : -1;

          gsap.set(track3Ref.current, { x: 0 });
          marquee3 = gsap.to(track3Ref.current, {
            x: dir3 * setWidth,
            duration,
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize((x) => {
                let v = parseFloat(x) % setWidth;
                if (dir3 < 0 && v > 0) v -= setWidth;
                if (dir3 > 0 && v < 0) v += setWidth;
                return v;
              }),
            },
          });
        }
      };

      startMarquees();
      window.addEventListener("resize", startMarquees);

      return () => {
        window.removeEventListener("resize", startMarquees);
        marquee1?.kill();
        marquee2?.kill();
        marquee3?.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [logos]);

  const logoClassName =
    "h-auto max-h-[80px] w-auto shrink-0 grayscale-0 transition-[filter] duration-[250ms] ease-out hover:grayscale motion-reduce:transition-none";

  return (
    <section id="trusted-by" ref={sectionRef} className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-16">
        <h2 className="text-grey-10 mb-12 text-center text-[40px] leading-tight font-bold md:text-[52px]">
          {heading}
        </h2>
      </div>

      <div className="w-full space-y-8 lg:space-y-10">
        {/* Row 1 - Right to Left */}
        <div className="w-full overflow-hidden py-8" aria-hidden="true">
          <div ref={track1Ref} className="flex w-max items-center gap-16">
            {/* كل لوجو في هالصف بيظهر مرتين في الـ marquee loop */}
            {[...row1Logos, ...row1Logos].map((logo, index) => (
              <Image
                key={`row1-${logo.key}-${index}`}
                src={logo.src}
                alt=""
                unoptimized
                className={logoClassName}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="w-full overflow-hidden py-8" aria-hidden="true">
          <div ref={track2Ref} className="flex w-max items-center gap-16">
            {[...row2Logos, ...row2Logos].map((logo, index) => (
              <Image
                key={`row2-${logo.key}-${index}`}
                src={logo.src}
                alt=""
                unoptimized
                className={logoClassName}
              />
            ))}
          </div>
        </div>

        {/* Row 3 - Right to Left */}
        <div className="w-full overflow-hidden py-8" aria-hidden="true">
          <div ref={track3Ref} className="flex w-max items-center gap-16">
            {[...row3Logos, ...row3Logos].map((logo, index) => (
              <Image
                key={`row3-${logo.key}-${index}`}
                src={logo.src}
                alt=""
                unoptimized
                className={logoClassName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
