import type { Language } from '@/i18n/utils';

export function formatDate(dateString: string, lang: Language = 'en'): string {
	const date = new Date(dateString);
	const locale = lang === 'es' ? 'es-ES' : 'en-US';
	return date.toLocaleDateString(locale, { year: 'numeric', month: 'short' });
}

type StatusLabel = { text: string; color: string };

const statusLabels: Record<Language, Record<string, string>> = {
	en: {
		completed: 'COMPLETE',
		'in-progress': 'ACTIVE',
		archived: 'ARCHIVED',
	},
	es: {
		completed: 'COMPLETO',
		'in-progress': 'ACTIVO',
		archived: 'ARCHIVADO',
	},
};

const statusColors: Record<string, string> = {
	completed: 'var(--retro-amber)',
	'in-progress': 'var(--retro-cyan)',
	archived: 'oklch(55% 0.02 260)',
};

export function getStatusLabel(status: string, lang: Language = 'en'): StatusLabel {
	const text = statusLabels[lang][status] ?? status.toUpperCase();
	const color = statusColors[status] ?? 'oklch(55% 0.02 260)';
	return { text, color };
}

const typeLabels: Record<Language, Record<string, string>> = {
	en: {
		work: 'FULL-TIME',
		freelance: 'FREELANCE',
		startup: 'STARTUP',
	},
	es: {
		work: 'TIEMPO COMPLETO',
		freelance: 'FREELANCE',
		startup: 'STARTUP',
	},
};

export function getTypeLabel(type: string, lang: Language = 'en'): string {
	return typeLabels[lang][type] ?? type.toUpperCase();
}

export function getSkillLevelColor(level: string): string {
	switch (level) {
		case 'expert':
			return 'var(--retro-amber)';
		case 'advanced':
			return 'var(--retro-cyan)';
		case 'intermediate':
			return 'oklch(72% 0.02 260)';
		default:
			return 'oklch(55% 0.02 260)';
	}
}

const skillLevelLabels: Record<Language, Record<string, string>> = {
	en: {
		expert: 'EXPERT',
		advanced: 'ADVANCED',
		intermediate: 'INTERMEDIATE',
		beginner: 'BEGINNER',
	},
	es: {
		expert: 'EXPERTO',
		advanced: 'AVANZADO',
		intermediate: 'INTERMEDIO',
		beginner: 'PRINCIPIANTE',
	},
};

export function getSkillLevelLabel(level: string, lang: Language = 'en'): string {
	return skillLevelLabels[lang][level] ?? level.toUpperCase();
}
