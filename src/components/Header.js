import { Link } from "gatsby";
import React, { useState } from "react";
import signature from "../images/keith-logo-horizontal.png";

const Nav = () => (
  <ul className="menu">
    <li className="menu-item current-menu-item">
      <Link to="/">Home</Link>
    </li>
    <li className="menu-item">
      <Link to="/about/">About</Link>
    </li>
    <li className="menu-item">
      <Link to="/gallery/">Gallery</Link>
    </li>
    <li className="menu-item">
      <Link to="/music/">Music</Link>
    </li>
    <li className="menu-item">
      <Link to="/tour-dates/">Tour Dates</Link>
    </li>
    <li className="menu-item">
      <a href="https://goo.gl/NREiMX" target="_blank">
        Videos
      </a>
    </li>
  </ul>
);

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileButtonClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className="site-header">
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
  );
};

export default Header;
