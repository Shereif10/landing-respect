import { ValueCard, type Value } from "@/components/ui/value-card";

/**
 * Renders values from data, in the order given — never reordered or
 * filtered. Presentational and reusable: takes no translation or
 * business-logic dependency, just a list.
 */
export function ValuesGrid({ values }: { values: Value[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => (
        <ValueCard key={value.id} value={value} />
      ))}
    </div>
  );
}
