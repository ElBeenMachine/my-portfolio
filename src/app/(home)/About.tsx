import Link from "next/link";
import Container from "@/components/Container";

export default function About() {
	return (
		<div
			className="min-h-[100dvh] flex justify-center items-center"
			id={"about"}>
			<Container>
				<div className={"w-full flex gap-10 justify-between"}>
					<div className="w-full">
						<h1 className="text-4xl font-bold mb-5">About Me</h1>
						<p className={"mb-6"}>
							Hi there, I'm{" "}
							<span className={"text-accent"}>Ollie</span> and I
							enjoy creating things that live on the web and in
							the cloud. My interest in programming really emerged
							back in <span className={"text-accent"}>2016</span>{" "}
							when I created my first project in{" "}
							<span className={"text-accent"}>Python</span>.
						</p>
						<p className={"mb-6"}>
							Since then, I've been working on boilerplate
							projects, and have created a number of automation
							processes, saving countless hours at a
							multi-national company.
						</p>
					</div>
					<div className="hidden md:flex w-full justify-center items-center flex-grow">
						<img
							src="/img/about.svg"
							alt="About Me"
							className="max-w-[400px]"
						/>
					</div>
				</div>

				<Link
					href={"/contact-me"}
					className={
						"block w-max transition-all text-accent font-semibold border rounded-md border-accent px-4 py-3 hover:text-[#303030] hover:bg-accent"
					}>
					Get In Touch
				</Link>
			</Container>
		</div>
	);
}
