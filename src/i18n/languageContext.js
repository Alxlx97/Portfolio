import {createContext, useContext} from "react";

export const DEFAULT_LANG = 'fr';
export const SUPPORTED_LANGS = ['fr', 'en'];

export const LanguageContext = createContext(null);

/**
 * Returns { lang, setLang, toggleLang, t }
 * where `t` is the translation object for the current language.
 */
export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
    return ctx;
}
