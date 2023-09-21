export interface IProject {
	title: string,
	description: string,
	img: string,
	techs: Array<{
		color: string,
		id: string,
		name: string,
		description: string,
		logo: string
	}>,
	sourceCode: string,
	site: string,
	color: string,
}

export interface IContact {
	id: string,
	name: string,
	logo: string,
	color: string,
	link: string,
}