/**
 * Parses a GitHub URL and returns the username and repo name
 *
 * @param url The GitHub URL to parse
 * @returns username/repo
 */
export default function getGithubUsernameAndRepo(url: string) {
	// Use a regular expression to match the username and repo name
	const regex = /https:\/\/github.com\/([^\/]+)\/([^\/]+)(?:\.git|\?.*)?/;
	const match = url.match(regex);

	// Check if there's a match
	if (match) {
		return `${match[1]}/${match[2]}`;
	} else {
		return null;
	}
}
