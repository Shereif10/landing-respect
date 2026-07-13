import { ProcessCard, type Process } from "@/components/ui/process-card";

/**
 * Renders process steps from data, in the order given — never reordered or
 * filtered. Presentational and reusable: takes no translation or
 * business-logic dependency, just a list. Uses an ordered list, since the
 * steps are sequential, so assistive tech announces each step's position.
 */
export function ProcessGrid({ steps }: { steps: Process[] }) {
  return (
    <ol className="grid list-none grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <li key={step.id}>
          <ProcessCard process={step} />
        </li>
      ))}
    </ol>
  );
}
