import useFadeIn from "../hooks/useFadeIn.jsx";

const skills = {
    'Front-end': [{label: 'HTML5'}, {label: 'CSS3'}, {label: 'Sass'}, {label: 'JavaScript'}, {label: 'Bootstrap'}, {label: 'Tailwind CSS'}, {label: 'Vue.js'}, {
        label: 'React',
    },],
    'Back-end': [{label: 'Node.js'}, {label: 'PHP'}, {label: 'Laravel'}, {label: 'Python'}, {label: 'Django'}, {label: 'C#'}, {label: '.NET'},],
    'Outils & Concepts': [{label: 'JSON'}, {label: 'AJAX'}, {label: 'DOM'}, {label: 'REST APIs'}, {label: 'Git'},],
}

function SkillTags({label}) {
    return (<span className="font-mono-custom text-[0.65rem] tracking-[.05em] px-3 py-1.5 border transition-all duration-300 cursor-default
border-dashed border-[#e8e6e0] text-[#e8e6e0]"> {label} </span>)
}

export default function About() {
    const labelRef = useFadeIn();
    const textRef = useFadeIn();
    const skillRef = useFadeIn();

    return (
        <section id="about" className="px-12 py-28 border-t border-[#2a2a2a] bg-[#0a0a0a]">

            <p ref={labelRef}
               className="fade-up font-mono-custom text-[0.65rem] tracking-[.02em] uppercase text-[#a8a59d] mb-12 flex items-center gap-3">
                À propos
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-start">

                <div ref={textRef} className="fade-up">

                    <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-light mb-8">
                        Créer des choses <br/> qui ont du <em className="text-[#94918a]">sens.</em>
                    </h2>

                    <div className="space-y-5 text-[#a8a59d] text-[1.05rem] leading-relaxed font-light">
                        <p>
                            Je suis un{' '}
                            <strong className="text-[#e8e6e0] font-medium">développeur full-stack</strong>{' '}
                            qui travaille à l'intersection du design et de l'ingénierie, avec une attention particulière
                            aux détails, des interfaces soignées aux APIs bien structurées.
                        </p>
                        <p>
                            Mon parcours couvre le développement{' '}
                            <strong className="text-[#e8e6e0] font-medium">front-end et back-end</strong>{' '}
                            , de la création d'interfaces responsives au travail avec des bases de données et des services RESTful.
                        </p>
                        <p>
                            Je me concentre également sur le développement{' '}
                            <strong className="text-[#e8e6e0] font-medium">d'applications WPF</strong>{' '}
                            avec des interfaces simples et faciles à utiliser pour les utilisateurs.
                        </p>
                    </div>
                </div>

                <div ref={skillRef} className="fade-up space-y-6">
                    {Object.entries(skills).map(([category, tags]) => (<div key={category}>
                        <h4 className="font-mono-custom text-[0.65rem] tracking-[.15em] uppercase text-[#3a3a3a] mb-3">
                            {category}
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

