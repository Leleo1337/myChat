import { ChevronLeft, User } from "lucide-react";
import testProfilePicture from "../../../../assets/testProfilePicture.jpg";
import { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";

export default function ProfileTab({ setActiveSection }: any) {
    const { languageData } = useContext(LanguageContext);

    return (
        <>
            <div className="p-5 transition-colors border border-gray-300 shadow-md bg-gray-50 dark:bg-gray-900 dark:border-slate-800 rounded-2xl">
                <div className="relative flex items-center justify-center pb-8">
                    <div
                        className="absolute left-0 flex items-center justify-center p-1 transition-colors rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
                        onClick={() => setActiveSection("options")}>
                        <ChevronLeft className="text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="flex items-center gap-2">
                        <User className="text-blue-500" size={24} />
                        <span className="font-semibold text-gray-800 dark:text-gray-100">
                            {languageData.mainApp.settingsSection.profileSubTab.title}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center justify-center gap-6 mt-4">
                        <img
                            src={testProfilePicture}
                            className="object-cover w-32 h-32 border rounded-full border-blue-400/30"
                            alt="profile picture"
                        />
                        <div className="flex flex-col w-full gap-0.5">
                            <label htmlFor="iname" className="text-sm text-gray-800 dark:text-slate-50">
                                {languageData.mainApp.settingsSection.profileSubTab.nameLabel}
                            </label>
                            <input
                                type="text"
                                id="iname"
                                name="iname"
                                className="w-full py-2.5 p-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-md placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-200 dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                                value={"Pessoa legal"}
                            />
                            <div className="pt-1 pb-4 text-sm font-semibold text-blue-500">@leandrolegal123</div>
                            <p className="p-2 mt-2 text-sm text-gray-600 border border-gray-300 dark:text-slate-300 rounded-xl dark:border-slate-800">
                                {languageData.mainApp.settingsSection.profileSubTab.textBox}
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="iabout" className="text-sm text-gray-800 dark:text-slate-50">
                            {languageData.mainApp.settingsSection.profileSubTab.aboutLabel}
                        </label>
                        <textarea
                            name="iabout"
                            id="iabout"
                            className="w-full py-2.5 p-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-md placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-all duration-200 dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                            value={"blablablabla"}></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button className="p-8 py-2 text-gray-800 placeholder-gray-500 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md cursor-pointer active:bg-blue-500/20 active:outline-0 hover:text-blue-500 hover:border-blue-500 hover:ring-2 hover:ring-blue-500/30 hover:outline-none dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500">
                            {languageData.mainApp.settingsSection.profileSubTab.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
