import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import { AlertTriangle } from "lucide-react";

export default function PhoneSection() {
    const { languageData } = useContext(LanguageContext);

    return (
        <>
            <div className="w-full h-screen py-8 sm:pl-32 lg:max-w-[600px] bg-white overflow-y-scroll border-r border-gray-300 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
                <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                    <AlertTriangle className="text-blue-500" size={72} />
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-slate-200">
                        {languageData.mainApp.phoneSection?.warningTitle}
                    </h1>
                    <p className="text-sm text-center max-w-[300px] text-gray-700 dark:text-slate-300">
                        {languageData.mainApp.phoneSection?.warningMessage}
                    </p>
                </div>
            </div>
        </>
    );
}
