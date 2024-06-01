"use client";
import {Link, Text, Button } from "@chakra-ui/react";
import styles from "./page.module.css";
import { Language, useLocalization } from "@frontifyHub/common/localization";

export default function Home() {
  const { t, changeLanguage } = useLocalization();
  return (
    <main className={styles.main}>
      {t("home.body")}
      <button
        onClick={() => {
          changeLanguage(Language.Spanish);
        }}
      >
        {t("button.language.spanish")}
      </button>
      <button
        onClick={() => {
          changeLanguage(Language.English);
        }}
      >
        {t("button.language.english")}
      </button>
      <Button bgColor="fron">adasdsadsa</Button>

      <h1>Home</h1>
      <Link href="/about">About</Link>
    </main>
  );
}
