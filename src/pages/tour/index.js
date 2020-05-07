import React from "react";
import Layout from "../../components/Layout";
import travers from "../../images/Sep15_PatTraversBand.jpg";
import may from "../../images/keith-flyer-2017-05-21.jpg";
import sept from "../../images/KeithScott9.21.14.jpeg";
import hardRock from "../../images/2017-02-17-hard-rock-cafe.jpg";
import jan from "../../images/Keith-Jan2016.jpg";
import useTourDates from "../../hooks/useTourDates";
import TourDates from "../../components/TourDates";
import FacebookWeeklyGigs from "../../components/FacebookWeeklyGigs";
import HeroImageBg from "../../components/HeroImageBg";
import { graphql } from "gatsby";

const posters = [travers, may, sept, hardRock, jan];

const TourDatesPage = ({ data }) => {
  const tourDates = useTourDates();

  return (
    <Layout>
      <HeroImageBg
        title="Tour Dates"
        subtitle="Catch Keith solo and with his band"
        bgImage={data.bgImage.childImageSharp.fluid}
      />
      <section className="fullwidth-block inner-content section">
        <div className="container">
          <div className="content fullwidth">
            <h2 className="entry-title">Tour Dates</h2>

            <div className="columns">
              <div className="column is-two-thirds">
                <FacebookWeeklyGigs />
                <TourDates tourDates={tourDates} />
              </div>
              <div className="column is-one-third">
                {posters.map((poster) => (
                  <div className="item" key={poster}>
                    <img src={poster} alt="Poster" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TourDatesPage;

export const pageQuery = graphql`
  query TourPageTemplate {
    bgImage: file(
      sourceInstanceName: { eq: "myimages" }
      relativePath: { eq: "IMG_7730.JPG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
