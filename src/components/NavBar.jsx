import {useState, useEffect} from 'react'

const links = [
    {label: 'Home', href: '#hero'},
    {label: 'About', href: '#about'},
    {label: 'Projects', href: '#projects'},
    {label: 'Contact', href: '#contact'},
]

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false)
    const [active] = useState('#hero')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
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
                    ? 'bg-[#0a0a0a]/90 border-b border-[#2a2a2a] backdrop-blur-sm'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className="flex items-center justify-between px-8 md:px-12 py-5">
                <a
                    href="#hero"
                    onClick={e => handleClick(e, '#hero')}
                    className="font-mono-custom text-xs tracking-[.15em] uppercase text-[#6e6e6e] hover:text-[#e8e6e0] transition-colors"
                >
                    Alexandre Lemieux
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-10 list-none">
                    {links.map(({label, href}) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={e => handleClick(e, href)}
                                className={`relative font-mono-custom text-[0.7rem] tracking-[.12em] uppercase transition-colors duration-300
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-[#e8e6e0] after:transition-all after:duration-300
                ${active === href
                                    ? 'text-[#e8e6e0] after:w-full'
                                    : 'text-[#6e6e6e] hover:text-[#e8e6e0] after:w-0 hover:after:w-full'
                                }`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger button */}
                <button
                    className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6 group"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-px bg-[#6e6e6e] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}/>
                    <span className={`block h-px bg-[#6e6e6e] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
                    <span className={`block h-px bg-[#6e6e6e] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
                <ul className="flex flex-col list-none px-8 pb-6 gap-5">
                    {links.map(({label, href}) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={e => handleClick(e, href)}
                                className="font-mono-custom text-[0.7rem] tracking-[.12em] uppercase text-[#6e6e6e] hover:text-[#e8e6e0] transition-colors duration-300"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}