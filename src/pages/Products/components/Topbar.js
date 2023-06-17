import React from "react";
import Translate from "../../../utils/Translate";
import products from "../../../db/products.db";

const Topbar = () => {
  const result = products.length;

  return (
    <div className="mb-5">
      <h1 className="text-2xl font-semibold text-secondary">
        <Translate
          dictionary={{
            en: `Showing all ${result} results`,
            ru: `Показано все ${result} результатов`,
            uz: `Barcha ${result} ta natija ko'rsatilmoqda`,
          }}
        />
      </h1>
    </div>
  );
};

export default Topbar;
