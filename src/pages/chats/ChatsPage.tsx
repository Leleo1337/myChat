import ChatTab from "../../components/chats/messageTab/ChatTab";
import NavigationBar from "../../components/ui/NavigationBar";
import Chat from "./Chat";

export default function ChatsPage() {
    return (
        <>
            <div className="relative w-full h-screen bg-white/95">
                <NavigationBar />

                {/* mobile */}

                <div className="lg:hidden">
                    <ChatTab />
                </div>

                {/* desktop */}
                <div className="flex-row hidden w-full lg:flex">
                    <ChatTab />
                    <Chat />
                </div>
            </div>
        </>
    );
}
