"use client";

import HomePage from "./home/page";
import styles from "../styles/page.module.css";
import { TreeBlocks } from "@frontifyHub/canvas/TreeBlocks";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
