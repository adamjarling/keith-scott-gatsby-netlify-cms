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
        <Link to="/">Home</Link>
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

const Header = props => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { location } = history;
  const pathName = location.pathname;

  const handleMobileButtonClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    /*
    <header
      className={`site-header header-wrapper ${
        pathName === "" ? "header-collapse" : ""
      }`}
    >
      <div className="container">
        <Link to="/" id="branding">
          <img
            src={signature}
            alt="Keith Scott Signature"
            className="signature"
          />
          <small className="site-description">
            Heavy Blues. The Official Website of Keith Scott
          </small>
        </Link>

        <nav className="main-navigation">
          <button
            type="button"
            className="toggle-menu"
            onClick={handleMobileButtonClick}
          >
            <i className="fa fa-bars"></i>
          </button>
          <Nav />
        </nav>

        <div
          className="mobile-menu"
          style={{ display: mobileNavOpen ? "block" : "none" }}
        >
          <Nav />
        </div>
      </div>
    </header>
    */

    <header className="site-header">
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" id="branding">
              <img
                src={signature}
                alt="Keith Scott Signature"
                className="signature"
              />
              <small className="site-description">
                Heavy Blues. The Official Website of Keith Scott
              </small>
            </Link>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu main-navigation">
            <div class="navbar-end">
              <div class="navbar-item">
                <Nav />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
