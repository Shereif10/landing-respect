// Shared between SiteHeader and Footer so both navigations stay in sync —
// same destinations, defined once.
export const NAV_LINKS = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#philosophy" },
  { key: "work", href: "#work" },
  { key: "services", href: "#services" },
] as const;
