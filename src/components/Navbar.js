import React, { useEffect, useState } from "react";

// layout
import Container from "../layout/Container";

// react-router-dom
import { Link } from "react-router-dom";

//translate
import Translate from "../utils/Translate";

// components
import SelectLang from "./SelectLang";
import MobileMenu from "./MobileMenu";
import HamburgerButton from "./Hamburger";
import Logo from "./Logo";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setNavbarHidden } from "../redux/navbar.slice";

const links = [
  {
    id: 2,
    name: {
      uz: "Biz haqimizda",
      ru: "О нас",
      en: "About us",
    },
    path: "/about",
  },
  {
    id: 3,
    name: {
      uz: "Mahsulotlar",
      ru: "Продукты",
      en: "Products",
    },
    path: "/products",
  },
  {
    id: 4,
    name: {
      uz: "Xizmatlar",
      ru: "Услуги",
      en: "Services",
    },
    path: "/services",
  },
  {
    id: 5,
    name: {
      uz: "Yangiliklar",
      ru: "Новости",
      en: "News",
    },
    path: "/news",
  },
  {
    id: 6,
    name: {
      uz: "Aloqa",
      ru: "Контакт",
      en: "Contact",
    },
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [top, setTop] = useState(0);
  const [downScroll, setDownScroll] = useState(false);

  const dispatch = useDispatch();

  const close = () => {
    setNavbar(false);
  };
  const { lang } = useSelector((state) => state.navbar);

  useEffect(() => {
    const handleScroll = () => {
      const a = window.pageYOffset;
      setTop(a);
      if (a > top) {
        setDownScroll(true);
        dispatch(setNavbarHidden(true));
      } else {
        setDownScroll(false);
        dispatch(setNavbarHidden(false));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [top]);

  return (
    <div>
      <MobileMenu close={close} routes={links} open={navbar} />
      <nav
        style={{
          backdropFilter: `${top < 50 ? "blur(0px)" : "blur(5px)"}`,
        }}
        className={`${
          top > 50 ? "bg-white/[0.8] shadow-2xl" : "bg-transparent"
        } h-[80px] duration-500 flex items-center fixed rounded-b-[0px] ${
          downScroll ? "-top-[80px] shadow-none" : "top-0"
        } w-full z-[200]`}
      >
        <Container>
          <div className="flex justify-between items-center">
            <Logo />
            <HamburgerButton
              open={navbar}
              dark={true}
              onClick={() => setNavbar((prev) => !prev)}
            />
            <div className="md:flex items-center hidden">
              <div className="flex items-center gap-7">
                {links.map(({ id, path, name }) => (
                  <Link
                    key={id}
                    to={`${lang}${path}`}
                    onClick={close}
                    className={` ${
                      top > 50 ? "text-primary" : "text-white"
                    } border border-transparent text-[16px] font-bold uppercase py-[5px] hover:border-b-main duration-200`}
                  >
                    <Translate dictionary={name} />
                  </Link>
                ))}
              </div>
              <SelectLang />
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
