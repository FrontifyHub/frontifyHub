"use client";
import { Link, Button, ColorModeScript, useColorMode } from "@chakra-ui/react";
import styles from "./page.module.css";
import { Language, useLocalization } from "@frontifyHub/common/localization";
import frontifyHubTheme from "./theme";
import ButtonTesting from "./ButtonTesting";
import { useAppSelector } from "@frontifyHub/common/redux/store";

export default function Home() {
  const { t, changeLanguage } = useLocalization();
  const { colorMode, toggleColorMode } = useColorMode();
  const username = useAppSelector((state) => state.auth.value.username);
  return (
    <main className={styles.main}>
      {t("home.body")}
      <ColorModeScript initialColorMode={frontifyHubTheme.initialColorMode} />
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
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
      <ButtonTesting />
      <div>Username: {username}</div>
    </main>
  );
}
