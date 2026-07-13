import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function FinalCTA({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "FinalCTA" });
  // Reuses the already business-approved Nav.cta "Let's Talk" label instead
  // of duplicating it as new copy.
  const navT = await getTranslations({ locale, namespace: "Nav" });

  return (
    <section id="final-cta" className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[840px] flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-medium leading-snug text-grey-10 md:text-3xl lg:text-[40px]">
          {t("heading")}
        </h2>

        <p className="max-w-[640px] text-xl font-medium leading-snug text-grey-10 md:text-2xl">
          {t("body")}
        </p>

        <Button
          href="#contact"
          variant="primary"
          className="shadow-sm !transition-[background-color,box-shadow,transform] duration-[250ms] ease-out hover:-translate-y-px hover:shadow-md motion-reduce:transition-none"
        >
          {navT("cta")}
        </Button>
      </div>
    </section>
  );
}
