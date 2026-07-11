import type { ReactNode } from "react";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import { Card } from "@/components/ui/card";

/**
 * Presentation architecture only: responsive grid, card shell, and an
 * empty state. Makes no assumption about what a "case study" contains —
 * that business data model doesn't exist yet. Callers supply `items` plus
 * `getKey`/`renderItem` to decide what's inside each card once it does;
 * until then this renders a single generic pending state, not a fixed
 * count of empty slots.
 */
export function CaseStudiesGrid<T>({
  items = [],
  getKey,
  renderItem,
}: {
  items?: T[];
  getKey?: (item: T) => string;
  renderItem?: (item: T) => ReactNode;
}) {
  if (items.length === 0) {
    return (
      <div className="flex justify-center py-8">
        <AssetPlaceholder className="h-48 w-full max-w-sm bg-grey-2/40" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Card key={getKey?.(item) ?? index}>{renderItem?.(item)}</Card>
      ))}
    </div>
  );
}
