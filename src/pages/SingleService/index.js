import React from "react";
import BgCover from "../../components/BgCover";
import services from "../../db/service.db";
import { useParams } from "react-router-dom";
import { findTargetItemHandler } from "../../utils/helpers";
import ServiceSlider from "./components/ServiceSlider";
import Container from "../../layout/Container";

const Index = () => {
  const { slug } = useParams();
  const service = findTargetItemHandler(slug, services);

  if (!service) {
    return "404";
  }

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
      <Container>
        <div className="py-10">
          <ServiceSlider images={service?.images} />

          <div
            className="service-content"
            dangerouslySetInnerHTML={{ __html: service?.content }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Index;
