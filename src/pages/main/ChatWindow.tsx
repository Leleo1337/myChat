import ChatHeader from "../../components/mainApp/chat/ChatHeader";
import ChatBody from "../../components/mainApp/chat/ChatBody";
import EmptyChat from "../../components/mainApp/chat/EmptyChat";
import type { ChatWindowProps } from "../../types/mainApp/chat/ChatWindowProps";

export default function ChatWindow({ activeChat }: ChatWindowProps) {
    return (
        <>
            {activeChat ? (
                <div className="flex flex-col flex-1 h-full">
                    <ChatHeader />
                    <ChatBody />
                </div>
            ) : (
                <div className="hidden w-full min-h-full lg:block">
                    <EmptyChat />
                </div>
            )}
        </>
    );
}
