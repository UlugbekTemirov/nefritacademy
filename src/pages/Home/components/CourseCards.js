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

const CourseCards = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {courses.map(
          ({ image, name, description, modules, duration }, index) => {
            return (
              <SwiperSlide key={index} className={`bg-white dark:bg-gray-800`}>
                <div className="p-8 h-full">
                  <img
                    className="w-full h-[270px] rounded-xl"
                    src={image}
                    alt={name.en}
                  />
                  <div className="text-gray-900 dark:text-white py-5 flex flex-col justify-between h-[calc(100%-250px)]">
                    <div>
                      <div className="flex items-center gap-10">
                        <span className="flex items-center gap-2">
                          <HiOutlineFolderOpen
                            size={24}
                            className="text-gray-600 dark:text-white/[0.5]"
                          />
                          <h1 className="font-thin text-gray-600 dark:text-white/[0.6] pt-1">
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
                            size={24}
                            className="text-gray-600 dark:text-white/[0.5]"
                          />
                          <h1 className="font-thin text-gray-600 dark:text-white/[0.6] pt-1">
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
                      <h1 className="text-[28px] font-semibold my-2">
                        <Translate dictionary={name} />
                      </h1>
                      <p className="text-lg leading-5 font-thin opacity-70">
                        <Translate dictionary={description} />
                      </p>
                    </div>
                    <button
                      className="bg-blue-600 px-10 py-2 rounded-xl text-white"
                      type=""
                    >
                      <Translate
                        dictionary={{
                          uz: "Batafsil",
                          ru: "Узнать больше",
                          en: "Learn more",
                        }}
                      />
                    </button>
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
