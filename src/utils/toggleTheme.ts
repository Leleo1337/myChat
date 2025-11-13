export function getTheme() {
    return localStorage.getItem("theme");
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
