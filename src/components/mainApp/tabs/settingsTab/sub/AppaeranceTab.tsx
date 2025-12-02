import { ChevronLeft, Palette } from "lucide-react";
import { getTheme, setTheme } from "../../../../../utils/toggleTheme";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../../../../context/LanguageContext";

export default function AppearanceTab({ setActiveSection }: any) {
    const [currentTheme, setCurrentTheme] = useState(getTheme());
    const { languageData } = useContext(LanguageContext);

    function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
        const isChecked = e.target.checked;
        const newTheme = isChecked ? "dark" : "light";

        setTheme(newTheme);
        setCurrentTheme(newTheme);

        console.log("disabled: ", currentTheme);
    }

    useEffect(() => {
        const initialTheme = getTheme() || "light";
        setCurrentTheme(initialTheme);
    }, []);

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
                        <Palette className="text-blue-500" size={24} />
                        <span className="font-semibold text-gray-800 dark:text-gray-100">
                            {languageData.mainApp.settingsSection.appearanceSubTab?.title}
                        </span>
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                        <div className="relative">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                onChange={handleThemeChange}
                                checked={getTheme() === "dark"}
                            />
                            <div className="transition-colors bg-gray-300 rounded-full w-14 h-7 dark:bg-gray-700 peer-checked:bg-gray-800"></div>
                            <div className="absolute top-0 left-0 transition-transform bg-white rounded-full shadow-md w-7 h-7 dark:bg-gray-200 peer-checked:translate-x-7"></div>
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-200">
                            {languageData.mainApp.settingsSection.appearanceSubTab?.darkModeButton}
                        </span>
                    </label>
                </div>
            </div>
        </>
    );
}
