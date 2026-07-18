import Image, { type StaticImageData } from "next/image";

export type CaseStudy = {
  id: string;
  name: string;
  description: string;
  services: string[];
  image: StaticImageData; // ← صورة حقيقية لكل مشروع
};

export function CaseStudyCard({ item }: { item: CaseStudy }) {
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
      {/* Real project image */}
      <div className="bg-grey-1 relative h-100 w-full overflow-hidden ">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className=" transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
        {/* Overlay on hover */}
        <div className="bg-brand-main/0  absolute inset-0 transition-colors duration-300" />
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
