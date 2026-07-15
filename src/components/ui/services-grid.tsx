import { ServicesGridClient } from "@/components/ui/ServicesGridClient";
import type { Service } from "@/components/ui/service-card";

/**
 * Renders services from data, in the order given — never reordered,
 * filtered, or merged. Presentational and reusable: takes no translation
 * or business-logic dependency, just a list.
 *
 * Thin server wrapper — the actual Bento layout + GSAP reveal lives in the
 * client half so this stays free of client-only concerns (same
 * server/client split pattern as Hero and TrustedBy).
 */
export function ServicesGrid({ services }: { services: Service[] }) {
  return <ServicesGridClient services={services} />;
}
