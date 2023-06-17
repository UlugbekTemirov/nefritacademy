import React from "react";
import Translate from "../utils/Translate";

function CustomForm({
  onsubmit = (e) => {
    e.preventDefault();
  },
  children,
  className = "",
  title = "",
}) {
  return (
    <form
      className={`py-[60px] px-[45px] bg-form  ${className}`}
      onSubmit={onsubmit}
    >
      <h1 className="text-3xl font-bold mb-5">
        <Translate dictionary={title} />
      </h1>
      {children}
    </form>
  );
}

export default CustomForm;
