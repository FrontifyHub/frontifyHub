"use client";
import {
  Link,
  Button,
  ColorModeScript,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import styles from "./page.module.css";
import { Language, useLocalization } from "@frontifyHub/common/localization";
import frontifyHubTheme from "./theme";
import { Canvas } from "../../../canvas/src/Canvas";

export default function Home() {
  return (
    <main className={styles.main}>
      <Canvas />
    </main>
  );
}
