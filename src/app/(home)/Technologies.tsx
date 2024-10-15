import Container from "@/components/Container";
import { technologies } from "@/lib/data/technologies";
import { TechnologyProps } from "@/lib/interfaces/Technology.interface";

function TechCard({ tech }: { tech: TechnologyProps }) {
	return (
		<div className="flex justify-between items-center w-full">
			{tech.icon({ size: 50, color: tech.color })}
			<p className="w-full text-right md:text-center">{tech.name}</p>
		</div>
	);
}

export default function Technologies() {
	return (
		<div
			className="w-full"
			id={"technologies"}>
			<Container>
				<h1 className="text-4xl font-bold mb-10">Technologies</h1>
				<p>
					See below a list of technologies that I have used in my
					projects.
				</p>
				<div
					className={
						"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
					}>
					{technologies.map((tech, index) => (
						<TechCard
							key={index}
							tech={tech}
						/>
					))}
				</div>
			</Container>
		</div>
	);
}
