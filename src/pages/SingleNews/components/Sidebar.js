import React from "react";
import SharePost from "./SharePost";
import Translate from "../../../utils/Translate";

import { useSelector } from "react-redux";
import Newsletter from "./Newsletter";

const Sidebar = () => {
  const { is_navbar_hidden } = useSelector((state) => state.navbar);

  return (
    <div className="h-full grid grid-rows-2 md:pb-20">
      <div className="row-span-1 md:pb-[100px] pb-10">
        <div
          className={`md:sticky duration-200 ${
            is_navbar_hidden ? "top-10" : "top-[120px]"
          }`}
        >
          <p className="text-gray-600 text-lg mb-2">
            <Translate
              dictionary={{
                en: "5 min read",
                ru: "5 мин чтения",
                uz: "5 daqiqada o'qish",
              }}
            />
          </p>
          <SharePost />
        </div>
      </div>
      <div>
        <div
          className={`md:sticky duration-200 ${
            is_navbar_hidden ? "top-10" : "top-[120px]"
          }`}
        >
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
