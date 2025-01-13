import Link from "next/link";
import Container from "@/components/Container";
import { FaArrowRight } from "react-icons/fa";

/**
 * The project showcase
 *
 * @returns #JSX.Element} The project showcase
 */
export default function Projects() {
	return (
		<div
			className="w-full min-h-[100dvh] flex justify-center items-center"
			id={"projects"}>
			<Container>
				<h1 className="text-4xl font-bold mb-10">My Projects</h1>
				<div
					className={
						"w-full flex gap-10 justify-between flex-col-reverse md:flex-row"
					}>
					<div className="w-full">
						<p>
							I am currently working on a variety of individual
							and team projects both inside of and outside of my
							academic journey. These projects are expanding my
							knowledge in various languages and technologies, as
							well as helping me to learn and adopt industry
							standards in the work that I complete.
						</p>
						<Link
							href={"/projects"}
							target={"_self"}
							className={
								"mt-5 flex items-center transition-all group hover:text-accent w-max font-semibold text-lg"
							}>
							Explore{" "}
							<FaArrowRight
								className={
									"inline ml-3 group-hover:translate-x-1 transition-all text-accent"
								}
							/>
						</Link>
					</div>
					<div className="flex w-full justify-center items-center flex-grow">
						<img
							src="/img/projects.svg"
							alt="My Projects"
							className="max-w-[200px] md:max-w-[300px] my-5 md:my-0"
						/>
					</div>
				</div>
			</Container>
		</div>
	);
}
