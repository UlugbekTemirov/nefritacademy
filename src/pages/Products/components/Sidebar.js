import React from "react";

// components
import Categories from "../../../components/Categories";
import PriceFilter from "./PriceFilter";

// db
import { product_cats } from "../../../db/categories.db";
import Search from "../../../components/Search";
import { categoryAllHandler } from "../../../utils/helpers";

const Sidebar = () => {
  return (
    <div className="w-full">
      <Search />
      <div className="grid xl:grid-cols-1 md:grid-cols-2 xl:gap-0 gap-5 xl:pt-5">
        <Categories categories={categoryAllHandler(product_cats, 60)} />
        <PriceFilter />
      </div>
    </div>
  );
};

export default Sidebar;
