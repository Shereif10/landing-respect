import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Problem } from "@/components/sections/problem";
import { HowWeHelp } from "@/components/sections/how-we-help";
import { BusinessesWeHelped } from "@/components/sections/businesses-we-helped";
import { Philosophy } from "@/components/sections/philosophy";
import { Values } from "@/components/sections/values";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Every section below takes `locale` as an explicit prop and passes it to
  // getTranslations({ locale, namespace }) itself, rather than calling
  // getTranslations(namespace) and letting next-intl resolve the locale
  // implicitly. Per next-intl's docs (next-intl.dev/docs/routing/setup):
  // "next-intl will currently opt into dynamic rendering when APIs like
  // useTranslations are used in Server Components" — implicit resolution
  // reads the locale from request headers, a dynamic API that forces
  // Next.js to render the route per-request. Passing locale explicitly
  // (the same pattern next-intl's own docs use for generateMetadata)
  // avoids that header read. Confirmed via `next build`: this route went
  // from ƒ (Dynamic) to ● (SSG, prerendered for both /en and /ar) with
  // this change alone — verified with x-nextjs-prerender/x-nextjs-cache
  // response headers, not just the build log's own labels.
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero locale={locale} />
        <TrustedBy />
        <Problem locale={locale} />
        <HowWeHelp locale={locale} />
        <BusinessesWeHelped locale={locale} />
        <Philosophy locale={locale} />
        <Values locale={locale} />
      </main>
    </>
  );
}
