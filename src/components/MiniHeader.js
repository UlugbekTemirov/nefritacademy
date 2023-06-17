import React from "react";
import Translate from "../utils/Translate";

const MiniHeader = ({ title }) => {
  return (
    <div className="flex items-center gap-3 ml-3 mb-2">
      <h1 className="font-bold text-2xl text-secondary pt-1">
        <Translate dictionary={title} />
      </h1>
      <span className="bg-main h-[2.8px] w-10 inline-block rounded-xl"></span>
    </div>
  );
};

export default MiniHeader;
