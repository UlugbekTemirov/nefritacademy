import React from "react";

// state management functions
import { useSelector } from "react-redux";

function FormInput({
  type = "text",
  name,
  placeholder,
  onChange = () => {},
  className = "",
}) {
  const { lang } = useSelector((state) => state.navbar);

  return (
    <input
      className={`w-full font-[900] mb-4 text-[#415674] py-3 px-5 border-0 rounded-md focus:outline-none placeholder:text-[14px] placeholder:font-[700]  text-[14px] ${className}`}
      type={type}
      placeholder={placeholder[lang.toLowerCase()]}
      onChange={onChange}
      name={name}
      required
    />
  );
}

export default FormInput;
