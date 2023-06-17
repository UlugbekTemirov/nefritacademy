import React from "react";

// state management functions
import { useSelector } from "react-redux";

function TextArea({ className, name, placeholder, onChange = () => {} }) {
  const { lang } = useSelector((state) => state.navbar);
  return (
    <textarea
      className={`w-full font-[900] placeholder:font-[700] py-3 px-5 text-[#415674] focus:outline-none rounded-md ${className}`}
      name={name}
      placeholder={placeholder[lang.toLowerCase()]}
      onChange={onChange}
    ></textarea>
  );
}

export default TextArea;
