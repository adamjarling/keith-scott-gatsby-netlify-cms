import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function ReviewsScreenShots({ children }) {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          name: { regex: "/screenshot-fans/" }
          sourceInstanceName: { eq: "myimages" }
        }
      ) {
        totalCount
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const {
    allFile: { edges },
  } = data;

  return (
    <div className="columns is-multiline">
      {edges.map(({ node }) => (
        <div key={node.name} className="column is-one-third">
          <Img fluid={node.childImageSharp.fluid} />
        </div>
      ))}
    </div>
  );
}

export default ReviewsScreenShots;
