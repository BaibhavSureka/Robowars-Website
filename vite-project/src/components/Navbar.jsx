import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="nav">
      <img
        src="https://res.cloudinary.com/robovitics/image/upload/v1662829380/Robowars2022/RoboVITics-Logo_1_xsopdq.png"
        alt=""
        id="robo"
      />
      <div class="navbar">
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#aboutus">
            <li>About Us</li>
          </a>
          <a href="#timeline">
            <li>Timeline</li>
          </a>
          <a href="#faq">
            <li>FAQ</li>
          </a>
          <a href="#contact">
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
      <img
        src="https://gravitas.vit.ac.in/landingAssets/heroLogo.svg"
        alt=""
        id="gravitas"
      />
    </div>
  );
};

export default Navbar;
