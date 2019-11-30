import React from "react";

const QuoteSlider = ({}) => {
  return (
    <div className="fullwidth-block testimonial-section">
      <div className="container">
        <div className="quote-slider">
          <ul className="slides">
            <li style={{ textAlign: "left", background: "inherit" }}>
              <blockquote>
                <p>
                  "I didn't think I'd be in a band until I met Muddy Waters and
                  his band. Then I said, 'I want to be in a blues band.' They
                  were just so stately and well-dressed, and they took their
                  music so seriously. They seemed like they were gentlemen and
                  they loved what they did."
                </p>
                <cite>Keith Scott</cite>
                <span>First time meeting Muddy Waters in Florida</span>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p>
                  "It was pretty incredible," he says. "After I got to Chicago,
                  the next thing I know I am at the Checkerboard Lounge and
                  Buddy Guy was there, just hanging around. Junior Wells was
                  there and everybody was real friendly — and it wasn't
                  commercialized at all."
                </p>
                <cite>Keith Scott</cite>
                <span>Memories on first gigging in Chicago</span>
              </blockquote>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuoteSlider;
