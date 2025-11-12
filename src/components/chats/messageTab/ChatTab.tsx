import { Box, Search } from "lucide-react";
import ChatItem from "./ChatItem";

export default function ChatTab() {
    return (
        <>
            <div className="w-full h-screen p-4 py-8 sm:pl-36 lg:max-w-[600px] bg-black/8 overflow-y-scroll">
                <div className="space-y-4">
                    <div>
                        <h1 className="text-3xl font-bold">Chats</h1>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full py-2.5 pl-10 pr-4 text-blue-500 transition-all duration-200 border shadow-xs bg-white backdrop-blur-md border-blue-500/20 rounded-xl placeholder-blue-400/60 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 focus:outline-none"
                            placeholder="Search"
                        />
                        <Search className="absolute text-blue-500 top-3 left-3" size={20} />
                    </div>
                </div>
                <div className="pt-10 pb-3 border-b border-gray-300">
                    <div className="flex items-center justify-start gap-4">
                        <Box size={20} />
                        <h2 className="text-sm font-semibold text-blue-500">Archived</h2>
                    </div>
                </div>
                <div className="py-8">
                    <h2 className="pb-4 text-base font-semibold text-gray-800">Pinned</h2>
                    <ul className="flex flex-col gap-4">
                        <ChatItem />
                    </ul>
                </div>
                <div>
                    <h2 className="pb-4 text-base font-semibold text-gray-800">All chats</h2>
                    <ul className="flex flex-col gap-4">
                        <ChatItem />
                        <ChatItem />
                        <ChatItem />
                        <ChatItem />
                        <ChatItem />
                        <ChatItem />
                    </ul>
                </div>
            </div>
        </>
    );
}
