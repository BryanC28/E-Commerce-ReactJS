import React, { useState } from "react";
import Header from "./header/dashHeader";
import Sidebar from "./sidebar/dashSidebar";
import Main from "./ui/Main";
import Content from "./ui/Content";
import DashboardProfile from "./profile/Profile";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`${darkMode && "dark"} font-quickSan`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        toggleSidebar={toggleSidebar}
        darkMode={darkMode}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Main>
        <Content>Main content</Content>
        <DashboardProfile/>
      </Main>
    </div>
  );
};

export default Dashboard;
