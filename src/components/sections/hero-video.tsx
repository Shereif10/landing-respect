"use client";

import { useRef, useEffect } from "react";

export function HeroVideo() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Ensure SVG mask is properly registered
    if (svgRef.current) {
      const svg = svgRef.current;
      const style = document.createElement("style");
      style.textContent = `
        .hero-video-container {
          mask-image: url(#r-letter-mask);
          -webkit-mask-image: url(#r-letter-mask);
          mask-size: contain;
          -webkit-mask-size: contain;
          mask-position: center;
          -webkit-mask-position: center;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
        }
      `;
      svg.parentElement?.appendChild(style);
    }
  }, []);

  return (
    <div className="relative h-[497px] w-full max-w-[497px]">
      {/* SVG with mask definition - positioned absolutely, not rendered visually */}
      <svg
        ref={svgRef}
        width="497"
        height="497"
        viewBox="0 0 497 497"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0"
        style={{ width: 0, height: 0 }}
      >
        <defs>
          <mask
            id="r-letter-mask"
            maskUnits="objectBoundingBox"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <path
              d="M331.331 331.328H260.695C380.764 270.41 496.992 168.028 496.992 0L0 82.832V248.496L165.661 220.896C165.665 244.043 157.454 266.441 142.491 284.101C127.527 301.762 106.782 313.539 83.9487 317.336L0 331.328V414.168H82.8306C104.799 414.168 125.867 422.895 141.401 438.429C156.934 453.963 165.661 475.032 165.661 497H496.992C496.994 475.244 492.711 453.7 484.386 433.599C476.062 413.499 463.859 395.235 448.476 379.85C433.093 364.466 414.83 352.263 394.73 343.937C374.63 335.612 353.086 331.327 331.331 331.328Z"
              fill="white"
            />
          </mask>
        </defs>
      </svg>

      {/* Video container with R shape mask */}
      <div
        className="hero-video-container bg-grey-1 absolute inset-0 h-full w-full overflow-hidden"
        style={{
          maskImage: "url(#r-letter-mask)",
          WebkitMaskImage: "url(#r-letter-mask)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{ display: "block" }}
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* R outline on top */}
      <svg
        width="497"
        height="497"
        viewBox="0 0 497 497"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0"
      >
        <path
          d="M331.331 331.328H260.695C380.764 270.41 496.992 168.028 496.992 0L0 82.832V248.496L165.661 220.896C165.665 244.043 157.454 266.441 142.491 284.101C127.527 301.762 106.782 313.539 83.9487 317.336L0 331.328V414.168H82.8306C104.799 414.168 125.867 422.895 141.401 438.429C156.934 453.963 165.661 475.032 165.661 497H496.992C496.994 475.244 492.711 453.7 484.386 433.599C476.062 413.499 463.859 395.235 448.476 379.85C433.093 364.466 414.83 352.263 394.73 343.937C374.63 335.612 353.086 331.327 331.331 331.328Z"
          fill="#00770E"
        />
      </svg>
    </div>
  );
}
