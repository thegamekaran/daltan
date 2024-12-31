import React from "react";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="destination-content">
      <div className="image-section">
        <img
          src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RvcnklMjB0byUyMGJ1aWx0JTIwdGhlJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Meeting"
          className="image primary"
        />
        <img
          src="https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0b3J5JTIwdG8lMjBidWlsdCUyMHRoZSUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D"
          alt="Meeting"
          className="image secondary"
        />
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
