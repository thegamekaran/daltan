import React from "react";
import "./OurServices.css";

const OurServices = () => {
  return (
    <section className="our_sec">
    <div className="conter">
    <div className="usps-container">
      <div className="usps-content">
        <h1>Our USPs</h1>
        <p>Unique selling points encompass:</p>
        <ul>
          <li>
            Course Finder seamlessly integrated with student information,
            providing an extensive and swift list of available university and
            course selections.
          </li>
          <li>
            My Office, a comprehensive CRM tool designed for agents and their
            teams, facilitates access to all documentation, tracks employee
            performance, and offers the flexibility of branch integration.
          </li>
          <li>
            An intuitive Easy Dashboard featuring scholarships, open intakes,
            application fee waivers, and the ability to explore top colleges and
            universities at a single click.
          </li>
        </ul>
      </div>
      <div className="usps-images">
        <img
          src="https://unsplash.it/200/150"
          alt="Person using laptop"
          className="animated-image"
        />
        <img
          src="https://unsplash.it/400/500"
          alt="Mobile app screen"
          className="animated-image"
        />
        <img
          src="https://unsplash.it/600/500"
          alt="Close-up of mobile usage"
          className="animated-image"
        />
      </div>
    </div>
    </div>
    </section>
  );
};

export default OurServices;
