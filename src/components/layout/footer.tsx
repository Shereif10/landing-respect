import { getTranslations } from "next-intl/server";
import { NAV_LINKS } from "@/components/layout/nav-links";
import { FooterClient } from "@/components/layout/footer-client";
import type { FooterStrings } from "@/components/layout/footer-client";
import type { PrivacyPolicyContent } from "@/components/layout/privacy-modal";

type ServiceItem = { id: string; title: string };
type NavLink = { key: string; href: string; label: string };
type PrivacySection = { heading: string; body: string };

export async function Footer({ locale }: { locale: string }) {
  const navT = await getTranslations({ locale, namespace: "Nav" });
  const servicesT = await getTranslations({ locale, namespace: "Services" });
  const footerT = await getTranslations({ locale, namespace: "Footer" });
  const privacyT = await getTranslations({
    locale,
    namespace: "PrivacyPolicy",
  });

  const services = servicesT.raw("items") as ServiceItem[];
  const year = new Date().getFullYear();

  const navLinks: NavLink[] = NAV_LINKS.map(({ key, href }) => ({
    key,
    href,
    label: navT(key),
  }));

  const logoAlt = navT("logoAlt");

  // Build copyright without intl placeholders (avoids FORMATTING_ERROR)
  const copyright = `${footerT("copyrightPrefix")} ${year} ${footerT("copyrightSuffix")} · ${footerT("allRightsReserved")}`;

  const footerStrings: FooterStrings = {
    tagline: footerT("tagline"),
    sections: {
      navigation: footerT("sections.navigation"),
      services: footerT("sections.services"),
      contact: footerT("sections.contact"),
      viewAll: footerT("sections.viewAll"),
    },
    contact: {
      whatsappLabel: footerT("contact.whatsappLabel"),
      whatsapp: footerT("contact.whatsapp"),
      whatsappNote: footerT("contact.whatsappNote"),
      email: footerT("contact.email"),
      location: footerT("contact.location"),
    },
    copyright,
    privacyPolicy: footerT("privacyPolicy"),
  };

  const privacyPolicyContent: PrivacyPolicyContent = {
    title: privacyT("title"),
    intro: privacyT("intro"),
    closeLabel: privacyT("closeLabel"),
    gotIt: privacyT("gotIt"),
    sections: privacyT.raw("sections") as PrivacySection[],
  };

  return (
    <FooterClient
      locale={locale}
      navLinks={navLinks}
      logoAlt={logoAlt}
      services={services}
      footerT={footerStrings}
      privacyPolicyContent={privacyPolicyContent}
    />
  );
}
