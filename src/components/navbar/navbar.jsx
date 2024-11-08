import { faBars, faMagnifyingGlass, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import bed from "../../assets/images/icon/bed.svg";
import office from "../../assets/images/icon/office.svg";
import sofa from "../../assets/images/icon/sofa.svg";
import terrace from "../../assets/images/icon/terrace.svg";
import outdoor from "../../assets/images/icon/outdoor-cafe.svg";
import bed2 from "../../assets/images/icon/bed-2.svg";

const Navbar = () => {
  // const [checked, setchecked] = useState(false);
  // const toggleChecked = () => {
  //   setchecked(!checked);
  // };

  return (
    <div className="md:bg-gray-800 bg-white">
      <div className="container md:flex hidden ">
        <div className="px-8 py-4  bg-primary flex items-center cursor-pointer relative group">
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
        <div className=" flex items-center justify-between flex-grow pl-12">
          <div className="flex flex-row items-center space-x-6 capitalize">
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
