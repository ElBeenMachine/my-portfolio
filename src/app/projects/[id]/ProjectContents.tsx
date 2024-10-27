"use client";

import Project from "@/lib/interfaces/Project.interface";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import ProjectInfoSideBar from "./ProjectInfoSidebar";
import MarkdownPreview from "@uiw/react-markdown-preview";

export default function ProjectContents({ id }: { id: string }) {
	const [project, setProject] = useState<Project | null>(null);

	useEffect(() => {
		fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/content/projects/${id}`
		)
			.then(async (res) => {
				const data = await res.json();
				setProject(data);
			})
			.catch((err) => {
				console.error(err);
			});

		return () => {
			setProject(null);
		};
	}, []);

	if (!project)
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

	return (
		<div className={"flex flex-wrap md:flex-nowrap mb-10 gap-5"}>
			<ProjectInfoSideBar project={project} />
			<div className="w-full md:w-2/3">
				<img
					src={project.thumbnail}
					alt={project.name}
					className="opacity-80 max-h-56 w-full object-cover rounded-lg mb-4"
				/>
				{project.body && (
					<MarkdownPreview
						style={{ background: "none", color: "white" }}
						source={project.body}
					/>
				)}
			</div>
		</div>
	);
}
