import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import keithTest from "../images/keith-test.png"
import betterWorld from "../images/better-world-web-banner.jpg"
import keithTony from "../images/slide-keith_tony_hob.jpg"
import sitting from "../images/keith-sitting-fade.jpg"

const BannerSlider = ({}) => {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={keithTest} />
      </div>
      <div>
        <img src={betterWorld} />
      </div>
      <div>
        <img src={keithTony} />
      </div>
      <div>
        <img src={sitting} />
      </div>
    </Carousel>
  )
}

export default BannerSlider
