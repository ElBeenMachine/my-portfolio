export default interface Project {
	_id: string;
	name: string;
	description: string;
	thumbnail: string;
	body: string;
	status: string;
	link: string;
	createdAt: Date;
	lastUpdated: Date;
}
