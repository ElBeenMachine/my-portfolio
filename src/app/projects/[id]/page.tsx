import Container from "@/components/Container";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import ProjectContents from "./ProjectContents";
import { notFound } from "next/navigation";
import { connectToDatabase } from "@/lib/db";
import { ObjectId } from "mongodb";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id;

	// Create database connection
	const db = await connectToDatabase();
	if (!db) return notFound();

	const projects = db.collection("projects");

	const project = await projects.findOne({ _id: new ObjectId(id) });

	if (!project) return notFound();

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

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
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
