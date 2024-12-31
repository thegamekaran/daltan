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
          src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0aWZpY2FsJTIwaW50ZWxsaWdlbmNlfGVufDB8fDB8fHww"
          alt="Product 1"
          className="image primary"
        />
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0aWZpY2FsJTIwaW50ZWxsaWdlbmNlfGVufDB8fDB8fHww"
          alt="Product 2"
          className="image secondary"
        />
      </div>
    </div>
  );
};

export default OurProducts;
