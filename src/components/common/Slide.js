import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = ({ slider }) => {
  const {
    id,
    slide
  } = slider;

  return (

    <div>
      <Swiper key={id}
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

            {slide.slice(0, 5).map((slideItem) => {
                return (
                  <SwiperSlide key={slideItem.id}>
                    <img src={slideItem.image} alt={slideItem.title_text} />
                  </SwiperSlide>
                )
            })}

      </Swiper>
    </div>
  );
};

export default Slider;
