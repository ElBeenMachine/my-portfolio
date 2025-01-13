import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/Analytics";
import { env } from "next-runtime-env";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Ollie Beenham",
		default: "My Portfolio | Ollie Beenham",
	},
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
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','${env("ANALYTICS_TAG")}');`,
					}}
				></script>
			</head>
			<body
				className={`${inter.className} min-h-dvh bg-background-primary text-white flex flex-col`}
			>
				<noscript>
					<iframe
						src={`https://www.googletagmanager.com/ns.html?id=${env("ANALYTICS_TAG")}`}
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>

				<Navbar />
				<main>{children}</main>
				<div className="flex-grow"></div>
				<Footer />
			</body>
			<GoogleAnalytics />
		</html>
	);
}
