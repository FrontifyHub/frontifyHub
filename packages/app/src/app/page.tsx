"use client";

import HomePage from "./Home";
import styles from "./page.module.css";
import { Button, useColorMode } from "@chakra-ui/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <main className={styles.main}>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <HomePage />
    </main>
  );
}
