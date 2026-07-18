import Image, { type StaticImageData } from "next/image";
import forgivenessIcon from "@/assets/svg/forgiveness.svg";
import peaceIcon from "@/assets/svg/peace.svg";
import loveIcon from "@/assets/svg/love.svg";
import humanityIcon from "@/assets/svg/humanity.svg";
import humilityIcon from "@/assets/svg/humility.svg";

export type Value = {
  id: string;
  name: string;
  description: string;
};

// Map value IDs to their SVG icons
const VALUE_ICONS: Record<string, StaticImageData> = {
  forgiveness: forgivenessIcon,
  peace: peaceIcon,
  love: loveIcon,
  humanity: humanityIcon,
  humility: humilityIcon,
};

export function ValueCard({ value }: { value: Value }) {
  const iconSrc = VALUE_ICONS[value.id] || VALUE_ICONS.forgiveness;

  return (
    <div
      style={{
        borderStartStartRadius: "16px",
        borderStartEndRadius: "16px",
        borderEndStartRadius: "16px",
        borderEndEndRadius: "128px",
      }}
      className={[
        "group relative flex flex-col items-center justify-between overflow-hidden",
        "border-grey-1 bg-brand-light border-2 p-8 lg:p-10",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out",
        "hover:border-brand-normal hover:-translate-y-1 hover:shadow-lg",
        "motion-reduce:transition-none",
        "text-center",
        "w-full", // ✓ Full width sa parent
      ].join(" ")}
    >
      {/* Icon — from real SVG files with hover color change */}
      <div className="mb-6 flex h-20 w-20 flex-shrink-0 items-center justify-center transition-all duration-300 group-hover:opacity-100">
        <Image
          src={iconSrc}
          alt=""
          width={80}
          height={80}
          className={[
            "h-full w-full transition-all duration-300",
            "group-hover:[filter:drop-shadow(0_0_12px_rgba(239,186,67,0.6))_brightness(1.15)_saturate(1.3)_hue-rotate(45deg)]",
          ].join(" ")}
        />
      </div>

      {/* Content wrapper - grows to fill space */}
      <div className="flex w-full flex-grow flex-col gap-3">
        {/* Value name */}
        <h3 className="text-brand-main group-hover:text-brand-normal text-2xl leading-tight font-bold transition-colors duration-300 lg:text-[28px]">
          {value.name}
        </h3>

        {/* Value description */}
        <p className="text-grey-9 group-hover:text-grey-10 text-base leading-relaxed font-medium transition-colors duration-300">
          {value.description}
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
