import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiMenu4Fill as MenuBtn } from "react-icons/ri";

// utils
import Container from "../../layout/Container";

// components
import Logo from "../Logo";
import DarkModeButton from "./DarkModeButton";
import MobileNavbar from "./MobileNavbar";
import LanguageButton from "./LanguageButton";
import { setMobileSidebar } from "../../redux/navbar.slice";
import Navlink from "./Navlink";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const routes = [
    {
      id: 0,
      name: {
        uz: "Bosh sahifa",
        ru: "Главная",
        en: "Home",
      },
      path: "/",
    },
    {
      id: 1,
      name: {
        uz: "Biz haqimizda",
        ru: "О нас",
        en: "About",
      },
      path: "/about",
    },
    {
      id: 2,
      name: {
        uz: "Kurslar",
        ru: "Курсы",
        en: "Courses",
      },
      path: "/courses",
    },
    {
      id: 3,
      name: {
        uz: "Blog",
        ru: "Блог",
        en: "Blog",
      },
      path: "/blog",
    },
    {
      id: 4,
      name: {
        uz: "Aloqa",
        ru: "Контакты",
        en: "Contact",
      },
      path: "/contact",
    },
  ];

  const { language } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  // calculate top position of navbar
  const [top, setTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setTop(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [active, setActive] = useState(0);
  const [width, setWidth] = useState([]);

  // calculate width of navlinks
  const navRef = useRef();
  useEffect(() => {
    const nav = navRef.current;
    const links = nav.children;
    const width = [];
    for (let i = 0; i < links.length; i++) {
      width.push({
        id: i,
        width: links[i].scrollWidth,
      });
    }
    setWidth(width);
  }, [language]);

  const location = useLocation();
  const routeName = location.pathname.split("/")[2];

  const checkPage = () => {
    const route = routes.find(
      (route) => route.path.split("/")[1] === routeName
    );
    setActive(route?.id);
  };

  useEffect(() => {
    checkPage();
  }, [routeName]);

  return (
    <div
      className={`${
        top > 50 && "shadow-lg bg-white"
      }  dark:bg-gray-900 h-[80px] flex items-center fixed top-0 w-full z-[100]`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <MobileNavbar routes={routes} />
          <div className="xl:flex hidden items-center relative z-[1]">
            <span
              style={{
                width: width[active]?.width,
                transform: `translateX(${width
                  .filter((item) => item.id < active)
                  .reduce((acc, cur) => acc + cur.width, 0)}px)`,
              }}
              className="absolute left-0 top-0 dark:bg-gray-800/[0.8] duration-300 border-2 dark:border-white border-black h-full -z-[1] rounded-xl"
            ></span>
            <div ref={navRef}>
              {routes.map((route, index) => {
                return (
                  <Navlink
                    onMouseOver={() => setActive(index)}
                    onMouseOut={checkPage}
                    routeName={routeName}
                    {...route}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DarkModeButton />
            <LanguageButton />
            <MenuBtn
              onClick={() => dispatch(setMobileSidebar(true))}
              size={40}
              className="xl:hidden cursor-pointer duration-200 dark:text-white text-gray-900"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
