import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div>
      <h1>FAQ</h1>
      <div class="h1">
        <div class="card">
          <div class="front">
            <p>Q: When and where is Robowars happening?</p>
          </div>
          <div class="back">
            <p>
              Ans: Robowars will be happening during Gravitas and will befrom
              30th sep to 2nd oct at the Outdoor stadium.Stay tuned for the
              timings!
            </p>
          </div>
        </div>
        <div class="card">
          <div class="front">
            <p>Q: Number of teams participating</p>
          </div>
          <div class="back">
            <p>Ans: 40</p>
          </div>
        </div>
        <div class="card">
          <div class="front">
            <p>Q: How can you attend this event?</p>
          </div>
          <div class="back">
            <p>
              Ans:Go to Gravitas website and search for robowars and register
              for the event!
            </p>
          </div>
        </div>
      </div>
      <div class="h1">
        <div class="card">
          <div class="front">
            <p>Q: How long is the event?</p>
          </div>
          <div class="back">
            <p>
              Ans: It happens for 4 hours throughout the day for upto 3 days!
            </p>
          </div>
        </div>
        <div class="card">
          <div class="front">
            <p>Q: Who is elegible to participate?</p>
          </div>
          <div class="back">
            <p>
              Ans: If you’re a part of a team that builds bots and bots follow
              our regulations. Check out the rulebook above!
            </p>
          </div>
        </div>
        <div class="card">
          <div class="front">
            <p>Q: How long does each match usually last?</p>
          </div>
          <div class="back">
            <p>Ans: 3 minutes each</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
