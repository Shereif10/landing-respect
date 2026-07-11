import { getTranslations } from "next-intl/server";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function Philosophy({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Philosophy" });
  const navT = await getTranslations({ locale, namespace: "Nav" });

  return (
    <section
      id="philosophy"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24"
    >
      {/* Structural heading only, for H1→H2 hierarchy — reuses the already
          business-approved Nav.about UI label, not PRD/SEO copy. */}
      <h2 className="sr-only">{navT("about")}</h2>

      <p className="mx-auto max-w-[840px] text-center text-2xl font-medium leading-snug text-grey-10 md:text-3xl lg:text-[40px]">
        {t("body")}
      </p>
    </section>
  );
}
