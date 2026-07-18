import { getTranslations } from "next-intl/server";
import {
  TrustedByClient,
  type ClientLogo,
} from "@/components/sections/trusted-by-client";
import Logo1 from "@/assets/svg/clients/1.svg";
import Logo2 from "@/assets/svg/clients/2.svg";
import Logo3 from "@/assets/svg/clients/3.svg";
import Logo5 from "@/assets/svg/clients/5.svg";
import Logo6 from "@/assets/svg/clients/6.svg";
import Logo7 from "@/assets/svg/clients/7.svg";
import Logo8 from "@/assets/svg/clients/8.svg";
import Logo9 from "@/assets/svg/clients/9.svg";
import Logo10 from "@/assets/svg/clients/10.svg";
import Logo11 from "@/assets/svg/clients/11.svg";
import Logo12 from "@/assets/svg/clients/12.svg";
import Logo13 from "@/assets/svg/clients/13.svg";
import Logo14 from "@/assets/svg/clients/14.svg";
import Logo15 from "@/assets/svg/clients/15.svg";
import Logo16 from "@/assets/svg/clients/16.svg";
import Logo17 from "@/assets/svg/clients/17.svg";
import Logo18 from "@/assets/svg/clients/18.svg";
import Logo19 from "@/assets/svg/clients/19.svg";
import Logo20 from "@/assets/svg/clients/20.svg";
import Logo21 from "@/assets/svg/clients/21.svg";
import Logo22 from "@/assets/svg/clients/22.svg";
import Logo23 from "@/assets/svg/clients/23.svg";
import Logo24 from "@/assets/svg/clients/24.svg";
import Logo25 from "@/assets/svg/clients/25.svg";
import Logo26 from "@/assets/svg/clients/26.svg";
import Logo27 from "@/assets/svg/clients/27.svg";
import Logo28 from "@/assets/svg/clients/28.svg";
import Logo29 from "@/assets/svg/clients/29.svg";
import Logo30 from "@/assets/svg/clients/30.svg";
import Logo31 from "@/assets/svg/clients/31.svg";
import Logo32 from "@/assets/svg/clients/32.svg";
import Logo33 from "@/assets/svg/clients/33.svg";

// `image 6.svg` and `Layer_1-5.svg` (of the 7 files dropped into
// src/assets/svg/clients/) are 0-byte files — broken exports, not real
// logos. Left out here rather than rendered as broken images; re-export
// and add them back once fixed.
const LOGOS: ClientLogo[] = [
  { key: "logo-1", src: Logo1 },
  { key: "logo-2", src: Logo2 },
  { key: "logo-3", src: Logo3 },
  { key: "logo-5", src: Logo5 },
  { key: "logo-6", src: Logo6 },
  { key: "logo-7", src: Logo7 },
  { key: "logo-8", src: Logo8 },
  { key: "logo-9", src: Logo9 },
  { key: "logo-10", src: Logo10 },
  { key: "logo-11", src: Logo11 },
  { key: "logo-12", src: Logo12 },
  { key: "logo-13", src: Logo13 },
  { key: "logo-14", src: Logo14 },
  { key: "logo-15", src: Logo15 },
  { key: "logo-16", src: Logo16 },
  { key: "logo-17", src: Logo17 },
  { key: "logo-18", src: Logo18 },
  { key: "logo-19", src: Logo19 },
  { key: "logo-20", src: Logo20 },
  { key: "logo-21", src: Logo21 },
  { key: "logo-22", src: Logo22 },
  { key: "logo-23", src: Logo23 },
  { key: "logo-24", src: Logo24 },
  { key: "logo-25", src: Logo25 },
  { key: "logo-26", src: Logo26 },
  { key: "logo-27", src: Logo27 },
  { key: "logo-28", src: Logo28 },
  { key: "logo-29", src: Logo29 },
  { key: "logo-30", src: Logo30 },
  { key: "logo-31", src: Logo31 },
  { key: "logo-32", src: Logo32 },
  { key: "logo-33", src: Logo33 }
];

// `locale` is required explicitly (not read implicitly) to keep this page
// statically prerendered — see the comment in app/[locale]/page.tsx. All
// interactivity/animation lives in TrustedByClient; this stays a Server
// Component so translation is resolved at build/request time, not shipped
// to the client.
export async function TrustedBy({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "TrustedBy" });

  return <TrustedByClient heading={t("heading")} logos={LOGOS} />;
}
