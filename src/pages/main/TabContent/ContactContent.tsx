import { useEffect, useState } from "react";
import ChatWindow from "../ChatWindow";
import { useParams } from "react-router";
import ContactSection from "../../../components/mainApp/tabs/contactTab/ContactSection";

export default function ContactContent() {
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
                <div className="flex-1 lg:hidden dark:bg-slate-800/30">
                    <ContactSection />
                </div>
            ) : isMobile ? (
                <div className="flex-1 lg:hidden dark:bg-slate-800/30">
                    <ContactSection />
                </div>
            ) : (
                <div className="flex-1 lg:hidden dark:bg-slate-800/30">
                    <ChatWindow activeChat={activeChat} />
                </div>
            )}

            <div className="hidden w-full h-full lg:flex lg:flex-row dark:bg-slate-800/30">
                <ContactSection />
                <ChatWindow activeChat={activeChat} />
            </div>
        </>
    );
}
