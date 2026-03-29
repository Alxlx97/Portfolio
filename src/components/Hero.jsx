import {useEffect, useRef} from "react";

export default function Hero() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current
        if(!el) return;
        const timer = setTimeout(() => el.classList.add('visible'), 100);
        return () => clearTimeout(timer);
    }, [])

    const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({behavior: 'smooth'});

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-end px-12 pb-20 overflow-hidden"
        >

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_40%,rgba(255,255,255,0.015)_0%,transparent_70%)]" />

            <div
                className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(#2a2a2a 1px, transparent 1px), linear-gradient(90deg, #2a2a2a 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />


            <div ref={ref} className="fade-up relative z-10">

                <p className="flex items-center gap-4 font-mono-custom text-[0.7rem] tracking-[.2em] uppercase text-[#6e6e6e] mb-6">
                    <span className="inline-block w-8 h-px bg-[#3a3a3a]" />
                    Available for work
                </p>


                <h1 className="font-serif text-[clamp(3.5rem,9vw,8rem)] leading-none tracking-tight mb-4">
                    Alexandre<br />
                    <em className="text-[#6e6e6e]">Lemieux</em>
                </h1>


                <p className="text-[#6e6e6e] font-light text-[clamp(.95rem,1.5vw,1.15rem)] leading-relaxed max-w-md mb-12">
                    Full-stack developer with a passion for clean interfaces
                    and solid back-end architecture. Based anywhere, building everywhere.
                </p>


                <div className="flex items-center gap-8">
                    <button
                        onClick={() => scrollTo('#projects')}
                        className="inline-flex items-center gap-2 px-7 py-3 border border-[#e8e6e0] text-[#e8e6e0] font-mono-custom text-[0.7rem] tracking-[.12em] uppercase hover:bg-[#e8e6e0] hover:text-[#0a0a0a] transition-all duration-300"
                    >
                        View work <span>→</span>
                    </button>
                    <button
                        onClick={() => scrollTo('#contact')}
                        className="inline-flex items-center gap-2 font-mono-custom text-[0.7rem] tracking-[.12em] uppercase text-[#6e6e6e] hover:text-[#e8e6e0] transition-colors duration-300"
                    >
                        Get in touch
                    </button>
                </div>
            </div>


            <div className="absolute bottom-10 right-12 flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-gradient-to-b from-[#3a3a3a] to-transparent animate-pulse" />
                <span
                    className="font-mono-custom text-[0.6rem] tracking-[.15em] uppercase text-[#3a3a3a]"
                    style={{ writingMode: 'vertical-rl' }}
                >
          Scroll
        </span>
            </div>
        </section>
    )
}