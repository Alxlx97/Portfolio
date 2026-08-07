import useFadeIn from '../hooks/useFadeIn.jsx'
import fridgeBuddyImg from '../assets/images/FridgeBuddy.png'
import mesocycleImg from '../assets/images/Mesocycle.png'
import focusSphereImg from '../assets/images/FocusSphere.png'

const projects = [
    {
        id: 1,
        title: "FridgeBuddy",
        type: "Application WPF",
        desc: "FridgeBuddy est un gestionnaire d'inventaire de bureau qui aide les utilisateurs à gérer leurs boissons dans un réfrigérateur virtuel, " +
            "incluant les quantités, les tailles de portion et des mises à jour rapides des stocks.",
        stack: ["C#", ".NET", "JSON"],
        image: fridgeBuddyImg,
        href: "https://github.com/Alxlx97/FridgeBuddy",
    },
    {
        id: 2,
        title: "Mésocycle",
        type: "Application Web",
        desc: "Application web pour la gestion de programmes d'entraînement et d'exercices, incluant des opérations CRUD complètes et une intégration backend.",
        stack: ["Vue.Js", ".NET", "SQL"],
        image: mesocycleImg,
        href: '#',
    },
    {
        id: 3,
        title: "FocusSphère",
        type: "Tableau de bord",
        desc: "Application web de productivité collaborative dotée d'une interface à panneau latéral pour la gestion d'outils et de contenu.",
        stack: ["Vue.js", "Express.js", "MongoDB"],
        image: focusSphereImg,
        href: '#',
    }
]

function ProjectCard({project}) {
    const num = String(project.id).padStart(3, '0')

    return (
        <a
            href={project.href}
            target={project.href !== '#' ? '_blank' : undefined}
            rel="noreferrer"
            className="group block bg-[#111111] hover:bg-[#1c1c1c] transition-colors duration-300 text-inherit no-underline"
        >
            {/* Thumbnail */}
            <div className="w-full aspect-video bg-[#161616] overflow-hidden relative">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />
                ) : (
                    /* Placeholder shown until you add a real screenshot */
                    <div
                        className="w-full h-full flex items-center justify-center font-mono-custom text-[0.65rem] tracking-[.1em] text-[#3a3a3a]">
                        [ screenshot ]
                    </div>
                )}

                {/* Hover overlay — only for cards with a real link */}
                {project.href !=="#" &&(
                    <div
                        className="absolute inset-0 bg-[#1c1c1c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-mono-custom text-[0.65rem] tracking-[.12em] uppercase text-[#a8a59d]">
                            Voir sur GitHub
                        </span>
                    </div>
                )}
            </div>

            {/* Card body */}
            <div className="p-10">
                <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-custom text-[0.6rem] text-[#3a3a3a]">{num}</span>
                    <span className="font-mono-custom text-[0.6rem] tracking-[.1em] uppercase text-[#3a3a3a]">
            {project.type}
          </span>
                </div>

                <h3 className="font-serif text-2xl leading-tight mb-3 text-[#e8e6e0]">
                    {project.title}
                </h3>

                <p className="text-sm text-[#a8a59d] leading-relaxed mb-5 font-light">
                    {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {project.stack.map(tag => (
                        <span
                            key={tag}
                            className="font-mono-custom text-[0.6rem] px-2 py-1 bg-[#0a0a0a] border border-[#2a2a2a] text-[#3a3a3a]"
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

    return (
        <section
            id="projects"
            className="px-12 py-28 border-t border-[#2a2a2a] bg-[#111111]"
        >
            <p
                ref={labelRef}
                className="fade-up font-mono-custom text-[0.65rem] tracking-[.2em] uppercase text-[#a8a59d] mb-12 flex items-center gap-3"
            >
                 Projets
            </p>

            <h2
                ref={titleRef}
                className="fade-up font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-tight mb-12"
            >
                Projets<br/><em className="text-[#a8a59d]">récents.</em>
            </h2>

            {/* Grid — separated by 1.5px lines using gap + background trick */}
            <div
                ref={cardsRef}
                className="fade-up grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[#2a2a2a]"
            >
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </section>
    )
}