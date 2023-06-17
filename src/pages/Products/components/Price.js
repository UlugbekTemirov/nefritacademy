import React from "react";

const Price = ({ price }) => {
  const findTargetCurrency = (price, currency) => {
    const targetPrice = price.find((item) => item.currency === currency);
    return targetPrice;
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <p className="text-center text-main font-bold text-[22px]">
        {findTargetCurrency(price, "uzs").amount} so'm
      </p>
      <p className="text-center text-secondary/[0.4] text-xl">
        (${findTargetCurrency(price, "usd").amount})
      </p>
    </div>
  );
};

export default Price;
