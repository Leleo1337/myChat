import { Box, Search } from "lucide-react";
import ChatItem from "./ChatItem";
import { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";

export default function MessageSection() {
    const { languageData } = useContext(LanguageContext);

    return (
        <>
            <div className="w-full h-screen py-8 sm:pl-32 lg:max-w-[600px] bg-white overflow-y-scroll border-r border-gray-300 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
                <div className="px-4 pb-4 sm:px-1">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100">
                        {languageData.mainApp.messageSection?.title}
                    </h1>
                </div>
                <div className="px-4 sm:px-1">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full py-2.5 pl-12 pr-4 text-gray-800 placeholder-gray-500 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                            placeholder={languageData.mainApp.messageSection?.inputPlaceholder}
                        />
                        <Search className="absolute text-blue-500 top-[13px] left-4 dark:text-blue-400" size={20} />
                    </div>
                    <div className="pt-10 pb-3 border-b border-gray-300 dark:border-gray-800">
                        <button className="flex items-center justify-start gap-4 cursor-pointer dark:text-blue-500 hover:text-blue-600">
                            <Box size={20} />
                            <h2 className="text-sm font-semibold text-blue-500 dark:text-slate-100 dark:hover:text-slate-200">
                                {languageData.mainApp.messageSection?.archivedButton}
                            </h2>
                        </button>
                    </div>
                    <div className="py-8">
                        <h2 className="pb-4 text-base font-semibold text-gray-700 dark:text-slate-300">
                            {languageData.mainApp.messageSection?.pinnedTitle}
                        </h2>
                        <ul className="flex flex-col gap-4">
                            <ChatItem />
                        </ul>
                    </div>
                    <div>
                        <h2 className="pb-4 text-base font-semibold text-gray-700 dark:text-slate-300">
                            {languageData.mainApp.messageSection?.allChatsTitle}
                        </h2>
                        <ul className="flex flex-col gap-4 pb-12 sm:pb-0">
                            <ChatItem />
                            <ChatItem />
                            <ChatItem />
                            <ChatItem />
                            <ChatItem />
                            <ChatItem />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
