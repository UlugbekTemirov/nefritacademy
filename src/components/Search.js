import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      className="flex xl:justify-center md:justify-start justify-center"
    >
      <div className="xl:w-full md:w-fit w-full bg-search md:p-8 p-4">
        <div className="flex w-full rounded-md overflow-hidden">
          <input
            id="search"
            name="search"
            className="outline-none p-[10px_20px] md:text-lg w-full font-semibold"
            type="text"
            placeholder="Search..."
          />
          <label
            htmlFor="search"
            className="bg-white flex justify-center items-center px-5"
          >
            <BsSearch size={22} color="#000" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;
