import { Send } from "lucide-react";
import { mockMessages } from "../../data/mockMessages";
import MessageBubble from "./MessageBubble";

export default function ChatBody() {
    return (
        <div className="flex flex-col max-h-full pl-4 pr-0 py-4 overflow-y-scroll h-full">
            <div className="flex flex-col flex-1 gap-4 pb-4 pr-2 overflow-y-auto">
                <div className="flex items-center justify-center p-8 my-8 text-center border border-gray-300 rounded-xl dark:border-gray-800">
                    <p>This is the start of your conversation</p>
                </div>
                {mockMessages.map((msg) => (
                    <MessageBubble key={msg.id} sender={msg.sender} timestamp={msg.timestamp} content={msg.content} />
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
