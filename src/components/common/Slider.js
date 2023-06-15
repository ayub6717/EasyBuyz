import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slideOne from "../../assets/images/slider/slide-one.png"
import slideTwo from "../../assets/images/slider/slide-two.png"
import slideThree from "../../assets/images/slider/slide-three.png"
import slideFour from "../../assets/images/slider/slide-four.png"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    const slideImg = [
      {
          id:1,
          url: slideOne,
      },
      {
          id:2,
          url: slideTwo
      },
      {
          id:3,
          url: slideThree
      },
      {
          id:3,
          url: slideFour
      }
  ]
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

            {slideImg.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <img src={item.url} alt={item.url} />
                  </SwiperSlide>
                )
            })}

      </Swiper>
    </>
  );
}
