import SettingsPanel from "../../components/chats/settingsTab/SettingsPanel";
import ChatWindow from "../../components/ChatWindow";

export default function SettingsTab() {
    return (
        <>
            <div className="flex-1 lg:hidden">
                <SettingsPanel />
            </div>

            <div className="hidden w-full h-full lg:flex lg:flex-row">
                <SettingsPanel />
                <ChatWindow />
            </div>
        </>
    );
}
