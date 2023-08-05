export type Skills = {
	id: string;
	name: string;
	type: string;
	items: SkillItem[];
	columns: number;
	visible: boolean;
};

type SkillItem = {
	id: string;
	name: string;
	level: string;
	keywords: string[];
	levelNum: number;
};
