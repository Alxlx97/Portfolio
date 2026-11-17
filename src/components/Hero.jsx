import {useEffect, useRef} from "react";
import {useLanguage} from "../i18n/languageContext.js";

export default function Hero() {
    const ref = useRef(null);
    const {t} = useLanguage();

    useEffect(() => {
        const el = ref.current
        if (!el) return;
        const timer = setTimeout(() => el.classList.add('visible'), 100);
        return () => clearTimeout(timer);
    }, [])

    const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({behavior: 'smooth'});

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-end px-12 pb-20 overflow-hidden"
        >

            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_40%,rgba(255,255,255,0.015)_0%,transparent_70%)]"/>

            <div
                className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgb(var(--c-line)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--c-line)) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />


            <div ref={ref} className="fade-up relative z-10">

                <p className="flex items-center gap-4 font-mono-custom text-[0.7rem] tracking-[.2em] uppercase text-muted mb-6">
                    <span className="inline-block w-8 h-px bg-faint"/>
                    {t.hero.available}
                </p>


                <h1 className="font-serif text-[clamp(3.5rem,9vw,8rem)] leading-none tracking-tight mb-4">
                    Alexandre<br/>
                    <em className="text-muted">Lemieux</em>
                </h1>


                <p className="text-muted font-light text-[clamp(.95rem,1.5vw,1.15rem)] leading-relaxed max-w-md mb-12">
                    {t.hero.tagline}
                </p>


                <div className="flex items-center gap-8">
                    <button
                        onClick={() => scrollTo('#projects')}
                        className="inline-flex items-center gap-2 px-7 py-3 border border-ink text-ink font-mono-custom text-[0.7rem] tracking-[.12em] uppercase hover:bg-ink hover:text-canvas transition-all duration-300"
                    >
                        {t.hero.seeProjects}
                    </button>
                    <button
                        onClick={() => scrollTo('#contact')}
                        className="inline-flex items-center gap-2 font-mono-custom text-[0.7rem] tracking-[.12em] uppercase text-muted hover:text-ink transition-colors duration-300"
                    >
                        {t.hero.contactMe}
                    </button>
                </div>
            </div>


            <div className="absolute bottom-10 right-12 flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-gradient-to-b from-faint to-transparent animate-pulse"/>
                <span
                    className="font-mono-custom text-[0.6rem] tracking-[.15em] uppercase text-faint"
                    style={{writingMode: 'vertical-rl'}}
                >
          {t.hero.scroll}
        </span>
            </div>
        </section>
    )
}