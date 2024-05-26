"use client";
import React from "react";
import english from "./lang/english.json";
import spanish from "./lang/spanish.json";
import { Language } from "./localization";

type LocalizationContextType = {
  t: (label: LocalizationKeys) => string;
  changeLanguage: (newLang: Language) => void;
};

type LocalizationKeys = keyof typeof english;

const LocalizationContext = React.createContext<LocalizationContextType>({
  t: () => "",
  changeLanguage: () => {},
});

const getContent = (lang: Language) => {
  let languageContent;
  switch (lang) {
    case Language.English:
      languageContent = english;
      break;
    case Language.Spanish:
      languageContent = spanish;
      break;
    default:
      languageContent = english;
      break;
  }
  return languageContent;
};

export const LocalizationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [languageStore, setLanguageStore] =
    React.useState<typeof english>(english);

  const changeLanguage = React.useCallback(
    (newLang: Language) => {
      const newLanguageStore = getContent(newLang);
      setLanguageStore(newLanguageStore);
    },
    [setLanguageStore]
  );

  const t = React.useCallback(
    (label: LocalizationKeys) => {
      return languageStore[label];
    },
    [languageStore]
  );

  const value = React.useMemo(
    () => ({
      t,
      changeLanguage,
    }),
    [t, changeLanguage]
  );

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => React.useContext(LocalizationContext);
