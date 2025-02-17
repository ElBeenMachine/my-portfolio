import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	// Disable eslint at build
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
