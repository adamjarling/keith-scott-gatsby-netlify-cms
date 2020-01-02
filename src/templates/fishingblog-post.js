import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";

export const FishingBlogPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  photos = []
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <section className="section">
        {helmet || ""}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {photos.length > 0 &&
              photos.map(photo => (
                <div className="column is-half">
                  <Img key={photo.id} fluid={photo.childImageSharp.fluid} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

FishingBlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const FishingBlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FishingBlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Fishing Blog">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        title={post.frontmatter.title}
        photos={post.frontmatter.photos}
      />
    </Layout>
  );
};

FishingBlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default FishingBlogPost;

export const pageQuery = graphql`
  query FishingBlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        photos {
          id
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
