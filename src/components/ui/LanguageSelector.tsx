import { Check } from "lucide-react";
import type { LanguageSelectorProps } from "../../types/ui/LanguageSelectorTypes";

export default function LanguageSelector({ ref, changeLangHandler, activeLang }: LanguageSelectorProps) {
    return (
        <>
            <div
                ref={ref}
                className="absolute right-0 w-48 transition duration-75 ease-in bg-white border border-gray-200 shadow-xl xl top-8 rounded-xl dark:bg-slate-800 dark:border-slate-700">
                <div onClick={() => changeLangHandler("portugues")} className="overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 cursor-pointer dark:hover:bg-slate-900 rounded-t-xl">
                        <p className="text-sm">Portugues (BR)</p>
                        {activeLang == "portugues" && <Check className="w-4 h-4 text-blue-500" />}
                    </div>
                </div>
                <div onClick={() => changeLangHandler("english")} className="overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 cursor-pointer dark:hover:bg-slate-900 rounded-b-xl">
                        <p className="text-sm">English (US)</p>
                        {activeLang == "english" && <Check className="w-4 h-4 text-blue-500" />}
                    </div>
                </div>
            </div>
        </>
    );
}
