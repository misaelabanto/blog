export type Basics = {
	name: string;
	email: string;
	phone: string;
	photo: Photo;
	summary: string;
	website: string;
	headline: string;
	location: Location;
	profiles: Profile[];
	birthdate: string;
};

type Photo = {
	url: string;
	filters: Filters;
	visible: boolean;
};

type Filters = {
	size: number;
	shape: string;
	border: boolean;
	grayscale: boolean;
};

type ProfileLocation = {
	city: string;
	region: string;
	address: string;
	country: string;
	postalCode: string;
};

type Profile = {
	id: string;
	url: string;
	network: string;
	username: string;
};
