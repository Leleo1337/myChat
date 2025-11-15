import { useState } from "react";
import SettingsSubContent from "./sub/SettingsSubContent";
import AppearanceTab from "./sub/AppaeranceTab";

export default function SettingsSection() {
    const [activeSection, setActiveSection] = useState("options");

    return (
        <>
            <div className="w-full h-full p-2 py-8 sm:pl-36 lg:max-w-[600px] bg-white border-r border-gray-300 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
                {activeSection == "options" && <SettingsSubContent setActiveSection={setActiveSection} />}
                {activeSection == "appearance" && <AppearanceTab setActiveSection={setActiveSection} />}
            </div>
        </>
    );
}
