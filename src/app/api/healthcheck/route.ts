import { NextResponse } from "next/server";

/**
 * The healthcheck route
 *
 * @returns {Promise<NextResponse>} The healthcheck response
 */
export const GET = async () => {
	return NextResponse.json({ status: "ok" });
};
