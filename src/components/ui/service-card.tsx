import { Card } from "@/components/ui/card";

export type Service = {
  id: string;
  title: string;
};

/**
 * Every service renders through this single component with identical
 * markup/styling — equal visual weight by construction. No variant prop
 * for "featured"/"popular" states exists on purpose.
 *
 * Renders the service title only. Each service's longer description is its
 * dedicated service page's own opening copy (SEO_GAPS.md Gap 3) — that
 * per-service page depth was never confirmed as mapped to this landing-page
 * section, so it isn't rendered here.
 */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card>
      <h3 className="text-2xl font-bold leading-tight text-grey-10">
        {service.title}
      </h3>
    </Card>
  );
}
