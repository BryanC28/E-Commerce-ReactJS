import { faAddressBook, faAddressCard, faBars, faHouse, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import bed from "../../assets/images/icon/bed.svg";
import office from "../../assets/images/icon/office.svg";
import sofa from "../../assets/images/icon/sofa.svg";
import terrace from "../../assets/images/icon/terrace.svg";
import outdoor from "../../assets/images/icon/outdoor-cafe.svg";
import bed2 from "../../assets/images/icon/bed-2.svg";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [checked, setchecked] = useState(false);
  const toggleChecked = () => {
    setchecked(!checked);
  };

  return (
    <div className="bg-gray-800">
      <div className="container flex">
        <div className="sm:px-8 sm:py-4 p-2 bg-primary flex items-center cursor-pointer relative group">
          <FontAwesomeIcon icon={faBars} className="text-white" />
          <span className="text-white ml-2 capitalize">All Categories</span>
          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
            <Link
              to={"#"}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={bed} alt="bed" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Bed</span>
            </Link>
            <Link
              to={"#"}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={office} alt="bed" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Office</span>
            </Link>
            <Link
              to={"#"}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={sofa} alt="bed" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Sofa</span>
            </Link>
            <Link
              to={"#"}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={outdoor} alt="bed" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Outdoor Cafe</span>
            </Link>
            <Link
              to={"#"}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={bed2} alt="bed" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Mattress</span>
            </Link>
            <Link
              to={"#"}
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src={terrace} alt="bed" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Terrace</span>
            </Link>
          </div>
        </div>
        <div className="sm:hidden flex items-center justify-end flex-grow pl-12 relative">
          <FontAwesomeIcon
            className="text-white text-2xl"
            icon={faBars}
            onClick={toggleChecked}
          />
          {checked && (
            <div className="absolute flex flex-row w-32 top-full bg-gray-800 rounded-b-2xl ">
              <div className="flex flex-col items-start pl-4 capitalize">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "active" : "no-active"
                  }
                >
                  <FontAwesomeIcon icon={faHouse} className="mr-2" />Home
                </NavLink>
                <NavLink
                  to={"/products"}
                  className={({ isActive }) =>
                    isActive ? "active" : "no-active"
                  }
                >
                  <FontAwesomeIcon icon={faProductHunt} className="mr-2" />Product
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? "active" : "no-active"
                  }
                >
                  <FontAwesomeIcon icon={faAddressBook} className="mr-2" />Contact
                </NavLink>
                <NavLink
                  to={"/aboutus"}
                  className={({ isActive }) =>
                    isActive ? "active" : "no-active"
                  }
                >
                  <FontAwesomeIcon icon={faAddressCard} className="mr-2" />About us
                </NavLink>
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive ? "active" : "no-active"
                }
              >
                <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
                Login
              </NavLink>
              </div>
            </div>
          )}
        </div>

        <div className="hidden sm:flex items-center justify-between flex-grow pl-12">
          <div className="flex md:flex-row flex-col items-center space-x-6 capitalize">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "no-active")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) => (isActive ? "active" : "no-active")}
            >
              Product
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "active" : "no-active")}
            >
              Contact
            </NavLink>
            <NavLink
              to={"/aboutus"}
              className={({ isActive }) => (isActive ? "active" : "no-active")}
            >
              About us
            </NavLink>
          </div>
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? "active" : "no-active")}
          >
            <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
