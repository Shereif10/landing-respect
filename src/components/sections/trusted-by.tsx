import Image from "next/image";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";

type ClientLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

/**
 * Client logos are business-supplied assets (PRD §8 IA #2; SEO_GAPS.md Gap 2
 * confirms this section has no SEO-document content). Pass the approved
 * list via `logos` once it exists. With no list, this renders a single
 * generic pending state rather than a fixed number of empty slots, since no
 * client count has been confirmed.
 */
export function TrustedBy({ logos = [] }: { logos?: ClientLogo[] }) {
  return (
    <section
      id="trusted-by"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24"
    >
      {logos.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              loading="lazy"
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center py-8">
          <AssetPlaceholder className="h-12 w-full max-w-sm bg-grey-2/40" />
        </div>
      )}
    </section>
  );
}
