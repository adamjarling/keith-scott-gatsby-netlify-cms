import React from "react";
import moment from "moment";

const TourDates = ({ tourDates }) => {
  return (
    <>
      {tourDates.map((td) => {
        return (
          <div className="event" key={td.id}>
            <div className="entry-date">
              <div className="is-size-3">{moment(td.datetime).format("D")}</div>
              <span className="month">{moment(td.datetime).format("MMM")}</span>
            </div>
            <div className="entry-title">
              <h3>
                <a href={td.url} target="_blank" rel="noopener noreferrer">
                  {td.title}
                </a>
              </h3>
              @ {td.venue.name}
              {td.venue.city && (
                <span>
                  - {td.venue.city}, {td.venue.country}
                </span>
              )}
              <p>{td.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TourDates;
