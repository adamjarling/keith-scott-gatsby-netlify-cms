import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BannerSlider from "../components/BannerSlider";
import QuoteSlider from "../components/QuoteSlider";
import HomeVideos from "../components/home/home-videos";
import FishingBlog from "../components/FishingBlog";
import TourDates from "../components/TourDates";
import useTourDates from "../hooks/useTourDates";
import { Link } from "gatsby";
import FacebookWeeklyGigs from "../components/FacebookWeeklyGigs";

const IndexPage = () => {
  const tourDates = useTourDates();

  return (
    <Layout>
      {/* <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      /> */}
      <BannerSlider />
      <section className="section content">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <div className="notification is-primary has-text-white is-size-4 is-size-5-mobile has-text-centered">
                <p>
                  Please consider donating to your favorite bluesman. Keith is
                  gratefully accepting PayPal donations at:{" "}
                </p>
                <p>
                  <a
                    href="https://www.paypal.me/fishingblues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.paypal.me/fishingblues
                  </a>
                </p>
              </div>
            </div>
            <div className="column is-half">
              <h3 className="is-uppercase has-text-white">Tour Dates</h3>
              <TourDates tourDates={tourDates.slice(0, 2)} />
              <Link
                to="/tour"
                className="button is-fullwidth"
                style={{ margin: "1rem 0" }}
              >
                View All Dates
              </Link>
              <FacebookWeeklyGigs />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <QuoteSlider />
      </section>

      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title is-size-3-mobile">
              New Single "Rolling Blues"!
            </h2>
          </header>
          <iframe
            title="Soundcloud player"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/482783187&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </section>
      <section className="section">
        <HomeVideos />
      </section>
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title is-size-3-mobile">Reviews</h2>
          </header>
          <div className="quote-slider">
            <ul className="slides">
              <li>
                <blockquote>
                  <p>
                    "Keith Scott Blues is one of our favorite acts to book at
                    the Hama Hama Oyster Saloon, his upbeat music and high
                    energy vocals are always a big pull for guests and get
                    people on their feet! Our staff are big fans of the friendly
                    musician and as well as being easy and congenial artist to
                    work with, I am always impressed with the professionalism
                    and dedication Keith brings to his shows, and to managing
                    his bookings. We look forward to having Keith back to our
                    main stage for a number of shows this year."
                  </p>
                  <cite>Sara Harvey - Saloon Manager</cite>
                  <span>Hama Hama Oysters</span>
                </blockquote>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title is-size-3-mobile">Fishing Blog</h2>
          </header>
          <FishingBlog />
        </div>
      </section>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
