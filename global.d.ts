import type en from "./messages/en.json";

// next-intl's documented TypeScript integration: derives message types from
// the real English messages file (the source of truth), rather than a
// hand-maintained interface that could drift from the actual JSON. This
// gives every t()/t.raw() call in the codebase compile-time validation that
// the key path it references actually exists.
declare module "use-intl" {
  interface AppConfig {
    Messages: typeof en;
  }
}
