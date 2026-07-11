import { getTranslations } from "next-intl/server";
import { ValuesGrid } from "@/components/ui/values-grid";
import type { Value } from "@/components/ui/value-card";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function Values({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Values" });
  const values = t.raw("items") as Value[];

  return (
    <section id="values" className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24">
      <p className="mx-auto mb-12 max-w-[640px] text-center text-xl font-medium leading-snug text-grey-10 md:text-2xl">
        {t("intro")}
      </p>

      <ValuesGrid values={values} />
    </section>
  );
}
