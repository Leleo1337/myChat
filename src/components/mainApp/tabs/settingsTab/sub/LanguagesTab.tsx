import { Check, ChevronLeft, Languages } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../../../../context/LanguageContext";
import type { SettingsSubTabProps } from "../../../../../types/mainApp/tabs/SettingsSubTabsProps";

export default function LanguagesTab({ setActiveSection }: SettingsSubTabProps) {
    const [activeLang, setActiveLang] = useState<"portugues" | "english">(
        (localStorage.getItem("lang") as "portugues" | "english") || "english"
    );

    const { languageData, setLanguage } = useContext(LanguageContext);

    useEffect(() => {
        localStorage.setItem("lang", activeLang);
        setLanguage(activeLang);
    }, [activeLang]);

    return (
        <>
            <div className="p-5 transition-colors border border-gray-300 shadow-md bg-gray-50 dark:bg-gray-900 dark:border-slate-800 rounded-2xl">
                <div className="relative flex items-center justify-center pb-8">
                    <div
                        className="absolute left-0 flex items-center justify-center p-1 transition-colors rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
                        onClick={() => setActiveSection("options")}>
                        <ChevronLeft className="text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Languages className="text-blue-500" size={24} />
                        <span className="font-semibold text-gray-800 dark:text-gray-100">
                            {languageData.mainApp.settingsSection.languagesSubTab?.title}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                    <div
                        onClick={() => setActiveLang("portugues")}
                        className={`${
                            activeLang == "portugues" ? "dark:border-blue-700" : "dark:border-slate-700"
                        } relative w-full px-4 py-2.5 hover:border-blue-700 text-gray-800 transition-all duration-200 cursor-pointer bg-gray-100 border border-gray-300 rounded-xl dark:text-slate-100 dark:bg-slate-800`}>
                        <p>Português (Brasil)</p>
                        <Check
                            className={`${
                                activeLang == "portugues" ? "opacity-100" : "opacity-0"
                            } transition ease-in absolute right-4 top-3 text-blue-500 `}
                        />
                    </div>
                    <div
                        onClick={() => setActiveLang("english")}
                        className={`${
                            activeLang == "english" ? "dark:border-blue-700" : "dark:border-slate-700"
                        } relative w-full hover:border-blue-700 px-4 py-2.5 cursor-pointer text-gray-800 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-xl dark:text-slate-100 dark:bg-slate-800`}>
                        <p>English (US)</p>
                        <Check
                            className={`${
                                activeLang == "english" ? "opacity-100" : "opacity-0"
                            } transition ease-in absolute right-4 top-3 text-blue-500 `}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
