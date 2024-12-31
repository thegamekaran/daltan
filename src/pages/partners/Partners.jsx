import React from "react";
import "./Partners.css"; // Import the CSS file

const partnerslist = [
  {
    id: 1,
    name: "Partner 1",
    image:
      "https://plus.unsplash.com/premium_photo-1689531953275-a5cfcc458931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRvYmUlMjBmb3VuZGVyfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Partner 2",
    image:
      "https://plus.unsplash.com/premium_photo-1710911198769-3212be50550b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHN0YW4lMjBsZWUlMjBmb3VuZGVyfGVufDB8fDB8fHww",
  },

  {
    id: 4,
    name: "Partner 4",
    image:
      "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZSUyMHByb2Zlc3Npb25hbCUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Partner 5",
    image:
      "https://images.unsplash.com/photo-1733796941440-9935f13a1cec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBlb3BsZSUyMHByb2Zlc3Npb25hbCUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Partners = () => {
  return (
    <section className="our_partner">
      <div className="conter">
        <div className="partners-container">
          <h1>Our Partners</h1>
          <p>
            Discover the incredible organizations we partner with to bring you
            the best opportunities and resources. Together, we’re creating
            pathways to help you achieve your goals and unlock your potential.
            Meet our trusted partners on the journey to success!
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
      </div>
    </section>
  );
};

export default Partners;
