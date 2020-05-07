import React from "react";

const HomeVideos = () => {
  return (
    <div className="container content">
      <h2 className="title">I Got The Blues, Ya'll</h2>
      <h3 className="subtitle">Here's some videos for ya</h3>

      <div className="columns">
        <div className="column">
          <div className="box">
            <iframe
              title="Sherwood Sessions - Keith Live and Acoustic"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OIOip4ld5w4"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h3 className="title">
              Sherwood Sessions - Keith Live and Acoustic
            </h3>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <iframe
              title="Live at the Salmon Arm Roots & Blues Festival"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WNt21ZHD608?list=PL4jAzqdtu1-NEabFhfCweYRoddTTdShW7"
              frameBorder="0"
              gesture="media"
              allowFullScreen
            ></iframe>
            <h3 className="title">
              Live at the Salmon Arm Roots & Blues Festival
            </h3>
            <p className="subtitle">British Columbia, Canada - 2017</p>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <div className="box">
            <iframe
              title="Live Keith Scott and the Electric Blues Junkies"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dS1sN1douxs"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h3 className="title">
              Live Keith Scott and the Electric Blues Junkies
            </h3>
            <p className="subtitle">Reggies - Chicago, IL</p>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <iframe
              title="Messin Around"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nWHVi0lvxek"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h3 className="title">Messin Around</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideos;
