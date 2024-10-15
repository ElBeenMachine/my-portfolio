import Project from "@/lib/interfaces/Project.interface";
import getLastModified from "@/lib/projects/getLastModified";
import getGithubUsernameAndRepo from "@/lib/projects/parseGitHubURL";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

interface ProjectInfoSideBarProps {
	project: Project;
}

/**
 * The project info sidebar
 *
 * @param {ProjectInfoSideBarProps} props The project info sidebar props
 * @returns {JSX.Element} The project info sidebar
 */
export default function ProjectInfoSideBar({
	project,
}: ProjectInfoSideBarProps) {
	const [updatedProject, setUpdatedProject] = useState<Project | null>(null);

	useEffect(() => {
		getLastModified(project).then((project) => setUpdatedProject(project));
	}, []);

	return (
		<div className="w-full md:w-max">
			<h1 className="text-4xl font-bold">{updatedProject?.name}</h1>
			<p className="text-accent text-light text-xs mt-2">
				Last updated:{" "}
				{moment(updatedProject?.createdAt).format("DD/MM/YY")} (
				{moment(updatedProject?.createdAt).fromNow()})
			</p>
			<p className="text-gray-400 text-sm mt-5 md:max-w-80">
				{updatedProject?.description}
			</p>
			<div className="mt-5">
				{updatedProject?.gitHub && (
					<Link
						href={updatedProject?.gitHub}
						target="_blank"
						className="mt-2 block hover:text-gray-400 transition-all truncate">
						<FaGithub
							size={20}
							className="inline-block mr-2"
						/>
						{getGithubUsernameAndRepo(updatedProject?.gitHub)}
					</Link>
				)}
				{updatedProject?.link && (
					<Link
						href={updatedProject?.link}
						target="_blank"
						className="mt-2 block hover:text-gray-400 transition-all truncate">
						<CiGlobe
							size={20}
							className="inline-block mr-2"
						/>{" "}
						{
							updatedProject?.link
								.replace("https://", "")
								.replace("http://", "")
								.split("/")[0]
						}
					</Link>
				)}
			</div>
		</div>
	);
}
