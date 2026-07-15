export type Value = {
  id: string;
  name: string;
  description: string;
};

// Placeholder icons as SVG data URIs — replace with real icons when ready
const PLACEHOLDER_ICONS: Record<string, string> = {
  forgiveness: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='38' fill='none' stroke='%2300770E' stroke-width='2'/%3E%3Cpath d='M30 40 L40 50 L55 30' stroke='%2300770E' stroke-width='2.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`,
  peace: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='38' fill='none' stroke='%2300770E' stroke-width='2'/%3E%3Cpath d='M20 45 Q40 35 60 45' stroke='%2300770E' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3Cpath d='M20 55 Q40 50 60 55' stroke='%2300770E' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E`,
  love: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='38' fill='none' stroke='%2300770E' stroke-width='2'/%3E%3Cpath d='M40 60 C30 50 20 42 20 33 C20 25 25 20 30 20 C35 20 40 25 40 25 C40 25 45 20 50 20 C55 20 60 25 60 33 C60 42 50 50 40 60' fill='%2300770E' opacity='0.2'/%3E%3C/svg%3E`,
  humanity: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='38' fill='none' stroke='%2300770E' stroke-width='2'/%3E%3Ccircle cx='40' cy='28' r='6' fill='%2300770E'/%3E%3Cpath d='M30 38 L50 38 L48 50 Q40 55 32 50 Z' fill='%2300770E' opacity='0.2'/%3E%3C/svg%3E`,
  humility: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='38' fill='none' stroke='%2300770E' stroke-width='2'/%3E%3Ccircle cx='28' cy='32' r='3' fill='%2300770E'/%3E%3Ccircle cx='52' cy='35' r='3' fill='%2300770E'/%3E%3Ccircle cx='35' cy='48' r='3' fill='%2300770E'/%3E%3Ccircle cx='45' cy='52' r='3' fill='%2300770E'/%3E%3Ccircle cx='40' cy='40' r='3' fill='%2300770E'/%3E%3C/svg%3E`,
};

export function ValueCard({ value }: { value: Value }) {
  const iconSrc = PLACEHOLDER_ICONS[value.id] || PLACEHOLDER_ICONS.forgiveness;

  return (
    <div
      style={{
        borderStartStartRadius: "16px",
        borderStartEndRadius: "16px",
        borderEndStartRadius: "16px",
        borderEndEndRadius: "128px",
      }}
      className={[
        "group relative flex h-full flex-col items-center overflow-hidden",
        "border-grey-1 bg-brand-light border-2 p-8 lg:p-10",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out",
        "hover:border-brand-normal hover:-translate-y-1 hover:shadow-lg",
        "motion-reduce:transition-none",
        "text-center",
      ].join(" ")}
    >
      {/* Icon placeholder — replace with real SVG when ready */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center transition-opacity duration-300 group-hover:opacity-80">
        <img
          src={iconSrc}
          alt=""
          className="transition-filter h-full w-full duration-300 group-hover:brightness-110"
        />
      </div>

      {/* Value name */}
      <h3 className="text-brand-main group-hover:text-brand-normal text-2xl leading-tight font-bold transition-colors duration-300 lg:text-[28px]">
        {value.name}
      </h3>

      {/* Value description */}
      <p className="text-grey-9 group-hover:text-grey-10 mt-4 text-base leading-relaxed font-medium transition-colors duration-300">
        {value.description}
      </p>

      {/* Decorative corner accent */}
      <span
        aria-hidden="true"
        style={{ borderStartEndRadius: "128px" }}
        className="bg-brand-main/[0.03] group-hover:bg-brand-normal/10 pointer-events-none absolute end-0 bottom-0 h-24 w-24 transition-colors duration-300"
      />
    </div>
  );
}
