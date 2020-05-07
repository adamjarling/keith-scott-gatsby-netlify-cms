import React from "react";
import Layout from "../../components/Layout";
import Checkerboard from "../../images/sketches/checkerboard-lounge.jpg";
import JohnnyWinter from "../../images/sketches/20180123_202517-1.jpg";
import JazzBand from "../../images/sketches/jazz-band.jpg";
import BluesDude from "../../images/sketches/blues-dude.jpg";
import JohnLee from "../../images/sketches/john-lee-hooker.jpg";
import HeroImageBg from "../../components/HeroImageBg";
import { graphql } from "gatsby";

const ArtItem = ({ label, src }) => (
  <>
    <h3 className="has-text-centered title">{label}</h3>
    <figure className="image">
      <img src={src} alt="Checkerboard Lounge" />
    </figure>
  </>
);

const Art = ({ data }) => {
  return (
    <Layout>
      <HeroImageBg
        title="Folk Art"
        subtitle="Keith's visual folk art"
        bgImage={data.bgImage.childImageSharp.fluid}
      />
      <section className="section art inner-content">
        <div className="container content">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <h2 className="title">Art</h2>
              <p>
                In addition to being a bluesman, fishing afficiando, and heart
                breaker, who would have thought Keith is also a very talented
                folk artist? Below are some samples of Keith's current work.
              </p>
              <p>
                Dig it? Want Keith to make your own customized sketch? Email
                Keith:{" "}
                <a href="mailto:keithscottblues@gmail.com">
                  keithscottblues@gmail.com
                </a>
              </p>

              <ArtItem label="Johnny Winter" src={JohnnyWinter} />
              <ArtItem label="John Lee Hooker" src={JohnLee} />
              <ArtItem label="Live at Checkerboard Lounge" src={Checkerboard} />
              <ArtItem label="Jazz Band" src={JazzBand} />
              <ArtItem label="Blues Dude" src={BluesDude} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Art;

export const pageQuery = graphql`
  query ArtPageTemplate {
    bgImage: file(
      sourceInstanceName: { eq: "myimages" }
      relativePath: { eq: "sketches/checkerboard-lounge.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
