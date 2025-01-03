import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import "./IconStyle.css";

const GitHubIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {isHovered ? (
        <VscGithub className="icon-style" />
      ) : (
        <FaGithub className="icon-style" />
      )}
    </div>
  );
};

export default GitHubIcon;
