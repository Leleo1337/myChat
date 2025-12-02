import { useState } from "react";
import NavigationBar from "../../components/mainApp/ui/NavigationBar";
import MessageContent from "./TabContent/MessageContent";
import SettingsContent from "./TabContent/SettingsContent";
import ContactContent from "./TabContent/ContactContent";
import PhoneContent from "./TabContent/PhoneContent";

export default function Panel() {
    const [activeTab, setActiveTab] = useState("message");

    const renderTabsContents = () => {
        switch (activeTab) {
            case "message":
                return <MessageContent />;
            case "contact":
                return <ContactContent />;
            case "phone":
                return <PhoneContent />;
            case "settings":
                return <SettingsContent />;
        }
    };

    return (
        <div className="relative flex flex-col w-full h-screen transition-colors duration-300 border-r border-gray-300 shadow-sm bg-gray-50 dark:bg-slate-900 dark:border-slate-800">
            <NavigationBar activateTab={setActiveTab} />

            {renderTabsContents()}
        </div>
    );
}
