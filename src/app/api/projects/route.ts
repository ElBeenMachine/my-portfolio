import { NextResponse } from "next/server";

/**
 * An API route, returning a JSON object containing all of the projects in the database.
 *
 * @returns {Promise<NextResponse>} The response
 */
export const GET = async () => {
	return NextResponse.json({ message: "Hello World" });
};
