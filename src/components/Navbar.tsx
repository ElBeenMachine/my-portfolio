import Link from "next/link";
import Container from "./Container";

interface NavLinkProps {
	children?: React.ReactNode;
	href: string;
	target?: "_self" | "_blank";
}

/**
 * A link component to be used in the navbar
 *
 * @param {NavLinkProps} props The properties of the NavLink component
 * @returns
 */
function NavLink({ children, href, target = "_self" }: NavLinkProps) {
	return (
		<Link
			href={href}
			target={target}
			className={"h-full w-auto ml-4 flex items-center transition-all hover:text-accent"}
		>
			{children}
		</Link>
	);
}

export default function Navbar() {
	return (
		<Container>
			<div
				className={
					"h-20 w-full relative flex justify-center md:justify-between items-center py-5 top-0"
				}
				id={"nav"}
			>
				<Link href={"/"} className={"h-full"}>
					<img className={"h-full w-auto"} src={"/img/logo.svg"} alt={"logo"} />
				</Link>
				<div className={"h-full w-max justify-end hidden md:flex"}>
					<NavLink href={"/"}>
						<span className={"text-accent mr-2"}>01.</span>Home
					</NavLink>
					<NavLink href={"/projects"}>
						<span className={"text-accent mr-2"}>02.</span>Projects
					</NavLink>
					<NavLink href={"/contact-me"}>
						<span className={"text-accent mr-2"}>03.</span>Contact Me
					</NavLink>
				</div>
			</div>
		</Container>
	);
}
