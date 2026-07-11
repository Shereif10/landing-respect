import { ServiceCard, type Service } from "@/components/ui/service-card";

/**
 * Renders services from data, in the order given — never reordered,
 * filtered, or merged. Presentational and reusable: takes no translation
 * or business-logic dependency, just a list.
 */
export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
