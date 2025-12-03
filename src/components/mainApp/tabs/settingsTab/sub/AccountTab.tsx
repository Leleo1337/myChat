import { ChevronLeft, Eye, EyeOff, Key, LockKeyhole, LogOut, Mail, User } from "lucide-react";
import { useContext, useState } from "react";
import LanguageContext from "../../../../../context/LanguageContext";
import type { SettingsSubTabProps } from "../../../../../types/mainApp/tabs/SettingsSubTabsProps";

export default function AccountTab({ setActiveSection }: SettingsSubTabProps) {
    const [passwordsInputsTypes, setPasswordsInputsTypes] = useState({
        current: "password",
        new: "password",
        confirmNew: "password",
    });
    const { languageData } = useContext(LanguageContext);

    return (
        <>
            <div className="p-5 mb-12 transition-colors border border-gray-300 shadow-md bg-gray-50 dark:bg-gray-900 dark:border-slate-800 rounded-2xl">
                <div className="relative flex items-center justify-center pb-8">
                    <div
                        className="absolute left-0 flex items-center justify-center p-1 transition-colors rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
                        onClick={() => setActiveSection("options")}>
                        <ChevronLeft className="text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="flex items-center gap-2">
                        <LockKeyhole className="text-blue-500" size={24} />
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {languageData.mainApp.settingsSection?.accountSubTab.title}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-300 dark:border-slate-800">
                        <User size={24} className="text-blue-500" />
                        <p className="text-base font-semibold tracking-wide text-gray-700 dark:text-gray-200">
                            {languageData.mainApp.settingsSection?.accountSubTab.userIdentitySection.sectionTitle}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="username" className="text-sm text-gray-800 dark:text-gray-200">
                                {languageData.mainApp.settingsSection?.accountSubTab.userIdentitySection.usernameLabel}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="w-full py-2 pl-12 pr-4 text-gray-800 placeholder-gray-500 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                                    placeholder="username"
                                    value={"leandrolegal123"}
                                />
                                <User className="absolute text-gray-500 top-3 left-4 dark:text-gray-400" size={18} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm text-gray-800 dark:text-gray-200">
                                {languageData.mainApp.settingsSection?.accountSubTab.userIdentitySection.emailLabel}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="w-full py-2 pl-12 pr-4 text-gray-800 placeholder-gray-500 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                                    placeholder={
                                        languageData.mainApp.settingsSection?.accountSubTab.userIdentitySection
                                            .emailInputPlaceholder
                                    }
                                    value={"leandrolegal@gmail.com"}
                                />
                                <Mail className="absolute text-gray-500 top-3 left-4 dark:text-gray-400" size={18} />
                            </div>
                        </div>
                        <button
                            className={`w-full py-2 text-base cursor-pointer font-bold rounded-xl transition-all duration-300 
                        bg-blue-500 hover:bg-blue-700 text-white shadow-sm 
                        shadow-blue-500/30`}>
                            {languageData.mainApp.settingsSection?.accountSubTab.userIdentitySection.saveIdentityChangesButton}
                        </button>
                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-gray-300 dark:border-slate-800">
                            <Key size={24} className="text-blue-500" />
                            <p className="text-base font-semibold tracking-wide text-gray-700 dark:text-gray-200">
                                {languageData.mainApp.settingsSection?.accountSubTab.changePasswordSection.sectionTitle}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 pb-4 border-b border-gray-300 dark:border-slate-800">
                            <div>
                                <label htmlFor="currentPassword" className="text-sm text-gray-800 dark:text-gray-200">
                                    {
                                        languageData.mainApp.settingsSection?.accountSubTab.changePasswordSection
                                            .currentPasswordLabel
                                    }
                                </label>
                                <div className="relative">
                                    <input
                                        type={passwordsInputsTypes.current}
                                        name="currentPassword"
                                        id="currentPassword"
                                        className="w-full px-12 py-2 text-gray-800 placeholder-gray-500 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                                    />
                                    <LockKeyhole
                                        className="absolute text-gray-500 top-3 left-4 dark:text-gray-400"
                                        size={18}
                                    />
                                    {passwordsInputsTypes.current == "text" ? (
                                        <EyeOff
                                            className="absolute cursor-pointer dark:text-gray-400 top-3 right-4 hover:dark:text-gray-500"
                                            size={18}
                                            onClick={() =>
                                                setPasswordsInputsTypes((prev) => ({ ...prev, current: "password" }))
                                            }
                                        />
                                    ) : (
                                        <Eye
                                            className="absolute cursor-pointer dark:text-gray-400 top-3 right-4 hover:dark:text-gray-500"
                                            size={18}
                                            onClick={() =>
                                                setPasswordsInputsTypes((prev) => ({ ...prev, current: "text" }))
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="newPassword" className="text-sm text-gray-800 dark:text-gray-200">
                                    {languageData.mainApp.settingsSection?.accountSubTab.changePasswordSection.newPasswordLabel}
                                </label>
                                <div className="relative">
                                    <input
                                        type={passwordsInputsTypes.new}
                                        name="newPassword"
                                        id="newPassword"
                                        className="w-full px-12 py-2 text-gray-800 placeholder-gray-500 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                                    />
                                    <LockKeyhole
                                        className="absolute text-gray-500 top-3 left-4 dark:text-gray-400"
                                        size={18}
                                    />
                                    {passwordsInputsTypes.new == "text" ? (
                                        <EyeOff
                                            className="absolute cursor-pointer dark:text-gray-400 top-3 right-4 hover:dark:text-gray-500"
                                            size={18}
                                            onClick={() =>
                                                setPasswordsInputsTypes((prev) => ({ ...prev, new: "password" }))
                                            }
                                        />
                                    ) : (
                                        <Eye
                                            className="absolute cursor-pointer dark:text-gray-400 top-3 right-4 hover:dark:text-gray-500"
                                            size={18}
                                            onClick={() =>
                                                setPasswordsInputsTypes((prev) => ({ ...prev, new: "text" }))
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="confirmNew" className="text-sm text-gray-800 dark:text-gray-200">
                                    {
                                        languageData.mainApp.settingsSection?.accountSubTab.changePasswordSection
                                            .confirmPasswordLabel
                                    }
                                </label>
                                <div className="relative">
                                    <input
                                        type={passwordsInputsTypes.confirmNew}
                                        name="confirmNew"
                                        id="confirmNew"
                                        className="w-full px-12 py-2 text-gray-800 placeholder-gray-500 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                                        autoComplete="off"
                                    />
                                    <LockKeyhole
                                        className="absolute text-gray-500 top-3 left-4 dark:text-gray-400"
                                        size={18}
                                    />
                                    {passwordsInputsTypes.confirmNew == "text" ? (
                                        <EyeOff
                                            className="absolute cursor-pointer dark:text-gray-400 top-3 right-4 hover:dark:text-gray-500"
                                            size={18}
                                            onClick={() =>
                                                setPasswordsInputsTypes((prev) => ({ ...prev, confirmNew: "password" }))
                                            }
                                        />
                                    ) : (
                                        <Eye
                                            className="absolute cursor-pointer dark:text-gray-400 top-3 right-4 hover:dark:text-gray-500"
                                            size={18}
                                            onClick={() =>
                                                setPasswordsInputsTypes((prev) => ({ ...prev, confirmNew: "text" }))
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                            <button
                                className={`w-full py-2 text-base cursor-pointer font-bold rounded-xl transition-all duration-300 
                        bg-green-600 hover:bg-green-700 text-white shadow-sm 
                        shadow-green-600/30`}>
                                {languageData.mainApp.settingsSection?.accountSubTab.changePasswordSection.updatePasswordButton}
                            </button>
                        </div>
                        <button className="flex items-center justify-center w-full gap-2 py-2 font-semibold text-red-500 border border-red-500 rounded-md cursor-pointer hover:bg-red-500 hover:text-white">
                            <LogOut />
                            <span>{languageData.mainApp.settingsSection?.accountSubTab.logOutButton}</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
