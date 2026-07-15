"use client";

import { useState } from "react";
import Image from "next/image";
import RespectLogo from "@/assets/svg/respect-logo.svg";

type NavLink = { key: string; href: string; label: string };
type ServiceItem = { id: string; title: string };

function PrivacyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="bg-grey-10/40 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-brand-light relative max-h-[80vh] w-full max-w-2xl overflow-y-auto p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          borderRadius: "16px 16px 96px 16px",
        }}
      >
        <button
          onClick={onClose}
          className="text-grey-10 hover:text-brand-main absolute top-6 right-6 text-2xl transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="space-y-6">
          <h2 className="text-brand-main text-3xl font-bold">
            Privacy & Policy
          </h2>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">
              1. Information We Collect
            </h3>
            <p className="text-grey-9 leading-relaxed">
              We collect information you provide directly to us, such as your
              name, email address, phone number, and company details when you
              contact us or request our services.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">
              2. How We Use Your Information
            </h3>
            <p className="text-grey-9 leading-relaxed">
              Your information is used to provide and improve our services,
              respond to your inquiries, and comply with legal obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">3. Data Security</h3>
            <p className="text-grey-9 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, alteration, or
              disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">
              4. Cookies and Tracking
            </h3>
            <p className="text-grey-9 leading-relaxed">
              Our website uses cookies to enhance your experience and analyze
              traffic patterns.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">5. Your Rights</h3>
            <p className="text-grey-9 leading-relaxed">
              You have the right to access, correct, or delete your personal
              information. Contact us at hello@respect.agency.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">
              6. Third-Party Links
            </h3>
            <p className="text-grey-9 leading-relaxed">
              We are not responsible for the privacy practices of third-party
              websites linked from our site.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">
              7. Changes to This Policy
            </h3>
            <p className="text-grey-9 leading-relaxed">
              We may update this privacy policy from time to time. Changes will
              be posted on our website with an updated date.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-grey-10 text-xl font-bold">8. Contact Us</h3>
            <p className="text-grey-9 leading-relaxed">
              If you have any questions, please contact us at
              hello@respect.agency.
            </p>
          </section>

          <button
            onClick={onClose}
            className={[
              "mt-8 w-full px-8 py-3 text-sm font-bold",
              "text-brand-light bg-brand-main",
              "rounded-[12px_12px_96px_12px]",
              "transition-[transform,box-shadow] duration-300 ease-out",
              "hover:-translate-y-1 hover:shadow-lg",
            ].join(" ")}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

export function FooterTwoTone({
  navLinks,
  logoAlt,
  services,
  year,
}: {
  navLinks: NavLink[];
  logoAlt: string;
  services: ServiceItem[];
  year: number;
}) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer id="footer" className="w-full">
        {/* TOP SECTION - Light background */}
        <div className="bg-grey-1 border-brand-main/10 w-full border-b-2">
          <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-20">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              {/* Brand */}
              <div className="flex flex-col gap-6">
                <a href="#hero" className="-m-2 w-fit p-2">
                  <Image
                    src={RespectLogo}
                    alt={logoAlt}
                    width={163}
                    height={37}
                    className="h-[20px] w-auto lg:h-[37px]"
                    priority
                  />
                </a>
                <p className="text-grey-9 max-w-[280px] text-sm leading-relaxed font-medium">
                  Transforming ambitious companies into growth systems.
                </p>
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-4">
                <h3 className="text-brand-main text-xs font-bold tracking-wider uppercase">
                  Navigation
                </h3>
                <nav className="flex flex-col gap-2.5">
                  {navLinks.map(({ key, href, label }) => (
                    <a
                      key={key}
                      href={href}
                      className="text-grey-9 hover:text-brand-main text-sm font-medium transition-colors duration-250 ease-out motion-reduce:transition-none"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Services */}
              <div className="flex flex-col gap-4">
                <h3 className="text-brand-main text-xs font-bold tracking-wider uppercase">
                  Services
                </h3>
                <nav className="flex flex-col gap-2.5">
                  {services.slice(0, 5).map(({ id, title }) => (
                    <a
                      key={id}
                      href="#services"
                      className="text-grey-9 hover:text-brand-main text-sm font-medium transition-colors duration-250 ease-out motion-reduce:transition-none"
                    >
                      {title}
                    </a>
                  ))}
                  <a
                    href="#services"
                    className="text-brand-normal hover:text-brand-main text-sm font-bold transition-colors duration-250 ease-out motion-reduce:transition-none"
                  >
                    View All →
                  </a>
                </nav>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-4">
                <h3 className="text-brand-main text-xs font-bold tracking-wider uppercase">
                  Company
                </h3>
                <nav className="flex flex-col gap-2.5">
                  
                  <button
                    onClick={() => setIsPrivacyOpen(true)}
                    className="text-grey-9 hover:text-brand-main text-left text-sm font-medium transition-colors duration-250 ease-out motion-reduce:transition-none"
                  >
                    Privacy & Policy
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION - Green background */}
        <div className="bg-brand-main w-full">
          <div className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-16 lg:py-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-center lg:justify-between">
              {/* Left - Copyright */}
              <div className="flex flex-col gap-2">
                <p className="text-brand-light/80 text-sm font-medium">
                  © {year} Respect Agency
                </p>
                <p className="text-brand-light/60 text-xs font-medium">
                  All rights reserved.
                </p>
              </div>

              {/* Center - Contact Info */}
              <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:justify-center">
                <div>
                  <p className="text-brand-normal mb-1 text-xs font-semibold tracking-wide uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:hello@respect.agency"
                    className="text-brand-light hover:text-brand-normal text-sm font-medium transition-colors duration-250"
                  >
                    hello@respect.agency
                  </a>
                </div>
                <div>
                  <p className="text-brand-normal mb-1 text-xs font-semibold tracking-wide uppercase">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/201001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-light hover:text-brand-normal text-sm font-medium transition-colors duration-250"
                  >
                    +20 100 1234 567
                  </a>
                </div>
              </div>

              {/* Right - CTA */}
              <a
                href="#contact"
                className={[
                  "inline-flex justify-center px-3 py-3 text-sm font-bold ",
                  "text-brand-main bg-brand-light",
                  "border-brand-light rounded-[8px_8px_96px_8px] border-2",
                  "transition-all duration-300 ease-out",
                  "hover:bg-brand-normal hover:text-brand-main hover:border-brand-normal hover:-translate-y-1 hover:shadow-lg",
                  "motion-reduce:transition-none",
                ].join(" ")}
              >
                Start a Project
              </a>
            </div>
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
