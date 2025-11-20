import { useState } from "react";
import SettingsSubContent from "./sub/SettingsSubContent.tsx";
import AppearanceTab from "./sub/AppaeranceTab.tsx";
import AccountTab from "./sub/AccountTab.tsx";
import ProfileTab from "./sub/ProfileTab.tsx";

export default function SettingsSection() {
    const [activeSection, setActiveSection] = useState("options");

    return (
        <>
            <div className="w-full h-full p-2 py-8 sm:pl-32 lg:max-w-[600px] bg-white border-r border-gray-300 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
                {activeSection == "options" && <SettingsSubContent setActiveSection={setActiveSection} />}
                {activeSection == "appearance" && <AppearanceTab setActiveSection={setActiveSection} />}
                {activeSection == "profile" && <ProfileTab setActiveSection={setActiveSection} />}
                {activeSection == "account" && <AccountTab setActiveSection={setActiveSection} />}
            </div>
        </>
    );
}
