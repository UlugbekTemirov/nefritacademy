import React from "react";
import TopHeader from "../../components/TopHeader";
import Container from "../../layout/Container";
import Translate from "../../utils/Translate";
import ContactForm from "./ContactForm";

const Index = () => {
  return (
    <div>
      <TopHeader />
      <Container>
        <div className="py-10">
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r dark:from-sky-500 dark:to-indigo-500 from-green-950 to-green-700 text-transparent bg-clip-text">
            <Translate
              dictionary={{
                uz: "Kurslarga yozilish",
                ru: "Запись на курсы",
                en: "Registration for courses",
              }}
            />
          </h1>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Index;
