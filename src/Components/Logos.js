import React from "react";
import "./Logos.css"; 

const LogosSlider = () => {
  const logos = [
    "🌟", "🚀", "🔥", "💻", "🎯", "📱", "🧠", "📦", "💡", "⚙️" 
  ];

  return (
    <div className="slider-container">
      <div className="slider-track">
        {logos.map((logo, index) => (
          <span key={index} className="logo">
            {logo}
          </span>
        ))}
        {/* Duplicate for smooth infinite loop */}
        {logos.map((logo, index) => (
          <span key={index + 10} className="logo">
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogosSlider;
