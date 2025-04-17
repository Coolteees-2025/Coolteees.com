// ImageSlider.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

// Each object has the image and the route it should link to
const slides = [
  { src: "/slider/imges/black.svg", link: "/about" },
  { src: "/slider/imges/image.png", link: "/shipping-policy" },
  { src: "/slider/imges/brown.svg", link: "/privacy-policy" },
  { src: "/slider/imges/lavender.svg", link: "/terms&condition" },
  { src: "/slider/imges/white.svg", link: "/exchange&return" },
];

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="swiper-wrapper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={slide.link}>
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="slide-image"
                loading="lazy"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
