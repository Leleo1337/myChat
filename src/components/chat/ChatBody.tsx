import { Send } from "lucide-react";
import { mockMessages } from "../../data/mockMessages";
import dateFormatter from "../../utils/dateFormatter";

export default function ChatBody() {
    return (
        <div className="flex flex-col max-h-full px-4 py-4 overflow-y-scroll">
            <div className="flex flex-col flex-1 gap-4 pb-4 pr-2 overflow-y-auto">
                <div className="flex items-center justify-center p-8 my-8 text-center border border-gray-300 rounded-xl dark:border-gray-800">
                    <p>This is the start of your conversation</p>
                </div>
                {mockMessages.map((msg) => (
                    <div className={`flex w-full ${msg.sender == "me" ? "justify-end" : "justify-start"}`}>
                        <div className="flex flex-col">
                            <div
                                className={`${
                                    msg.sender == "me" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-800"
                                } px-3 py-2 rounded-2xl max-w-[400px] break-all`}>
                                <p>{msg.content}</p>
                            </div>
                            <span
                                className={`text-[10px] px-0.5 flex ${
                                    msg.sender == "me"
                                        ? "text-gray-600 dark:text-gray-200 justify-start"
                                        : "text-gray-400 justify-end"
                                }`}>
                                {dateFormatter(msg.timestamp)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pt-4 pb-16 border-t border-gray-300 dark:border-gray-800 sm:pb-0">
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        id="teste"
                        className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-xl placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-200 dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                        placeholder="Mensagem"
                    />
                    <div className="flex items-center justify-center p-3 text-blue-500 border cursor-pointer dark:border-slate-700 rounded-2xl hover:bg-blue-500/20 hover:border-blue-500">
                        <Send />
                    </div>
                </div>
            </div>
        </div>
    );
}
