import React from "react";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="destination-content">
      <div className="image-section">
        <img
          src="https://unsplash.it/200/150"
          alt="Meeting"
          className="image primary"
        />
        <img
          src="https://unsplash.it/300/200"
          alt="Meeting"
          className="image secondary"
        />
        <div className="year">2023</div>
      </div>
      <div className="text-section">
        <h1>Our Story</h1>
        <p>
          Founded in April 2023, Daltin aims to transform education by blending
          global best practices with cutting-edge technology. Partnering with
          over 500 institutions worldwide, we provide innovative, tech-driven
          study options that meet the evolving needs of students. Our AI-based
          portal combines traditional teaching with advanced tools, including
          virtual assistants and chatbots, for real-time support, creating a
          dynamic and interactive learning experience. Daltin is pioneering a
          new era in international education.
        </p>
      </div>
    </div>
  );
};

export default Destination;
