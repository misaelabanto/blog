export type Education = {
	id: string;
	name: string;
	type: string;
	items: EducationItem[];
	columns: number;
	visible: boolean;
};

type EducationItem = {
	id: string;
	url: string;
	area: string;
	date: EducationDate;
	score: string;
	degree: string;
	courses: string[];
	summary: string;
	institution: string;
};

type EducationDate = {
	end: string;
	start: string;
};
