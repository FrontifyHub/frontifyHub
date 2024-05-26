import english from "./lang/english.json";
import spanish from './lang/spanish.json';

export enum Language {
    English = "en",
    Spanish = "es",
}

type Translation = typeof english
export const resources: Record<Language, Translation> = {
    en: english,
    es: spanish,
};
