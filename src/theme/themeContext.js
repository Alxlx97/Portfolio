import {createContext, useContext} from "react";

export const ThemeContext = createContext(null);

/** Returns { theme: 'dark' | 'light', setTheme, toggleTheme } */
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
    return ctx;
}
