// App.js
import React from "react";
import "./AnimationIamge.css";

const AnimationIamge = () => {
  return (
    <div className="container">
      <div className="card static-card">
        <img src="https://unsplash.it/200/150" alt="Stay in the Loop" />
        <h3>Stay in the Loop, Always</h3>
        <p>
          Track your application progress in real-time and never miss a single
          update.
        </p>
      </div>

      <div className="card animated-card left-animation">
        <img src="https://unsplash.it/300/250" alt="Perfect Match" />
        <h3>Perfect Match</h3>
        <p>Discover your eligibility for courses tailored to your goals.</p>
      </div>

      <div className="card animated-card right-animation">
        <img src="https://unsplash.it/300/250" alt="Expert Support" />
        <h3>Expert Support, Anytime</h3>
        <p>
          Connect directly with admission experts through chats and calls, all
          within the app.
        </p>
      </div>

      <button className="cta-button">Let’s get started</button>
    </div>
  );
};

export default AnimationIamge;
