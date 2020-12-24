import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HomeVideos from "../components/home/home-videos";
import TourDates from "../components/TourDates";
import useTourDates from "../hooks/useTourDates";
import { Link } from "gatsby";
import FacebookWeeklyGigs from "../components/FacebookWeeklyGigs";
import HeroImageBg from "../components/HeroImageBg";
import QuoteSlider from "../components/QuoteSlider";
import BloggerFeed from "../components/BloggerFeed";
import ReviewsScreenShots from "../components/ReviewsScreenShots";

const IndexPage = ({ data }) => {
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

      <HeroImageBg
        title="I Got The Blues Ya'll"
        subtitle="Official website of Keith Scott Blues"
        bgImage={data.bgImage.childImageSharp.fluid}
      />

      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered ">
            <div className="columns">
              <div className="column content">
                <h3 className="title">HAPPY HOLIDAYS 2020 AND HELLO 2021!</h3>

                {/* <p>
                  Along with all the world's musicians, we're on complying with
                  the stay at home orders in Chicago and hope everyone is safe
                  out there! If so inclined, please consider donating to your
                  favorite bluesman. Keith is gratefully accepting PayPal
                  donations at:{" "}
                </p>
                <p>
                  <a
                    href="https://www.paypal.me/fishingblues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-dark"
                  >
                    Donate
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <QuoteSlider />
            </div>
            <div className="column is-half content">
              <h3 className="title">Tour Dates</h3>
              <TourDates tourDates={tourDates.slice(0, 2)} />
              <Link
                to="/tour"
                className="button is-fullwidth is-primary"
                style={{ margin: "1rem 0" }}
              >
                View All Dates
              </Link>
              <FacebookWeeklyGigs />
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h2 className="title">New Single!</h2>
            <h3 className="subtitle">"Rolling Blues"</h3>
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
        </div>
      </section>

      <section className="section">
        <HomeVideos />
      </section>

      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h2 className="title">Reviews</h2>
            <blockquote>
              Keith Scott Blues is one of our favorite acts to book at the Hama
              Hama Oyster Saloon, his upbeat music and high energy vocals are
              always a big pull for guests and get people on their feet! Our
              staff are big fans of the friendly musician and as well as being
              easy and congenial artist to work with, I am always impressed with
              the professionalism and dedication Keith brings to his shows, and
              to managing his bookings. We look forward to having Keith back to
              our main stage for a number of shows this year.
              <cite>Sara Harvey - Saloon Manager - Hama Hama Oysters</cite>
            </blockquote>

            <h2 className="title mt-6">From the fans...</h2>
            <ReviewsScreenShots />
          </div>
        </div>
      </section>

      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h2 className="title">Blues Society Affiliations</h2>
            <div className="columns">
              <div className="column has-text-centered">
                <h3 className="subtitle">Washington Blues Society</h3>
                <a href="https://wablues.org/">https://wablues.org/</a>
              </div>
              <div className="column has-text-centered">
                <h3 className="subtitle">Blues Society of Memphis</h3>
                <a href="https://www.memphisbluessociety.com/">
                  https://www.memphisbluessociety.com/
                </a>
                {/* <img src={mbs} alt="Blues Society of Memphis" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Fishing Blog</h2>
          <p className="subtitle">Join Keith on his fishing blues adventures</p>
          <a
            href="https://keithscottblog.blogspot.com/"
            className="button is-primary"
            style={{ marginBottom: "1rem" }}
          >
            View All Blog Posts
          </a>
          {/* <FishingBlog /> */}
          <BloggerFeed />
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
    bgImage: file(
      sourceInstanceName: { eq: "myimages" }
      relativePath: { eq: "blues-junkies-october-2020.JPG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 70, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
