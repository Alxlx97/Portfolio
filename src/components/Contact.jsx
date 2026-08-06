import useFadeIn from "../hooks/useFadeIn.jsx";

    //Contact Data
    const contactLinks = [
        {label: "courriel", value: "AlexandreLemieux.dev@outlook.com", href: "mailto:AlexandreLemieux.dev@outlook.com"},
        {label: "LinkedIn", value: "linkedin.com/in/alexandre-lemieux-0039a8307/", href: "https://www.linkedin.com/in/alexandre-lemieux-0039a8307/"},
        {label: "GitHub", value: "github.com/Alxlx97", href: "https://github.com/Alxlx97"}
    ]

    function ContactLink({ label, value, href }) {
        return(
            <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
               className="group flex items-center justify-between py-5 border-b border-[#2a2a2a] text-[#6e6e6e] hover:text-[#e8e6e0]
               no-underline transition-all duration-300 hover:pr-2">
                <span className="font-mono-custom text-[0.65rem] tracking-[.1em] uppercase">
                    {label}
                </span>
                <span className="font-mono-custom text-[0.7rem] flex items-center gap-2">
                    {value}
                </span>
            </a>
        )
    }
export default function Contact(){

        const labelRef = useFadeIn();
        const titleRef = useFadeIn();
        const linksRef = useFadeIn();


    return(
        <section id="contact" className="px-12 py-28 border-t border-[#2a2a2a] bg-[#0a0a0a]">
            <div className="max-w-2xl">

                <p ref={labelRef} className="fade-up font-mono-custom text-[0.65rem] tracking-[.2em] uppercase text-[#3a3a3a] mb-12 flex items-center gap-3">
                    <span>Contact</span>
                </p>

                <h2 ref={titleRef} className="fade-up font-serif text-[clam(2em,2vw,3.5rem)] leading-tight tracking-light mb-6">
                    Travaillons <br /> <em className="text-[#6e6e6e]">ensemble.</em>
                </h2>

                <p className="text-[#6e6e6e] text-base leading-relaxed mb-10 font-light">
                    Vous avez un projet en tête ou cherchez à recruter un développeur ?
                </p>

                <div ref={linksRef} className="fade-up border-t border-[#2a2a2a] mb-12">
                    {contactLinks.map(link => (
                        <ContactLink key={link.label} {...link} />
                    ))}
                </div>
            </div>
        </section>
    )
}