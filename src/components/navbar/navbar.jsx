import { faBars, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import bed from "../../assets/images/icon/bed.svg";
import office from "../../assets/images/icon/office.svg";
import sofa from "../../assets/images/icon/sofa.svg";
import terrace from "../../assets/images/icon/terrace.svg";
import outdoor from "../../assets/images/icon/outdoor-cafe.svg";
import bed2 from "../../assets/images/icon/bed-2.svg";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-red-500 flex items-center cursor-pointer relative group">
          <span className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </span>
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
        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              to={"/"}
              className="text-gray-200 hover:text-white transition focus:text-red-500 active:bg-transparent"
            >
              Home
            </Link>
            <Link
              to={"/products"}
              className="text-gray-200 hover:text-white transition focus:text-red-500 active:bg-transparent"
            >
              Products
            </Link>
            <Link
              to={"/contact"}
              className="text-gray-200 hover:text-white transition focus:text-red-500  active:bg-transparent"
            >
              Contact Us
            </Link>
            <Link
              to={"/aboutus"}
              className="text-gray-200 hover:text-white transition focus:text-red-500 active:bg-transparent"
            >
              About Us
            </Link>
          </div>
          <Link
            to={"/login"}
            className="text-gray-200 hover:text-white transition focus:text-red-500 active:bg-transparent"
          >
            <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
