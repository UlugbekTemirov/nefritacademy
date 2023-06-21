import React, { useEffect } from "react";
import { setIsDarkMode } from "../../redux/navbar.slice";
import { useDispatch, useSelector } from "react-redux";

// icons
import { BsFillMoonStarsFill as Moon, BsSunFill as Sun } from "react-icons/bs";

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.navbar);

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
    localStorage.setItem("isDarkMode", !isDarkMode);

    if (!isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    const is_dark_mode = localStorage.getItem("isDarkMode");

    if (is_dark_mode === null) {
      localStorage.setItem("isDarkMode", isDarkMode);
      return;
    } else {
      dispatch(setIsDarkMode(is_dark_mode === "true"));
      if (is_dark_mode === "true")
        document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  }, [dispatch, isDarkMode]);

  return (
    <button
      className="p-[9px] hover:bg-black/[0.1] duration-200 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-lg"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <Sun color="gold" size={22} />
      ) : (
        <Moon color="#222" size={22} />
      )}
    </button>
  );
};

export default DarkModeButton;
