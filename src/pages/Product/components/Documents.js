import React from "react";
import { BsFiletypePdf } from "react-icons/bs";
import Translate from "../../../utils/Translate";

const Documents = ({ documents }) => {
  return (
    <div className="flex flex-col">
      {documents.map(({ title, url }, index) => {
        return (
          <a
            key={index}
            className="text-gray-600 hover:text-black hover:underline duration-150 mt-3 w-fit text-[22px] flex items-center gap-3 pt-1"
            target="_blank"
            download={true}
            href={url}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-once="true"
          >
            <BsFiletypePdf className="-mt-[6px]" />
            <Translate dictionary={title} />
          </a>
        );
      })}
    </div>
  );
};

export default Documents;
