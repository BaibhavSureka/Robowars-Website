import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "When and where is Robowars happening?",
      answer: "Robowars will be happening during Gravitas and will be from 30th Sep to 2nd Oct at the Outdoor stadium. Stay tuned for the timings!"
    },
    {
      question: "Number of teams participating",
      answer: "40"
    },
    {
      question: "How can you attend this event?",
      answer: "Go to Gravitas website and search for robowars and register for the event!"
    },
    {
      question: "How long is the event?",
      answer: "It happens for 4 hours throughout the day for up to 3 days!"
    },
    {
      question: "Who is eligible to participate?",
      answer: "If you’re a part of a team that builds bots and bots follow our regulations. Check out the rulebook above!"
    },
    {
      question: "How long does each match usually last?",
      answer: "3 minutes each"
    },
  ];

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className={`arrow ${activeIndex === index ? "active" : ""}`}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="white" d="M12 16.5l-6-6h12z" />
                </svg>
              </span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? "active" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
