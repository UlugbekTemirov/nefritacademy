import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./main.css";
import courses from "../../../db/courses.db";
import Translate from "../../../utils/Translate";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CourseCards = () => {
  const { language } = useSelector((state) => state.navbar);

  return (
    <div className="w-full h-fit overflow-hidden">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        initialSlide={Math.round(courses.length / 2)}
      >
        {courses.map(
          ({ image, name, description, modules, duration }, index) => {
            return (
              <SwiperSlide key={index} className={`bg-white dark:bg-gray-800`}>
                <div className="md:p-8 p-4 h-full">
                  <img
                    className="w-full md:h-[270px] h-[150px] rounded-xl"
                    src={image}
                    alt={name.en}
                  />
                  <div className="text-gray-900 dark:text-white md:py-5 py-2 flex flex-col justify-between md:h-[calc(100%-250px)] h-[calc(100%-140px)]">
                    <div>
                      <div className="flex items-center md:gap-10 gap-3">
                        <span className="flex items-center gap-2">
                          <HiOutlineFolderOpen
                            size={window.innerWidth < 768 ? 18 : 24}
                            className="text-gray-600 dark:text-white/[0.5]"
                          />
                          <h1 className="font-thin text-gray-600 md:text-md text-[16px] dark:text-white/[0.6] pt-1">
                            {modules}{" "}
                            <Translate
                              dictionary={{
                                uz: "modul",
                                ru: "модуль",
                                en: "module",
                              }}
                            />
                          </h1>
                        </span>
                        <span className="flex items-center gap-2">
                          <MdOutlineCalendarMonth
                            size={window.innerWidth < 768 ? 18 : 24}
                            className="text-gray-600 dark:text-white/[0.5]"
                          />
                          <h1 className="font-thin md:text-md text-[16px] text-gray-600 dark:text-white/[0.6] pt-1">
                            {duration}{" "}
                            <Translate
                              dictionary={{
                                uz: "oy",
                                ru: "месяцы",
                                en: "months",
                              }}
                            />
                          </h1>
                        </span>
                      </div>
                      <h1 className="md:text-[28px] font-semibold md:my-2 text-lg">
                        <Translate dictionary={name} />
                      </h1>
                      <p className="md:text-lg text-[12px] leading-5 font-thin opacity-70">
                        <Translate dictionary={description} />
                      </p>
                    </div>
                    <Link
                      className="bg-blue-600 px-10 py-2 md:text-xl text-sm rounded-xl text-center text-white"
                      to={language + "/contact"}
                    >
                      <Translate
                        dictionary={{
                          uz: "Batafsil",
                          ru: "Узнать больше",
                          en: "Learn more",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};

export default CourseCards;
