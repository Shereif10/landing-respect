import { getTranslations } from "next-intl/server";
import { FinalCTAClient } from "@/components/sections/final-cta-client";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function FinalCTA({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "FinalCTA" });
  const navT = await getTranslations({ locale, namespace: "Nav" });

  return (
    <FinalCTAClient
      heading={t("heading")}
      body={t("body")}
      ctaLabel={navT("cta")}
    />
  );
}
