import React from "react";
import "./Partners.css"; // Updated CSS

const partnerslist = [
  {
    id: 1,
    name: "Partner 1",
    image:
      "https://plus.unsplash.com/premium_photo-1689531953275-a5cfcc458931?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Partner 2",
    image:
      "https://plus.unsplash.com/premium_photo-1710911198769-3212be50550b?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Partner 4",
    image:
      "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Partner 5",
    image:
      "https://images.unsplash.com/photo-1733796941440-9935f13a1cec?w=500&auto=format&fit=crop&q=60",
  },
];

const Partners = () => {
  return (
    <section className="partner-section">
      <div className="container">
        <h2>Our Partners</h2>
        <p>
          Discover the incredible organizations we partner with to bring you the
          best opportunities and resources. Together, we’re creating pathways to
          help you achieve your goals and unlock your potential. Meet our
          trusted partners on the journey to success!
        </p>
        <div className="partner-grid">
          {partnerslist.map((partner) => (
            <div key={partner.id} className="partner-card">
              <img src={partner.image} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
