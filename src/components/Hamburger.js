import React from "react";

const HamburgerButton = ({ open, onClick, dark }) => {
  return (
    <div
      onClick={onClick}
      id="hamburger"
      className="w-[30px] h-[30px] md:hidden flex flex-col items-end relative z-[30] justify-center gap-[7px]"
    >
      <span
        className={`h-[2px] w-full ${
          dark ? "bg-black" : "bg-white"
        } duration-500 rounded-sm ${
          open
            ? "rotate-45 absolute top-1/2 left-0 -translate-y-1/2"
            : "rotate-0"
        }`}
      ></span>
      <span
        className={`h-[2px] w-[85%] ${
          dark ? "bg-black" : "bg-white"
        } duration-500 ${
          open ? "-translate-x-10 opacity-0" : "opacity-100 translate-x-0"
        }`}
      ></span>
      <span
        className={`h-[2px] ${
          dark ? "bg-black" : "bg-white"
        } duration-500 rounded-sm ${
          open
            ? "-rotate-45 w-full absolute bottom-1/2 left-0 translate-y-1/2"
            : "rotate-0 w-[70%]"
        }`}
      ></span>
    </div>
  );
};

export default HamburgerButton;
