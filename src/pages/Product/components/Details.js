import React from "react";
import Translate from "../../../utils/Translate";

const Details = ({ details }) => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-16">
      {details.map((detail, index) => {
        return (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-once="true"
            className="flex items-centers justify-between text-secondary text-xl mt-2"
            key={index}
          >
            <h1 className="">
              <Translate dictionary={detail.name} />
            </h1>

            <h1 className="text-gray-500/[0.7]">{detail.value}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
