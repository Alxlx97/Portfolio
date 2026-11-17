import {useState, useEffect} from 'react'
import {useLanguage} from '../i18n/languageContext.js'
import {useTheme} from '../theme/themeContext.js'

const links = [
    {key: 'home', href: '#hero'},
    {key: 'about', href: '#about'},
    {key: 'projects', href: '#projects'},
    {key: 'contact', href: '#contact'},
]

function LangSwitch({className = ''}) {
    const {lang, toggleLang, t} = useLanguage()
    return (
        <button
            onClick={toggleLang}
            aria-label={t.nav.switchLang}
            title={t.nav.switchLang}
            className={`font-mono-custom text-[0.7rem] tracking-[.12em] uppercase text-muted hover:text-ink transition-colors duration-300 ${className}`}
        >
            <span className={lang === 'fr' ? 'text-ink' : ''}>FR</span>
            <span className="mx-1.5 text-faint">/</span>
            <span className={lang === 'en' ? 'text-ink' : ''}>EN</span>
        </button>
    )
}

function ThemeSwitch() {
    const {theme, toggleTheme} = useTheme()
    const {t} = useLanguage()
    const label = theme === 'dark' ? t.nav.lightMode : t.nav.darkMode
    return (
        <button
            onClick={toggleTheme}
            aria-label={label}
            title={label}
            className="flex items-center justify-center w-6 h-6 text-muted hover:text-ink transition-colors duration-300"
        >
            {theme === 'dark' ? (
                /* Sun */
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                </svg>
            ) : (
                /* Moon */
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
            )}
        </button>
    )
}

export default function NavBar() {
    const {t} = useLanguage()
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('#hero')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    useEffect(() => {
        const sections = links
            .map(({href}) => document.querySelector(href))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                if (visible.length > 0) {
                    setActive(`#${visible[0].target.id}`)
                }
            },
            {rootMargin: '-45% 0px -45% 0px', threshold: 0}
        )

        sections.forEach(section => observer.observe(section))
        return () => observer.disconnect()
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        document.querySelector(href).scrollIntoView({behavior: 'smooth'})
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
                scrolled || menuOpen
                    ? 'bg-canvas/90 border-b border-line backdrop-blur-sm'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className="flex items-center justify-between px-8 md:px-12 py-5">
                <a
                    href="#hero"
                    onClick={e => handleClick(e, '#hero')}
                    className="font-mono-custom text-xs tracking-[.15em] uppercase text-muted hover:text-ink transition-colors"
                >
                    Alexandre Lemieux
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-10">
                <ul className="flex gap-10 list-none">
                    {links.map(({key, href}) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={e => handleClick(e, href)}
                                className={`relative font-mono-custom text-[0.7rem] tracking-[.12em] uppercase transition-colors duration-300
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-ink after:transition-all after:duration-300
                ${active === href
                                    ? 'text-ink after:w-full'
                                    : 'text-muted hover:text-ink after:w-0 hover:after:w-full'
                                }`}
                            >
                                {t.nav[key]}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-6 pl-10 border-l border-line">
                    <LangSwitch/>
                    <ThemeSwitch/>
                </div>
                </div>

                {/* Hamburger button */}
                <button
                    className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6 group"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label={t.nav.toggleMenu}
                >
                    <span className={`block h-px bg-icon transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}/>
                    <span className={`block h-px bg-icon transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
                    <span className={`block h-px bg-icon transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
                <ul className="flex flex-col list-none px-8 pb-6 gap-5">
                    {links.map(({key, href}) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={e => handleClick(e, href)}
                                className="font-mono-custom text-[0.7rem] tracking-[.12em] uppercase text-muted hover:text-ink transition-colors duration-300"
                            >
                                {t.nav[key]}
                            </a>
                        </li>
                    ))}
                    <li className="flex items-center gap-6 pt-2 border-t border-line">
                        <LangSwitch/>
                        <ThemeSwitch/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}