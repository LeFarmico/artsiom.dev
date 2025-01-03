import React, { useState } from "react";
import { RiTelegram2Fill } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";

const TelegramIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {isHovered ? (
        <RiTelegram2Fill className="icon-style" />
      ) : (
        <BsTelegram className="icon-style" />
      )}
    </div>
  );
};

export default TelegramIcon;
