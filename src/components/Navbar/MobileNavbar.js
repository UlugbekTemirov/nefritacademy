import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Translate from "../../utils/Translate";
import { setMobileSidebar } from "../../redux/navbar.slice";

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
        <div className="flex flex-col">
          {routes.map(({ name, path }, index) => (
            <Link key={index} to={language + path}>
              <Translate dictionary={name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
