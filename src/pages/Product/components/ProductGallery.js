import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "./ProductGallery.css";

const ProductGallery = ({ images }) => {
  //   const images = [
  //     {
  //       original: "https://picsum.photos/id/1018/1000/600/",
  //       thumbnail: "https://picsum.photos/id/1018/1000/600/",
  //     },
  //     {
  //       original: "https://picsum.photos/id/1015/1000/600/",
  //       thumbnail: "https://picsum.photos/id/1015/1000/600/",
  //     },
  //     {
  //       original: "https://picsum.photos/id/1019/1000/600/",
  //       thumbnail: "https://picsum.photos/id/1019/1000/600/",
  //     },
  //   ];

  const convertWithCustomClasses = (images) => {
    return images.map((image) => {
      return {
        originalClass: "",
        thumbnailClass: "",
        original: image,
        thumbnail: image,
      };
    });
  };

  return (
    <div className="w-full product-gallery">
      <ImageGallery
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        slideDuration={300}
        items={convertWithCustomClasses(images)}
      />
    </div>
  );
};

export default ProductGallery;
