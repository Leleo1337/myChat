import { LanguagesIcon, MoonIcon, SunIcon } from "lucide-react";
import myChatLightThemeLogo from "../../assets/myChat_lightTheme_LOGO.png";
import myChatDarkThemeLogo from "../../assets/myChat_darkTheme_LOGO.png";
import { useEffect, useState } from "react";
import type { ThemeMode } from "../../types/globals/ThemeMode";
import { getTheme, setTheme } from "../../utils/toggleTheme";

export default function LoginPage() {
    const [currentTheme, setCurrentTheme] = useState<ThemeMode>(getTheme());

    useEffect(() => {
        const initialTheme = getTheme() || "light";
        setCurrentTheme(initialTheme);
    }, []);

    useEffect(() => {
        if (currentTheme) setTheme(currentTheme);
    }, [currentTheme]);

    return (
        <>
            <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
                <div className="container px-4 lg:px-36 lg:w-1/2">
                    <div className="flex items-center justify-between py-4">
                        <h1 className="text-2xl font-bold md:hidden">myChat</h1>
                        <img src={currentTheme == "light" ? myChatLightThemeLogo : myChatDarkThemeLogo} alt="myChat logo" className="hidden md:block md:h-32 md:w-32" />
                        <div className="flex gap-4">
                            {currentTheme == "dark" ? (
                                <SunIcon
                                    onClick={() => setCurrentTheme("light")}
                                    className="cursor-pointer hover:text-blue-500"
                                />
                            ) : (
                                <MoonIcon
                                    onClick={() => setCurrentTheme("dark")}
                                    className="cursor-pointer hover:text-blue-500"
                                />
                            )}
                            <LanguagesIcon className="cursor-pointer hover:text-blue-500" />
                        </div>
                    </div>
                    <div className="py-32">
                        <div className="pb-12">
                            <h1 className="pb-4 text-5xl font-semibold">Welcome to myChat!</h1>
                            <h2 className="text-5xl font-semibold">Sign in into your account</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="p-2 border border-gray-300 rounded-md bg-slate-100"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="p-2 border border-gray-300 rounded-md bg-slate-100"
                                />
                            </div>
                            <button className="p-4 font-semibold text-white bg-blue-500 rounded-2xl">Sign In</button>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 bg-linear-to-br dark:from-slate-900 from-slate-50 via-blue-500/25 to-blue-500/80"></div>
            </div>
        </>
    );
}
