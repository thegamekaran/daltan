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
        <p>
          Explore top universities worldwide with innovative programs for future
          leaders. Benefit from cutting-edge research facilities and renowned
          faculty. Access unparalleled opportunities for academic and personal
          growth. Discover your gateway to world-class education and global
          success.
        </p>
        <p>
          Partner with institutions known for excellence in research and
          education. Gain skills and knowledge that align with the demands of
          tomorrow’s industries. Network with students and alumni from diverse
          cultural and professional backgrounds. Unlock pathways to
          scholarships, internships, and career opportunities worldwide.
        </p>
      </div>
      <div className="image-section">
        <div className="image-container">
          <img
            src="https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="University 1"
            className="image primary"
          />
        </div>
        <div className="image-container">
          <img
            src="https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="University 2"
            className="image secondary"
          />
        </div>
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1618255630366-f402c45736f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D"
            alt="University 3"
            className="image tertiary"
          />
        </div>
      </div>
    </div>
  );
};

export default Universities;
