import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div>
      <h1>TIMELINE</h1>
      <div class="timeline">
        <div class="open">
          <img
            src="https://robowars.robovitics.in/imgs/Group%20173.e4cb624986db0ede05f8.png"
            alt=""
          />
          <div class="ceremony">
            <h2>Opening Ceremony</h2>
            <br />
            <h3>September 30th, 2022</h3>
          </div>
          <img
            src="https://robowars.robovitics.in/imgs/Vector%2018.8f9fdd0704c577267e48.png"
            alt=""
            id="line"
          />
        </div>
        <div class="container">
          <h5>Matches</h5>
          <h4>Coming Soon...</h4>
          <div class="lines"></div>
          <h3 id="tune">Stay tuned</h3>
        </div>
        <img
          src="https://robowars.robovitics.in/imgs/Vector%2019.fce90247bffbcb2cc464.png"
          alt=""
          id="line1"
        />
        <div class="close">
          <img
            src="https://robowars.robovitics.in/imgs/simple-icons_bitcoincash.49e2334ae68f06cd1afe.png"
            alt=""
          />
          <div class="ceremony">
            <h2>Closing Ceremony</h2>
            <br />
            <h3>October 2nd, 2022</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
