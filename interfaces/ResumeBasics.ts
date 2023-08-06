export type Basics = {
	name: string;
	email: string;
	phone: string;
	photo: Photo;
	summary: string;
	website: string;
	headline: string;
	location: ProfileLocation;
	profiles: Profile[];
	birthdate: string;
};

export type Photo = {
	url: string;
	filters: Filters;
	visible: boolean;
};

export type Filters = {
	size: number;
	shape: string;
	border: boolean;
	grayscale: boolean;
};

export type ProfileLocation = {
	city: string;
	region: string;
	address: string;
	country: string;
	postalCode: string;
};

export type Profile = {
	id: string;
	url: string;
	network: string;
	username: string;
};
