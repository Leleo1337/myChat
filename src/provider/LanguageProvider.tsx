import { useEffect, useState } from "react";
import LanguageContext from "../context/LanguageContext";
import pt from "../locales/pt.json";
import en from "../locales/en.json";
import type { LangMode } from "../types/globals/LangMode";
import type { LanguageProviderTypes } from "../types/providers/LanguageProviderTypes";
import type { LangData } from "../types/globals/LangData";

export default function LanguageProvider({ children }: LanguageProviderTypes) {
    const [language, setLanguage] = useState<LangMode>("english");
    const [languageData, setLanguageData] = useState<LangData>(en);

    function getLanguageData(lang: string) {
        if (lang == "portugues") return pt;
        if (lang == "english") return en;
        return en;
    }

    useEffect(() => {
        setLanguageData(getLanguageData(language));
    }, [language]);

    useEffect(() => {
        const currentLang = localStorage.getItem("lang");
        if (currentLang == "english" || currentLang == "portugues") {
            setLanguage(currentLang);
            setLanguageData(getLanguageData(currentLang));
        } else {
            setLanguage("english");
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, languageData }}>{children}</LanguageContext.Provider>
    );
}
