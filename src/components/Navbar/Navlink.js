import React from "react";
import Translate from "../../utils/Translate";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navlink = ({ name, path, onMouseOver, routeName, onMouseOut }) => {
  const { language } = useSelector((state) => state.navbar);

  return (
    <Link
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={`text-default dark:text-white text-[22px] px-6 ${
        routeName === path.split("/")[1] ? "" : "opacity-50 hover:opacity-90"
      }`}
      to={language + path}
    >
      <Translate dictionary={name} />
    </Link>
  );
};

export default Navlink;
