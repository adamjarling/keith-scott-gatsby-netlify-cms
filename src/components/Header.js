import { Link } from "gatsby";
import React, { useState } from "react";
import signature from "../images/keith-logo-horizontal.png";
import { globalHistory as history } from "@reach/router";

const NavNew = () => {
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
      <Link to="/tour/" className="navbar-item">
        Tour Dates
      </Link>
      <a
        href="https://goo.gl/NREiMX"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-item"
      >
        Videos
      </a>
    </>
  );
};

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { location } = history;
  const pathName = location.pathname;

  const handleMobileButtonClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className={`site-header ${pathName === "/" ? "home" : ""}`}>
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
            <div className="navbar-end">
              <NavNew />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
