import React, { useState } from "react";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [selected, setSelected] = useState("about");

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <div className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <Link
          to="/"
          className={selected === "about" ? "selected" : ""}
          onClick={() => handleSelect("about")}
        >
          About Us
        </Link>
        <Link
          to="/destination"
          className={selected === "destinations" ? "selected" : ""}
          onClick={() => handleSelect("destinations")}
        >
          Destinations
        </Link>
        <Link
          to="/universities"
          className={selected === "universities" ? "selected" : ""}
          onClick={() => handleSelect("universities")}
        >
          Universities
        </Link>
        <Link
          to="/our-product"
          className={selected === "products" ? "selected" : ""}
          onClick={() => handleSelect("products")}
        >
          Our Products
        </Link>
        <Link
          to="/services"
          className={selected === "services" ? "selected" : ""}
          onClick={() => handleSelect("services")}
        >
          Our Services
        </Link>
        <a href="">
          <FiSearch size={20} />
        </a>{" "}
      </nav>

      <button className="explore-button">Talk to Experts</button>
    </div>
  );
};

export default Header;
