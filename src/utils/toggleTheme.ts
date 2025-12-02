import type { ThemeMode } from "../types/globals/ThemeMode";

export function getTheme(): ThemeMode {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || storedTheme == "light") {
        return storedTheme;
    }
    return "light";
}

export function setTheme(theme: string) {
    const html = document.documentElement;

    removeThemes();
    html.classList.add(theme);
    localStorage.setItem("theme", theme);
}

export function removeThemes() {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
}
