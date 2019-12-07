import React, { useState } from "react";

const quotes = [
  {
    description: `"It was pretty incredible," he says. "After I got to Chicago, the next
    thing I know I am at the Checkerboard Lounge and Buddy Guy was there,
    just hanging around. Junior Wells was there and everybody was real
    friendly — and it wasn't commercialized at all.`,
    author: "Keith Scott",
    caption: "Memories on first gigging in Chicago"
  },
  {
    description: `I didn't think I'd be in a band until I met Muddy Waters and
    his band. Then I said, 'I want to be in a blues band.' They
    were just so stately and well-dressed, and they took their
    music so seriously. They seemed like they were gentlemen and
    they loved what they did.`,
    author: "Keith Scott",
    caption: "First time meeting Muddy Waters in Florida"
  }
];

const Quote = ({ description, author, caption, currentQuote }) => (
  <li>
    <blockquote>
      <p>{description}</p>
      <cite>{author}</cite>
      <span>{caption}</span>
    </blockquote>
  </li>
);

const QuoteSlider = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const handleClick = e => {
    e.preventDefault();
    setCurrentQuote(currentQuote === 0 ? 1 : 0);
  };

  return (
    <div className="fullwidth-block testimonial-section">
      <div className="container">
        <div className="quote-slider">
          <ul className="slides">
            {currentQuote === 0 && <Quote {...quotes[0]} />}
            {currentQuote === 1 && <Quote {...quotes[1]} />}
          </ul>
          <ul className="flex-direction-nav">
            <li>
              <a
                className="flex-prev"
                href="#nothing"
                disabled={currentQuote === 0}
                onClick={handleClick}
              >
                <i className="fa fa-caret-left"></i>
              </a>
            </li>
            <li>
              <a
                className="flex-next"
                href="#nothing"
                disabled={currentQuote === 1}
                onClick={handleClick}
              >
                <i className="fa fa-caret-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuoteSlider;
