import Link from "next/link";
import Container from "./Container";

export default function UnderConstruction() {
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
					<h1 className={"text-5xl text-center font-bold"}>
						Not quite there yet!
					</h1>
					<p className={"text-center max-w-[500px] my-5"}>
						This page is currently under construction and is not
						available at this time. Please try again later.
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
