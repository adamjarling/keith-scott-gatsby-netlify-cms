import React from "react";
import Layout from "../../components/Layout";
import Checkerboard from "../../images/sketches/checkerboard-lounge.jpg";
import JohnnyWinter from "../../images/sketches/20180123_202517-1.jpg";
import AlbertKing from "../../images/sketches/sketch-albert-king.jpg";
import FreddyKing from "../../images/sketches/sketch-freddy-king.jpg";
import JazzBand from "../../images/sketches/jazz-band.jpg";

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
            breaker, who would have thought Keith is also a very talented visual
            artist? Below are some samples of Keith's current work.
          </p>
          <p className="notification">
            All items are available for purchase and/or donation. In these times
            of Covid 19 and hardship to the music industry, you can commission
            Keith to create a custom piece of art for you! Spread the love.
          </p>
          <ArtItem label="Live at Checkerboard Lounge" src={Checkerboard} />
          <ArtItem label="Johnny Winter" src={JohnnyWinter} />
          <ArtItem label="Albert King" src={AlbertKing} />
          <ArtItem label="Live at Checkerboard Lounge" src={Checkerboard} />
          <ArtItem label="Jazz Band" src={JazzBand} />
          <ArtItem label="Freddy King" src={FreddyKing} />
        </div>
      </section>
    </Layout>
  );
};

export default Art;
