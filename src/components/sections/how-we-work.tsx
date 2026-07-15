import { getTranslations } from "next-intl/server";
import { HowWeWorkClient } from "@/components/sections/how-we-work-client";
import type { Process } from "@/components/ui/process-card";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function HowWeWork({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "HowWeWork" });
  const steps = t.raw("items") as Process[];

  return (
    <HowWeWorkClient heading={t("heading")} intro={t("intro")} steps={steps} />
  );
}
