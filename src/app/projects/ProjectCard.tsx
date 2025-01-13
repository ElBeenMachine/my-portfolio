import moment from "moment";
import Link from "next/link";
import Project from "@/lib/interfaces/Project.interface";

import { CiGlobe } from "react-icons/ci";

/**
 * ProjectCard component
 *
 * @param project The project to display
 */
export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Link
			href={`/projects/${project._id}`}
			className="w-full flex flex-col gap-2 project-card relative lg:hover:scale-105 transition-all"
		>
			<div className="z-10 w-full h-full p-6 flex flex-col bg-background-primary/80 hover:opacity-90">
				<h2 className="text-xl font-semibold">{project.name}</h2>
				<p className="text-sm text-accent font-light">
					Last Updated {moment(project.updatedAt).fromNow()}
				</p>
				<p className="mt-3">{project.description}</p>
				<div className={"flex-grow"}></div>
				<div className="flex gap-2 mt-3">{project.link && <CiGlobe size={20} />}</div>
			</div>
			<img
				src={project.thumbnail}
				alt={project.name}
				className="absolute z-0 w-full top-0 left-0 h-full object-cover object-center"
			/>
		</Link>
	);
}
