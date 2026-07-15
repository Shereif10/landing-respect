import { getTranslations } from "next-intl/server";
import { ValuesGridClient } from "@/components/ui/values-grid-client";
import type { Value } from "@/components/ui/value-card";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function Values({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Values" });
  const values = t.raw("items") as Value[];

  return (
    <section
      id="values"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24"
    >
      <p className="text-grey-10 mx-auto mb-12 max-w-[720px] text-center text-2xl leading-[1.35] font-semibold tracking-[-0.01em] md:text-3xl lg:mb-16 lg:text-[40px] lg:leading-[1.3]">
        {t("intro")}
      </p>

      <ValuesGridClient values={values} />
    </section>
  );
}
