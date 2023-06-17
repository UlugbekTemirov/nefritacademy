import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import team from "../../../db/team.db";
import Translate from "../../../utils/Translate";
import SocialLine from "./SocialLine";

const TeamMembers = () => {
  const team_colors = [
    "#E02424",
    "#E3A008",
    "#0E9F6E",
    "#3F83F8",
    "#9061F9",
    "#6B7280",
  ];

  return (
    <div>
      <Swiper
        spaceBetween={40}
        slidesPerView={4}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {team.map(({ full_name, position, image, socials }, index) => (
          <SwiperSlide
            style={{
              borderColor: team_colors[index],
            }}
            className={`rounded-xl border-b-[8px] bg-[#F9F9F9] overflow-hidden`}
            key={index}
          >
            <img className="w-full h-[350px]" src={image} alt="#" />
            <div className="p-5 relative">
              <h1 className="font-bold text-xl mb-3">{full_name}</h1>
              <p className="text-gray-500 text-xl">
                <Translate dictionary={position} />
              </p>
              <SocialLine
                index={index}
                colors={team_colors}
                socials={socials}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamMembers;
