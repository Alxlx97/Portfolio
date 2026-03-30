import useFadeIn from "../hooks/useFadeIn.jsx";

const skills = {
    'Front-end': [{label: 'HTML5'}, {label: 'CSS3'}, {label: 'Sass'}, {label: 'JavaScript'}, {label: 'Bootstrap'}, {label: 'Tailwind CSS'}, {label: 'Vue.js'}, {
        label: 'React',
    },],
    'Back-end': [{label: 'Node.js'}, {label: 'PHP'}, {label: 'Laravel'}, {label: 'Python'}, {label: 'Django'}, {label: 'C#'}, {label: '.NET'},],
    'Tools & Concepts': [{label: 'JSON'}, {label: 'AJAX'}, {label: 'DOM'}, {label: 'REST APIs'}, {label: 'Git'},],
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
                            working at the intersection of design and engineering, with attention to detail from clean
                            interfaces to well-structured APIs.
                        </p>
                        <p>
                            My background spans both{' '}
                            <strong className="text-[#e8e6e0] font-medium">front-end and back-end</strong>{' '}
                            development, from building responsive UIs to working with databases and RESTful services.
                        </p>
                        <p>
                            I'm continuously expanding my stack, currently focusing on <strong
                            className="text-[#e8e6e0] font-medium"> React </strong> to complement my <strong
                            className="text-[#e8e6e0] font-medium">Vue.js </strong>
                            experience and strengthen my skills
                        </p>

                        <p className="text-[#6e6e6e] font-light text-[clamp(.55rem,1vw,1rem)] leading-relaxed max-w-md mb-12">
                            This portfolio was built using <strong
                            className="text-[#e8e6e0] font-medium"> React </strong>, <strong
                            className="text-[#e8e6e0] font-medium"> Vite </strong>, and <strong
                            className="text-[#e8e6e0] font-medium"> Tailwind CSS </strong>
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

