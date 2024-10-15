"use client";

import Project from "@/lib/interfaces/Project.interface";
import getLastModified from "@/lib/projects/getLastModified";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import ProjectCard from "./ProjectCard";

export default function ProjectsContainer() {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		// Get the dashboard URL
		fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/content/projects/all`
		)
			.then(async (res) => {
				const data = await res.json();
				const filteredData = data.filter((x: Project) => {
					return x.status == "live";
				});
				Promise.all(filteredData.map(getLastModified)).then(() => {
					setProjects(
						filteredData.sort(
							(a: Project, b: Project) =>
								new Date(b.createdAt).getTime() -
								new Date(a.createdAt).getTime()
						)
					);
				});
			})
			.catch((err) => console.error(err));
	}, []);

	if (projects.length == 0)
		return (
			<div className="w-full flex justify-center items-center p-24">
				<Bars
					height="30"
					width="30"
					color="#00FFFF"
					ariaLabel="bars-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/>
			</div>
		);

	if (projects.length > 0)
		return (
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
				{projects.map((project) => (
					<ProjectCard
						key={project.name}
						project={project}
					/>
				))}
			</div>
		);
}
