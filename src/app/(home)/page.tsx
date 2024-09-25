import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Technologies from "./Technologies";

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Technologies />
			<Projects />
		</div>
	);
}
