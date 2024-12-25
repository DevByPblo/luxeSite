import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Personal Digital Expert</h1>
        <p>
          Every website we create is hand-coded for a clean, custom design
          that’s built to last. With a focus on speed and SEO, we make sure your
          site looks great and ranks high on Google, helping your business grow.
        </p>
        <div className="buttons">
          <a href="#work-with-us" className="btn">
            Work With Us
          </a>
          <a href="#about-us" className="btn">
            About Us
          </a>
        </div>
      </div>
      <div className="curves">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
