import React from "react";
import { albums } from "../services/albums";

const Discography = () => {
  return (
    <ul className="discography-list">
      {albums.map(({ url, imgSrc, title, year, trackCount }) => (
        <li key={title}>
          <figure className="cover">
            <a href={url}>
              <img src={imgSrc} alt={title} target="_blank" />
            </a>
          </figure>
          <div className="detail">
            <h3>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h3>
            <div className="meta">
              <p className="year">{year}</p>
              <p className="track">{trackCount}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Discography;
