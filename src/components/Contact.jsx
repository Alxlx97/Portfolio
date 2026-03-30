import { useState } from "react";
import emailjs from "@emailjs/browser";
import useFadeIn from "../hooks/UseFadeIn.jsx";

    //Contact Data
    const contactLinks = [
        {label: "email", value: "AlexandreLemieux.dev@outlook.com", href: "mailto:AlexandreLemieux.dev@outlook.com"},
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
        const formRef = useFadeIn();

        const [form, setForm] = useState({ name: '', email: '', subject: '', message: ''});
        const [sent, setSent] = useState(false);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(false);

        const handleChange = (e) => setForm(prev => ({...prev, [e.target.name]: e.target.value}));

        const handleSubmit = (e) => {
            e.preventDefault();
            setLoading(true);
            setError(false);
            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            ).then(() => {
                setSent(true);
            }).catch((err) => {
                console.error("EmailJS error:", err);
                setError(true);
            }).finally(() => {
                setLoading(false);
            });
        }

        const inputClass = "w-full bg-[#111111] border border-[#2a2a2a] text-[#e8e6e0] placeholder-[#3a3a3a] px-4 py-3 text-sm font-light " +
            "outline-none focus:border-[#e8e6e0] transition-colors duration-30";

    return(
        <section id="contact" className="px-12 py-28 border-t border-[#2a2a2a] bg-[#0a0a0a]">
            <div className="max-w-2xl">

                <p ref={labelRef} className="fade-up font-mono-custom text-[0.65rem] tracking-[.2em] uppercase text-[#3a3a3a] mb-12 flex items-center gap-3">
                    <span>Contact</span>
                </p>

                <h2 ref={titleRef} className="fade-up font-serif text-[clam(2em,2vw,3.5rem)] leading-tight tracking-light mb-6">
                    Let's work <br /> <em className="text-[#6e6e6e]"></em>
                </h2>

                <p className="text-[#6e6e6e] text-base leading-relaxed mb-10 font-light">
                    Have a project in mind or looking to bring a developer on board?
                </p>

                <div ref={linksRef} className="fade-up border-t border-[#2a2a2a] mb-12">
                    {contactLinks.map(link => (
                        <ContactLink key={link.label} {...link} />
                    ))}
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="fade-up space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="flex flex-col gap-2">
                            <label className="font-mono-custom text-[0.7rem] tracking-[.12em] uppercase text-[#3a3a3a]">
                                Name
                            </label>
                            <input className={inputClass} type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-mono-custom text-[0.7rem] tracking-[.12em] uppercase text-[#3a3a3a]">
                                Email
                            </label>
                            <input className={inputClass} type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-mono-custom text-[0.7rem] tracking-[.12em] uppercase text-[#3a3a3a]">
                                Subject
                            </label>
                            <input className={inputClass} type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-mono-custom text-[0.7rem] tracking-[.12em] uppercase text-[#3a3a3a]">
                                Message
                            </label>
                            <textarea className={`${inputClass} resize-none`} name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project" required />
                        </div>

                        {sent ? (
                            <p className="font-mono-custom text-[0.7rem] tracking-[.1em] text-[#6e6e6e]">
                                Message sent — I'll get back to you soon!
                            </p>
                        ) : (
                            <>
                                <button type="submit" disabled={loading} className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#e8e6e0] text-[#e8e6e0]
                                font-mono-custom text-[0.7rem] tracking-[.12em] uppercase bg-transparent hover:bg-[#e8e6e0]
                                hover:text-[#0a0a0a] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed">
                                    {loading ? "Sending..." : "Send message"}
                                </button>
                                {error && (
                                    <p className="font-mono-custom text-[0.7rem] tracking-[.1em] text-red-500">
                                        Something went wrong — please try again.
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                </form>

            </div>
        </section>
    )
}