export type Volunteer = {
	id: string;
	name: string;
	type: string;
	items: VolunteerItem[];
	columns: number;
	visible: boolean;
};

type VolunteerItem = {
	id: string;
	url: string;
	date: DateRange;
	summary: string;
	position: string;
	organization: string;
};

type DateRange = {
	end: string;
	start: string;
};
