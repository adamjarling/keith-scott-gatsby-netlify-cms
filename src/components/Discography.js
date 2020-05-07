import React from "react";
import { albums } from "../services/albums";

const Discography = () => {
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
