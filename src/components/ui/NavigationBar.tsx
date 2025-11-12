import testProfilePicture from "../../assets/testProfilePicture.jpg";
import { MessageCircleIcon, PhoneIcon, Settings, UsersIcon } from "lucide-react";
import { useState } from "react";
import myChatLogo from "../../assets/myChat_LOGO-removebg-preview.png";

type tabTypes = {
    message: boolean;
    user: boolean;
    phone: boolean;
    settings: boolean;
};

export default function NavigationBar() {
    const [activeTab, setActiveTab] = useState<tabTypes>({
        message: true,
        user: false,
        phone: false,
        settings: false,
    });
    const activeTabStyles = "bg-blue-500 text-white p-3 rounded-xl shadow-md transition-all duration-100";

    function handleTabActivation(tab: string) {
        setActiveTab({
            message: tab == "message",
            user: tab == "user",
            phone: tab == "phone",
            settings: tab == "settings",
        });
    }

    return (
        <>
            <div className="fixed bottom-0 z-10 w-full p-2 bg-gray-100 border-t border-gray-200 shadow-md md:bg-gray-50 sm:p-3 md:border-t-0 sm:border-r sm:left-0 md:bottom-auto sm:w-32 sm:h-full">
                <div className="flex items-center justify-around gap-2 sm:flex-col sm:gap-8">
                    <div className="hidden sm:block">
                        <img src={myChatLogo} alt="" />
                    </div>
                    <div
                        onClick={() => handleTabActivation("message")}
                        className={`${
                            activeTab.message
                                ? activeTabStyles
                                : "text-gray-400 hover:bg-white/20 hover:text-blue-400 p-3 rounded-xl transition-all duration-200"
                        } cursor-pointer`}>
                        <MessageCircleIcon className="w-6 h-6" />
                    </div>
                    <div
                        onClick={() => handleTabActivation("user")}
                        className={`${
                            activeTab.user
                                ? activeTabStyles
                                : "text-gray-400 hover:bg-white/20 hover:text-blue-400 p-3 rounded-xl transition-all duration-200"
                        } cursor-pointer`}>
                        <UsersIcon className="w-6 h-6" />
                    </div>
                    <div
                        onClick={() => handleTabActivation("phone")}
                        className={`${
                            activeTab.phone
                                ? activeTabStyles
                                : "text-gray-400 hover:bg-white/20 hover:text-blue-400 p-3 rounded-xl transition-all duration-200"
                        } cursor-pointer`}>
                        <PhoneIcon onClick={() => handleTabActivation("phone")} className="w-6 h-6" />
                    </div>

                    <div className="flex items-center justify-center pl-4 border-l-2 border-gray-300 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-2">
                        <div
                            onClick={() => handleTabActivation("settings")}
                            className={`${
                                activeTab.settings
                                    ? activeTabStyles
                                    : "text-gray-400 hover:bg-white/20 hover:text-blue-400 p-3 rounded-xl transition-all duration-200"
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
