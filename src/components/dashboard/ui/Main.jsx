import React from "react";

const Main = ({ children }) => {
  return (
    <div
      className="text-gray-500 bg-gray-100 p-4 flex
                sm:ml-64 lg:flex-row
                gap-2 flex-col translate-all duration-300 mt-14
                dark:bg-gray-800"
      >
      {children}
    </div>
  );
};

export default Main;
