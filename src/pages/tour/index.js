import React from "react";
import Layout from "../../components/Layout";
import travers from "../../images/Sep15_PatTraversBand.jpg";
import may from "../../images/keith-flyer-2017-05-21.jpg";
import sept from "../../images/KeithScott9.21.14.jpeg";
import hardRock from "../../images/2017-02-17-hard-rock-cafe.jpg";
import jan from "../../images/Keith-Jan2016.jpg";
import { tourDates, monthNames } from "../../tour-dates";

const posters = [travers, may, sept, hardRock, jan];

const TourDates = () => {
  return (
    <Layout>
      <section className="fullwidth-block inner-content section">
        <div className="container">
          <div className="content fullwidth">
            <h2 className="entry-title">Tour Dates</h2>
            <div className="columns">
              <div className="column is-two-thirds">
                {tourDates.map(td => {
                  let date = new Date(td.date);
                  let day = date.getUTCDate();
                  let month = monthNames[date.getUTCMonth()];

                  return (
                    <div class="event">
                      <div class="entry-date">
                        <div class="date">{day}</div>
                        <span class="month">{month}</span>
                      </div>
                      <h2 class="entry-title">
                        <a href="#">
                          {td.city}, {td.state}
                          <br />@ {td.venue}
                        </a>
                      </h2>
                    </div>
                  );
                })}
              </div>
              <div className="column is-one-third">
                {posters.map(poster => (
                  <div className="item">
                    <img src={poster} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TourDates;
