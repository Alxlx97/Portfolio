import useFadeIn from "../hooks/useFadeIn.jsx";
import {useLanguage} from "../i18n/languageContext.js";

const skills = {
    frontend: [{label: 'HTML5'}, {label: 'CSS3'}, {label: 'Sass'}, {label: 'JavaScript'}, {label: 'TypeScript'}, {label: 'Bootstrap'}, {label: 'Tailwind CSS'}, {label: 'Vue.js'}, {
        label: 'React',
    },],
    backend: [{label: 'Node.js'}, {label: 'PHP'}, {label: 'Laravel'}, {label: 'Python'}, {label: 'Django'}, {label: 'C#'}, {label: '.NET'},],
    tools: [{label: 'JSON'}, {label: 'AJAX'}, {label: 'DOM'}, {label: 'REST APIs'}, {label: 'Git'},],
}

function SkillTags({label}) {
    return (<span className="font-mono-custom text-[0.65rem] tracking-[.05em] px-3 py-1.5 border transition-all duration-300 cursor-default
border-dashed border-ink text-ink"> {label} </span>)
}

export default function About() {
    const labelRef = useFadeIn();
    const textRef = useFadeIn();
    const skillRef = useFadeIn();
    const {t} = useLanguage();

    return (
        <section id="about" className="px-12 py-28 border-t border-line bg-canvas">

            <p ref={labelRef}
               className="fade-up font-mono-custom text-[0.65rem] tracking-[.02em] uppercase text-muted mb-12 flex items-center gap-3">
                {t.about.label}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-start">

                <div ref={textRef} className="fade-up">

                    <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-light mb-8">
                        {t.about.title}
                    </h2>

                    <div className="space-y-5 text-muted text-[1.05rem] leading-relaxed font-light">
                        {t.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                </div>

                <div ref={skillRef} className="fade-up space-y-6">
                    {Object.entries(skills).map(([category, tags]) => (<div key={category}>
                        <h4 className="font-mono-custom text-[0.65rem] tracking-[.15em] uppercase text-muted mb-3">
                            {t.about.categories[category]}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {tags.map(tag => (<SkillTags key={tag.label} {...tag} />))}
                        </div>
                    </div>))}

                </div>

            </div>
        </section>
    )
}

