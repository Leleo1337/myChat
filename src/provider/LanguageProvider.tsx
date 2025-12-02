import { useEffect, useState } from "react";
import LanguageContext from "../context/LanguageContext";
import pt from "../locales/pt.json";
import en from "../locales/en.json";

export default function LanguageProvider({ children }: any) {
    const [language, setLanguage] = useState<"portugues" | "english">("english");
    const [languageData, setLanguageData] = useState(en);

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
