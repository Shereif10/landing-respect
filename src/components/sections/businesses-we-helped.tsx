import { getTranslations } from "next-intl/server";
import { CaseStudiesGridClient } from "@/components/ui/case-studies-grid-client";

type CaseStudy = {
  id: string;
  name: string;
  description: string;
  services: string[];
};

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function BusinessesWeHelped({ locale }: { locale: string }) {
  const navT = await getTranslations({ locale, namespace: "Nav" });
  const t = await getTranslations({ locale, namespace: "BusinessesWeHelped" });
  const caseStudies = t.raw("items") as CaseStudy[];

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24"
    >
      {/* Structural heading only, for H1→H2→H3 hierarchy — reuses the
          already business-approved Nav.work UI label, not PRD/SEO copy. */}
      <h2 className="sr-only">{navT("work")}</h2>

      <div className="mb-12 text-center lg:mb-16">
        <p className="text-grey-10 mx-auto max-w-[720px] text-2xl leading-[1.35] font-semibold tracking-[-0.01em] md:text-3xl lg:text-[40px] lg:leading-[1.3]">
          {t("intro")}
        </p>
      </div>

      <CaseStudiesGridClient items={caseStudies} />
    </section>
  );
}
