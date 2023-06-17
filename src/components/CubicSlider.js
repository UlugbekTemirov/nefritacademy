import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

const CubicSlider = ({ slides }) => {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="cube-slider"
    >
      {slides.map((image, index) => (
        <SwiperSlide key={index}>
          <img className="w-full h-[300px]" src={image} alt="#" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CubicSlider;
