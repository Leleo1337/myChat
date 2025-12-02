import en from "../../locales/en.json";
import type { LangMode } from "../globals/LangMode";

type setLanguageType = React.Dispatch<React.SetStateAction<"portugues" | "english">>;

export interface LanguageContextType {
    language: LangMode;
    setLanguage: setLanguageType;
    languageData: typeof en;
}
