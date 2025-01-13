"use client";

import Project from "@/lib/interfaces/Project.interface";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import ProjectCard from "./ProjectCard";

export default function ProjectsContainer() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Get the dashboard URL
		fetch(`/api/projects`)
			.then(async (res) => {
				const data = await res.json();
				const filteredData = data.filter((x: Project) => {
					return x.status == "live";
				});

				const sortedData = filteredData.sort((a: Project, b: Project) => {
					return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
				});

				console.log(sortedData);

				setProjects(sortedData);
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, []);

	if (loading)
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

	if (!loading && projects.length > 0)
		return (
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
				{projects.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
			</div>
		);

	return (
		<div className="w-full flex justify-center items-center p-40 h-full">
			<h1 className="text-3xl text-white">No projects found</h1>
		</div>
	);
}
