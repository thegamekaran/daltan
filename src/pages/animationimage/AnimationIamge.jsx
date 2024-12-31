// App.js
import React from "react";
import "./AnimationIamge.css";

const AnimationIamge = () => {
  return (
    <section className="animation_sec">
      <div className="conter">
        <div className="container">
          <div className="card static-card">
            <img
              src="https://files.oaiusercontent.com/file-HZ1yMCpEjseDUDXC7iFRNu?se=2024-12-31T08%3A08%3A39Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbb7cc87b-f2ae-45f7-bde6-08543ab8f955.webp&sig=zscLEFsokmj%2BHEoPwWHr6vk9nQvQ0pg%2B9HswR/DlCRA%3D"
              alt="Stay in the Loop"
            />
            <h3>Stay in the Loop, Always</h3>
            <p>
              Track your application progress in real-time and never miss a
              single update.
            </p>
          </div>

          <div className="card animated-card left-animation">
            <img
              src="https://files.oaiusercontent.com/file-Am1jdJWqmwAUVzxDJDB9GV?se=2024-12-31T08%3A09%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3a49c10b-2ae7-435e-b2ce-881d60b77874.webp&sig=NCHQJxqO8tTcOUmpsvKof%2BKFbhj1Z%2BZjz5v/0JhjyQ4%3D"
              alt="Perfect Match"
            />
            <h3>Perfect Match</h3>
            <p>Discover your eligibility for courses tailored to your goals.</p>
          </div>

          <div className="card animated-card right-animation">
            <img
              src="https://files.oaiusercontent.com/file-JxoCaCy8ZLVbmoJvxZJSmZ?se=2024-12-31T08%3A11%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dcf92bc1f-75c3-4903-9ebb-3d05d166b48b.webp&sig=79JhqUXkkTPXM4EYRfOrEI4bd65UAiz5qcM6BvOsuMo%3D"
              alt="Expert Support"
            />
            <h3>Expert Support, Anytime</h3>
            <p>
              Connect directly with admission experts through chats and calls,
              all within the app.
            </p>
          </div>

          <button className="cta-button">Let’s get started</button>
        </div>
      </div>
    </section>
  );
};

export default AnimationIamge;
