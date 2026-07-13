import { getTranslations } from "next-intl/server";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function Problem({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Problem" });

  return (
    <section id="problem" className="bg-brand-main px-6 py-24 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[840px] text-center">
        <p className="text-2xl font-medium leading-snug text-grey-1 md:text-3xl lg:text-[40px]">
          {t("body")}
        </p>
      </div>
    </section>
  );
}
