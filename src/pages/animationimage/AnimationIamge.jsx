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
              src="https://media.istockphoto.com/id/1976099664/photo/artificial-intelligence-processor-concept-ai-big-data-array.jpg?b=1&s=612x612&w=0&k=20&c=8_pC3MSWyeEdJYcb5bcv3JfInjuKlM-IGTAgJyXpyLI="
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
              src="https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.jpg?b=1&s=612x612&w=0&k=20&c=XfjE8RB5tOafi11x0ULuLBIr_lHijrGpx6ukKpcQGF0="
              alt="Perfect Match"
            />
            <h3>Perfect Match</h3>
            <p>Discover your eligibility for courses tailored to your goals.</p>
          </div>

          <div className="card animated-card right-animation">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvb3zQeiHglnuJ32B8dAztNG8_sfsDgI6oAg&s"
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
