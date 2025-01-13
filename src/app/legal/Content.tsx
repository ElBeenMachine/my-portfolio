"use client";

import Container from "@/components/Container";
import MarkdownPreview from "@uiw/react-markdown-preview";

export default function LegalContent({ text }: { text: string }) {
	return (
		<Container>
			<MarkdownPreview
				source={text}
				style={{ background: "none", color: "white" }}
				className="py-16"
			/>
		</Container>
	);
}
