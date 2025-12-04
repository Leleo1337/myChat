import { LanguagesIcon, MoonIcon, SunIcon } from "lucide-react";
// import myChatLightThemeLogo from "../../assets/myChat_lightTheme_LOGO.png";
// import myChatDarkThemeLogo from "../../assets/myChat_darkTheme_LOGO.png";
import { useContext, useEffect, useRef, useState } from "react";
import type { ThemeMode } from "../../types/globals/ThemeMode";
import { getTheme, setTheme } from "../../utils/toggleTheme";
import { Link } from "react-router";
import LanguageContext from "../../context/LanguageContext";
import type { LangMode } from "../../types/globals/LangMode";
import LanguageSelector from "../../components/ui/LanguageSelector";

export default function LoginPage() {
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
                        <h1 className="text-2xl font-extrabold">myChat</h1>
                        <div className="flex gap-4">
                            {currentTheme == "dark" ? (
                                <SunIcon
                                    onClick={() => setCurrentTheme("light")}
                                    className="cursor-pointer hover:text-blue-500"
                                />
                            ) : (
                                <MoonIcon
                                    onClick={() => setCurrentTheme("dark")}
                                    className="cursor-pointer hover:text-blue-500"
                                />
                            )}
                            <div className="relative">
                                <LanguagesIcon
                                    ref={languageIconRef}
                                    onClick={() => setLanguageSelectorOpen(!languageSelectorOpen)}
                                    className="cursor-pointer hover:text-blue-500"
                                />
                                {languageSelectorOpen && (
                                    <LanguageSelector
                                        activeLang={activeLang}
                                        changeLangHandler={handleLanguageChange}
                                        ref={languageSelectorRef}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full h-full pb-12">
                        <div className="pb-10 md:pb-16">
                            <h1 className="pb-2 text-4xl font-extrabold text-gray-900 lg:text-5xl dark:text-gray-50">
                                {languageData.auth?.loginPage.welcomeTitle}
                            </h1>
                            <h2 className="text-xl font-medium text-gray-600 lg:text-2xl dark:text-gray-400">
                                {languageData.auth?.loginPage.signInMessage}
                            </h2>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm text-gray-800 dark:text-gray-200">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="p-3 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-sm text-gray-800 dark:text-gray-200">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="p-3 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button className="p-4 font-semibold text-white bg-blue-500 cursor-pointer rounded-2xl hover:bg-blue-600">
                                {languageData.auth?.loginPage.signInButton}
                            </button>

                            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                                {languageData.auth?.loginPage.noAccount}
                                <Link to={"/register"} className="ml-1 font-semibold text-blue-600 hover:text-blue-500">
                                    {languageData.auth?.loginPage.signUpLink}
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 bg-linear-to-br from-blue-500/30 via-blue-500/50 to-blue-500/80">
                    <div className="relative z-10 flex items-center justify-center h-full p-10 text-center text-white">
                        <div>
                            <h3 className="mb-4 text-4xl font-extrabold">
                                {languageData.auth?.loginPage.sidebarTitle}
                            </h3>
                            <p className="text-xl font-light"> {languageData.auth?.loginPage.sidebarSubtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
