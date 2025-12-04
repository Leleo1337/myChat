import { Link } from "react-router";
import type { LangData } from "../../types/globals/LangData";
import { AtSignIcon, LockIcon, MailIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import type { InfoActiveTypes } from "../../types/ui/InfoLabelTypes";
import InfoLabel from "../ui/InfoLabel";
import InputIcon from "../ui/InputIcon";

export default function RegisterForm({ languageData }: { languageData: LangData }) {
    const [infoActive, setInfoActive] = useState<InfoActiveTypes>({
        displayNameInfoActive: false,
        usernameInfoActive: false,
    });

    return (
        <>
            <div className="pb-10 md:pb-16">
                <h1 className="pb-2 text-4xl font-extrabold text-gray-900 xl:text-5xl dark:text-gray-50">
                    {languageData.auth?.registerPage.welcomeTitle}
                </h1>
                <h2 className="text-xl font-medium text-gray-600 xl:text-2xl dark:text-gray-400">
                    {languageData.auth?.registerPage.registerMessage}
                </h2>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full gap-4">
                <div className="relative flex flex-col gap-1">
                    <InfoLabel
                        activeKey="displayNameInfoActive"
                        htmlFor="dname"
                        infoActive={infoActive}
                        labelText={languageData.auth?.registerPage.displayNameLabel}
                        toolTipText={languageData.auth?.registerPage.usernameToolTip}
                        setInfoActive={setInfoActive}
                    />
                    <InputIcon
                        Icon={UserIcon}
                        type="text"
                        id="dname"
                        name="dname"
                        className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="relative flex flex-col gap-1">
                    <InfoLabel
                        labelText={languageData.auth?.registerPage.usernameLabel}
                        htmlFor="username"
                        toolTipText={languageData.auth?.registerPage.displayNameToolTip}
                        activeKey="usernameInfoActive"
                        infoActive={infoActive}
                        setInfoActive={setInfoActive}
                    />
                    <InputIcon
                        Icon={AtSignIcon}
                        type="text"
                        id="username"
                        name="username"
                        className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="relative flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm text-gray-800 dark:text-gray-200">
                        {languageData.auth?.registerPage.emailLabel}
                    </label>
                    <InputIcon
                        Icon={MailIcon}
                        type="text"
                        id="email"
                        name="username"
                        className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="relative flex flex-col gap-1">
                    <label htmlFor="password" className="text-sm text-gray-800 dark:text-gray-200">
                        {languageData.auth?.registerPage.passwordLabel}
                    </label>
                    <InputIcon
                        Icon={LockIcon}
                        type="password"
                        id="password"
                        name="password"
                        className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="relative flex flex-col gap-1">
                    <label htmlFor="confirm" className="text-sm text-gray-800 dark:text-gray-200">
                        {languageData.auth?.registerPage.confirmPasswordLabel}
                    </label>
                    <InputIcon
                        Icon={LockIcon}
                        type="password"
                        id="confirm"
                        name="confirm"
                        className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button className="p-4 font-semibold text-white bg-blue-500 cursor-pointer rounded-2xl hover:bg-blue-600">
                    {languageData.auth?.registerPage.registerButton}
                </button>

                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    {languageData.auth?.registerPage.hasAccount}
                    <Link to={"/login"} className="ml-1 font-semibold text-blue-600 hover:text-blue-500">
                        {languageData.auth?.registerPage.hasAccountLink}
                    </Link>
                </p>
            </form>
        </>
    );
}
