import { LanguagesIcon } from "lucide-react";
import LanguageSelectorMenu from "./LanguageSelectorMenu";
import type { LanguageButtonProps } from "../../types/ui/LanguageButtonTypes";

export default function LanguageButton({
    languageIcons: { languageIconRef, languageSelectorRef },
    languageStates: { activeLang, languageSelectorOpen, setLanguageSelectorOpen },
    handleLanguageChange,
}: LanguageButtonProps) {
    return (
        <>
            <div className="relative">
                <LanguagesIcon
                    ref={languageIconRef}
                    onClick={() => setLanguageSelectorOpen(!languageSelectorOpen)}
                    className="text-gray-600 cursor-pointer dark:text-slate-100 hover:text-blue-500"
                />
                {languageSelectorOpen && (
                    <LanguageSelectorMenu
                        activeLang={activeLang}
                        changeLangHandler={handleLanguageChange}
                        ref={languageSelectorRef}
                    />
                )}
            </div>
        </>
    );
}
