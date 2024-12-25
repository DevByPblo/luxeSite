import React, { useState } from "react";
import "./ServicesSection.css";
import { ReactComponent as MobileIcon } from "../../assets/mobile.svg";
import { ReactComponent as ResponsiveIcon } from "../../assets/responsive.svg";
import { ReactComponent as OptimisedIcon } from "../../assets/optimised.svg";
import { ReactComponent as SeoIcon } from "../../assets/seo.svg";
import { ReactComponent as LocationIcon } from "../../assets/location.svg";
import { ReactComponent as SupportIcon } from "../../assets/support.svg";

const ServiceCard = ({
  title,
  description,
  backgroundColor,
  icons,
  furtherDescription,
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="service-card" onClick={toggleDescription} tabIndex="0">
      <div
        className={`service-card-bg ${showDescription ? "hidden" : ""}`}
        style={{ backgroundColor: backgroundColor }}
      ></div>
      <div className={`service-card-title ${showDescription ? "hidden" : ""}`}>
        {title}
      </div>
      <div className={`service-card-icon ${showDescription ? "hidden" : ""}`}>
        {icons}
      </div>

      <div className="service-card-description">
        {showDescription ? furtherDescription : description}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile First",
      description: (
        <p>
          We design websites with mobile users in mind first, ensuring seamless
          mobile experiences.
        </p>
      ),
      furtherDescription: (
        <p>
          With mobile-first design, we ensure that your website loads quickly on
          mobile devices and is optimized for small screens. This improves user
          experience and increases engagement.
        </p>
      ),
      backgroundColor: "#FF5F00",
      icons: <MobileIcon />,
    },
    {
      title: "Fully Responsive",
      description: (
        <p>
          Your site will look perfect on all devices — desktop, tablet, and
          mobile.
        </p>
      ),
      furtherDescription: (
        <p>
          We implement responsive design principles, meaning your website adapts
          automatically to different screen sizes and orientations. This
          guarantees your site looks great on any device.
        </p>
      ),
      backgroundColor: "#FF1D79",
      icons: <ResponsiveIcon />,
    },
    {
      title: "Optimized Speed",
      description: (
        <p>
          Fast load times for better user experience and SEO performance/Google
          ranking.
        </p>
      ),
      furtherDescription: (
        <p>
          Speed optimization includes image compression, code minification, and
          using content delivery networks (CDNs) to ensure your site loads
          quickly across the globe.
        </p>
      ),
      backgroundColor: "#29A1D3",
      icons: <OptimisedIcon />,
    },
    {
      title: "SEO Services",
      description: (
        <p>
          Get found on Google and drive more traffic with our expert SEO
          strategies.
        </p>
      ),
      furtherDescription: (
        <p>
          We provide SEO services such as keyword optimization, link building,
          and technical SEO to improve your search engine rankings and drive
          organic traffic.
        </p>
      ),
      backgroundColor: "#B10A31",
      icons: <SeoIcon />,
    },
    {
      title: "Based in the UK",
      description: (
        <p>
          We're a UK-based team that understands your local market and needs.
        </p>
      ),
      furtherDescription: (
        <p>
          Our UK-based team ensures that we provide localized solutions tailored
          to your target audience, improving engagement and conversion rates.
        </p>
      ),
      backgroundColor: "#76B041",
      icons: <LocationIcon />,
    },
    {
      title: "Ongoing Support",
      description: (
        <p>
          We’re here to help, offering support even after your site goes live.
        </p>
      ),
      furtherDescription: (
        <p>
          We offer continuous support and maintenance services, ensuring your
          website remains updated, secure, and performs optimally long after
          launch.
        </p>
      ),
      backgroundColor: "#F9E10E",
      icons: <SupportIcon />,
    },
  ];

  return (
    <div className="services-section">
      <h2>Never Worry About Your Website Again</h2>
      <p>
        At WebWorks, we specialize in small business web design and development
        across the UK. Our hand-coded websites are optimized for performance and
        search engines, ensuring more traffic and higher revenue.
      </p>

      <div className="card-section">
        <div className="services">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title.toUpperCase()}
              description={service.description}
              furtherDescription={service.furtherDescription}
              backgroundColor={service.backgroundColor}
              icons={service.icons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
