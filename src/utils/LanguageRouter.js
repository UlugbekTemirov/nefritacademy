import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setLanguage } from "../redux/navbar.slice";

const LanguageRouter = ({ children, route }) => {
  const { language } = useSelector((state) => state.navbar);
  const { lang } = useParams();
  const [navigate, dispatch] = [useNavigate(), useDispatch()];

  const languages = ["uz", "ru", "en"];

  useEffect(() => {
    if (!languages.includes(lang)) {
      navigate(`/uz${route.path}`, { replace: true });
      return;
    }

    if (language === lang) return;
    dispatch(setLanguage(lang));

    //eslint-disable-next-line
  }, [lang]);

  return <div>{children}</div>;
};

export default LanguageRouter;
