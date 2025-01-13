import { docType, getContents } from "@/lib/data/legal/getContents";
import { Metadata } from "next";
import LegalContent from "../Content";

export const metadata: Metadata = {
	title: "Terms and Conditions",
	description:
		"The terms and conditions surrounding the use of projects and services created by Ollie Beenham.",
};

export default function TermsAndConditions() {
	// Load in the terms and conditions md file
	const termsAndConditions = getContents(docType.termsAndConditions);
	return <LegalContent text={termsAndConditions} />;
}
