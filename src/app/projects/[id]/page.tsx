import Container from "@/components/Container";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import ProjectContents from "./ProjectContents";
import { notFound } from "next/navigation";
import { createDBConnection } from "@/lib/db";
import { ObjectId } from "mongodb";

export async function generateMetadata({ params }: { params: { id: string } }) {
	const id = (await params).id;

	// Create a database connection
	const db = await createDBConnection();
	if (!db) return { status: 500 };

	// Get the project with the specified ID
	const project = await db.collection("projects").findOne({ _id: new ObjectId(id) });

	if (!project) return notFound();

	return {
		title: project?.name,
		description: project?.description,
		openGraph: {
			type: "website",
			locale: "en_GB",
			siteName: "My Portfolio | Ollie Beenham",
			images: [
				{
					url: project?.thumbnail,
				},
			],
		},
	};
}

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
	return (
		<Container>
			<Link
				href={"/projects"}
				target={"_self"}
				className={
					"mt-5 mb-8 flex items-center transition-all group hover:text-accent w-max font-normal text-md"
				}
			>
				<FaArrowLeft
					className={"inline mr-3 group-hover:-translate-x-1 transition-all text-accent"}
				/>{" "}
				Back
			</Link>

			<ProjectContents id={(await params).id} />
		</Container>
	);
}
