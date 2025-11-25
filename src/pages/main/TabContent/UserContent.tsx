import { useEffect, useState } from "react";
import ChatWindow from "../../../components/chat/ChatWindow";
import { useParams } from "react-router";
import ContactSection from "../../../components/tabs/contactTab/ContactSection";

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
                    <ContactSection />
                </div>
            ) : isMobile ? (
                <div className="flex-1 lg:hidden">
                    <ContactSection />
                </div>
            ) : (
                <div className="flex-1 lg:hidden">
                    <ChatWindow activeChat={activeChat} />
                </div>
            )}

            <div className="hidden w-full h-full lg:flex lg:flex-row">
                <ContactSection />
                <ChatWindow activeChat={activeChat} />
            </div>
        </>
    );
}
