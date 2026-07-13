import { Card } from "@/components/ui/card";

export type Process = {
  id: string;
  title: string;
  description: string;
};

/**
 * Every step renders through this single component with identical
 * markup/styling — no step is featured or weighted differently.
 */
export function ProcessCard({ process }: { process: Process }) {
  return (
    <Card>
      <h3 className="text-2xl font-bold leading-tight text-brand-main">
        {process.title}
      </h3>
      <p className="text-base font-medium leading-relaxed text-grey-9">
        {process.description}
      </p>
    </Card>
  );
}
