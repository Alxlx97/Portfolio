/* eslint-disable react-refresh/only-export-components */
// All user-facing text, per language. French is the default/main language.

const strong = (text) => <strong className="text-ink font-medium">{text}</strong>;

const translations = {
    fr: {
        meta: {title: 'Alexandre Lemieux - Portfolio'},
        nav: {
            home: 'Accueil',
            about: 'À propos',
            projects: 'Projets',
            contact: 'Contact',
            toggleMenu: 'Ouvrir le menu',
            switchLang: 'Switch to English',
            lightMode: 'Passer au mode clair',
            darkMode: 'Passer au mode sombre',
        },
        hero: {
            available: 'Disponible pour travailler',
            tagline: 'Développeur d\'applications qui crée des applications modernes et soignées.',
            seeProjects: 'Voir mes projets',
            contactMe: 'Me contacter',
            scroll: 'Défiler',
        },
        about: {
            label: 'À propos',
            title: <>Créer des choses <br/> qui ont du <em className="text-subtle">sens.</em></>,
            paragraphs: [
                <>Je suis un {strong('développeur d\'applications ')} qui travaille à l'intersection du design et de
                    l'ingénierie, avec une attention particulière aux détails, des interfaces soignées aux APIs bien
                    structurées.</>,
                <>Mon parcours couvre le développement {strong('front-end et back-end')}, de la création d'interfaces
                    responsives au travail avec des bases de données et des services RESTful.</>,
                <>Je me concentre également sur le développement {strong("d'applications WPF")} avec des interfaces
                    simples et faciles à utiliser pour les utilisateurs.</>,
            ],
            categories: {
                frontend: 'Front-end',
                backend: 'Back-end',
                tools: 'Outils & Concepts',
            },
        },
        projects: {
            label: 'Projets',
            title: <>Projets<br/><em className="text-muted">récents.</em></>,
            viewOnGithub: 'Voir sur GitHub',
            items: {
                fridgeBuddy: {
                    type: 'Application WPF',
                    desc: "FridgeBuddy est un gestionnaire d'inventaire de bureau qui aide les utilisateurs à gérer leurs boissons dans un réfrigérateur virtuel, " +
                        'incluant les quantités, les tailles de portion et des mises à jour rapides des stocks.',
                },
                mesocycle: {
                    type: 'Application Web',
                    desc: "Application web pour la gestion de programmes d'entraînement et d'exercices, incluant des opérations CRUD complètes et une intégration backend.",
                },
                focusSphere: {
                    type: 'Tableau de bord',
                    desc: "Application web de productivité collaborative dotée d'une interface à panneau latéral pour la gestion d'outils et de contenu.",
                },
            },
        },
        contact: {
            label: 'Contact',
            title: <>Travaillons <br/> <em className="text-muted">ensemble.</em></>,
            intro: 'Vous avez un projet en tête ou cherchez à recruter un développeur ?',
            email: 'Courriel',
        },
        footer: {
            rights: 'Tous droits réservés.',
        },
    },

    en: {
        meta: {title: 'Alexandre Lemieux - Portfolio'},
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
            toggleMenu: 'Toggle menu',
            switchLang: 'Passer en français',
            lightMode: 'Switch to light mode',
            darkMode: 'Switch to dark mode',
        },
        hero: {
            available: 'Available for work',
            tagline: 'Software developer building modern, polished applications.',
            seeProjects: 'View my projects',
            contactMe: 'Contact me',
            scroll: 'Scroll',
        },
        about: {
            label: 'About',
            title: <>Building things <br/> that <em className="text-subtle">matter.</em></>,
            paragraphs: [
                <>I'm a {strong('software developer')} working at the intersection of design and engineering,
                    with a strong attention to detail, from polished interfaces to well-structured APIs.</>,
                <>My experience covers both {strong('front-end and back-end')} development, from building
                    responsive interfaces to working with databases and RESTful services.</>,
                <>I also focus on developing {strong('WPF applications')} with simple, user-friendly
                    interfaces.</>,
            ],
            categories: {
                frontend: 'Front-end',
                backend: 'Back-end',
                tools: 'Tools & Concepts',
            },
        },
        projects: {
            label: 'Projects',
            title: <>Recent<br/><em className="text-muted">projects.</em></>,
            viewOnGithub: 'View on GitHub',
            items: {
                fridgeBuddy: {
                    type: 'WPF Application',
                    desc: 'FridgeBuddy is a desktop inventory manager that helps users manage their drinks in a virtual fridge, ' +
                        'including quantities, serving sizes and quick stock updates.',
                },
                mesocycle: {
                    type: 'Web Application',
                    desc: 'Web application for managing training programs and exercises, featuring full CRUD operations and backend integration.',
                },
                focusSphere: {
                    type: 'Dashboard',
                    desc: 'Collaborative productivity web application with a side-panel interface for managing tools and content.',
                },
            },
        },
        contact: {
            label: 'Contact',
            title: <>Let's work <br/> <em className="text-muted">together.</em></>,
            intro: 'Have a project in mind or looking to hire a developer?',
            email: 'Email',
        },
        footer: {
            rights: 'All rights reserved.',
        },
    },
};

export default translations;
