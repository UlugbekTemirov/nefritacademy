import React from "react";

// components
import FeaturedPosts from "./FeaturedPosts";
import Categories from "../../../components/Categories";
import Search from "../../../components/Search";

// db
import { news_cats } from "../../../db/categories.db";
import { categoryAllHandler } from "../../../utils/helpers";

const Sidebar = () => {
  return (
    <div className="sticky top-10 left-0 ">
      <Search />
      <div className="xl:mt-10">
        <FeaturedPosts />
      </div>
      <div className="xl:mt-10">
        <Categories categories={categoryAllHandler(news_cats, 45)} />
      </div>
    </div>
  );
};

export default Sidebar;
