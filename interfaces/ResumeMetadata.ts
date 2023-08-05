export type Metadata = {
	css: MetadataCss;
	date: MetadataDate;
	page: MetadataPage;
	theme: MetadataTheme;
	layout: string[][][];
	locale: string;
	template: string;
	typography: MetadataTypography;
};

type MetadataCss = {
	value: string;
	visible: boolean;
};

type MetadataDate = {
	format: string;
};

type MetadataPage = {
	format: string;
};

type MetadataTheme = {
	text: string;
	primary: string;
	background: string;
};

type MetadataTypography = {
	size: TypographySize;
	family: TypographyFamily;
};

type TypographySize = {
	body: number;
	heading: number;
};

type TypographyFamily = {
	body: string;
	heading: string;
};
