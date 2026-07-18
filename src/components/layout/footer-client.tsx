"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import RespectLogo from "@/assets/svg/respect-logo.svg";

type NavLink = { key: string; href: string; label: string };
type ServiceItem = { id: string; title: string };

export type FooterStrings = {
  tagline: string;
  sections: {
    navigation: string;
    services: string;
    contact: string;
    viewAll: string;
  };
  contact: {
    whatsappLabel: string;
    whatsapp: string;
    whatsappNote: string;
    email: string;
    location: string;
  };
  copyright: string;
  privacyPolicy: string;
};

const PrivacyModal = dynamic(() =>
  import("@/components/layout/privacy-modal").then((mod) => mod.PrivacyModal),
);

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585763918837",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/respect.agency.eg",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.914 4.914 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.913 4.913 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/respect-marketing-agency/",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@respect.agency.eg",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
];

export function FooterClient({
  navLinks,
  logoAlt,
  services,
  footerT,
}: {
  navLinks: NavLink[];
  logoAlt: string;
  services: ServiceItem[];
  footerT: FooterStrings;
}) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const whatsappDigits = footerT.contact.whatsapp.replace(/\D/g, "");

  return (
    <>
      <footer id="footer" className="w-full">
        {/* ===== MAIN FOOTER (Green) ===== */}
        <div className="bg-brand-main w-full">
          <div className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-16 lg:py-14">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8">
              {/* Column 1 — Brand */}
              <div className="flex flex-col gap-5 lg:col-span-3">
                <a href="#hero" className="-m-2 w-fit p-2">
                  <Image
                    src={RespectLogo}
                    alt={logoAlt}
                    width={163}
                    height={37}
                    className="h-[24px] w-auto lg:h-[32px]"
                    style={{ filter: "brightness(0) invert(1)" }}
                    loading="lazy"
                  />
                </a>
                <p className="text-brand-light/80 max-w-[240px] text-sm leading-relaxed font-medium">
                  {footerT.tagline}
                </p>
              </div>

              {/* Column 2 — Navigation */}
              <div className="flex flex-col gap-4 whitespace-nowrap lg:col-span-3">
                <p className="text-brand-normal text-[10px] font-bold tracking-[0.15em] uppercase">
                  {footerT.sections.navigation}
                </p>
                <nav className="flex flex-col gap-2.5">
                  {navLinks.map(({ key, href, label }) => (
                    <a
                      key={key}
                      href={href}
                      className="text-brand-light/75 hover:text-brand-light w-fit text-sm font-medium transition-colors duration-250"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Column 3 — Services */}
              <div className="flex flex-col gap-4 whitespace-nowrap lg:col-span-3">
                <p className="text-brand-normal text-[10px] font-bold tracking-[0.15em] uppercase">
                  {footerT.sections.services}
                </p>
                <nav className="flex flex-col gap-2.5">
                  {services.slice(0, 4).map(({ id, title }) => (
                    <a
                      key={id}
                      href="#services"
                      className="text-brand-light/75 hover:text-brand-light w-fit text-sm font-medium transition-colors duration-250"
                    >
                      {title}
                    </a>
                  ))}
                  <a
                    href="#services"
                    className="text-brand-normal hover:text-brand-light w-fit text-sm font-bold transition-colors duration-250"
                  >
                    {footerT.sections.viewAll}
                  </a>
                </nav>
              </div>

              {/* Column 4 — Contact + WhatsApp + Socials */}
              <div className="flex flex-col gap-4 lg:col-span-3">
                <p className="text-brand-normal text-[10px] font-bold tracking-[0.15em] uppercase">
                  {footerT.sections.contact}
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-brand-normal text-[10px] font-bold tracking-[0.15em] uppercase">
                    {footerT.contact.whatsappLabel}
                  </p>
                  <a
                    href={`https://wa.me/${whatsappDigits}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="text-brand-light hover:text-brand-normal w-fit text-2xl font-bold transition-colors duration-250 lg:text-[26px]"
                  >
                    {footerT.contact.whatsapp}
                  </a>
                  <p className="text-brand-light/60 text-xs font-medium">
                    {footerT.contact.whatsappNote}
                  </p>
                </div>
                <div className="mt-1 flex flex-col gap-3">
                  <a
                    href={`mailto:${footerT.contact.email}`}
                    className="text-brand-light/90 hover:text-brand-normal flex w-fit items-center gap-2.5 text-sm font-medium break-all transition-colors duration-250"
                  >
                    <svg
                      className="text-brand-normal h-4 w-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    {footerT.contact.email}
                  </a>
                  <p className="text-brand-light/75 flex items-center gap-2.5 text-sm font-medium">
                    <svg
                      className="text-brand-normal h-4 w-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    {footerT.contact.location}
                  </p>
                </div>

                {/* Social icons with brand radius */}
                <div className="mt-2 flex gap-3">
                  {SOCIAL_LINKS.map(({ name, href, icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className={[
                        "flex h-11 w-11 items-center justify-center",
                        " text-brand-light",
                        "transition-all duration-250 ease-out",
                        " hover:text-brand-light hover:-translate-y-0.5",
                        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                      ].join(" ")}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM BAR (Darker Green) ===== */}
        <div className="w-full" style={{ backgroundColor: "#025A0A" }}>
          <div
            className="mx-auto w-full max-w-[1280px] px-6 py-4 lg:px-16"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <p className="text-brand-light/60 text-xs font-medium">
              {footerT.copyright}
            </p>
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="text-brand-light/85 hover:text-brand-normal text-xs font-medium underline underline-offset-4 transition-colors duration-250"
            >
              {footerT.privacyPolicy}
            </button>
          </div>
        </div>
      </footer>

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </>
  );
}
