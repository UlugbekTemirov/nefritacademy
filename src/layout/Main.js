import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
