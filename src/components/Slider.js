import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider(props) {
  const {slideOne,slideTwo,slideThree,slideFour} = props
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
