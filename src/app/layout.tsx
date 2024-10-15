import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/Analytics";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: { template: "%s | Ollie Beenham", default: "My Portfolio" },
	description:
		"I am a bachelor's degree student studying software engineering in Liverpool. I am currently working on creating user-friendly and engaging web experiences.",
	openGraph: {
		type: "website",
		locale: "en_GB",
		siteName: "My Portfolio | Ollie Beenham",
		images: [
			{
				url: "/img/meta/default.png",
			},
		],
	},
	metadataBase: new URL("https://www.beenhamow.co.uk"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} min-h-dvh bg-background-primary text-white`}>
				<NextTopLoader
					color="#00ffff"
					showSpinner={false}
				/>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
			<GoogleAnalytics />
		</html>
	);
}
