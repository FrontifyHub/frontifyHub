"use client";
import styles from "./page.module.css";
import { TreeBlocks } from "@frontifyHub/canvas/TreeBlocks";

export default function Home() {
  return (
    <main className={styles.main}>
      <TreeBlocks />
    </main>
  );
}
