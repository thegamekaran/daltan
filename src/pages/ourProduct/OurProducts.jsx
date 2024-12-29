import React from "react";
import "./OurProducts.css";

const OurProducts = () => {
  return (
    <div className="our-products-content">
      <div className="text-section">
        <h1>Our Missions and Vision</h1>
        <p>
          Experience a range of innovative educational products designed to
          empower students and educators. From AI-driven tools to interactive
          learning modules, our products are tailored to deliver exceptional
          outcomes and redefine the learning experience.
        </p>
      </div>
      <div className="image-section">
        <img
          src="https://unsplash.it/200/150"
          alt="Product 1"
          className="image primary"
        />
        <img
          src="https://unsplash.it/400/500"
          alt="Product 2"
          className="image secondary"
        />
      </div>
    </div>
  );
};

export default OurProducts;
