export async function fetchTextFile(filepath) {
  try {
    const response = await fetch(filepath); // Fetch the file
    if (!response.ok) {
      throw new Error(
        `Failed to load file: ${response.status} ${response.statusText}`,
      );
    }
    return response.text(); // Return file content as text
  } catch (error) {
    console.error("Error fetching file:", error);
    throw error; // Rethrow the error for further handling
  }
}
