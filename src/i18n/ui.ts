import type { Language } from './utils';

export const ui = {
	en: {
		'blog.pageTitle': 'Blog',
		'blog.heroLabel': 'INCOMING TRANSMISSIONS',
		'blog.heroHeading': 'WRITINGS',
		'blog.heroSubtitle': 'Thoughts on technology, development, data, and learning.',
		'blog.emptyLabel': 'NO TRANSMISSIONS YET',
		'blog.emptyText': 'New content incoming soon.',

		'blog.backToAll': '← ALL TRANSMISSIONS',
		'blog.transmissionSingular': 'transmission',
		'blog.transmissionPlural': 'transmissions',
		'blog.found': 'found',
		'blog.categoryMetaDescription': (count: number, category: string) =>
			`Browse all ${count} blog posts about ${category}. Articles, tutorials, and insights by Misael Abanto.`,
		'blog.tagMetaDescription': (count: number, tag: string) =>
			`Browse all ${count} blog posts tagged with ${tag}. Articles, tutorials, and insights by Misael Abanto.`,

		'experience.pageTitle': 'Experience',
		'experience.pageDescription':
			'My professional journey, work experience, and featured projects showcasing my skills in data architecture, fullstack development, and system design.',
		'experience.heroLabel': 'MISSION LOG',
		'experience.heroHeading': 'EXPERIENCE',
		'experience.heroSubtitle':
			'From data architecture at enterprise companies to building successful startups.',
		'experience.ctaHistoryText': 'Work History',
		'experience.ctaProjectsText': 'Projects',
		'experience.historyLabel': 'PROFESSIONAL HISTORY',
		'experience.historyHeading': 'Work Experience',
		'experience.stackLabel': 'STACK',
		'experience.achievementsLabel': 'ACHIEVEMENTS',
		'experience.present': 'Present',
		'experience.projectsLabel': 'ACTIVE MISSIONS',
		'experience.projectsHeading': 'Featured Projects',
		'experience.projectCode': 'Code',
		'experience.projectLive': 'Live Demo',
		'experience.skillsLabel': 'TECHNICAL ARSENAL',
		'experience.skillsHeading': 'Skills & Expertise',
		'experience.ctaContactLabel': 'ESTABLISH CONTACT',
		'experience.ctaContactHeading': "Let's Build Something Amazing",
		'experience.ctaContactSubtitle':
			'Available for consulting, project collaboration, or full-time opportunities.',
		'experience.ctaContactButton': 'Get In Touch',
		'experience.ctaBlogButton': 'Read Blog',

		'projects.pageTitle': 'Projects',
		'projects.pageDescription':
			"Explore my featured projects, from successful SaaS platforms to open-source tools that have made a real impact.",
		'projects.heroLabel': 'ACTIVE MISSIONS',
		'projects.heroHeading': 'PROJECTS',
		'projects.heroSubtitle':
			"Solutions I've built that solve real problems — from SaaS platforms to open-source tools.",
		'projects.ctaFeaturedText': 'Featured Projects',
		'projects.ctaAllText': 'All Projects',
		'projects.featuredLabel': 'FEATURED MISSIONS',
		'projects.featuredHeading': 'Featured Projects',
		'projects.allLabel': 'MISSION ARCHIVE',
		'projects.allHeading': 'All Projects',
		'projects.code': 'Code',
		'projects.liveDemo': 'Live Demo',
		'projects.codeShort': 'Code ↗',
		'projects.liveShort': 'Live ↗',
		'projects.ctaLabel': 'ESTABLISH CONTACT',
		'projects.ctaHeading': 'Have a Project in Mind?',
		'projects.ctaSubtitle':
			"I'm available for consulting, project collaboration, or full-time opportunities.",
		'projects.ctaContactButton': 'Get In Touch',
		'projects.ctaExperienceButton': 'View Experience',
	},
	es: {
		'blog.pageTitle': 'Blog',
		'blog.heroLabel': 'TRANSMISIONES ENTRANTES',
		'blog.heroHeading': 'ESCRITOS',
		'blog.heroSubtitle':
			'Reflexiones sobre tecnología, desarrollo, datos y aprendizaje.',
		'blog.emptyLabel': 'AÚN SIN TRANSMISIONES',
		'blog.emptyText': 'Pronto habrá contenido nuevo.',

		'blog.backToAll': '← TODAS LAS TRANSMISIONES',
		'blog.transmissionSingular': 'transmisión',
		'blog.transmissionPlural': 'transmisiones',
		'blog.found': 'encontradas',
		'blog.categoryMetaDescription': (count: number, category: string) =>
			`Explora los ${count} posts del blog sobre ${category}. Artículos, tutoriales y reflexiones de Misael Abanto.`,
		'blog.tagMetaDescription': (count: number, tag: string) =>
			`Explora los ${count} posts del blog etiquetados con ${tag}. Artículos, tutoriales y reflexiones de Misael Abanto.`,

		'experience.pageTitle': 'Experiencia',
		'experience.pageDescription':
			'Mi trayectoria profesional, experiencia laboral y proyectos destacados que muestran mis habilidades en arquitectura de datos, desarrollo fullstack y diseño de sistemas.',
		'experience.heroLabel': 'REGISTRO DE MISIONES',
		'experience.heroHeading': 'EXPERIENCIA',
		'experience.heroSubtitle':
			'Desde arquitectura de datos en empresas hasta construir startups exitosas.',
		'experience.ctaHistoryText': 'Historial Laboral',
		'experience.ctaProjectsText': 'Proyectos',
		'experience.historyLabel': 'HISTORIA PROFESIONAL',
		'experience.historyHeading': 'Experiencia Laboral',
		'experience.stackLabel': 'STACK',
		'experience.achievementsLabel': 'LOGROS',
		'experience.present': 'Presente',
		'experience.projectsLabel': 'MISIONES ACTIVAS',
		'experience.projectsHeading': 'Proyectos Destacados',
		'experience.projectCode': 'Código',
		'experience.projectLive': 'Demo en Vivo',
		'experience.skillsLabel': 'ARSENAL TÉCNICO',
		'experience.skillsHeading': 'Habilidades y Experiencia',
		'experience.ctaContactLabel': 'ESTABLECER CONTACTO',
		'experience.ctaContactHeading': 'Construyamos Algo Increíble',
		'experience.ctaContactSubtitle':
			'Disponible para consultoría, colaboración en proyectos u oportunidades de tiempo completo.',
		'experience.ctaContactButton': 'Ponte en Contacto',
		'experience.ctaBlogButton': 'Leer Blog',

		'projects.pageTitle': 'Proyectos',
		'projects.pageDescription':
			'Explora mis proyectos destacados, desde plataformas SaaS exitosas hasta herramientas de código abierto que han tenido un impacto real.',
		'projects.heroLabel': 'MISIONES ACTIVAS',
		'projects.heroHeading': 'PROYECTOS',
		'projects.heroSubtitle':
			'Soluciones que he construido para resolver problemas reales — desde plataformas SaaS hasta herramientas de código abierto.',
		'projects.ctaFeaturedText': 'Proyectos Destacados',
		'projects.ctaAllText': 'Todos los Proyectos',
		'projects.featuredLabel': 'MISIONES DESTACADAS',
		'projects.featuredHeading': 'Proyectos Destacados',
		'projects.allLabel': 'ARCHIVO DE MISIONES',
		'projects.allHeading': 'Todos los Proyectos',
		'projects.code': 'Código',
		'projects.liveDemo': 'Demo en Vivo',
		'projects.codeShort': 'Código ↗',
		'projects.liveShort': 'Demo ↗',
		'projects.ctaLabel': 'ESTABLECER CONTACTO',
		'projects.ctaHeading': '¿Tienes un Proyecto en Mente?',
		'projects.ctaSubtitle':
			'Disponible para consultoría, colaboración en proyectos u oportunidades de tiempo completo.',
		'projects.ctaContactButton': 'Ponte en Contacto',
		'projects.ctaExperienceButton': 'Ver Experiencia',
	},
} as const satisfies Record<Language, Record<string, string | ((...args: any[]) => string)>>;

export type UIKey = keyof (typeof ui)['en'];

export function getUI(lang: Language): (typeof ui)[Language] {
	return ui[lang];
}
