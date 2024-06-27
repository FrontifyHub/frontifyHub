"use client";

import { IntroSection } from "@frontifyHub/common-ui/templates";
import { useLocalization } from "@frontifyHub/common/localization";

type Title = {
  release?: string;
  access?: string;
  logo?: string;
  header2?: string;
  convert?: string;
  textGradient?: string;
  header1?: string;
};

export default function HomePage() {
  const { t } = useLocalization();

  const title: Title = {
    release: `${t("home_section1-releaseButton")}`,
    access: `${t("home_section1-accessButton")}`,
    logo: "favicon.ico",
    header2: `${t("home_section1-header2")}`,
    convert: `${t("home_section1-convert")}`,
    textGradient: "FrontiHub",
    header1: `${t("home_section1-header1")}`,
  };
  return (
    <>
      <IntroSection title={title} />
    </>
  );
}
