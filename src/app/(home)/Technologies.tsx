import Container from "@/components/Container";
import { technologies } from "@/lib/data/technologies";

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
			</Container>
		</div>
	);
}
