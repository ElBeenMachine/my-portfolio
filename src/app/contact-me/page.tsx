import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Me",
	description:
		"Get in touch with Ollie, a UK based software engineering student.",
};

export default function ContactPage() {
	return (
		<Container>
			<div className="w-full flex justify-center items-center flex-col gap-3 min-h-[calc(100dvh-80px)]">
				<h1 className="text-5xl font-bold mb-5 text-center">
					Contact Me
				</h1>
				<p className="text-lg text-center">
					Unfortunately, this page is currently under construction.
				</p>
				<p className="text-lg text-center">
					If you would like to get in touch in the meantime, please
					feel free to send an email to{" "}
					<a
						className="underline text-accent hover:text-accent/60 transition-all"
						href="mailto:hello@beenhamow.co.uk">
						hello@beenhamow.co.uk
					</a>
					!
				</p>
			</div>
		</Container>
	);
}
