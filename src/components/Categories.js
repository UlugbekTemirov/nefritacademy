import React from "react";
import Translate from "../utils/Translate";
import MiniHeader from "./MiniHeader";
import { useNavigate } from "react-router";

const Categories = ({ categories }) => {
  const navigate = useNavigate();

  const categoryHandler = (value) => {
    if (value === "all") return navigate("/");
    else navigate(`?category=${value}`);
  };

  return (
    <div className="mt-5">
      <MiniHeader
        title={{
          en: "Categories",
          ru: "Категории",
          uz: "Kategoriyalar",
        }}
      />
      <div>
        {categories.map(({ id, name, amount, value }) => {
          return (
            <div className="border-b-2">
              <button
                onClick={() => categoryHandler(value)}
                className="flex justify-between items-center cursor-pointer p-3 hover:bg-main hover:text-white rounded-lg w-full"
                key={id}
              >
                <h1 className="font-semibold text-xl">
                  <Translate dictionary={name} />
                </h1>
                <h1 className="bg-blue-100 w-8 h-8 rounded-md flex items-center justify-center font-bold text-secondary/[0.7]">
                  {amount}
                </h1>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
