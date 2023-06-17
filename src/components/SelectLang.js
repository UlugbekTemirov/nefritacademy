import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../redux/navbar.slice";
import { useLocation, useNavigate } from "react-router-dom";

const options = [
  {
    id: 1,
    name: "uz",
  },
  {
    id: 2,
    name: "ru",
  },
  {
    id: 3,
    name: "en",
  },
];

const SelectLang = () => {
  const { lang } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.slice(4);
    const { search } = location;
    navigate(`/${lang}/${path}${search}`, { replace: true });

    console.log(lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <div className="relative pl-4">
      <select
        value={lang}
        onChange={(e) => dispatch(setLang(e.target.value.toLowerCase()))}
      >
        {options.map(({ name, id }) => {
          return (
            <option key={id} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectLang;
