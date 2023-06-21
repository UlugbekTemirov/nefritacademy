import React from "react";
import home_background from "../../../assets/home_background.webp";
import Container from "../../../layout/Container";
import { TypeAnimation } from "react-type-animation";
import Translate from "../../../utils/Translate";
import CourseCards from "./CourseCards";

const HomeHeader = () => {
  const bgConfig = {
    backgroundImage: `url(${home_background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
  };

  return (
    <div className="-mt-[80px] relative z-[1] dark:bg-none" style={bgConfig}>
      <div className="absolute top-0 left-0 w-full h-full dark:bg-[#0b1120] -z-[1]"></div>
      <div className="pt-[80px] h-full">
        <Container className="flex items-center h-full">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10 items-center">
            <div className="col-span-1">
              <h1 className="md:text-7xl text-3xl font-bold text-gray-900 dark:text-gray-100">
                <Translate
                  dictionary={{
                    uz: "Nefrit Academy - Zamonaviy kasblar maktabi",
                    ru: "Nefrit Academy - Школа современных профессий",
                    en: "Nefrit Academy - School of modern professions",
                  }}
                />
              </h1>
            </div>
            <div className="flex justify-center col-span-1">
              <CourseCards />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomeHeader;
