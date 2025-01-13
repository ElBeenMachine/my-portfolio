import Project from "@/lib/interfaces/Project.interface";
import moment from "moment";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";

interface ProjectInfoSideBarProps {
	project: Project;
}

/**
 * The project info sidebar
 *
 * @param {ProjectInfoSideBarProps} props The project info sidebar props
 * @returns {JSX.Element} The project info sidebar
 */
export default function ProjectInfoSideBar({ project }: ProjectInfoSideBarProps) {
	return (
		<div className="w-full md:w-max">
			<h1 className="text-4xl font-bold">{project?.name}</h1>
			<p className="text-accent text-light text-xs mt-2">
				Last updated: {moment(project?.createdAt).format("DD/MM/YY")} (
				{moment(project?.createdAt).fromNow()})
			</p>
			<p className="text-gray-400 text-sm mt-5 md:max-w-80">{project?.description}</p>
			<div className="mt-5">
				{project?.link && (
					<Link
						href={project?.link}
						target="_blank"
						className="mt-2 block hover:text-gray-400 transition-all truncate"
					>
						<CiGlobe size={20} className="inline-block mr-2" />{" "}
						{project?.link.replace("https://", "").replace("http://", "").split("/")[0]}
					</Link>
				)}
			</div>
		</div>
	);
}
