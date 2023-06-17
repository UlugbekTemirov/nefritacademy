import React from "react";
import Container from "../../../layout/Container";
import { news } from "../../../db/news.db";
import { useNavigate } from "react-router-dom";
import "./NewsWrapper.css";
import Sidebar from "./Sidebar";
import Content from "./Content";

const NewsWrapper = ({ slug }) => {
  const navigate = useNavigate();

  const item = news.find((item) => item.slug === slug);
  if (!item) return navigate(-1);

  return (
    <div className="py-10">
      <Container>
        <div className="grid md:grid-cols-10 grid-cols-1 md:gap-20 gap-5">
          <div className="md:col-span-7">
            <Content {...item} />
          </div>
          <div className="md:col-span-3">
            <Sidebar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsWrapper;
