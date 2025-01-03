import React, { useState } from "react";
import { SlSocialSpotify } from "react-icons/sl";
import { ImSpotify } from "react-icons/im";

const SpotifyIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {isHovered ? (
        <SlSocialSpotify className="icon-style" />
      ) : (
        <ImSpotify className="icon-style" />
      )}
    </div>
  );
};

export default SpotifyIcon;
