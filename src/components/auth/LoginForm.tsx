import { Link } from "react-router";
import type { LangData } from "../../types/globals/LangData";
import { LockIcon, UserIcon } from "lucide-react";

export default function LoginForm({ languageData }: { languageData: LangData }) {
    return (
        <>
            <div className="pb-10 md:pb-16">
                <h1 className="pb-2 text-4xl font-extrabold text-gray-900 lg:text-5xl dark:text-gray-50">
                    {languageData.auth?.loginPage.welcomeTitle}
                </h1>
                <h2 className="text-xl font-medium text-gray-600 lg:text-2xl dark:text-gray-400">
                    {languageData.auth?.loginPage.signInMessage}
                </h2>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full gap-4">
                <div className="relative flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm text-gray-800 dark:text-gray-200">
                        {languageData.auth?.loginPage.emailLabel}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <UserIcon className="absolute w-4 h-4 text-blue-500 top-10.5 left-4" />
                </div>
                <div className="relative flex flex-col gap-1">
                    <label htmlFor="password" className="text-sm text-gray-800 dark:text-gray-200">
                        {languageData.auth?.loginPage.passwordLabel}
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <LockIcon className="absolute w-4 h-4 text-blue-500 top-10.5 left-4" />
                    <Link to={"/forgot"} className="text-sm text-blue-500">{languageData.auth?.loginPage.forgotPassword}</Link>
                </div>
                <button className="p-4 font-semibold text-white bg-blue-500 cursor-pointer rounded-2xl hover:bg-blue-600">
                    {languageData.auth?.loginPage.signInButton}
                </button>

                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    {languageData.auth?.loginPage.noAccount}
                    <Link to={"/register"} className="ml-1 font-semibold text-blue-600 hover:text-blue-500">
                        {languageData.auth?.loginPage.signUpLink}
                    </Link>
                </p>
            </form>
        </>
    );
}
