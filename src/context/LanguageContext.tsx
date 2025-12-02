import { createContext } from "react";
import en from "../locales/en.json";

type languageContextTypes = {
    language: "portugues" | "english";
    setLanguage: React.Dispatch<React.SetStateAction<"portugues" | "english">>;
    languageData: typeof en;
};

const LanguageContext = createContext<languageContextTypes>({
    language: "english",
    setLanguage: () => {},
    languageData: en,
});

export default LanguageContext;
