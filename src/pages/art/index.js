import React from "react";
import Layout from "../../components/Layout";
import Checkerboard from "../../images/sketches/checkerboard-lounge.jpg";
import JohnnyWinter from "../../images/sketches/20180123_202517-1.jpg";
import JazzBand from "../../images/sketches/jazz-band.jpg";
import BluesDude from "../../images/sketches/blues-dude.jpg";
import JohnLee from "../../images/sketches/john-lee-hooker.jpg";

const ArtItem = ({ label, src }) => (
  <>
    <h3
      className="has-text-centered has-text-white"
      style={{ paddingTop: "2rem" }}
    >
      {label}
    </h3>
    <figure className="image">
      <img src={src} alt="Checkerboard Lounge" />
    </figure>
  </>
);

const Art = () => {
  return (
    <Layout>
      <section className="section art inner-content">
        <div className="container content">
          <h2 className="entry-title">Art</h2>
          <p>
            In addition to being a bluesman, fishing afficiando, and heart
            breaker, who would have thought Keith is also a very talented folk
            artist? Below are some samples of Keith's current work.
          </p>
          <div className="notification is-primary has-text-white is-size-4 has-text-centered">
            <p>
              All items are available for purchase and/or donation. In these
              times of Covid 19 and hardship to the music industry, you can
              commission Keith to create a custom piece of art for you! Spread
              the love.
            </p>
            <p>
              Email Keith:{" "}
              <a href="mailto:keithscottblues@gmail.com">
                keithscottblues@gmail.com
              </a>
            </p>
          </div>
          <ArtItem label="Live at Checkerboard Lounge" src={Checkerboard} />
          <ArtItem label="Johnny Winter" src={JohnnyWinter} />
          <ArtItem label="John Lee Hooker" src={JohnLee} />
          <ArtItem label="Live at Checkerboard Lounge" src={Checkerboard} />
          <ArtItem label="Jazz Band" src={JazzBand} />
          <ArtItem label="Blues Dude" src={BluesDude} />
        </div>
      </section>
    </Layout>
  );
};

export default Art;
