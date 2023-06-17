import React from "react";
import GallerySlider from "../../../components/GallerySlider";
import "./main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import "swiper/css/effect-cube";
import CubicSlider from "../../../components/CubicSlider";

const ServiceSlider = ({ images }) => {
  return (
    <div>
      <div className="service-slider md:block hidden">
        <GallerySlider slides={images} />
      </div>
      <div className="md:hidden mb-10">
        <CubicSlider slides={images} />
      </div>
    </div>
  );
};

export default ServiceSlider;
