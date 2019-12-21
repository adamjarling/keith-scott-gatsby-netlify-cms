import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ReviewsPostTemplate = ({
  content,
  contentComponent,
  title,
  publication,
  reviewDate
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{publication}</p>
            <p>{reviewDate}</p>

            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

ReviewsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string
};

const ReviewsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ReviewsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        publication={post.frontmatter.publication}
        reviewDate={post.frontmatter.reviewDate}
      />
    </Layout>
  );
};

ReviewsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ReviewsPost;

export const pageQuery = graphql`
  query ReviewsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        publication
        reviewDate
      }
    }
  }
`;
