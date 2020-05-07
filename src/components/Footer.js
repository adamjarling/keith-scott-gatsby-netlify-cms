import React from "react";
import signature from "../images/keith-scott-signature2.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <section className="section has-background-dark has-text-white">
          <div className="container">
            <div className="level has-text-centered">
              <div className="level-item">
                <address>
                  <a href="mailto:keithscottblues@gmail.com">
                    keithscottblues@gmail.com
                  </a>
                  <br />
                  <a href="tel:7732133239 ">773-213-3239</a>
                </address>
              </div>
              <div className="level-item">
                <div className="social-links is-size-2">
                  <a
                    href="https://www.facebook.com/keith.scott.5454"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-large">
                      <i className="fab fa-facebook-square" />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/fishing_blues/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-large">
                      <i className="fab fa-instagram" />
                    </span>
                  </a>
                  <a
                    href="https://goo.gl/NREiMX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-large">
                      <i className="fab fa-youtube"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="level-item">
                <img
                  src={signature}
                  alt="Keith Scott Signature"
                  className="footer-signature"
                />
              </div>
            </div>

            <div className="copy has-text-centered is-size-6">
              <p>Copyright 2020 Keith Scott Official.</p>
              <p>
                Developed by <a href="https://adamarling.com">Adam J. Arling</a>
              </p>{" "}
              <p>All right reserved</p>
            </div>
          </div>
        </section>
      </footer>
    );
  }
};

export default Footer;
