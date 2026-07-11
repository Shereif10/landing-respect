import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Removes the "X-Powered-By: Next.js" response header — standard
  // production hardening, no effect on behavior or output.
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
