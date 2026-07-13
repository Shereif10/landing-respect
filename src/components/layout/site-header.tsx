"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/components/layout/nav-links";

function NavLinks({
  activeHref,
  onNavigate,
  stagger,
}: {
  activeHref: string;
  onNavigate?: () => void;
  stagger?: { isOpen: boolean };
}) {
  const t = useTranslations("Nav");

  return (
    <>
      {NAV_LINKS.map(({ key, href }, index) => {
        const isActive = href === activeHref;

        return (
          <a
            key={key}
            href={href}
            aria-current={isActive ? "location" : undefined}
            onClick={onNavigate}
            style={stagger ? { transitionDelay: `${index * 40}ms` } : undefined}
            className={`group relative -m-2 p-2 text-base leading-[1.2] transition-[color,transform,opacity] duration-[250ms] ease-out hover:-translate-y-px motion-reduce:transition-none ${
              stagger ? (stagger.isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0") : ""
            } ${
              isActive ? "font-semibold text-brand-main" : "font-medium text-grey-10 hover:text-brand-main"
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute inset-x-2 -bottom-1 h-0.5 origin-center scale-x-0 bg-brand-main transition-transform duration-[250ms] ease-out motion-reduce:transition-none group-hover:scale-x-100 ${
                isActive ? "scale-x-100" : ""
              }`}
            />
            <span className="relative">{t(key)}</span>
          </a>
        );
      })}
    </>
  );
}

export function SiteHeader() {
  const t = useTranslations("Nav");
  const panelId = useId();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#hero");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  // Drives the transparent-over-Hero → blurred-white background swap.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tracks which nav target is currently in view so the matching link can
  // show as active, instead of "Home" being permanently hardcoded as such.
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => document.querySelector(href)).filter(
      (el): el is Element => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActiveHref(`#${topMost.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-[250ms] ease-out motion-reduce:transition-none ${
        isScrolled
          ? "border-grey-2 bg-background/95 shadow-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-8 px-6 py-5 lg:px-16">
        <a href="#hero" className="-m-2 shrink-0 p-2">
          <AssetPlaceholder
            label={t("logoAlt")}
            className="h-[15px] w-16 lg:h-[37px] lg:w-[163px]"
          />
        </a>

        <nav aria-label={t("mainNav")} className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          <NavLinks activeHref={activeHref} />
        </nav>

        <Button
          href="#contact"
          variant="primary"
          className="hidden !px-6 !py-3 !text-base shadow-sm transition-[box-shadow,transform] duration-[250ms] ease-out hover:-translate-y-px hover:shadow-md motion-reduce:transition-none lg:inline-flex"
        >
          {t("cta")}
        </Button>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={panelId}
          aria-label={t("menuToggle")}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-grey-10 transition-transform duration-[250ms] ease-out motion-reduce:transition-none ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-grey-10 transition-opacity duration-[250ms] ease-out motion-reduce:transition-none ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-grey-10 transition-transform duration-[250ms] ease-out motion-reduce:transition-none ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id={panelId}
        inert={!isMenuOpen}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-[250ms] ease-out motion-reduce:transition-none lg:hidden ${
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 border-t border-grey-2 px-6 py-6">
          <nav aria-label={t("mobileNav")} className="flex flex-col gap-6">
            <NavLinks
              activeHref={activeHref}
              onNavigate={() => setIsMenuOpen(false)}
              stagger={{ isOpen: isMenuOpen }}
            />
            <Button
              href="#contact"
              variant="primary"
              style={isMenuOpen ? { transitionDelay: "160ms" } : undefined}
              className={`!px-6 !py-3 !text-base shadow-sm transition-[box-shadow,transform,opacity] duration-[250ms] ease-out hover:-translate-y-px hover:shadow-md motion-reduce:transition-none ${
                isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("cta")}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
