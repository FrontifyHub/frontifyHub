"use client";
import { Link, Text, Button } from "@chakra-ui/react";
import styles from "./page.module.css";
import { Language, useLocalization } from "@frontifyHub/common/localization";
import { ISpacingCategory } from "@frontifyHub/design-component/models";
import { useEffect, useState } from "react";
import { SpacingCategory } from "@frontifyHub/design-component/view-models";

export default function Home() {
  const { t, changeLanguage } = useLocalization();
  const [testSpacingCategory, setTestSpacingCategory] =
    useState<ISpacingCategory>();
  useEffect(() => {
    setTestSpacingCategory(
      new SpacingCategory().setPadding("10px 20px 30px").setMargin("10px")
    );
  }, []);
  if (testSpacingCategory) {
    console.log(testSpacingCategory.padding.toString(), testSpacingCategory.margin.toString());
  }

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
