"use client";

import Container from "@/components/Container";
import Project from "@/lib/interfaces/Project.interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import ProjectInfoSideBar from "./ProjectInfoSidebar";
import { Bars } from "react-loader-spinner";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { notFound, useRouter } from "next/navigation";

export default function ProjectDetailPage({
	params,
}: {
	params: { id: string };
}) {
	console.log(params.id);
	const [project, setProject] = useState<Project | null>(null);
	const [body, setBody] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		fetch(
			`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/content/projects/${params.id}`
		)
			.then(async (res) => {
				const data = await res.json();
				setProject(data);

				const processor = unified()
					.use(remarkParse)
					.use(remarkRehype, { allowDangerousHtml: true })
					.use(rehypeStringify);

				setBody(String(await processor.process(data.body)));
			})
			.catch((err) => {
				console.error(err);
				router.push("/projects");
			});

		return () => {
			setProject(null);
			setBody(null);
		};
	}, []);

	return (
		<Container>
			<Link
				href={"/projects"}
				target={"_self"}
				className={
					"mt-5 mb-2 flex items-center transition-all group hover:text-accent w-max font-normal text-md"
				}>
				<FaArrowLeft
					className={
						"inline mr-3 group-hover:-translate-x-1 transition-all text-accent"
					}
				/>{" "}
				Back
			</Link>

			{!project && (
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

			{project && (
				<div className={"flex flex-wrap md:flex-nowrap mb-10 gap-5"}>
					<ProjectInfoSideBar project={project} />
					<div className="w-full md:w-2/3">
						{body && (
							<div
								id="project-description"
								dangerouslySetInnerHTML={{
									__html: body,
								}}></div>
						)}
					</div>
				</div>
			)}
		</Container>
	);
}
