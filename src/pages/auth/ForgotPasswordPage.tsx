// import myChatLightThemeLogo from "../../assets/myChat_lightTheme_LOGO.png";
// import myChatDarkThemeLogo from "../../assets/myChat_darkTheme_LOGO.png";
import { useContext, useEffect, useRef, useState } from "react";
import type { ThemeMode } from "../../types/globals/ThemeMode";
import { getTheme, setTheme } from "../../utils/toggleTheme";
import { Link } from "react-router";
import LanguageContext from "../../context/LanguageContext";
import type { LangMode } from "../../types/globals/LangMode";
import { RightPanel } from "../../components/auth/RightPanel";
import ThemeButtons from "../../components/ui/ThemeButtons";
import LanguageButton from "../../components/ui/LanguageButton";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
    const [currentTheme, setCurrentTheme] = useState<ThemeMode>(getTheme());

    const [languageSelectorOpen, setLanguageSelectorOpen] = useState<boolean>(false);
    const [activeLang, setActiveLang] = useState<LangMode>((localStorage.getItem("lang") as LangMode) || "english");
    const { languageData, setLanguage } = useContext(LanguageContext);
    const languageSelectorRef = useRef<HTMLDivElement | null>(null);
    const languageIconRef = useRef<SVGSVGElement | null>(null);

    function handleLanguageChange(lang: "portugues" | "english") {
        setActiveLang(lang);
        setLanguageSelectorOpen(false);
    }

    useEffect(() => {
        localStorage.setItem("lang", activeLang);
        setLanguage(activeLang);
    }, [activeLang]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                !languageIconRef.current?.contains(e.target as Node) &&
                !languageSelectorRef.current?.contains(e.target as Node)
            )
                setLanguageSelectorOpen(false);
        };

        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    useEffect(() => {
        const initialTheme = getTheme() || "light";
        setCurrentTheme(initialTheme);
    }, []);

    useEffect(() => {
        if (currentTheme) setTheme(currentTheme);
    }, [currentTheme]);

    return (
        <>
            <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
                <div className="container px-6 py-12 mx-auto lg:px-24 xl:px-36 lg:w-1/2">
                    <div className="flex items-center justify-between py-4">
                        <Link to={"/"} className="text-2xl font-extrabold hover:text-blue-500">
                            myChat
                        </Link>
                        <div className="flex gap-4">
                            <ThemeButtons currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
                            <div className="relative">
                                <LanguageButton
                                    languageIcons={{ languageIconRef, languageSelectorRef }}
                                    languageStates={{ activeLang, languageSelectorOpen, setLanguageSelectorOpen }}
                                    handleLanguageChange={handleLanguageChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full h-full pb-12">
                        <ForgotPasswordForm />
                    </div>
                </div>
                <RightPanel languageData={languageData} />
            </div>
        </>
    );
}
