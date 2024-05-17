import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1 id="contact">CONTACT US</h1>
      <div class="contact">
        <div class="banner">
          <img
            src="https://res.cloudinary.com/db4f0fmy7/image/upload/v1662914038/robowars/Asset_2_3_dkbi4g.png"
            alt=""
          />
          <div class="links">
            <h2>ROBOWARS</h2>
            <a href="https://twitter.com/robo_vit" target="_blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/robovitics/" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/robovitics/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/robovitics/?originalSubdomain=in"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCFiwOI-W5b06NweratR-RdA"
              target="_blank"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div class="phone">
          <h2>Email: robovitics@vit.ac.in</h2>
          <br />
          <div class="phones">
            <h3>
              Phone: (+91)9833548555 <br />
              Akhil Mahesh <br />
              Chairperson <br />
              Robovitics
            </h3>
            <h3>
              Phone: (+91)84910 92405 <br />
              Adwyck Gupta <br />
              Vice Chairperson <br />
              Robovitics
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
