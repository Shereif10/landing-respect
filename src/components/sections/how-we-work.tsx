import { getTranslations } from "next-intl/server";
import { ProcessGrid } from "@/components/ui/process-grid";
import type { Process } from "@/components/ui/process-card";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function HowWeWork({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "HowWeWork" });
  const steps = t.raw("items") as Process[];

  return (
    <section id="how-we-work" className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24">
      {/* Structural heading only, for correct H1→H2→H3 hierarchy — not
          marketing copy. Same category as the approved Skip Link/Menu UI
          text, per CLAUDE.md's Implementation Rule for UI labels. */}
      <h2 className="sr-only">{t("heading")}</h2>

      <p className="mx-auto mb-12 max-w-[640px] text-center text-xl font-medium leading-snug text-grey-10 md:text-2xl">
        {t("intro")}
      </p>

      <ProcessGrid steps={steps} />
    </section>
  );
}
