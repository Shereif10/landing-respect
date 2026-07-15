import Image from "next/image";

type CaseStudy = {
  id: string;
  name: string;
  description: string;
  services: string[];
};

export function CaseStudyCard({ item }: { item: CaseStudy }) {
  // Lorem placeholder image — replace with real project screenshot
  const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23E8DCC8' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23999' text-anchor='middle' dy='.3em'%3EProject Screenshot%3C/text%3E%3C/svg%3E`;

  return (
    <div
      style={{
        borderStartStartRadius: "16px",
        borderStartEndRadius: "16px",
        borderEndStartRadius: "16px",
        borderEndEndRadius: "128px",
      }}
      className={[
        "group relative flex h-full flex-col overflow-hidden",
        "border-grey-1 bg-brand-light border-2",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out",
        "hover:border-brand-normal hover:-translate-y-1 hover:shadow-lg",
        "motion-reduce:transition-none",
      ].join(" ")}
    >
      {/* Image placeholder */}
      <div className="bg-grey-1 relative h-48 w-full overflow-hidden lg:h-56">
        <Image
          src={placeholderImage}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="bg-brand-main/0 group-hover:bg-brand-main/10 absolute inset-0 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
        {/* Business name */}
        <div>
          <h3 className="text-grey-10 text-xl leading-tight font-bold lg:text-2xl">
            {item.name}
          </h3>

          {/* Services tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {item.services.map((service) => (
              <span
                key={service}
                className={[
                  "inline-block rounded-full px-3 py-1 text-sm font-medium",
                  "bg-brand-main/10 text-brand-main",
                  "transition-colors duration-300",
                  "group-hover:bg-brand-main group-hover:text-brand-light",
                ].join(" ")}
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-grey-9 group-hover:text-grey-10 mt-4 text-base leading-relaxed font-medium transition-colors duration-300 lg:mt-6">
          {item.description}
        </p>
      </div>

      {/* Decorative corner accent */}
      <span
        aria-hidden="true"
        style={{ borderStartEndRadius: "128px" }}
        className="bg-brand-main/[0.03] group-hover:bg-brand-normal/10 pointer-events-none absolute end-0 bottom-0 h-24 w-24 transition-colors duration-300"
      />
    </div>
  );
}
