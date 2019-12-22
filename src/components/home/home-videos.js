import React from "react";

const HomeVideos = () => {
  return (
    <div className="container">
      <header className="section-header">
        <h2 className="section-title">I Got The Blues, Ya'll</h2>
      </header>

      <div className="columns">
        <div className="column">
          <div className="feature">
            <figure className="cut-corner">
              <iframe
                title="Sherwood Sessions - Keith Live and Acoustic"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OIOip4ld5w4"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </figure>
            <h3 className="feature-title">
              Sherwood Sessions - Keith Live and Acoustic
            </h3>
            <p>Sherwood Sessions - Keith Live and Acoustic</p>
          </div>
        </div>
        <div className="column">
          <div className="feature">
            <figure className="cut-corner">
              <iframe
                title="Live at the Salmon Arm Roots & Blues Festival"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WNt21ZHD608?list=PL4jAzqdtu1-NEabFhfCweYRoddTTdShW7"
                frameBorder="0"
                gesture="media"
                allowFullScreen
              ></iframe>
            </figure>
            <h3 className="feature-title">
              Live at the Salmon Arm Roots & Blues Festival
            </h3>
            <p>British Columbia, Canada - 2017</p>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <div className="feature">
            <figure className="cut-corner">
              <iframe
                title="Live Keith Scott and the Electric Blues Junkies"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dS1sN1douxs"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </figure>
            <h3 className="feature-title">
              Live Keith Scott and the Electric Blues Junkies
            </h3>
            <p>Reggies - Chicago, IL</p>
          </div>
        </div>
        <div className="column">
          <div className="feature">
            <figure className="cut-corner">
              <iframe
                title="Messin Around"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/nWHVi0lvxek"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </figure>
            <h3 className="feature-title">Messin Around</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideos;
