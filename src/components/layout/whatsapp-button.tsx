import { getTranslations } from "next-intl/server";
import { FaWhatsapp } from "react-icons/fa6";

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx.
export async function WhatsAppButton({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "WhatsApp" });
  const phoneNumber = t("phoneNumber");
  const greeting = t("greeting");
  const label = t("label");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(greeting)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 end-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-main shadow-lg transition-colors hover:bg-brand-main/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-main focus-visible:ring-offset-2"
    >
      {/* Decorative — the link's own aria-label already gives it an
          accessible name, so the icon stays hidden from assistive tech
          instead of announcing a second time. */}
      <FaWhatsapp aria-hidden="true" className="h-7 w-7 text-grey-1" />
    </a>
  );
}
