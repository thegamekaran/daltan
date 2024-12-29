import React from "react";
import "./Home.css";
import Header from "../../header/Header";

const Home = () => {
  return (
    <main className="home">
      <div className="content">
        <h1>About The Company</h1>
        <p>
          At Daltin, we connect students with universities worldwide through our
          innovative all-in-one platform, streamlining the student recruiting
          process. We empower students with educational opportunities that
          enhance their quality of life and promote global betterment. By
          bridging international education providers and recruiting partners, we
          provide students access to diverse study options from anywhere in the
          world, transforming lives through education.
        </p>
      </div>
      <div className="images">
        <img
          src="https://unsplash.it/200/150"
          alt="Graduates"
          className="image-1"
        />
        <img src="https://unsplash.it/300/200" alt="Team" className="image-2" />
      </div>
    </main>
  );
};

export default Home;
