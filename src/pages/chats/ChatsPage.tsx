import ChatTab from "../../components/chats/messageTab/ChatTab";
import NavigationBar from "../../components/ui/NavigationBar";
import Chat from "./Chat";

export default function ChatsPage() {
    return (
        <>
            <div className="relative w-full min-h-full bg-white border-r border-gray-300 shadow-sm">
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
