import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GiHamburgerMenu as MenuBtn } from "react-icons/gi";

// utils
import Container from "../../layout/Container";
import Translate from "../../utils/Translate";

// components
import Logo from "../Logo";
import DarkModeButton from "./DarkModeButton";
import MobileNavbar from "./MobileNavbar";
import LanguageButton from "./LanguageButton";
import { setMobileSidebar } from "../../redux/navbar.slice";

const Navbar = () => {
  const routes = [
    {
      name: {
        uz: "Bosh sahifa",
        ru: "Главная",
        en: "Home",
      },
      path: "/",
    },
    {
      name: {
        uz: "Biz haqimizda",
        ru: "О нас",
        en: "About",
      },
      path: "/about",
    },
    {
      name: {
        uz: "Aloqa",
        ru: "Контакты",
        en: "Contact",
      },
      path: "/contact",
    },
    {
      name: {
        uz: "Kurslar",
        ru: "Курсы",
        en: "Courses",
      },
      path: "/courses",
    },
    {
      name: {
        uz: "Blog",
        ru: "Блог",
        en: "Blog",
      },
      path: "/blog",
    },
  ];

  const [location, dispatch] = [useLocation(), useDispatch()];
  const routeName = location.pathname.split("/")[2];

  const { language } = useSelector((state) => state.navbar);

  return (
    <div className="bg-white dark:bg-gray-900 py-8">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <MobileNavbar routes={routes} />
          <div className="xl:flex hidden items-center gap-14">
            {routes.map(({ name, path }, index) => {
              return (
                <Link
                  className={`text-default dark:text-white text-[22px] ${
                    routeName === path.split("/")[1]
                      ? "font-bold"
                      : "opacity-50 hover:opacity-90"
                  }`}
                  key={index}
                  to={language + path}
                >
                  <Translate dictionary={name} />
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-5">
            <DarkModeButton />
            <LanguageButton />
          </div>
          <MenuBtn
            onClick={() => dispatch(setMobileSidebar(true))}
            size={30}
            className="md:hidden cursor-pointer"
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
