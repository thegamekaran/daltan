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
                providing an extensive and swift list of available university
                and course selections.
              </li>
              <li>
                My Office, a comprehensive CRM tool designed for agents and
                their teams, facilitates access to all documentation, tracks
                employee performance, and offers the flexibility of branch
                integration.
              </li>
              <li>
                An intuitive Easy Dashboard featuring scholarships, open
                intakes, application fee waivers, and the ability to explore top
                colleges and universities at a single click.
              </li>
            </ul>
          </div>
          <div className="usps-images">
            <img
              src="https://plus.unsplash.com/premium_photo-1708598173837-f54121e75444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMGluZm9ybWF0aW9ufGVufDB8fDB8fHww"
              alt="Person using laptop"
              className="animated-image"
            />
            <img
              src="https://images.unsplash.com/photo-1622295024745-079082431f1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZGVudCUyMGluZm9ybWF0aW9ufGVufDB8fDB8fHww"
              alt="Mobile app screen"
              className="animated-image"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJvb2tzfGVufDB8fDB8fHww"
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
