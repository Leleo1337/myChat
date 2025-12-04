import { MoonIcon, SunIcon } from "lucide-react";
import type { ThemeMode } from "../../types/globals/ThemeMode";
import type { SetStateAction } from "react";

export default function ThemeButtons({
    currentTheme,
    setCurrentTheme,
}: {
    currentTheme: ThemeMode;
    setCurrentTheme: React.Dispatch<SetStateAction<ThemeMode>>;
}) {
    return (
        <>
            {currentTheme == "dark" ? (
                <SunIcon
                    onClick={() => setCurrentTheme("light")}
                    className="text-gray-600 cursor-pointer dark:text-slate-100 hover:text-blue-500"
                />
            ) : (
                <MoonIcon
                    onClick={() => setCurrentTheme("dark")}
                    className="text-gray-600 cursor-pointer dark:text-slate-100 hover:text-blue-500"
                />
            )}
        </>
    );
}
