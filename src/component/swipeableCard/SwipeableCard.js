import React, { useState } from "react";
import "./SwipeableCard.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SwipeableCard({ children, titleLabel }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : children.length - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < children.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <div className="swipeable-card">
      <div className="swipeable-card-header-style">{titleLabel}</div>
      <div
        className="card-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div className="swipeable-content-style" key={index}>
            {child}
          </div>
        ))}
      </div>
      <div className="buttons">
        <FaArrowLeft className="swipe-button" onClick={handlePrev} />
        <FaArrowRight className="swipe-button" onClick={handleNext} />
      </div>
    </div>
  );
}

export default SwipeableCard;
