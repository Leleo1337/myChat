import { useState } from "react";
import OptionsTab from "./OptionsTab";
import AppearanceTab from "./AppaeranceTab";

export default function SettingsPanel() {
    const [activeSection, setActiveSection] = useState("options");

    return (
        <>
            <div className="w-full h-full p-2 py-8 sm:pl-36 lg:max-w-[600px] bg-white border-r border-gray-200 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
                {activeSection == "options" && <OptionsTab setActiveSection={setActiveSection} />}
                {activeSection == "appearance" && <AppearanceTab setActiveSection={setActiveSection} />}
            </div>
        </>
    );
}
