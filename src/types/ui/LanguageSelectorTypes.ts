import type { Ref } from "react";
import type { LangMode } from "../globals/LangMode";

export interface LanguageSelectorProps {
    ref: Ref<HTMLDivElement>;
    changeLangHandler: (lang: LangMode) => void;
    activeLang: LangMode;
}
