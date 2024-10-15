import Container from "@/components/Container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "404 Not Found",
	description:
		"The page or resource that you have requested is no longer available or has been moved.",
};

export default function NotFoundPage() {
	return (
		<div
			className={
				"h-[calc(100dvh-160px)] mb-[80px] flex justify-center items-center"
			}>
			<Container>
				<div
					className={
						"flex justify-center items-center flex-col gap-5"
					}>
					<h1 className={"text-5xl font-bold text-center"}>Oops!</h1>
					<p className={"text-center max-w-[500px] my-5"}>
						The page or resource that you have requested is no
						longer available or has been moved.
					</p>
					<Link
						href={"/"}
						className={
							"transition-all text-accent font-semibold border rounded-md border-accent px-6 py-2 hover:text-[#303030] hover:bg-accent "
						}>
						Go Home
					</Link>
				</div>
			</Container>
		</div>
	);
}
