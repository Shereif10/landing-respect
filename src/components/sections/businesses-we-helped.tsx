import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import { type StaticImageData } from "next/image";

import primeShieldImg from "@/assets/imgs/prime.jpg";
import civiliaImg from "@/assets/imgs/civilia.jpg";
import kokhImg from "@/assets/imgs/kokh.jpg";
import rowadImg from "@/assets/imgs/ROWAD.jpg";
import abotarikImg from "@/assets/imgs/abo tarek.jpg";
import adriImg from "@/assets/imgs/ADRI_.jpg";
import addmixImg from "@/assets/imgs/ADDMIX.jpg";
import ihomeImg from "@/assets/imgs/ihome.jpg";
import khedeweyImg from "@/assets/imgs/khedewey.jpg";
import proconceptImg from "@/assets/imgs/PR CONCEPT.jpg";
import sounImg from "@/assets/imgs/SOUN.jpg";
import eeisImg from "@/assets/imgs/eeis.jpg";
import kasrImg from "@/assets/imgs/kasr.png";
import sabrosoImg from "@/assets/imgs/sabroso.jpg";
import zamalekImg from "@/assets/imgs/zamalek1.png";
import nicheImg from "@/assets/imgs/niche.jpg";
import fitrahImg from "@/assets/imgs/fitrah.png";
import asswehlyImg from "@/assets/imgs/asswehly1.png";


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
