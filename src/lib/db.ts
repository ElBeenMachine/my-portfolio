/**
 * @author Ollie Beenham
 */

import { MongoClient } from "mongodb";
import { env } from "next-runtime-env";

export const mongoURI = env("MONGO_URI") as string;

/**
 * Create a connection to the database
 *
 * @returns {Promise<database>} The database connection
 */
export const createDBConnection = async () => {
	// If we are building the Docker image, return null
	if (env("DOCKER_BUILD")) return null;

	// Create and return the database connection
	const client = new MongoClient(mongoURI);
	const db = client.db(env("INSTANCE_ID"));

	// Return the database
	return db;
};
