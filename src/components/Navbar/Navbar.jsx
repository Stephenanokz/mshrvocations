import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDroppedAbout, setIsDroppedAbout] = useState(false);
  const [isDroppedVoc, setIsDroppedVoc] = useState(false);
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
          <span>Holy Rosary Vocation</span>
        </Link>
      </div>
      <div className={`navbar__menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li
            className="nav-item"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsDroppedAbout(false);
              setIsDroppedVoc(false);
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <span
              onClick={() => {
                setIsDroppedAbout(!isDroppedAbout);
                setIsDroppedVoc(false);
              }}
            >
              About <ArrowDropDownIcon />
            </span>
            <ul
              className={`dropdown-menu ${
                isDroppedAbout ? "droppedAbout" : ""
              }`}
            >
              <li
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsDroppedAbout(!isDroppedAbout);
                }}
              >
                <Link to="/about">Who we are</Link>
              </li>
              <li
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsDroppedAbout(!isDroppedAbout);
                }}
              >
                <Link to="/apostolates">Apostolates</Link>
              </li>
              <li
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsDroppedAbout(!isDroppedAbout);
                }}
              >
                <Link to="/gallery">Gallery</Link>
              </li>
              <li
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsDroppedAbout(!isDroppedAbout);
                }}
              >
                <Link to="/blog">News & Events</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <span
              onClick={() => {
                setIsDroppedVoc(!isDroppedVoc);
                setIsDroppedAbout(false);
              }}
            >
              Vocation <ArrowDropDownIcon />
            </span>
            <ul className={`dropdown-menu ${isDroppedVoc ? "droppedVoc" : ""}`}>
              <li
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsDroppedVoc(!isDroppedVoc);
                }}
              >
                <Link to="/vocation">Our vocation</Link>
              </li>
              <li
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsDroppedVoc(!isDroppedVoc);
                }}
              >
                <Link to="/formation">Formation</Link>
              </li>
            </ul>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsDroppedAbout(false);
              setIsDroppedVoc(false);
            }}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsDroppedAbout(false);
              setIsDroppedVoc(false);
            }}
          >
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

{
  /* <li onClick={() => setIsOpen(!isOpen)}>
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
          </li> */
}
