import React from "react";
import PlanCard from "../PlanCard/PlanCard";
import "./PriceSection.css";

const PriceSection = () => {
  const pricingData = [
    {
      title: "One-Time Payment",
      price: "1299.99",
      period: "",
      features: [
        { value: "Design And Development ✓", label: "Design" },
        { value: "£24.99/mo Hosting ✓", label: "Hosting" },
        { value: "+£50/mo Unlimited Edits ✓ ", label: "Edits" },
        { value: "+£199 To Add A Blog ✓", label: "Blog" },
        { value: <s>24/7 Support</s>, label: "Support" },
        { value: <s>Life time updates</s>, label: "updates" },
      ],
    },
    {
      title: "Monthly",
      price: "169.99",
      mon: "/MON",
      features: [
        { value: "Design And Development ✓", label: "Design" },
        { value: "£24.99/mo Hosting ✓", label: "Hosting" },
        { value: "+£50/mo Unlimited Edits ✓", label: "Edits" },
        { value: "+£199 To Add A Blog ✓", label: "Blog" },
        { value: "24/7 Support ✓", label: "Support" },
        { value: "Life time updates ✓", label: "updates" },
      ],
    },
  ];

  return (
    <section className="price-section">
      <div className="container">
        <h2 className="get-started">Lets Get started</h2>
        <h1 className="price-section-heading">
          Pricing Options to Fit Any Budget
        </h1>
        <div className="price-card-container">
          <div className="price-cards-wrapper">
            {pricingData.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                mon={plan.mon}
                features={plan.features.map((feature) => feature.value)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
