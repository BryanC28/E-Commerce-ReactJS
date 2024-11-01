import { faElementor } from "@fortawesome/free-brands-svg-icons";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleDarkMode, darkMode, toggleSidebar }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg 3xl:hidden hover:bg-gray-100 
                        focus:outline-none focus:ring-2 focus:ring-gray-200
                      dark:text-gray-400 dark:hover:text-gray-700 dark:focus:ring-gray-600"
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
            <Link to={"#"}>
              <FontAwesomeIcon
                icon={faElementor}
                className="h-6 mx-2 text-xl text-violet-500"
              />
              <span className="font-semibold self-center text-xl sm:text-2xl whitespace-nowrap dark:text-white">
                DaxBod
              </span>
            </Link>
          </div>
          <button
            className="dark:bg-slate-50 dark:text-slate-700 rounded-full p-2"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
