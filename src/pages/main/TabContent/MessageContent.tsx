import { useParams } from "react-router-dom";
import MessageSection from "../../../components/tabs/messageTab/MessageSection";
import ChatWindow from "../../../components/chat/ChatWindow";

export default function MessageContent() {
    const { id: activeChat } = useParams();

    return (
        <>
            {!activeChat ? (
                <div className="flex-1 lg:hidden">
                    <MessageSection />
                </div>
            ) : (
                <div className="flex-1 w-full h-full lg:hidden sm:pl-32 dark:bg-slate-800/30">
                    <ChatWindow activeChat={activeChat} />
                </div>
            )}

            <div className="hidden w-full h-full lg:flex lg:flex-row dark:bg-slate-800/30">
                <MessageSection />
                <ChatWindow activeChat={activeChat} />
            </div>
        </>
    );
}
