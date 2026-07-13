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
      className="relative mx-auto w-full max-w-[1280px] overflow-hidden px-6 pb-16 pt-4 lg:px-16 lg:pb-24"
    >
      {/* Ambient light, not decoration — large, very soft, low-opacity
          washes rather than distinct "blob" shapes, so nothing here should
          register as a visible element on its own. The green wash spans
          from the top of the section down toward the image, doing double
          duty: giving the sticky transparent navbar something real to
          reveal, and tying the background to where the image composition
          sits rather than floating independently of it. The gold wash
          echoes the badge's own color near where it lands. Hidden from
          assistive tech, never intercepts pointer events. */}
      <div
        aria-hidden="true"
        className="animate-fade-in-slow pointer-events-none absolute inset-0"
      >
        <div className="absolute top-0 end-[8%] h-[720px] w-[620px] rounded-full bg-brand-main/[0.035] blur-[120px]" />
        <div className="absolute bottom-10 start-[26%] h-[360px] w-[360px] rounded-full bg-brand-normal/[0.04] blur-[110px]" />
      </div>

      <div className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex w-full flex-col items-start gap-6 lg:w-7/12">
          <div className="flex flex-col gap-2">
            <h1 className="animate-fade-in-up flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[40px] leading-[1.25] ltr:tracking-[0.02em] text-grey-10 md:text-[52px] lg:text-[64px]">
              <span className="font-black">{t("headlinePart1")}</span>
              <span className="font-[750] text-brand-main">
                {t("headlinePart2")}
              </span>
            </h1>
            <AssetPlaceholder
              label={t("wordmarkAlt")}
              className="animate-fade-in-up h-9 w-[196px] lg:h-[57px] lg:w-[311px]"
            />
          </div>

          <p className="animate-fade-in-delayed max-w-[420px] text-lg font-medium leading-[1.2] text-grey-10">
            {t("body")}
          </p>

          <div className="animate-fade-in-up-2 mt-3 flex flex-wrap items-center gap-5">
            <Button
              href="#contact"
              variant="primary"
              className="shadow-sm !transition-[background-color,box-shadow,transform] duration-[250ms] ease-out hover:-translate-y-px hover:shadow-md motion-reduce:transition-none"
            >
              {t("ctaPrimary")}
            </Button>
            <Button
              href="#work"
              variant="secondary"
              className="!transition-[opacity,transform] duration-[250ms] ease-out hover:-translate-y-px motion-reduce:transition-none"
            >
              {t("ctaSecondary")}
            </Button>
          </div>
        </div>

        <div className="w-full lg:mt-20 lg:w-5/12">
          <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
            {/* Backing panel — deliberately smaller than the image (not a
                same-size clone) so it reads as a second surface sitting
                behind it, not a shadow. Purely decorative. */}
            <div
              aria-hidden="true"
              className="animate-fade-in-scale-early radius-card absolute bottom-[-3.5rem] start-[-3.5rem] aspect-[873/811] w-[76%] bg-brand-main"
            />

            <div className="animate-fade-in-scale radius-card relative aspect-[873/811] w-full overflow-hidden border-2 border-brand-normal bg-grey-2/40">
              <AssetPlaceholder className="absolute inset-0" />
            </div>

            {/* Floating badge — overhangs the image's own edge toward the
                text column, connecting the two halves rather than sitting
                as a plain corner accent. */}
            <div className="animate-pop-in radius-badge absolute bottom-[-1.25rem] start-[-3rem] w-[40%] bg-brand-normal px-8 py-6">
              <AssetPlaceholder className="h-16 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
