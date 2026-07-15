export type Process = {
  id: string;
  title: string;
  description: string;
};

// Placeholder icons for each process step — replace with real SVGs when ready
const PROCESS_ICONS: Record<string, string> = {
  discover: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='25' cy='25' r='18' fill='none' stroke='%2300770E' stroke-width='2.5'/%3E%3Cpath d='M38 38 L48 48' stroke='%2300770E' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E`,
  strategy: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect x='10' y='10' width='40' height='40' fill='none' stroke='%2300770E' stroke-width='2.5' rx='3'/%3E%3Cline x1='15' y1='20' x2='45' y2='20' stroke='%2300770E' stroke-width='2'/%3E%3Cline x1='15' y1='28' x2='45' y2='28' stroke='%2300770E' stroke-width='2'/%3E%3Cline x1='15' y1='36' x2='35' y2='36' stroke='%2300770E' stroke-width='2'/%3E%3C/svg%3E`,
  build: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M20 45 L30 15 L40 35 L50 25' fill='none' stroke='%2300770E' stroke-width='2.5' stroke-linejoin='round' stroke-linecap='round'/%3E%3Ccircle cx='30' cy='15' r='3' fill='%2300770E'/%3E%3Ccircle cx='40' cy='35' r='3' fill='%2300770E'/%3E%3Ccircle cx='50' cy='25' r='3' fill='%2300770E'/%3E%3C/svg%3E`,
  optimize: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='%2300770E' stroke-width='2.5'/%3E%3Cpath d='M30 15 L35 28 L48 30 L38 38 L40 50 L30 45 L20 50 L22 38 L12 30 L25 28 Z' fill='%2300770E' opacity='0.3'/%3E%3C/svg%3E`,
};

export function ProcessCard({
  process,
  index,
}: {
  process: Process;
  index: number;
}) {
  const iconSrc = PROCESS_ICONS[process.id] || PROCESS_ICONS.discover;

  return (
    <div
      style={{
        borderStartStartRadius: "16px",
        borderStartEndRadius: "16px",
        borderEndStartRadius: "16px",
        borderEndEndRadius: "128px",
      }}
      className={[
        "group relative flex w-full flex-1 flex-col items-center overflow-hidden",
        "border-grey-1 bg-brand-light border-2 px-6 py-8 lg:px-8 lg:py-10",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out",
        "hover:border-brand-normal hover:-translate-y-2 hover:shadow-xl",
        "motion-reduce:transition-none",
        "text-center",
      ].join(" ")}
    >
      {/* Icon placeholder — replace with real SVG when ready */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <img
          src={iconSrc}
          alt=""
          className="transition-filter h-full w-full duration-300 group-hover:brightness-125"
        />
      </div>

      {/* Process title */}
      <h3 className="text-brand-main group-hover:text-brand-normal text-xl leading-tight font-bold transition-colors duration-300 lg:text-2xl">
        {process.title}
      </h3>

      {/* Process description */}
      <p className="text-grey-9 group-hover:text-grey-10 mt-3 text-sm leading-relaxed font-medium transition-colors duration-300 lg:mt-4 lg:text-base">
        {process.description}
      </p>

      {/* Decorative corner accent */}
      <span
        aria-hidden="true"
        style={{ borderStartEndRadius: "128px" }}
        className="bg-brand-main/[0.03] group-hover:bg-brand-normal/10 pointer-events-none absolute end-0 bottom-0 h-20 w-20 transition-colors duration-300"
      />
    </div>
  );
}
