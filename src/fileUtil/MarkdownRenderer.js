import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ filePath }) => {
  const [markdown, setMarkdown] = useState(""); // Stores fetched Markdown content
  const [error, setError] = useState(null); // For error handling
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    console.log("Fetching Markdown from:", filePath); // Debug the filePath

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to load Markdown file: ${response.status} ${response.statusText}`,
          );
        }
        return response.text();
      })
      .then((text) => {
        setMarkdown(text); // Set the fetched Markdown content
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        console.error("Error fetching Markdown:", err);
        setError("Error loading the Markdown file.");
      })
      .finally(() => setLoading(false)); // Loading is done
  }, [filePath]);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
