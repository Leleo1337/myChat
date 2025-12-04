import type { LangData } from "../globals/LangData";
import type { LangMode } from "../globals/LangMode";

type setLanguageType = React.Dispatch<React.SetStateAction<"portugues" | "english">>;

export interface LanguageContextType {
    language: LangMode;
    setLanguage: setLanguageType;
    languageData: LangData;
}
