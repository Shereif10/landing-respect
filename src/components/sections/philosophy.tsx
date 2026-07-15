import { getTranslations } from "next-intl/server";
import { PhilosophyClient } from "@/components/sections/philosophy-client";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function Philosophy({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Philosophy" });
  const navT = await getTranslations({ locale, namespace: "Nav" });

  return <PhilosophyClient navLabel={navT("about")} body={t("body")} />;
}
