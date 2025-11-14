import { useEffect, useState } from "react";
import NavigationBar from "../../components/ui/NavigationBar";
import MessageContent from "./TabContent/MessageContent";
import SettingsContent from "./TabContent/SettingsContent";

export default function Panel() {
    const [activeTab, setActiveTab] = useState("message");
    const activeChat = "dasd";

    const renderTabsContents = () => {
        switch (activeTab) {
            case "message":
                return <MessageContent />;
            case "user":
                return "";
            case "phone":
                return "";
            case "settings":
                return <SettingsContent />;
        }
    };

    useEffect(() => {
        console.log(activeChat);
    });

    return (
        <div className="relative flex flex-col w-full h-screen transition-colors duration-300 border-r border-gray-300 shadow-sm bg-gray-50 dark:bg-slate-900 dark:border-slate-800">
            <NavigationBar activateTab={setActiveTab} />

            {renderTabsContents()}
        </div>
    );
}
