import React from "react";
import { news_cats } from "../../../db/categories.db";

// helpers
import {
  assignColorHandler,
  categoryTitleHandler,
  category_colors,
  categorySearchHandler,
} from "../../../utils/helpers";

import { useLocation, useNavigate } from "react-router-dom";

const CategoryButton = ({ category }) => {
  const [location, navigate] = [useLocation(), useNavigate()];

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        categorySearchHandler(category, location, navigate);
      }}
      className={`${
        assignColorHandler(news_cats, category_colors)[category]
      } text-white pb-1 pt-2 rounded-tl-2xl rounded-br-2xl -skew-x-12 text-lg shadow-lg px-3 font-semibold`}
      type="button"
    >
      {categoryTitleHandler(news_cats, category)}
    </button>
  );
};

export default CategoryButton;
