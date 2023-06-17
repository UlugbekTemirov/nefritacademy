import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Logo = ({ onClick }) => {
  const { lang } = useSelector((state) => state.navbar);

  return (
    <Link onClick={onClick} to={`${lang}`}>
      <h1 className=" font-extrabold text-2xl text-white">LOGO</h1>
      {/* <img
        className="w-[150px]"
        src="https://raistheme.com/wp/gostudy/wp-content/uploads/2021/05/gostudy-logo-dark.png"
        alt="logo"
      /> */}
    </Link>
  );
};

export default Logo;
