import Link from "next/link";
import Container from "./Container";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Get version from package.json
const { version } = require("../../package.json");

interface SocialLinkProps {
	href: string;
	icon: React.ReactNode;
}

/**
 * A component to display a social link
 *
 * @param {SocialLinkProps} props The properties of the SocialLink component
 * @returns
 */
function SocialLink({ href, icon }: SocialLinkProps) {
	return (
		<Link
			href={href}
			target="_blank"
			className="text-gray-300 hover:text-white/50 transition-all">
			{icon}
		</Link>
	);
}

interface FooterLinkProps {
	href: string;
	text: string;
	target?: "_self" | "_blank";
}

/**
 * A component to display a footer link
 *
 * @param {FooterLinkProps} props The properties of the FooterLink component
 * @returns
 */
function FooterLink({ href, text, target = "_self" }: FooterLinkProps) {
	return (
		<Link
			href={href}
			target={target}
			className="text-gray-300 hover:text-white/50 hover:underline transition-all">
			{text}
		</Link>
	);
}

interface FooterLinkContainerProps {
	children: React.ReactNode;
	name: string;
}

/**
 * A component to display a container of footer links
 *
 * @param {FooterLinkContainerProps} props The properties of the FooterLinkContainer component
 * @returns
 */
function FooterLinkContainer({ children, name }: FooterLinkContainerProps) {
	return (
		<div className="w-full h-full  flex flex-col items-start gap-2">
			<h1 className={"text-xl font-bold"}>{name}</h1>
			{children}
		</div>
	);
}

export default function Footer() {
	// Get the current year
	const year = new Date().getFullYear();

	return (
		<footer className="py-5">
			<Container>
				<div className="w-full h-full flex flex-col justify-center items-center gap-10 border-t pt-20 border-solid border-white/15">
					<div
						className={
							"w-full flex flex-col md:flex-row items-center justify-between gap-5"
						}>
						<div className="w-full flex justify-center items-start h-full">
							<img
								src="/img/logo.svg"
								className="py-10 md:py-0"
								alt="Ollie Beenham Logo"
								width={50}
								height={50}
							/>
						</div>
						<FooterLinkContainer name="Sitemap">
							<FooterLink
								href={"/"}
								text={"Home"}
							/>
							<FooterLink
								href={"/projects"}
								text={"My Projects"}
							/>
							<FooterLink
								href={"/contact-me"}
								text={"Contact Me"}
							/>
						</FooterLinkContainer>
						<FooterLinkContainer name="Legal">
							<FooterLink
								href={"/legal/terms-and-conditions"}
								text={"Terms and Conditions"}
							/>
							<FooterLink
								href={"/legal/privacy-policy"}
								text={"Privacy Policy"}
							/>
						</FooterLinkContainer>
						<FooterLinkContainer name="Other Links">
							<FooterLink
								href={"https://www.ljmu.ac.uk"}
								text={"My University"}
								target="_blank"
							/>
							<FooterLink
								href={"https://www.ljmu.dev"}
								text={"LJMU Software Engineering Team"}
								target="_blank"
							/>
							<FooterLink
								href={"https://dash.beenhamow.co.uk"}
								text={"Dashboard"}
								target="_blank"
							/>
						</FooterLinkContainer>
					</div>
					<div
						id={"footer-socials"}
						className={
							"w-full flex justify-center md:justify-end gap-3"
						}>
						<SocialLink
							href={"https://github.beenhamow.co.uk"}
							icon={<IoLogoGithub size={30} />}
						/>
						<SocialLink
							href={"https://linkedin.beenhamow.co.uk"}
							icon={<IoLogoLinkedin size={30} />}
						/>
						<SocialLink
							href={"https://twitter.beenhamow.co.uk"}
							icon={<FaXTwitter size={30} />}
						/>
						<SocialLink
							href={"https://spotify.beenhamow.co.uk"}
							icon={<FaSpotify size={30} />}
						/>
					</div>
					<div className="w-full flex flex-wrap justify-center items-center">
						<p className="text-center text-gray-300/50">
							Portfolio v{version} &copy; {year} Ollie Beenham
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
}
