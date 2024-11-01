import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Header from "./header/dashHeader";
import Sidebar from "./sidebar/dashSidebar";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className={`${darkMode && "dark"} font-quickSan` }>
      <Header toggleDarkMode={toggleDarkMode} toggleSidebar={toggleSidebar} darkMode={darkMode}/>
      <Sidebar isSidebarOpen={isSidebarOpen}/>
    </div>
  );
};

export default Dashboard;
