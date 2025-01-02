import React, { useEffect, useState } from "react";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [selected, setSelected] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  const handleSelect = (item) => {
    setSelected(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="conter header_flx">
        <div className="logo" onClick={() => handleSelect("about")}>
          Logo
        </div>
        <nav className="nav">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={selected === "about" ? "selected" : ""}
            onClick={() => handleSelect("about")}
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="destinations"
            smooth={true}
            duration={500}
            className={selected === "destinations" ? "selected" : ""}
            onClick={() => handleSelect("destinations")}
          >
            Destinations
          </ScrollLink>
          <ScrollLink
            to="universities"
            smooth={true}
            duration={500}
            className={selected === "universities" ? "selected" : ""}
            onClick={() => handleSelect("universities")}
          >
            Universities
          </ScrollLink>
          <ScrollLink
            to="products"
            smooth={true}
            duration={500}
            className={selected === "products" ? "selected" : ""}
            onClick={() => handleSelect("products")}
          >
            Our Products
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className={selected === "services" ? "selected" : ""}
            onClick={() => handleSelect("services")}
          >
            Our Services
          </ScrollLink>
          <ScrollLink
            to="partners"
            smooth={true}
            duration={500}
            className={selected === "partners" ? "selected" : ""}
            onClick={() => handleSelect("partners")}
          >
            Partners
          </ScrollLink>
          <ScrollLink
            to="image"
            smooth={true}
            duration={500}
            className={selected === "image" ? "selected" : ""}
            onClick={() => handleSelect("image")}
          >
            Image
          </ScrollLink>
          <a href="">
            <FiSearch size={20} />
          </a>
        </nav>
        <button className="explore-button">Talk to Experts</button>
      </div>
      <button type="button" className="ai_btn">
        Explore AI Courses Finder
      </button>
    </header>
  );
};

export default Header;
