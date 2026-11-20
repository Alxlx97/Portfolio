import useFadeIn from '../hooks/useFadeIn.jsx'
import fridgeBuddyImg from '../assets/images/FridgeBuddy.png'
import mesocycleImg from '../assets/images/Mesocycle.png'
import focusSphereImg from '../assets/images/FocusSphere.png'
import {useLanguage} from '../i18n/languageContext.js'

const projects = [
    {
        id: 1,
        key: 'fridgeBuddy',
        title: "FridgeBuddy",
        stack: ["C#", ".NET", "JSON"],
        image: fridgeBuddyImg,
        href: "https://github.com/Alxlx97/FridgeBuddy",
    },
    {
        id: 2,
        key: 'mesocycle',
        title: "Mésocycle",
        stack: ["Vue.Js", ".NET", "SQL"],
        image: mesocycleImg,
        href: '#',
    },
    {
        id: 3,
        key: 'focusSphere',
        title: "FocusSphère",
        stack: ["Vue.js", "Express.js", "MongoDB"],
        image: focusSphereImg,
        href: '#',
    }
]

function ProjectCard({project}) {
    const {t} = useLanguage()
    const {type, desc} = t.projects.items[project.key]

    return (
        <a
            href={project.href}
            target={project.href !== '#' ? '_blank' : undefined}
            rel="noreferrer"
            className="group block bg-surface hover:bg-surface-hover transition-colors duration-300 text-inherit no-underline"
        >
            {/* Thumbnail */}
            <div className="w-full aspect-video bg-surface-2 overflow-hidden relative">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />
                ) : (
                    /* Placeholder shown until you add a real screenshot */
                    <div
                        className="w-full h-full flex items-center justify-center font-mono-custom text-[0.65rem] tracking-[.1em] text-faint">
                        [ screenshot ]
                    </div>
                )}

                {/* Hover overlay — only for cards with a real link */}
                {project.href !=="#" &&(
                    <div
                        className="absolute inset-0 bg-surface-hover flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-mono-custom text-[0.65rem] tracking-[.12em] uppercase text-muted">
                            {t.projects.viewOnGithub}
                        </span>
                    </div>
                )}
            </div>

            {/* Card body */}
            <div className="p-10">
                <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-custom text-[0.6rem] tracking-[.1em] uppercase text-light">
            {type}
          </span>
                </div>

                <h3 className="font-serif text-2xl leading-tight mb-3 text-ink">
                    {project.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-5 font-light">
                    {desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {project.stack.map(tag => (
                        <span
                            key={tag}
                            className="font-mono-custom text-[0.6rem] px-2 py-1 bg-tag border border-line text-tag-ink"
                        >
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </a>
    )
}

export default function Projects() {
    const labelRef = useFadeIn()
    const titleRef = useFadeIn()
    const cardsRef = useFadeIn()
    const {t} = useLanguage()

    return (
        <section
            id="projects"
            className="px-12 py-28 border-t border-line bg-surface"
        >
            <p
                ref={labelRef}
                className="fade-up font-mono-custom text-[0.65rem] tracking-[.2em] uppercase text-muted mb-12 flex items-center gap-3"
            >
                {t.projects.label}
            </p>

            <h2
                ref={titleRef}
                className="fade-up font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight mb-12"
            >
                {t.projects.title}
            </h2>

            <div
                ref={cardsRef}
                className="fade-up grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-line"
            >
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </section>
    )
}