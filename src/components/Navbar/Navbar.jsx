import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isScrolled ? `navbar scrolled` : `navbar`}>
      <div className="navbar__logo">
        <Link to="/">
          <img
            src="https://ik.imagekit.io/stephenanokz98/o/imgs%2FLOGO1.png?alt=media&token=7e16973d-39e2-462e-9f90-1a3404424520"
            alt="Logo"
          />
          <span>MSHR</span>
        </Link>
      </div>
      <div className={`navbar__menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/vocation">Vocation</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/formation">Formation</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/apostolates">Apostolates</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/blog">News & Events</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to="/donate">Support Us</Link>
          </li>
        </ul>
      </div>
      <div
        className={`navbar__hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
