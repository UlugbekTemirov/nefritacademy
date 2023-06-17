import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const GallerySlider = ({ slides }) => {
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      console.log(swiperRef.current);
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      //   allowTouchMove={false}
      loop={true}
      speed={600}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img className="w-full h-[400px]" src={slide} alt="#" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;
