import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div class="aboutus">
        <h1>ABOUT US</h1>
        <video
          controls
          src="/assets/Robowars_2022._Coming_Soon..._bhaufm.mp4"
          width="900"
          height="400"
          style={{ border: "3px solid #d2b6ff" }}
        ></video>
      </div>
      <div class="buttons2">
        <button id="btn1" onClick="change1()">
          ROBOWARS
        </button>
        <button id="btn2" onClick="change2()">
          RoboVITics
        </button>
      </div>
      <div class="desp">
        <p id="text">
          ROBOWARS is the flagship event of graVITas and one of the biggest
          combat robotics events in India. More than 40 bots engage in thrilling
          battles around-the-clock in the largest and safest arena in India for
          a chance to win the championship with their war machines. It proves to
          be an adrenaline rush to the participants as well as the audience.
          Teams all over the globe gather here to show off their fighting
          spirits and attain glory.
        </p>
      </div>
      <div id="aboutus">
        <h1>ABOUT Gravitas'23</h1>
        <div class="details">
          <img
            src="https://gravitas.vit.ac.in/landingAssets/heroLogo.svg"
            alt=""
          />
          <div class="desp">
            <p>
              VIT's annual techno-management carnival of knowledge, Gravitas,
              aims to entertain and enrich the technological skills of the
              students and the researchers by having a plethora of innovative
              events in every avenue of engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
