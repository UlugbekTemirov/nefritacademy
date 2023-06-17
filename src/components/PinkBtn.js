import React from "react";

// state management functions
import { useSelector } from "react-redux";

function PinkBtn({ className, type = "submit", value }) {
  const { lang } = useSelector((state) => state.navbar);

  return (
    <input
      type={type}
      className={`py-3 px-5 align-middle text-white font-bold leading-0 bg-btnPink rounded-md cursor-pointer ${className}`}
      value={value[lang.toLowerCase()]}
    />
  );
}

export default PinkBtn;
