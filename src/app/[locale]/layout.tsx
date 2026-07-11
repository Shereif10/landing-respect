import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import "@/app/globals.css";

const RTL_LOCALES = new Set(["ar"]);

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  // hreflang alternates for the bilingual routes. Confirmed against actual
  // middleware behavior: localePrefix defaults to "always" (not overridden
  // in routing.ts), so the default locale lives at /en, not bare / — "/"
  // 307-redirects to /en. x-default points at routing.defaultLocale for
  // the same reason. No metadataBase is set yet (no confirmed production
  // domain), so these resolve as relative paths — valid Next.js metadata
  // now, upgradeable to absolute URLs once a domain is confirmed.
  return {
    title: t("title"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
        "x-default": `/${routing.defaultLocale}`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dir = RTL_LOCALES.has(locale) ? "rtl" : "ltr";

  // Every section is a Server Component using getTranslations (next-intl/server) —
  // no client-side messages needed there. The only Client Component reading
  // translations is SiteHeader, which only ever reads the "Nav" namespace.
  // Scoping the client hydration payload to just that namespace (instead of
  // NextIntlClientProvider's default of inheriting every namespace, including
  // all 10 service descriptions, Hero/Problem/Philosophy/Values copy) keeps
  // that unused content out of the client bundle entirely.
  const messages = await getMessages();

  // WCAG 2.4.1 (Bypass Blocks): lets keyboard users skip the header (logo +
  // 4 nav links + CTA + menu toggle) and jump straight to page content
  // instead of tabbing through it on every load. Accessibility microcopy,
  // not marketing copy — explicitly approved directly (not sourced from
  // the SEO document, which doesn't cover UI/a11y chrome like this).
  const skipLinkLabel =
    locale === "ar" ? "تخطي إلى المحتوى الرئيسي" : "Skip to main content";

  return (
    <html lang={locale} dir={dir}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-main focus:px-4 focus:py-2 focus:text-grey-1"
        >
          {skipLinkLabel}
        </a>
        <NextIntlClientProvider messages={{ Nav: messages.Nav }}>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
