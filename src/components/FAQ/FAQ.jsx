import React, { useState } from "react";
import "./FAQ.css"; //

const FAQ = () => {
  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web design, SEO optimization, ongoing support, and more tailored solutions to meet your business needs.",
    },
    {
      question: "What is mobile-first design?",
      answer:
        "Mobile-first design ensures that websites are optimized for mobile devices before scaling up for larger screens.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the complexity of the project. Typically, a standard website takes 4-8 weeks.",
    },
    {
      question: "Do you offer ongoing support after the website launch?",
      answer:
        "Yes, we provide continuous support and maintenance to ensure your website performs optimally.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "The cost varies based on features and complexity. Contact us for a tailored quote.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="faq-toggle-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
