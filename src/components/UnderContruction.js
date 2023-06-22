import React from "react";
import Translate from "../utils/Translate";

const UnderContruction = () => {
  return (
    <div className="under-const">
      <div className="overlay"></div>
      <div className="stars" aria-hidden="true"></div>
      <div className="starts2" aria-hidden="true"></div>
      <div className="stars3" aria-hidden="true"></div>
      <main className="main">
        <section className="contact">
          <h1 className="title font-bold text-center">NEFRIT ACADEMY</h1>
          <h2 className="sub-title">
            <Translate
              dictionary={{
                uz: "Sahifa ishlab chiqilmoqda",
                ru: "Страница в разработке",
                en: "Page under construction",
              }}
            />
          </h2>
        </section>
      </main>
    </div>
  );
};

export default UnderContruction;
