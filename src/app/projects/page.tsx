import Container from "@/components/Container";
import ProjectsContainer from "./ProjectsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "My Projects",
	description: "A list of projects and works completed by Ollie Beenham.",
};

export default function ProjectsPage() {
	return (
		<div className="my-5">
			<Container>
				<h1 className="text-4xl font-bold">My Projects</h1>
				<ProjectsContainer />
			</Container>
		</div>
	);
}
