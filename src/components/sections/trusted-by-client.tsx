"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type ClientLogo = {
  key: string;
  src: StaticImageData;
};

const DESKTOP_SPEED_PX_PER_SEC = 30;
const MOBILE_SPEED_PX_PER_SEC = 30;
const MOBILE_BREAKPOINT_PX = 768;

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
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

  // Initial render (server + first client paint) uses the SAME order
  // as passed in, so there's no hydration mismatch.
  const [row1Logos, setRow1Logos] = useState(logos);
  const [row2Logos, setRow2Logos] = useState(logos);

  // Shuffle only after mount — runs client-side only, after hydration
  // is already complete, so React doesn't compare it against SSR output.
  useEffect(() => {
    setRow1Logos(shuffleArray(logos));
    setRow2Logos(shuffleArray(logos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([track1Ref.current, track2Ref.current], {
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

      const isRTL = getComputedStyle(sectionRef.current!).direction === "rtl";
      let marquee1: gsap.core.Tween | undefined;
      let marquee2: gsap.core.Tween | undefined;

      const startMarquees = () => {
        marquee1?.kill();
        marquee2?.kill();

        const speed =
          window.innerWidth < MOBILE_BREAKPOINT_PX
            ? MOBILE_SPEED_PX_PER_SEC
            : DESKTOP_SPEED_PX_PER_SEC;

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
      };

      startMarquees();
      window.addEventListener("resize", startMarquees);

      return () => {
        window.removeEventListener("resize", startMarquees);
        marquee1?.kill();
        marquee2?.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [row1Logos, row2Logos]);

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
        <div
          className=" w-full overflow-hidden py-8"
          aria-hidden="true"
        >
          <div ref={track1Ref} className="flex w-max items-center gap-16">
            {[...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos].map(
              (logo, index) => (
                <Image
                  key={`row1-${logo.key}-${index}`}
                  src={logo.src}
                  alt=""
                  className={logoClassName}
                />
              ),
            )}
          </div>
        </div>

        <div
          className=" w-full overflow-hidden py-8"
          aria-hidden="true"
        >
          <div ref={track2Ref} className="flex w-max items-center gap-16">
            {[...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos].map(
              (logo, index) => (
                <Image
                  key={`row2-${logo.key}-${index}`}
                  src={logo.src}
                  alt=""
                  className={logoClassName}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
