import { createDBConnection } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

/**
 * An API route, returning a JSON object containing all of the projects in the database.
 *
 * @returns {Promise<NextResponse>} The response
 */
export const GET = async (req: NextRequest) => {
	const db = await createDBConnection();
	if (!db) return NextResponse.json({ error: "Database connection failed" }, { status: 500 });

	const projects = await db.collection("projects").find().toArray();

	// Get the query string
	const id = req.nextUrl.searchParams.get("id");

	// Return all projects if none specified
	if (!id) return NextResponse.json(projects);

	// Return the project with the specified ID
	const project = await db.collection("projects").findOne({ _id: new ObjectId(id) });
	if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });

	return NextResponse.json(project);
};
