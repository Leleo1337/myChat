import ChatHeader from "../../components/chat/ChatHeader";
import ChatBody from "../../components/chat/ChatBody";
import EmptyChat from "../../components/chat/EmptyChat";

export default function ChatWindow({ activeChat }: any) {
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
