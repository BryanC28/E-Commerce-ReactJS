import React from "react";
import User from "./User";
import Shortcut from "./Shortcut";
import Donutchart from "./Donutchart";

const DashboardProfile = () => {
  return (
    <div
      className="px-2 py-4 mt-2 bg-gray-200 rounded-lg w-full
                    dark:bg-gray-700 flex flex-col justify-between gap-4
                    lg:w-60 xl:w-80"
    >
      <User/>
      <Shortcut/>
      <Donutchart/>
    </div>
  );
};

export default DashboardProfile;
