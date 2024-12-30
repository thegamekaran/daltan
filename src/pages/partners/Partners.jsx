import React from "react";
import "./Partners.css"; // Import the CSS file

const partnerslist = [
  {
    id: 1,
    name: "Partner 1",
    image: "https://unsplash.it/200/150",
  },
  {
    id: 2,
    name: "Partner 2",
    image: "https://unsplash.it/210/150",
  },
  {
    id: 3,
    name: "Partner 3",
    image: "https://unsplash.it/220/150",
  },
  {
    id: 4,
    name: "Partner 4",
    image: "https://unsplash.it/205/150",
  },
];

const Partners = () => {
  return (
    <div className="partners-container">
      <h1>Our Partners</h1>
      <p>
        Discover the incredible organizations we partner with to bring you the
        best opportunities and resources. Together, we’re creating pathways to
        help you achieve your goals and unlock your potential. Meet our trusted
        partners on the journey to success!
      </p>
      <div className="partners-images">
        {partnerslist.map((partner) => (
          <div key={partner.id} className="partner-image-container">
            <img
              src={partner.image}
              alt={partner.name}
              className="partner-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
