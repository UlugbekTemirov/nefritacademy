import React from "react";
import { useParams } from "react-router-dom";
import BgCover from "../../components/BgCover";
import NewsWrapper from "./components/NewsWrapper";

const Index = () => {
  const { slug } = useParams();

  return (
    <div>
      <BgCover
        image={
          "https://img.freepik.com/free-vector/3d-illustration-green-empty-shelfs-green-wall-minimal-background-design-product-presentation_173207-1909.jpg"
        }
        title={{
          en: "Lorem ipsum dolor sit amet consectetur.",
          ru: "Lorem ipsum dolor sit amet consectetur.",
          uz: "Lorem ipsum dolor sit amet consectetur.",
        }}
      />
      <NewsWrapper slug={slug} />
    </div>
  );
};

export default Index;
