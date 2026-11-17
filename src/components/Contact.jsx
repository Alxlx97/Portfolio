import useFadeIn from "../hooks/useFadeIn.jsx";
import {useLanguage} from "../i18n/languageContext.js";

    //Contact Data
    const contactLinks = [
        {id: "email", label: "courriel", value: "AlexandreLemieux.dev@outlook.com", href: "mailto:AlexandreLemieux.dev@outlook.com"},
        {label: "LinkedIn", value: "linkedin.com/in/alexandre-lemieux-0039a8307/", href: "https://www.linkedin.com/in/alexandre-lemieux-0039a8307/"},
        {label: "GitHub", value: "github.com/Alxlx97", href: "https://github.com/Alxlx97"}
    ]

    function ContactLink({ label, value, href }) {
        return(
            <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
               className="group flex items-center justify-between py-5 border-b border-line text-muted hover:text-ink
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
        const {t} = useLanguage();


    return(
        <section id="contact" className="px-12 py-28 border-t border-line bg-canvas">
            <div className="max-w-2xl">

                <p ref={labelRef} className="fade-up font-mono-custom text-[0.65rem] tracking-[.2em] uppercase text-muted mb-12 flex items-center gap-3">
                    <span>{t.contact.label}</span>
                </p>

                <h2 ref={titleRef} className="fade-up font-serif text-[clam(2em,2vw,3.5rem)] leading-tight tracking-light mb-6">
                    {t.contact.title}
                </h2>

                <p className="text-muted text-base leading-relaxed mb-10 font-light">
                    {t.contact.intro}
                </p>

                <div ref={linksRef} className="fade-up border-t border-line mb-12">
                    {contactLinks.map(link => (
                        <ContactLink key={link.label} {...link} label={link.id === "email" ? t.contact.email : link.label} />
                    ))}
                </div>
            </div>
        </section>
    )
}