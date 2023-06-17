import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

// translate
import Translate from "../utils/Translate";

const ArrowRight = () => {
  return <MdKeyboardArrowRight className="text-white md:mx-2" size={22} />;
};

const BgCover = ({ image, title }) => {
  const config = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const location = useLocation();
  const notallowed = ["en", "ru", "uz"];

  const getLocations = () => {
    const { pathname } = location;
    const arr = pathname.split("/").filter((item) => item.toLowerCase());
    return [
      { name: "Home", link: "/" },
      ...arr.map((item, index) =>
        index === 0
          ? { name: item, link: `/${item}` }
          : index === 1
          ? { name: item, link: `/${arr[index - 1]}/${item}` }
          : { name: item, link: `/${arr[0]}/${arr[1]}/${item}` }
      ),
    ];
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="10"
      style={config}
      className="md:h-[480px] w-full h-[340px]"
    >
      <div className=" bg-black/[0.5] w-full h-full flex justify-center items-center">
        <div className="px-3 pt-8 md:p-0">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="font-bold md:text-5xl text-3xl tracking-[5px] text-white md:mb-8 mb-4 text-center"
          >
            <Translate dictionary={title} />
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="flex justify-center items-center flex-wrap"
          >
            {getLocations().map(({ name, link }, index) => {
              if (notallowed.includes(name.toLowerCase())) return null;
              return (
                <div
                  key={index}
                  className={`flex  items-center ${
                    getLocations().length - 1 === index
                      ? " opacity-100"
                      : "opacity-40 "
                  }`}
                >
                  <Link
                    className="capitalize text-white text-[20px] pt-1 font-semibold"
                    to={link}
                  >
                    {name}
                  </Link>
                  {index !== getLocations().length - 1 ? (
                    <ArrowRight color="white" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgCover;
