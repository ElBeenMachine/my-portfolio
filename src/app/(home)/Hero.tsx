import Container from "@/components/Container";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Hero() {
	return (
		<Container>
			<div
				className={
					"flex flex-col justify-center items-start h-[calc(100dvh-160px)] w-full select-none"
				}
			>
				<h3
					className={"text-accent font-bold text-lg mb-5 big-header"}
					style={{ animationDelay: "100ms" }}
				>
					Hi, my name is
				</h3>
				<h1
					className={"text-gray-50 font-black text-5xl md:text-7xl mb-2 big-header"}
					style={{ animationDelay: "200ms" }}
				>
					Ollie.
				</h1>
				<h2
					className={"text-gray-300 font-black text-2xl md:text-5xl mb-8 big-header"}
					style={{ animationDelay: "300ms" }}
				>
					I build things for the web.
				</h2>
				<p
					className={"max-w-2xl text-gray-300 mb-8 big-header"}
					style={{ animationDelay: "400ms" }}
				>
					I'm an undergraduate student studying software engineering in my second year at
					Liverpool John Moores University. Passionate about web development and DevOps, I
					am constantly looking to learn new technologies and improve my skills.
				</p>

				<Link
					href={"https://owb.gg/gitlab"}
					target="_blank"
					className={
						"block w-max transition-all text-accent font-semibold border rounded-md border-accent px-8 py-4 hover:text-[#303030] hover:bg-accent big-header"
					}
					style={{ animationDelay: "500ms" }}
				>
					Check Out My GitLab!
				</Link>
			</div>
			<div className="flex justify-center items-center h-[80px] w-full">
				<a
					href="#about"
					className="text-2xl hover:text-white/50 transition-all animate-bounce"
				>
					<IoIosArrowDown size={30} />
				</a>
			</div>
		</Container>
	);
}
