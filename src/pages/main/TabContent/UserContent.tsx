import { useEffect, useState } from "react";
import ChatWindow from "../../../components/chat/ChatWindow";
import { useParams } from "react-router";
import UserSection from "../../../components/tabs/userTab/UserSection";

export default function UserContent() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const { id: activeChat } = useParams();

    useEffect(() => {
        function onResize() {
            setIsMobile(window.innerWidth < 1024);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <>
            {!activeChat ? (
                <div className="flex-1 lg:hidden">
                    <UserSection />
                </div>
            ) : isMobile ? (
                <div className="flex-1 lg:hidden">
                    <UserSection />
                </div>
            ) : (
                <div className="flex-1 lg:hidden">
                    <ChatWindow activeChat={activeChat} />
                </div>
            )}

            <div className="hidden w-full h-full lg:flex lg:flex-row">
                <UserSection />
                <ChatWindow activeChat={activeChat} />
            </div>
        </>
    );
}
