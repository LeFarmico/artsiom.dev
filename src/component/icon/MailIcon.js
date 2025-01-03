import React, { useState } from "react";
import { FaEnvelope, FaRegEnvelope } from "react-icons/fa";

const MailIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {isHovered ? (
        <FaRegEnvelope className="icon-style" />
      ) : (
        <FaEnvelope className="icon-style" />
      )}
    </div>
  );
};

export default MailIcon;
