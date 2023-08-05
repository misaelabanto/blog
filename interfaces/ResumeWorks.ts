export type Work = {
	id: string;
	name: string;
	type: string;
	items: WorkItem[];
	columns: number;
	visible: boolean;
};

type WorkItem = {
	id: string;
	url: string;
	date: WorkDate;
	name: string;
	summary: string;
	position: string;
};

type WorkDate = {
	end: string;
	start: string;
};
