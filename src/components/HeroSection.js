// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';





const HeroSection = () => {
  return (
    <div className="hero-section">
      < video autoPlay loop muted className="hero-video">
      <source src="https://videos.pexels.com/video-files/3196062/3196062-sd_640_360_25fps.mp4" type="video/mp4" />

    
      </video>
      <div className="hero-text">
        <h1>Welcome to Our coding world</h1>
        <p>Let's do coding...........</p>
      </div>
    </div>
  );
};

export default HeroSection;