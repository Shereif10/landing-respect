"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#philosophy" },
  { key: "work", href: "#work" },
  { key: "services", href: "#services" },
] as const;

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const t = useTranslations("Nav");

  return (
    <>
      {NAV_LINKS.map(({ key, href }) => (
        <a
          key={key}
          href={href}
          aria-current={key === "home" ? "location" : undefined}
          onClick={onNavigate}
          className={
            key === "home"
              ? "-m-2 p-2 text-lg font-bold leading-[1.2] text-grey-10"
              : "-m-2 p-2 text-base font-medium leading-[1.2] text-grey-10 hover:text-brand-main"
          }
        >
          {t(key)}
        </a>
      ))}
    </>
  );
}

export function SiteHeader() {
  const t = useTranslations("Nav");
  const panelId = useId();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <header className="relative z-50 bg-background">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-8 px-6 py-8 lg:px-16">
        <a href="#hero" className="-m-2 shrink-0 p-2">
          <AssetPlaceholder
            label={t("logoAlt")}
            className="h-[15px] w-16 lg:h-[37px] lg:w-[163px]"
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          <NavLinks />
        </nav>

        <Button href="#contact" variant="primary" className="hidden lg:inline-flex">
          {t("cta")}
        </Button>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={panelId}
          aria-label="Menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-grey-10 transition-transform motion-reduce:transition-none ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-grey-10 transition-opacity motion-reduce:transition-none ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-grey-10 transition-transform motion-reduce:transition-none ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id={panelId}
        hidden={!isMenuOpen}
        className="border-t border-grey-2 px-6 py-6 lg:hidden"
      >
        <nav className="flex flex-col gap-6">
          <NavLinks onNavigate={() => setIsMenuOpen(false)} />
          <Button href="#contact" variant="primary" onClick={() => setIsMenuOpen(false)}>
            {t("cta")}
          </Button>
        </nav>
      </div>
    </header>
  );
}
