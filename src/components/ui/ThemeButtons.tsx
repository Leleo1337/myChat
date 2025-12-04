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
                <SunIcon onClick={() => setCurrentTheme("light")} className="cursor-pointer hover:text-blue-500" />
            ) : (
                <MoonIcon onClick={() => setCurrentTheme("dark")} className="cursor-pointer hover:text-blue-500" />
            )}
        </>
    );
}
