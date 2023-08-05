export type Interests = {
	id: string;
	name: string;
	type: string;
	items: InterestItem[];
	columns: number;
	visible: boolean;
};

type InterestItem = {
	id: string;
	name: string;
	keywords: string[];
};
