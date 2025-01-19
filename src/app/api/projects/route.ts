import { createDBConnection } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

/**
 * An API route, returning a JSON object containing all of the projects in the database.
 *
 * @returns {Promise<NextResponse>} The response
 */
export const GET = async (req: NextRequest) => {
	// Get the query string
	const id = req.nextUrl.searchParams.get("id");

	// Create database connection
	const connection = await createDBConnection();
	if (!connection)
		return NextResponse.json({ error: "Database connection failed" }, { status: 500 });

	const { client, db } = connection;
	if (!db) {
		client.close();
		return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
	}

	const projects = await db.collection("projects").find().toArray();

	// Return all projects if none specified
	if (!id) {
		client.close();
		return NextResponse.json(projects);
	}

	// Return the project with the specified ID
	const project = await db.collection("projects").findOne({ _id: new ObjectId(id) });
	client.close();

	if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });

	return NextResponse.json(project);
};
