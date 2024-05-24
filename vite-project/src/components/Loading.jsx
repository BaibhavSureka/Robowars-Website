import React from "react";
import "./Loading.css";
import Waves from "./Waves";
import App from "../App";
import { gsap } from "gsap";

const Loading = () => {
  setTimeout(() => {
    gsap.to(".waves", {
      opacity: 0,
    });
    gsap.to(".blinder", {
      scaleY: 0,
      stagger: 0.2,
      duration: 0.4,
      ease: "power3.out",
    });
    gsap.to(".mask", {
      y: 0,
      duration: 1,
      ease: "power4.out",
    });
    gsap.to("body", {
      delay: 2,
      overflowY: "auto",
    });
  }, 3000);
  return (
    <>
      <div className="loader">
        <div className="blinder-container">
          <div className="blinder"></div>
          <div className="blinder"></div>
          <div className="blinder"></div>
          <div className="blinder"></div>
          <div className="blinder"></div>
        </div>
        <div className="waves">
          <Waves />
        </div>
      </div>
      <div className="mask">
        <App />
      </div>
    </>
  );
};

export default Loading;
