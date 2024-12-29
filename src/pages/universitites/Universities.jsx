import React from "react";
import "./Universities.css";

const Universities = () => {
  return (
    <div className="universities-content">
      <div className="text-section">
        <h1>Explore Top Universities</h1>
        <p>
          Discover the best universities around the globe with cutting-edge
          programs designed to meet the needs of tomorrow. Partnering with
          leading institutions, we provide a gateway to world-class education
          opportunities.
        </p>
      </div>
      <div className="image-section">
        <div className="image-container">
          <img
            src="https://unsplash.it/200/150"
            alt="University 1"
            className="image primary"
          />
        </div>
        <div className="image-container">
          <img
            src="https://unsplash.it/300/200"
            alt="University 2"
            className="image secondary"
          />
        </div>
        <div className="image-container">
          <img
            src="https://unsplash.it/400/500"
            alt="University 3"
            className="image tertiary"
          />
        </div>
      </div>
    </div>
  );
};

export default Universities;
