import { getTranslations } from "next-intl/server";
import { NAV_LINKS } from "@/components/layout/nav-links";
import { FooterTwoTone } from "@/components/layout/footer-client";

type ServiceItem = { id: string; title: string };
type NavLink = { key: string; href: string; label: string };

export async function Footer({ locale }: { locale: string }) {
  const navT = await getTranslations({ locale, namespace: "Nav" });
  const servicesT = await getTranslations({ locale, namespace: "Services" });

  const services = servicesT.raw("items") as ServiceItem[];
  const year = new Date().getFullYear();

  const navLinks: NavLink[] = NAV_LINKS.map(({ key, href }) => ({
    key,
    href,
    label: navT(key),
  }));

  const logoAlt = navT("logoAlt");

  return (
    <FooterTwoTone
      navLinks={navLinks}
      logoAlt={logoAlt}
      services={services}
      year={year}
    />
  );
}
