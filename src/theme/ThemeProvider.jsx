import {useCallback, useEffect, useMemo, useState} from "react";
import {ThemeContext} from "./themeContext.js";

const STORAGE_KEY = 'theme';

// index.html already set data-theme before paint (saved choice or system preference)
function getInitialTheme() {
    return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    // Only persist when the user explicitly toggles, so the system preference
    // keeps applying until they make a choice.
    const toggleTheme = useCallback(() => {
        const next = theme === 'dark' ? 'light' : 'dark';
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // ignore
        }
        setTheme(next);
    }, [theme]);

    const value = useMemo(() => ({theme, setTheme, toggleTheme}), [theme, toggleTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
