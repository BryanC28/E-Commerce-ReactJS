import React from "react";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <Footer/>
    </>
  );
};

export default Layouts;
