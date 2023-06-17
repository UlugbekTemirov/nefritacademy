import React from "react";
import Translate from "../../../utils/Translate";

const Newsletter = () => {
  return (
    <div>
      <h1 className="font-semibold text-[22px] mb-2">
        <Translate
          dictionary={{
            uz: "Yangiliklarga ulaning :",
            ru: "Подпишитесь на нашу рассылку :",
            en: "Join our newsletter :",
          }}
        />
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2 outline-none focus-within:border-gray-700 w-full text-lg font-semibold"
        />
        <button className="bg-main font-semibold text-lg w-fit text-white rounded-md py-2 px-5 hover:bg-main/[0.8] duration-200">
          <Translate
            dictionary={{
              uz: "Obuna bo'lish",
              ru: "Подписаться",
              en: "Subscribe",
            }}
          />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
