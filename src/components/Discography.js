import React from "react";
import { albums } from "../services/albums";
import { useStaticQuery, graphql } from "gatsby";

const Discography = () => {
  const data = useStaticQuery(graphql`
    query DiscographyQuery {
      betterWorld: file(
        sourceInstanceName: { eq: "myimages" }
        relativePath: { eq: "album-better-world-out-there.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heavyBlues: file(
        sourceInstanceName: { eq: "myimages" }
        relativePath: { eq: "album-heavy-blues.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flatCreekBlues: file(
        sourceInstanceName: { eq: "myimages" }
        relativePath: { eq: "album-flat-creek-blues.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stellaBlues: file(
        sourceInstanceName: { eq: "myimages" }
        relativePath: { eq: "album-stella-blues.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tennesseeBlues: file(
        sourceInstanceName: { eq: "myimages" }
        relativePath: { eq: "album-tennessee-blues.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tennesseeBlues: file(
        sourceInstanceName: { eq: "myimages" }
        relativePath: { eq: "album-tennessee-blues.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ul className="discography-list">
      {albums.map(({ url, imgSrc, title, year, trackCount }) => (
        <li
          key={title}
          className="has-text-centered"
          style={{ paddingBottom: "2rem" }}
        >
          <figure className="cover">
            <a href={url}>
              <img src={imgSrc} alt={title} target="_blank" />
            </a>
          </figure>
          <p className="title is-size-5 is-uppercase">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </p>
          <p className="subtitle">
            {year} - {trackCount}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Discography;
