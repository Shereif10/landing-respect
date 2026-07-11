import { getTranslations } from "next-intl/server";
import { CaseStudiesGrid } from "@/components/ui/case-studies-grid";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function BusinessesWeHelped({ locale }: { locale: string }) {
  const navT = await getTranslations({ locale, namespace: "Nav" });

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24"
    >
      {/* Structural heading only, for H1→H2→H3 hierarchy — reuses the
          already business-approved Nav.work UI label, not PRD/SEO copy. */}
      <h2 className="sr-only">{navT("work")}</h2>

      <CaseStudiesGrid />
    </section>
  );
}
