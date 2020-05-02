import React from "react";
import moment from "moment";

const TourDates = ({ tourDates }) => {
  return (
    <>
      {tourDates.map((td) => {
        return (
          <div class="event" key={td.id}>
            <div class="entry-date">
              <div class="is-size-3">{moment(td.datetime).format("D")}</div>
              <span class="month">{moment(td.datetime).format("MMM")}</span>
            </div>
            <div class="entry-title">
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
