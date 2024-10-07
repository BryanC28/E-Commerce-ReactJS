import React from "react";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div className="content"><Outlet/></div>
      </div>
      <Footer/>
    </>
  );
};

export default Layouts;
