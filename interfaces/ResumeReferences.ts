export type References = {
	id: string;
	name: string;
	type: string;
	items: ReferenceItem[];
	columns: number;
	visible: boolean;
};

type ReferenceItem = {
	id: string;
	name: string;
	email: string;
	phone: string;
	summary: string;
	relationship: string;
};
