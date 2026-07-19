import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import { type StaticImageData } from "next/image";

import primeShieldImg from "@/assets/imgs/prime.webp";
import civiliaImg from "@/assets/imgs/civilia.webp";
import kokhImg from "@/assets/imgs/kokh.webp";
import rowadImg from "@/assets/imgs/rOWAD.webp";
import abotarikImg from "@/assets/imgs/abo tarek.webp";
import adriImg from "@/assets/imgs/aDRI_.webp";
import addmixImg from "@/assets/imgs/aDDMIX.webp";
import ihomeImg from "@/assets/imgs/ihome.webp";
import khedeweyImg from "@/assets/imgs/khedewey.webp";
import proconceptImg from "@/assets/imgs/pR CONCEPT.webp";
import sounImg from "@/assets/imgs/sOUN.webp";
import eeisImg from "@/assets/imgs/eeis.webp";
import kasrImg from "@/assets/imgs/kasr.webp";
import sabrosoImg from "@/assets/imgs/sabroso.webp";
import zamalekImg from "@/assets/imgs/zamalek1.webp";
import nicheImg from "@/assets/imgs/niche.webp";
import fitrahImg from "@/assets/imgs/fitrah.webp";
import asswehlyImg from "@/assets/imgs/asswehly1.webp";


// Map image keys to imports — keys must match messages/en.json "img" values
const CASE_STUDY_IMAGES: Record<string, StaticImageData> = {
  prime: primeShieldImg,
  soun: sounImg,
  civilia: civiliaImg,
  kokh: kokhImg,
  rowad: rowadImg,
  abotarik: abotarikImg,
  adri: adriImg,
  addmix: addmixImg,
  ihome: ihomeImg,
  khedewey: khedeweyImg,
  proconcept: proconceptImg,
  eeis: eeisImg,
  kasr: kasrImg,
  sabrosso: sabrosoImg,
  zamalek: zamalekImg,
  niche: nicheImg,
  fitrah: fitrahImg,
  asswehly: asswehlyImg,
};

type CaseStudy = {
  id: string;
  name: string;
  description: string;
  services: string[];
  image: StaticImageData;
};

const CaseStudiesGridClient = dynamic(() =>
  import("@/components/ui/case-studies-grid-client").then(
    (mod) => mod.CaseStudiesGridClient,
  ),
);

export async function BusinessesWeHelped({ locale }: { locale: string }) {
  const navT = await getTranslations({ locale, namespace: "Nav" });
  const t = await getTranslations({ locale, namespace: "BusinessesWeHelped" });

  // Get raw items from translations — using "img" from messages
  const rawItems = t.raw("items") as Array<{
    id: string;
    name: string;
    description: string;
    services: string[];
    img: string; // ← matches messages/en.json property name
  }>;

  // Map with real images attached
  const caseStudies: CaseStudy[] = rawItems.map((item) => ({
    ...item,
    image: CASE_STUDY_IMAGES[item.img] || primeShieldImg, // fallback to first image
  }));

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-16 lg:py-24"
    >
      <h2 className="sr-only">{navT("work")}</h2>

      <div className="mb-12 text-center lg:mb-16">
        <p className="text-grey-10 mx-auto max-w-[720px] text-2xl leading-[1.35] font-semibold tracking-[-0.01em] md:text-3xl lg:text-[40px] lg:leading-[1.3]">
          {t("intro")}
        </p>
      </div>

      <CaseStudiesGridClient items={caseStudies} seeMoreLabel={t("seeMoreCases")} />
    </section>
  );
}
