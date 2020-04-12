import React from "react";
import signature from "../images/keith-scott-signature2.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <img
            src={signature}
            alt="Keith Scott Signature"
            className="footer-signature"
          />

          <address>
            <a href="mailto:keithscottblues@gmail.com">
              keithscottblues@gmail.com
            </a>
            <br />
            <a href="tel:7732133239 ">773-213-3239</a>
          </address>

          <div className="social-links">
            <a
              href="https://www.facebook.com/keith.scott.5454"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://www.instagram.com/fishing_blues/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://goo.gl/NREiMX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          <p className="copy is-size-6-mobile">
            Copyright 2020 Keith Scott Official. Developed by{" "}
            <a href="https://adamarling.com">Adam J. Arling</a>. All right
            reserved
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
