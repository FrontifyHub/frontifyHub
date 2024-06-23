"use client";

import { useLocalization } from "@frontifyHub/common/localization";
import styles from "./page.module.css";
import { Button, useColorMode } from "@chakra-ui/react";
import { IntroSection } from "@frontifyHub/common-ui/templates";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useLocalization();

  const title = {
    release: `${t("home_section1-releaseButton")}`,
    access: `${t("home_section1-accessButton")}`,
    logo: "favicon.ico",
    header2: `${t("home_section1-header2")}`,
    convert: `${t("home_section1-convert")}`,
  };

  return (
    <main className={styles.main}>
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}
      <IntroSection title={title} />
    </main>
  );
}
