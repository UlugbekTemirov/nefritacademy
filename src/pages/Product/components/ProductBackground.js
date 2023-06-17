import React from "react";
import BgCover from "../../../components/BgCover";

const ProductBackground = ({ product }) => {
  return (
    <div>
      {product ? (
        <BgCover
          title={product.title}
          image={
            "https://popupsmart.com/blog/images/o/n/l/i/n/online-shopping-153a87f7.jpg"
          }
        />
      ) : (
        <BgCover
          title={{
            uz: "Mahsulot topilmadi",
            ru: "Продукт не найден",
            en: "Product not found",
          }}
          image="https://cdn1.vectorstock.com/i/1000x1000/52/60/404-error-not-found-page-background-design-vector-20395260.jpg"
        />
      )}
    </div>
  );
};

export default ProductBackground;
