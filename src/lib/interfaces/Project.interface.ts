export default interface Project {
	_id: string;
	name: string;
	description: string;
	thumbnail: string;
	skills: string[];
	body: string;
	status: string;
	gitHub: string;
	link: string;
	createdAt: Date;
}
