import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "ar",
  // Root landing traffic (paid Meta/Google ads) must land on Arabic
  // deterministically — Accept-Language sniffing and the remembered
  // NEXT_LOCALE cookie are both disabled so "/" always resolves to
  // /ar regardless of browser locale or a prior manual language switch.
  // Direct /en and /ar visits are unaffected — they're explicit paths.
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];
