import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				accent: "#00ffff",
				"background-primary": "#1a1a1a",
				input: "#2b2b2b",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
