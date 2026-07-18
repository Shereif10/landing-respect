import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import type { SelectOption } from "@/components/ui/select-field";

const ContactClient = dynamic(() =>
  import("@/components/sections/contact-client").then(
    (mod) => mod.ContactClient,
  ),
);

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function Contact({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Contact" });
  const items = t.raw("items") as SelectOption[];

  const fields = {
    fullName: {
      label: t("fullNameLabel"),
      placeholder: t("fullNamePlaceholder"),
    },
    company: { label: t("companyLabel"), placeholder: t("companyPlaceholder") },
    email: { label: t("emailLabel"), placeholder: t("emailPlaceholder") },
    phone: { label: t("phoneLabel"), placeholder: t("phonePlaceholder") },
    service: {
      label: t("serviceLabel"),
      placeholder: t("servicePlaceholder"),
    },
    message: {
      label: t("messageLabel"),
      placeholder: t("messagePlaceholder"),
    },
  };

  return (
    <ContactClient
      heading={t("heading")}
      subheading={t("subheading")}
      requiredIndicator={t("requiredIndicator")}
      submitLabel={t("submitLabel")}
      sendingLabel={t("sendingLabel")}
      successMessage={t("successMessage")}
      errorMessage={t("errorMessage")}
      privacyNote={t("privacyNote")}
      fields={fields}
      serviceItems={items}
    />
  );
}
