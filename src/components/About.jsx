import useFadeIn from "../hooks/UseFadeIn";

const skills = {
    'Front-end': [{label: 'HTML5'}, {label: 'CSS3'}, {label: 'Sass'}, {label: 'JavaScript'}, {label: 'Bootstrap'}, {label: 'Tailwind CSS'}, {label: 'Vue.js'}, {
        label: 'React',
        learning: true
    },],
    'Back-end': [{label: 'Node.js'}, {label: 'PHP'}, {label: 'Laravel'}, {label: 'Python'}, {label: 'Django'}, {label: 'C#'}, {label: '.NET'},],
    'Tools & Concepts': [{label: 'JSON'}, {label: 'AJAX'}, {label: 'DOM'}, {label: 'REST APIs'}, {label: 'Git'},],
}

function SkillTags({label, learning = false}) {
    return (<span className={`font-mono-custom text-[0.65rem] tracking-[.05em] px-3 py-1.5 border transition-all duration-300 cursor-default
        ${learning ? 'border-dashed border-[#3a3a3a] text-[#3a3a3a] hover:border-[#e8e6e0] hover:text-[#e8e6e0]' : 'border-[#2a2a2a] text-[#6e6e6e] hover:border-[#e8e6e0] hover:text-[#e8e6e0]'}`}> {label}{learning && ' ✦'} </span>)
}

export default function About() {
    const labelRef = useFadeIn();
    const textRef = useFadeIn();
    const skillRef = useFadeIn();

    return (
        <section id="about" className="px-12 py-28 border-t border-[#2a2a2a] bg-[#0a0a0a]">

            <p ref={labelRef}
               className="fade-up font-mono-custom text-[0.65rem] tracking-[.02em] uppercase text-[#3a3a3a] mb-12 flex items-center gap-3">
                <span>01 -</span> About &amp; Skills
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-start">

                <div ref={textRef} className="fade-up">

                    <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-light mb-8">
                        Building things <br/> that <em className="text-[#6e6e6e]">matter.</em>
                    </h2>

                    <div className="space-y-5 text-[#6e6e6e] text-[1.05rem] leading-relaxed font-light">
                        <p>
                            I'm a{' '}
                            <strong className="text-[#e8e6e0] font-medium">full-stack developer</strong>{' '}
                            who thrives at the intersection of design and engineering. I care
                            deeply about the details — from pixel-perfect interfaces to
                            well-structured APIs.
                        </p>
                        <p>
                            My background spans both{' '}
                            <strong className="text-[#e8e6e0] font-medium">front-end and back-end</strong>{' '}
                            development, with experience in everything from building responsive
                            UIs to designing database architectures and RESTful services.
                        </p>
                        <p>
                            I'm always expanding my stack. Currently diving deeper into{' '}
                            <strong className="text-[#e8e6e0] font-medium">React</strong> to
                            complement my Vue.js experience and broaden my front-end expertise.
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

                    <p className="font-mono-custom text-[0.62rem] tracking-[0.8em] text-[#3a3a3a] pt-2">
                        ✦ currently learning
                    </p>
                </div>

            </div>
        </section>
    )
}

