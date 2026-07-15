export type Service = {
  id: string;
  title: string;
  description?: string;
};

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
  featured?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      style={{
        borderStartStartRadius: "16px",
        borderStartEndRadius: "16px",
        borderEndStartRadius: "16px",
        borderEndEndRadius: "128px",
      }}
      className={[
        "group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden",
        "border-grey-1 bg-brand-light border-2 p-6 lg:p-8",
        "hover:border-brand-normal hover:bg-brand-main",
        "transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-lg",
        "motion-reduce:transition-none",
      ].join(" ")}
    >
      <div>
        {/* Number */}
        <span
          aria-hidden="true"
          className={[
            "text-3xl leading-none font-bold lg:text-4xl",
            "text-brand-main/20 transition-colors duration-300",
            "group-hover:text-brand-normal",
          ].join(" ")}
        >
          {number}
        </span>

        {/* Title */}
        <h3
          className={[
            "mt-4 text-lg leading-snug font-bold lg:text-xl",
            "text-grey-10 transition-colors duration-300",
            "group-hover:text-brand-light",
          ].join(" ")}
        >
          {service.title}
        </h3>

        {/* Description */}
        {service.description && (
          <p
            className={[
              "mt-3 text-m leading-relaxed font-medium",
              "text-grey-7 transition-colors duration-300",
              "group-hover:text-brand-light/80",
            ].join(" ")}
          >
            {service.description}
          </p>
        )}
      </div>

      {/* Decorative corner accent */}
      <span
        aria-hidden="true"
        style={{ borderStartEndRadius: "128px" }}
        className={[
          "pointer-events-none absolute end-0 bottom-0 h-24 w-24",
          "bg-brand-main/[0.03] transition-colors duration-300",
          "group-hover:bg-brand-normal/10",
        ].join(" ")}
      />
    </div>
  );
}
