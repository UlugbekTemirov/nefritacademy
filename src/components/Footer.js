import React from "react";

// layout
import Container from "../layout/Container";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Translate from "../utils/Translate";
import { useSelector } from "react-redux";

const Footer = () => {
  const navigation = [
    {
      title: { uz: "Biz haqimizda", ru: "О нас", en: "About Us" },
      link: "/about",
    },
    {
      title: { uz: "Mahsulotlar", ru: "Продукты", en: "Products" },
      link: "/products",
    },
    {
      title: { uz: "Xizmatlar", ru: "Услуги", en: "Services" },
      link: "/services",
    },
    {
      title: { uz: "Yangiliklar", ru: "Новости", en: "News" },
      link: "/news",
    },
    {
      title: { uz: "Aloqa", ru: "Контакт", en: "Contact" },
      link: "/contact",
    },
  ];

  const { lang } = useSelector((state) => state.navbar);

  // #101C32 # previous footer color

  return (
    <div className="bg-footer pt-[80px] pb-5">
      <Container>
        <div className="grid md:grid-cols-4 grid-cols-1">
          <div>
            <Logo />
          </div>
          <div>
            <h3 className="text-white font-bold text-2xl mb-5">
              <Translate
                dictionary={{
                  uz: "Xarita",
                  en: "Navigation",
                  ru: "Навигация",
                }}
              />
            </h3>
            <div className="flex flex-col gap-2">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  className="w-fit text-xl text-gray-300/[0.6] font-medium hover:text-white duration-300"
                  to={lang + item.link}
                >
                  <Translate dictionary={item.title} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-gray-400 text-center">
            Created by uniweek technologies
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
