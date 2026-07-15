import { getTranslations } from "next-intl/server";
import { HeroClient } from "@/components/sections/hero-client";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx. All
// interactivity/animation lives in HeroClient; this stays a Server
// Component so translation is resolved at build/request time, not shipped
// to the client.
export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Hero" });

  return (
    <HeroClient
      headlinePart1={t("headlinePart1")}
      headlinePart2={t("headlinePart2")}
      wordmarkAlt={t("wordmarkAlt")}
      body={t("body")}
      ctaPrimary={t("ctaPrimary")}
      ctaSecondary={t("ctaSecondary")}
    />
  );
}
