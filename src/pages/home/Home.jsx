import React from "react";
import "./Home.css";
import Header from "../../header/Header";

const Home = () => {
  return (
    <section className="home">
      <div className="conter home_flx">
        <div className="home_l">
          <h1>About The Company</h1>
          <p>
            At Daltin, we connect students with universities worldwide through
            our innovative all-in-one platform, streamlining the student
            recruiting process. We empower students with educational
            opportunities that enhance their quality of life and promote global
            betterment. By bridging international education providers and
            recruiting partners, we provide students access to diverse study
            options from anywhere in the world, transforming lives through
            education.
          </p>
        </div>
      </div>
      <div className="home_r">
        <div className="home_r_inr">
          <img
            src="https://images.unsplash.com/photo-1549637642-90187f64f420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFib3V0JTIwdGhlJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Graduates"
            className="image-1"
          />
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFuaWVzJTIwd2l0aCUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
            alt="Team"
            className="image-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
