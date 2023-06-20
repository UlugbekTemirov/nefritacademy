import React from "react";
import { setIsDarkMode } from "../../redux/navbar.slice";
import { useDispatch, useSelector } from "react-redux";

// icons
import { BsFillMoonStarsFill as Moon, BsSunFill as Sun } from "react-icons/bs";

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.navbar);

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      className="p-2 hover:bg-black/[0.4] duration-200 dark:hover:bg-white/[0.4] rounded-lg"
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
