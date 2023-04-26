import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-creative"
import { truncate } from "../utils/index"

// import required modules
import { Autoplay, Navigation } from "swiper"
import SvgComponent from "./SvgComponent"

const SwiperComponent = ({ Slides }) => {
  const characterLimit = 200;
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      grabCursor={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      speed={1000}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      {Slides.map(item => {
        const { link, title, description, image } = item
        const techStacks = item.tech_stacks
        return (
          <SwiperSlide key={title}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="swiper-link-container"
            >
              <div className="swiper-container">
                <div className="swiper-image-container">
                  <img
                    src={image?.url}
                    alt={title}
                    width="400px"
                    height="200px"
                  />
                </div>
                <div className="swiper-container-inner">
                  <h3 className="swiper-container-inner-title">{title}</h3>
                  <div className="swiper-container-inner-description">
                     {truncate(description.data.description, characterLimit)}
                  </div>
                  <div className="svg-logo-container-swiper">
                    {techStacks.map(item => {
                      return (
                        <div className="svg-logo">
                          <SvgComponent logo={item.logo} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwiperComponent
