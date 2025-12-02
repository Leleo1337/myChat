import testProfilePicture from "../../../assets/testProfilePicture.jpg";
import { MessageCircleIcon, PhoneIcon, Settings, UsersIcon } from "lucide-react";
import { useState } from "react";
import myChatLightThemeLogo from "../../../assets/myChat_lightTheme_LOGO.png";
import myChatDarkThemeLogo from "../../../assets/myChat_darkTheme_LOGO.png";
import { useNavigate } from "react-router";

type tabTypes = {
    message: boolean;
    user: boolean;
    phone: boolean;
    settings: boolean;
};

export default function NavigationBar({ activateTab }: any) {
    const [activeTab, setActiveTab] = useState<tabTypes>({
        message: true,
        user: false,
        phone: false,
        settings: false,
    });
    const navigate = useNavigate();
    const activeTabStyles = "bg-blue-500 text-white p-3 rounded-xl shadow-md transition-all duration-100";

    function handleTabActivation(tab: string) {
        const isMobile = window.innerWidth < 1024;

        setActiveTab({
            message: tab === "message",
            user: tab === "contact",
            phone: tab === "phone",
            settings: tab === "settings",
        });

        if (!isMobile) {
            activateTab(tab);
            return;
        }

        if (tab === "message") {
            navigate("/chat");
        }

        activateTab(tab);
    }

    return (
        <>
            <div className="fixed bottom-0 z-10 w-full sm:max-w-[120px] p-2 transition-colors duration-300 bg-white border-t border-gray-300 shadow-md sm:p-3 sm:left-0 sm:w-32 sm:h-full sm:border-t-0 sm:border-r dark:bg-slate-900 dark:border-slate-800">
                <div className="flex items-center justify-around gap-2 sm:flex-col sm:gap-8">
                    <div className="hidden sm:block">
                        <div>
                            <img src={myChatLightThemeLogo} alt="Logo" className="block object-contain dark:hidden" />
                            <img src={myChatDarkThemeLogo} alt="Logo" className="hidden object-contain dark:block" />
                        </div>
                    </div>
                    <div
                        onClick={() => handleTabActivation("message")}
                        className={`${
                            activeTab.message
                                ? activeTabStyles
                                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500 dark:text-slate-400 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 p-3 rounded-xl transition-all duration-200"
                        } cursor-pointer`}>
                        <MessageCircleIcon className="w-6 h-6" />
                    </div>
                    <div
                        onClick={() => handleTabActivation("contact")}
                        className={`${
                            activeTab.user
                                ? activeTabStyles
                                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500 dark:text-slate-400 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 p-3 rounded-xl transition-all duration-200"
                        } cursor-pointer`}>
                        <UsersIcon className="w-6 h-6" />
                    </div>
                    <div
                        onClick={() => handleTabActivation("phone")}
                        className={`${
                            activeTab.phone
                                ? activeTabStyles
                                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500 dark:text-slate-400 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 p-3 rounded-xl transition-all duration-200"
                        } cursor-pointer`}>
                        <PhoneIcon onClick={() => handleTabActivation("phone")} className="w-6 h-6" />
                    </div>

                    <div className="flex items-center justify-center pl-4 border-l-2 border-gray-300 dark:border-gray-600 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-2">
                        <div
                            onClick={() => handleTabActivation("settings")}
                            className={`${
                                activeTab.settings
                                    ? activeTabStyles
                                    : "text-gray-400 hover:bg-blue-100 hover:text-blue-500 dark:text-slate-400 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 p-3 rounded-xl transition-all duration-200"
                            } cursor-pointer`}>
                            <Settings onClick={() => handleTabActivation("settings")} className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="absolute hidden cursor-pointer bottom-8 sm:block">
                        <img
                            src={testProfilePicture}
                            alt=""
                            className="object-cover w-12 h-12 border rounded-full border-blue-400/30"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
