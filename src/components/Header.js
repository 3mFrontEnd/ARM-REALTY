import React, {Component} from 'react';
import './Header.css'; // Import your CSS file
import video from "../assets/VIDEO.mp4"

const Header = () => {
  return (
    <header className="header">
      <video autoPlay loop muted className="video-bg" src={video}>
        <source type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header-content">
        <h1>Welcome to ARM REALTY</h1>
        <p>Find your dream property with us.</p>
      </div>
    </header>
  );
};

export default Header;
