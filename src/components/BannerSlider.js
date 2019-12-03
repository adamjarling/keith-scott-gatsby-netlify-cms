import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import keithTest from "../images/keith-test.png";
import betterWorld from "../images/better-world-web-banner.jpg";
import keithTony from "../images/slide-keith_tony_hob.jpg";
import sitting from "../images/keith-sitting-fade.jpg";

const BannerSlider = () => {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={keithTest} alt="Keith Scott promo" />
      </div>
      <div>
        <img src={betterWorld} alt="Keith Scott Better World Out There" />
      </div>
      <div>
        <img
          src={keithTony}
          alt="Keith Scott and The Electric Blues Junkies crushin"
        />
      </div>
      <div>
        <img src={sitting} alt="Keith Scott promo shot" />
      </div>
    </Carousel>
  );
};

export default BannerSlider;
