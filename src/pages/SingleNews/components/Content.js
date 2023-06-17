import React from "react";
import Translate from "../../../utils/Translate";

const Content = ({ content, title }) => {
  return (
    <div>
      <h1 className="font-bold md:text-4xl text-3xl text-left mb-5">
        <Translate dictionary={title} />
      </h1>
      <div
        className="news-wrapper"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default Content;
