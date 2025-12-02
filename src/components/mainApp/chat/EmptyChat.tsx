import { CloudFogIcon } from "lucide-react";
import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";

export default function EmptyChat() {
    const { languageData } = useContext(LanguageContext);

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center text-center">
                <CloudFogIcon size={120} className="mb-4 text-blue-500" />
                <h4 className="font-semibold text-gray-800 dark:text-slate-200">
                    {languageData.mainApp.chatsSection?.emptyChat.title}
                    {" "}
                    <button className="font-bold text-blue-500 underline cursor-pointer">
                        {languageData.mainApp.chatsSection?.emptyChat.buttonText}
                    </button>
                </h4>
            </div>
        </div>
    );
}
