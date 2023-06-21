import React, { useEffect } from "react";

// flags
import uzbekistan_flag from "../../assets/icons/uzbekistan.png";
import england_flag from "../../assets/icons/uzbekistan.png";
import russia_flag from "../../assets/icons/uzbekistan.png";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setLanguage } from "../../redux/navbar.slice";

const LanguageButton = () => {
  const langs = [
    {
      value: "uz",
      icon: uzbekistan_flag,
    },
    {
      value: "ru",
      icon: russia_flag,
    },
    {
      value: "en",
      icon: england_flag,
    },
  ];

  const { language } = useSelector((state) => state.navbar);
  const [dispatch, location, navigate] = [
    useDispatch(),
    useLocation(),
    useNavigate(),
  ];

  useEffect(() => {
    const path = location.pathname.slice(4);
    const { search } = location;
    navigate(`/${language}/${path}${search}`, { replace: true });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div>
      <select
        style={{
          WebkitAppearance: "none",
        }}
        value={language}
        onChange={(e) => dispatch(setLanguage(e.target.value.toLowerCase()))}
        className="p-2 rounded-md uppercase bg-transparent hover:bg-black/[0.1] cursor-pointer border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      >
        {langs.map(({ icon, value }, index) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageButton;
