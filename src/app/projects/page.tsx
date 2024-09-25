"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Project from "@/lib/interfaces/Project.interface";
import Container from "@/components/Container";
import getLastModified from "@/lib/projects/getLastModified";
import { Bars } from "react-loader-spinner";

export default function ProjectsPage() {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		// Get the dashboard URL
		fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/content/projects/all`
		)
			.then(async (res) => {
				const data = await res.json();
				Promise.all(data.map(getLastModified)).then(() => {
					setProjects(
						data.sort(
							(a: Project, b: Project) =>
								new Date(b.createdAt).getTime() -
								new Date(a.createdAt).getTime()
						)
					);
				});
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="my-5">
			<Container>
				<h1 className="text-4xl font-bold">My Projects</h1>
				{projects.length == 0 && (
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
				)}

				{projects.length > 0 && (
					<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
						{projects.map((project) => (
							<ProjectCard
								key={project.name}
								project={project}
							/>
						))}
					</div>
				)}
			</Container>
		</div>
	);
}
