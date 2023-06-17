import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setLang } from "../redux/navbar.slice";

const LanguageRoute = ({ children, route }) => {
  const { lang: language } = useSelector((state) => state.navbar);
  const { lang: param_lang } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const languages = ["uz", "ru", "en"];

  useEffect(() => {
    if (!languages.includes(param_lang)) {
      navigate(`/en/${route}`, { replace: true });
      return;
    }

    if (language === param_lang) return;
    dispatch(setLang(param_lang));

    //eslint-disable-next-line
  }, [param_lang]);

  return <div>{children}</div>;
};

export default LanguageRoute;
