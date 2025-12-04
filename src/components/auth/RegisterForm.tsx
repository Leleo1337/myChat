import { Link } from "react-router";
import type { LangData } from "../../types/globals/LangData";
import { AtSignIcon, InfoIcon, LockIcon, MailIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import type { InfoActiveTypes } from "../../types/ui/InfoLabelTypes";
import InfoLabel from "../ui/InfoLabel";

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
                    <InfoLabel infoActive={infoActive} languageData={languageData} setInfoActive={setInfoActive} />
                    <input
                        type="text"
                        id="dname"
                        name="dname"
                        className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <UserIcon className="absolute w-4 h-4 text-blue-500 top-10.5 left-4" />
                </div>
                <div className="relative flex flex-col gap-1">
                    <div className="flex items-center gap-2 ">
                        <label htmlFor="username" className="text-sm text-gray-800 dark:text-gray-200">
                            {languageData.auth?.registerPage.usernameLabel}
                        </label>
                        <div className="md:relative">
                            <InfoIcon
                                onMouseEnter={() => setInfoActive((prev) => ({ ...prev, usernameInfoActive: true }))}
                                onMouseLeave={() => setInfoActive((prev) => ({ ...prev, usernameInfoActive: false }))}
                                className="w-4 h-4 text-blue-500"
                            />
                            <div
                                className={`absolute left-1/2 -translate-x-1/2 md:translate-x-0  md:-top-4 md:left-4 w-full min-w-[300px] z-1 py-0.5 px-4 rounded-xl text-white bg-blue-500/80 transition ease-in duration-75 ${
                                    infoActive.usernameInfoActive ? "opacity-100 " : "opacity-0"
                                }`}>
                                <p className="text-sm">{languageData.auth?.registerPage.usernameToolTip}</p>
                            </div>
                        </div>
                    </div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        autoComplete="off"
                        className="px-4 py-2.5 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <AtSignIcon className="absolute w-4 h-4 text-blue-500 top-10 left-4" />
                </div>
                <div className="relative flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm text-gray-800 dark:text-gray-200">
                        {languageData.auth?.registerPage.emailLabel}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <MailIcon className="absolute w-4 h-4 text-blue-500 top-10.5 left-4" />
                </div>
                <div className="relative flex flex-col gap-1">
                    <label htmlFor="password" className="text-sm text-gray-800 dark:text-gray-200">
                        {languageData.auth?.registerPage.passwordLabel}
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <LockIcon className="absolute w-4 h-4 text-blue-500 top-10.5 left-4" />
                </div>
                <div className="relative flex flex-col gap-1">
                    <label htmlFor="confirm" className="text-sm text-gray-800 dark:text-gray-200">
                        {languageData.auth?.registerPage.confirmPasswordLabel}
                    </label>
                    <input
                        type="password"
                        id="confirm"
                        name="confirm"
                        className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <LockIcon className="absolute w-4 h-4 text-blue-500 top-10.5 left-4" />
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
