import React from "react";
import { news } from "../../../db/news.db";
import NewsCard from "./NewsCard";

const NewsList = () => {
  return (
    <div className="grid xl:grid-cols-2 gap-10">
      {news.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  );
};

export default NewsList;
