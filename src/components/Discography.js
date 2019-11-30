import React from "react";
import betterWorld from "../images/album-better-world-out-there.jpg";
import flatCreek from "../images/album-flat-creek-blues.jpg";
import universalBlues from "../images/album-universal-blues.jpg";
import tennesseeBlues from "../images/album-tennessee-blues.jpg";
import worldBlues from "../images/album-world-blues.jpg";
import heavyBlues from "../images/album-heavy-blues.jpg";

const albums = [
  {
    url: "https://store.cdbaby.com/cd/keithscottblues",
    imgSrc: betterWorld,
    title: "Better World Out There",
    year: "2018",
    trackCount: "12 tracks"
  },
  {
    url: "https://store.cdbaby.com/cd/keithscott4",
    imgSrc: flatCreek,
    title: "Flat Creek Blues",
    year: "2015",
    trackCount: "10 tracks"
  },
  {
    url: "https://store.cdbaby.com/cd/keithscott32",
    imgSrc: universalBlues,
    title: "Universal Blues",
    year: "2011",
    trackCount: "10 tracks"
  },
  {
    url: "https://store.cdbaby.com/cd/keithscott3",
    imgSrc: tennesseeBlues,
    title: "Tennessee Blues",
    year: "2011",
    trackCount: "10 tracks"
  },
  {
    url: "https://store.cdbaby.com/cd/keithscott2",
    imgSrc: worldBlues,
    title: "World Blues",
    year: "2008",
    trackCount: "10 tracks"
  },
  {
    url: "https://store.cdbaby.com/cd/keithscott",
    imgSrc: heavyBlues,
    title: "Heavy Blues",
    year: "2001",
    trackCount: "12 tracks"
  }
];

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
              <a href={url} target="_blank">
                {title}
              </a>
            </h3>
            <span className="year">{year}</span>
            <span className="track">{trackCount}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Discography;
