import React from "react";
import { createPortal } from "react-dom";

const MyModal = ({ children, opened, close, className }) => {
  if (opened) {
    const modal_html = document.getElementById("modal");
    document.body.style.overflow = "hidden";
    return createPortal(
      <div
        style={{
          top: window.scrollY,
        }}
        className="absolute left-0 w-full h-screen z-[300] flex justify-center items-center"
      >
        <div
          onClick={close}
          data-aos="fade-in"
          style={{
            backdropFilter: "blur(5px)",
          }}
          className="absolute left-0 top-0 w-full h-full bg-black/[0.5] -z-[1]"
        />
        <div
          data-aos="fade-up"
          className={`bg-white rounded-xl xl:p-10 p-5 ${className}`}
        >
          {children}
        </div>
      </div>,
      modal_html
    );
  } else {
    document.body.style.overflow = "auto";
    return null;
  }
};

export default MyModal;
