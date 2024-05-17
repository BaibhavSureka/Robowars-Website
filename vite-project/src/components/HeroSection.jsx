import React from "react";
import GIF from "../assets/MOSHED-2022-9-20-15-33-9-unscreen_nu5a4j.gif";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="master">
      <div id="home">
        <div class="logo">
          <img src={GIF} alt="" class="gif" />
          <div class="title">
            <img
              src="https://res.cloudinary.com/robovitics/image/upload/v1662829380/Robowars2022/RoboVITics-Logo_1_xsopdq.png"
              alt=""
              class="robovitics"
            />
            <br />
            <img
              src="https://res.cloudinary.com/robovitics/image/upload/v1662829410/Robowars2022/ROBOWARS_rssjt9.png"
              alt=""
              class="robowars"
            />
          </div>
        </div>
        <div class="buttons">
          <a href="https://events.vit.ac.in/">
            <button id="button1">REGISTER</button>
          </a>
          <a href="https://firebasestorage.googleapis.com/v0/b/knowhenit.appspot.com/o/Robowars%20Rulebook.pdf?alt=media&token=6ba1ea0e-309c-4bdb-9e12-cefac59f899a">
            <button id="button2">RULEBOOK</button>
          </a>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/robovitics/image/upload/v1663347319/Robowars2022/bot_1_qkt8us.png"
        alt=""
        class="pic"
      />
    </div>
  );
};

export default HeroSection;
