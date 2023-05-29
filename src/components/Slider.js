import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slideOne from "../assets/images/slider/slide-one.png"
import slideTwo from "../assets/images/slider/slide-two.png"
import slideThree from "../assets/images/slider/slide-three.png"
import slideFour from "../assets/images/slider/slide-four.png"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slideOne} alt={slideOne} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slideTwo} alt={slideTwo} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slideThree} alt={slideThree} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slideFour} alt={slideFour} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
