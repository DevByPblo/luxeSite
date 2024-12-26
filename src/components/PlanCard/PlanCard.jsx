import React from "react";
import "./PlanCard.css";

const PlanCard = ({ title, price, features, mon }) => (
  <div className="plan-card">
    <div className="plan-header">
      <div className="header-background"></div>
      <span className="plan-title">{title}</span>
    </div>
    <div className="plan-price">
      <span className="price-value">
        <span className="currency-sign">£</span>
        <span className="price-main">{price.split(".")[0]}</span>
        <span className="price-decimal">.{price.split(".")[1]}</span>
        <span className="price-period">{mon}</span>
      </span>
    </div>
    <div className="plan-features">
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="plan-action">
      <a href="/" className="action-button">
        GET STARTED
      </a>
    </div>
  </div>
);

export default PlanCard;
