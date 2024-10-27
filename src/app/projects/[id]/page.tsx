import Container from "@/components/Container";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import ProjectContents from "./ProjectContents";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const id = params.id;
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/content/projects/${id}`
	);

	if (data.status == 404) return notFound();

	const project = await data.json();

	return {
		title: project.name,
		description: project.description,
		openGraph: {
			type: "website",
			locale: "en_GB",
			siteName: "My Portfolio | Ollie Beenham",
			images: [
				{
					url: project.thumbnail,
				},
			],
		},
	};
}

export default function ProjectDetailPage({
	params,
}: {
	params: { id: string };
}) {
	return (
		<Container>
			<Link
				href={"/projects"}
				target={"_self"}
				className={
					"mt-5 mb-8 flex items-center transition-all group hover:text-accent w-max font-normal text-md"
				}>
				<FaArrowLeft
					className={
						"inline mr-3 group-hover:-translate-x-1 transition-all text-accent"
					}
				/>{" "}
				Back
			</Link>

			<ProjectContents id={params.id} />
		</Container>
	);
}
