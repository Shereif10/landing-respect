import { getTranslations } from "next-intl/server";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import { Button } from "@/components/ui/button";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Hero" });

  return (
    <section
      id="hero"
      className="mx-auto w-full max-w-[1280px] px-6 pb-16 pt-4 lg:px-16 lg:pb-24"
    >
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col items-start gap-8 lg:w-1/2">
          <div className="flex flex-col gap-3">
            <h1 className="animate-fade-in-up flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[40px] leading-[1.25] ltr:tracking-[0.02em] text-grey-10 md:text-[52px] lg:text-[64px]">
              <span className="font-black">{t("headlinePart1")}</span>
              <span className="font-[750] text-brand-main">
                {t("headlinePart2")}
              </span>
            </h1>
            <AssetPlaceholder
              label={t("wordmarkAlt")}
              className="h-9 w-[196px] lg:h-[57px] lg:w-[311px]"
            />
          </div>

          <p className="animate-fade-in-up-1 max-w-[420px] text-lg font-medium leading-[1.2] text-grey-10">
            {t("body")}
          </p>

          <div className="animate-fade-in-up-2 flex flex-wrap items-center gap-5">
            <Button href="#contact" variant="primary">
              {t("ctaPrimary")}
            </Button>
            <Button href="#work" variant="secondary">
              {t("ctaSecondary")}
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative mx-auto aspect-[873/811] w-full max-w-[480px] bg-grey-2/40 lg:max-w-none">
            <AssetPlaceholder className="absolute inset-0" />

            <div className="radius-badge absolute bottom-[36%] start-[5.5%] w-[43%] bg-brand-normal px-8 py-6">
              <AssetPlaceholder className="h-16 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
