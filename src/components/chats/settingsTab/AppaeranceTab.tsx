import { ChevronLeft, Palette } from "lucide-react";
import { getTheme, setTheme } from "../../../utils/toggleTheme";
import { useEffect, useState } from "react";

export default function AppearanceTab({ setActiveSection }: any) {
    const [currentTheme, setCurrentTheme] = useState(getTheme());
    useEffect(() => {
        const initialTheme = getTheme() || "light";
        setCurrentTheme(initialTheme);
    }, []);

    function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
        const isChecked = e.target.checked;
        const newTheme = isChecked ? "dark" : "light";

        setTheme(newTheme);
        setCurrentTheme(newTheme);

        console.log("disabled: ", currentTheme);
    }
    return (
        <>
            <div>
                <div className="pb-8">
                    <div className="relative cursor-pointer" onClick={() => setActiveSection("options")}>
                        <ChevronLeft className="absolute right-0" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Palette />
                        <span className="font-semibold">Appearance</span>
                    </div>
                </div>
                <div>
                    <label>
                        <input type="checkbox" onChange={handleThemeChange} checked={getTheme() == "dark"} />
                        Enable dark mode
                    </label>
                </div>
            </div>
        </>
    );
}
