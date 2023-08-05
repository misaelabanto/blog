export type Projects = {
	id: string;
	name: string;
	type: string;
	items: ProjectItem[];
	columns: number;
	visible: boolean;
};

type ProjectItem = {
	id: string;
	url: string;
	date: ProjectDate;
	name: string;
	summary: string;
	keywords: string[];
	description: string;
};

type ProjectDate = {
	end: string;
	start: string;
};
