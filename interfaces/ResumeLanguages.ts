export type Languages = {
	id: string;
	name: string;
	type: string;
	items: LanguageItem[];
	columns: number;
	visible: boolean;
};

type LanguageItem = {
	id: string;
	name: string;
	level: string;
	levelNum: number;
};
