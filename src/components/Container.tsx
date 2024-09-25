interface ContainerProps {
	children?: React.ReactNode;
	width?: "full" | "partial";
}

/**
 * A container component to wrap content in
 *
 * @param {ContainerProps} props The properties of the Container component
 * @returns
 */
export default function Container({
	children,
	width = "partial",
}: ContainerProps) {
	return (
		<div className="w-full flex justify-center">
			<div
				className={`px-10 max-w-[1920px] ${
					width === "full" ? "w-full" : "w-full md:w-4/5"
				}`}>
				{children}
			</div>
		</div>
	);
}
