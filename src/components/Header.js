import { Link } from "gatsby";
import React, { useState } from "react";
import signature from "../images/keith-logo-horizontal.png";
import { globalHistory as history } from "@reach/router";

const Nav = () => {
  const { location } = history;
  const pathName = location.pathname;

  return (
    <ul className="menu">
      <li
        className={`menu-item ${pathName === "/" ? "current-menu-item" : ""}`}
      >
        <Link to="/" className="navbar-item">
          Home
        </Link>
      </li>
      <li
        className={`menu-item ${
          pathName === "/about/" ? "current-menu-item" : ""
        }`}
      >
        <Link to="/about/">About</Link>
      </li>
      <li
        className={`menu-item ${
          pathName === "/gallery/" ? "current-menu-item" : ""
        }`}
      >
        <Link to="/gallery/">Gallery</Link>
      </li>
      <li
        className={`menu-item ${
          pathName === "/music/" ? "current-menu-item" : ""
        }`}
      >
        <Link to="/music/">Music</Link>
      </li>
      <li
        className={`menu-item ${
          pathName === "/tour-dates/" ? "current-menu-item" : ""
        }`}
      >
        <Link to="/tour-dates/">Tour Dates</Link>
      </li>
      <li className="menu-item">
        <a href="https://goo.gl/NREiMX" target="_blank">
          Videos
        </a>
      </li>
    </ul>
  );
};

const NavNew = () => {
  const { location } = history;
  const pathName = location.pathname;

  return (
    <>
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/about/" className="navbar-item">
        About
      </Link>
      <Link to="/gallery/" className="navbar-item">
        Gallery
      </Link>
      <Link to="/music/" className="navbar-item">
        Music
      </Link>
      <Link to="/tour-dates/" className="navbar-item">
        Tour Dates
      </Link>
      <a href="https://goo.gl/NREiMX" target="_blank" className="navbar-item">
        Videos
      </a>
    </>
  );
};

const Header = props => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { location } = history;
  const pathName = location.pathname;

  const handleMobileButtonClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo-item">
              <img
                src={signature}
                alt="Keith Scott Signature"
                className="keith-logo"
              />
              <small className="site-description is-hidden-mobile">
                Heavy Blues. The Official Website of Keith Scott
              </small>
            </Link>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              onClick={handleMobileButtonClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            className={`navbar-menu main-navigation ${
              mobileNavOpen ? "is-active" : ""
            }`}
          >
            <div class="navbar-end">
              <NavNew />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
