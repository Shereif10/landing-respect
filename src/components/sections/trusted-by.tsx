import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";

type ClientLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

type TempClient = {
  id: string;
  name: string;
};

/**
 * Client logos are business-supplied assets (PRD §8 IA #2; SEO_GAPS.md Gap 2
 * confirms this section has no SEO-document content). Pass the approved
 * `logos` list once real logo files exist and it takes over automatically;
 * until then this renders the temporary named placeholders from the
 * TrustedBy namespace (see its `_temporary` marker).
 */
export async function TrustedBy({
  locale,
  logos = [],
}: {
  locale: string;
  logos?: ClientLogo[];
}) {
  const t = await getTranslations({ locale, namespace: "TrustedBy" });
  const tempClients = t.raw("items") as TempClient[];

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
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {tempClients.map((client) => (
            <AssetPlaceholder
              key={client.id}
              label={client.name}
              className="h-12 w-28 bg-grey-2/40"
            />
          ))}
        </div>
      )}
    </section>
  );
}
