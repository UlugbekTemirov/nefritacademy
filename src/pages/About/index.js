import React from "react";
import BgCover from "../../components/BgCover";
import Container from "../../layout/Container";
import TeamMembers from "./components/TeamMembers";

const Index = () => {
  return (
    <div data-aos="fade-up">
      <BgCover
        title={{
          uz: "Biz haqimizda",
          ru: "О Hас",
          en: "About Us",
        }}
        image="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?b=1&s=170667a&w=0&k=20&c=2sJEN1Hhg6heUi1ZxKs6pJDwcyLYXPc4pUGd3hEjOjE="
      />
      <Container>
        <h1>About us</h1>
      </Container>
    </div>
  );
};

export default Index;
