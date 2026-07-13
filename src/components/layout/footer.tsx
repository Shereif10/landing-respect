import { getTranslations } from "next-intl/server";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import { NAV_LINKS } from "@/components/layout/nav-links";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function Footer({ locale }: { locale: string }) {
  const navT = await getTranslations({ locale, namespace: "Nav" });
  const t = await getTranslations({ locale, namespace: "Footer" });
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-grey-2">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 px-6 py-8 lg:flex-row lg:justify-between lg:px-16">
        <a href="#hero" className="-m-2 shrink-0 p-2">
          <AssetPlaceholder
            label={navT("logoAlt")}
            className="h-[15px] w-16 lg:h-[37px] lg:w-[163px]"
          />
        </a>

        <nav aria-label={navT("footerNav")} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="-m-2 p-2 text-base font-medium leading-[1.2] text-grey-10 hover:text-brand-main"
            >
              {navT(key)}
            </a>
          ))}
        </nav>

        <p className="text-sm font-medium leading-relaxed text-grey-7">
          {t("copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
