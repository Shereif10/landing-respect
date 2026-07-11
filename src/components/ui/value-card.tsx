import { Card } from "@/components/ui/card";

export type Value = {
  id: string;
  name: string;
  description: string;
};

/**
 * Every value renders through this single component with identical
 * markup/styling — no value is featured or weighted differently.
 */
export function ValueCard({ value }: { value: Value }) {
  return (
    <Card>
      <h2 className="text-2xl font-bold leading-tight text-brand-main">
        {value.name}
      </h2>
      <p className="text-base font-medium leading-relaxed text-grey-9">
        {value.description}
      </p>
    </Card>
  );
}
