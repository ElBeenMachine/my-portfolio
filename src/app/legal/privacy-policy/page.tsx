import { Metadata } from "next";
import { docType, getContents } from "@/lib/data/legal/getContents";
import LegalContent from "../Content";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: "The privacy policy for the website and services provided by Ollie Beenham.",
};

export default function PrivacyPolicy() {
	// Load in the terms and conditions md file
	const privacyPolicy = getContents(docType.privacyPolicy);
	return <LegalContent text={privacyPolicy} />;
}
