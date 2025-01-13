import { readFileSync } from "fs";

export enum docType {
	termsAndConditions,
	privacyPolicy,
}

export function getContents(type: docType) {
	// Load in the terms and conditions md file
	switch (type) {
		case docType.termsAndConditions:
			return readFileSync("./src/lib/data/legal/TermsAndConditions.md").toString();
		case docType.privacyPolicy:
			return readFileSync("./src/lib/data/legal/PrivacyPolicy.md").toString();
	}
}
