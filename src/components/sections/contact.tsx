import { getTranslations } from "next-intl/server";
import { ContactForm, type ContactFormFields } from "@/components/ui/contact-form";
import type { SelectOption } from "@/components/ui/select-field";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function Contact({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Contact" });
  const items = t.raw("items") as SelectOption[];

  const fields: ContactFormFields = {
    fullName: { label: t("fullNameLabel"), placeholder: t("fullNamePlaceholder") },
    company: { label: t("companyLabel"), placeholder: t("companyPlaceholder") },
    email: { label: t("emailLabel"), placeholder: t("emailPlaceholder") },
    phone: { label: t("phoneLabel"), placeholder: t("phonePlaceholder") },
    service: { label: t("serviceLabel"), placeholder: t("servicePlaceholder") },
    message: { label: t("messageLabel"), placeholder: t("messagePlaceholder") },
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[640px] flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-2xl font-bold leading-tight text-grey-10 md:text-3xl">
            {t("heading")}
          </h2>
          <p className="text-lg font-medium leading-relaxed text-grey-9">
            {t("subheading")}
          </p>
        </div>

        <ContactForm
          fields={fields}
          requiredIndicator={t("requiredIndicator")}
          submitLabel={t("submitLabel")}
          items={items}
        />

        <p className="text-center text-sm font-medium leading-relaxed text-grey-7">
          {t("privacyNote")}
        </p>
      </div>
    </section>
  );
}
