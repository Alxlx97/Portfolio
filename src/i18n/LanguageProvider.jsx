import {useCallback, useEffect, useMemo, useState} from "react";
import {DEFAULT_LANG, LanguageContext, SUPPORTED_LANGS} from "./languageContext.js";
import translations from "./translations.jsx";

const STORAGE_KEY = 'lang';

function getInitialLang() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (SUPPORTED_LANGS.includes(saved)) return saved;
    } catch {
        // localStorage unavailable (private mode, etc.) — fall back to default
    }
    return DEFAULT_LANG;
}

export default function LanguageProvider({children}) {
    const [lang, setLang] = useState(getInitialLang);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.title = translations[lang].meta.title;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            // ignore
        }
    }, [lang]);

    const toggleLang = useCallback(() => setLang(l => (l === 'fr' ? 'en' : 'fr')), []);

    const value = useMemo(
        () => ({lang, setLang, toggleLang, t: translations[lang]}),
        [lang, toggleLang]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
