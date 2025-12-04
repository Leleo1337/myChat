import { LanguagesIcon } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
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
        </>
    );
}
