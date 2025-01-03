import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const InstagramIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {isHovered ? (
        <AiOutlineInstagram className="icon-style" />
      ) : (
        <RiInstagramFill className="icon-style" />
      )}
    </div>
  );
};

export default InstagramIcon;
