import { useParams } from "react-router";
import ChatWindow from "../ChatWindow";
import { useEffect, useState } from "react";
import SettingsSection from "../../../components/tabs/settingsTab/SettingsSection";

export default function SettingsContent() {
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
                    <SettingsSection />
                </div>
            ) : isMobile ? (
                <div className="flex-1 lg:hidden dark:bg-slate-800/30">
                    <SettingsSection />
                </div>
            ) : (
                <div className="flex-1 lg:hidden dark:bg-slate-800/30">
                    <ChatWindow activeChat={activeChat} />
                </div>
            )}

            <div className="hidden w-full h-full lg:flex lg:flex-row dark:bg-slate-800/30">
                <SettingsSection />
                <ChatWindow activeChat={activeChat} />
            </div>
        </>
    );
}
