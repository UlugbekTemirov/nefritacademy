import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Translate from "../../utils/Translate";
import { setMobileSidebar } from "../../redux/navbar.slice";
import Logo from "../Logo";

const MobileNavbar = ({ routes }) => {
  const { language, mobileSidebar } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  if (mobileSidebar) document.body.classList.add("overflow-hidden");
  else document.body.classList.remove("overflow-hidden");

  return (
    <div
      onClick={() => dispatch(setMobileSidebar(false))}
      className={`xl:hidden w-full absolute top-0 left-0 h-screen bg-transparent z-[101] ${
        mobileSidebar ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="md:w-[50%] w-[80%] h-full dark:bg-gray-900 bg-white shadow-xl">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex justify-between flex-col px-5 gap-10">
          <div className="flex flex-col items-center gap-5 mt-5">
            {routes.map(({ name, path }, index) => (
              <Link
                className="py-2 px-4 bg-gray-100 dark:bg-gray-800 dark:border w-full text-center rounded-xl text-lg"
                key={index}
                to={language + path}
              >
                <Translate dictionary={name} />
              </Link>
            ))}
          </div>
          <Link
            className={`w-full rounded-xl font-semibold text-white py-3 text-md bg-blue-900 md:mt-8 mt-4 text-center`}
            to={`${language}/contact`}
          >
            <Translate
              dictionary={{
                uz: "Kurslarga yozilish",
                ru: "Записаться на курсы",
                en: "Sign up for courses",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
