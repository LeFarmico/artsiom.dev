import React, { useState } from "react";
import { FaLinkedinIn, FaLinkedin } from "react-icons/fa";

const LinkedinIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {isHovered ? (
        <FaLinkedinIn className="icon-style" />
      ) : (
        <FaLinkedin className="icon-style" />
      )}
    </div>
  );
};

export default LinkedinIcon;
