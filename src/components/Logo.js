import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Logo = () => {
  const { language } = useSelector((state) => state.navbar);

  return (
    <Link to={language + "/"}>
      <span className="icon icon-logo dark:bg-white bg-gray-900 md:w-[90px] md:h-[90px]"></span>
    </Link>
  );
};

export default Logo;
