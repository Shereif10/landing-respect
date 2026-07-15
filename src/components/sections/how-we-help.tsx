import { getTranslations } from "next-intl/server";
import { ServicesGrid } from "@/components/ui/services-grid";
import type { Service } from "@/components/ui/service-card";

type ServiceEntry = Service & { description: string };

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function HowWeHelp({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Services" });
  const navT = await getTranslations({ locale, namespace: "Nav" });
  const items = t.raw("items") as ServiceEntry[];
  // Only the service name is mapped to this landing-page section (PRD §7:
  // "Present All Services Equally"; SEO_GAPS.md Gap 3 — per-service page
  // depth was never confirmed as belonging here). Drop everything else
  // before it reaches the client-facing component tree.
  const services: Service[] = items.map(({ id, title,description }) => ({ id, title, description }));

  return (
    <section
      id="services"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24"
    >
      {/* Structural heading only, for correct H1→H2→H3 hierarchy — not the
          PRD's IA section title. Reuses the already business-approved
          Nav.services UI label (both locales), not PRD/SEO marketing copy. */}
      <h2 className="sr-only">{navT("services")}</h2>

      {/* Section intro — larger, tighter, and centered so it reads as a
          proper section lead-in rather than a stray line of body copy. */}
      <p className="text-grey-10 mx-auto mb-12  text-center text-2xl leading-[1.35] font-semibold tracking-[-0.01em] md:text-3xl lg:mb-16 lg:text-[40px] lg:leading-[1.3]">
        {t("intro")}
      </p>

      <ServicesGrid services={services} />
    </section>
  );
}
