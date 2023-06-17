import React from "react";

// react-router-dom
import { Link } from "react-router-dom";

// utils
import Translate from "../../../utils/Translate";

// components
import Price from "./Price";

const Product = ({ image, title, price, slug, index }) => {
  return (
    <Link
      to={slug}
      data-aos="fade-right"
      data-aos-delay={index * 100}
      data-aos-once="true"
      className="shadow-product-card hover:shadow-product-card-hover overflow-hidden rounded-2xl"
    >
      <img className="w-full h-[250px]" src={image} alt={title.en} />
      <div className={`p-5 flex flex-col justify-between h-[calc(100%-250px)]`}>
        <h3 className="text-center text-xl capitalize font-bold mb-2 text-secondary">
          <Translate dictionary={title} />
        </h3>
        <Price price={price} />
      </div>
    </Link>
  );
};

export default Product;
