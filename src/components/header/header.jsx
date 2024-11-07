import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faAddressCard,
  faBars,
  faHouse,
  faMagnifyingGlass,
  faRightToBracket,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import bed from "../../assets/images/icon/bed.svg";
import office from "../../assets/images/icon/office.svg";
import sofa from "../../assets/images/icon/sofa.svg";
import terrace from "../../assets/images/icon/terrace.svg";
import outdoor from "../../assets/images/icon/outdoor-cafe.svg";
import bed2 from "../../assets/images/icon/bed-2.svg";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [checked, setchecked] = useState(false);
  const toggleChecked = () => {
    setchecked(!checked);
  };
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex md:flex-row md:items-start items-center justify-between">
        {/* logo */}
        <Link to={"/"}>
          <img src={Logo} className="md:w-32 w-40" alt="logo" />
        </Link>
        {/* Navbar mobile */}
        <div className="md:hidden flex relative cursor-pointer">
          <FontAwesomeIcon
            className="text-primary text-3xl"
            icon={faBars}
            onClick={toggleChecked}
          />
          {checked && (
            <div className="absolute flex flex-col w-32 top-full right-0 bg-gray-800 rounded-b-2xl">
              <div className="flex flex-col items-start pl-4 capitalize mb-2">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "active" : "no-active"
                  }
                >
                  <FontAwesomeIcon icon={faHouse} className="mr-2" />
                  Home
                </NavLink>
                <NavLink
                  to={"/products"}
                  className={({ isActive }) =>
                    isActive ? "active" : "no-active"
                  }
                >
                  <FontAwesomeIcon icon={faProductHunt} className="mr-2" />
                  Product
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? "active" : "no-active"
                  }
                >
                  <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
                  Contact
                </NavLink>
                <NavLink
                  to={"/aboutus"}
                  className={({ isActive }) =>
                    isActive ? "active" : "no-active"
                  }
                >
                  <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
                  About us
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
                <Link
                  to={"/account/wishlist"}
                  className="text-center text-gray-700 hover:text-primary transition relative mt-1"
                >
                  <div className="">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-xl text-white"
                    />
                    <span className="text-white pl-2">Wishlist</span>
                    <span className="absolute right-14 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                      11
                    </span>
                  </div>
                </Link>
                <Link
                  to={"/checkout"}
                  className="text-center text-gray-700 hover:text-primary transition relative mt-1"
                >
                  <div className="">
                    <FontAwesomeIcon
                      icon={faShoppingBag}
                      className="text-xl text-white"
                    />
                    <span className="text-white pl-2">Cart</span>
                    <span className="absolute right-7 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                      3
                    </span>
                  </div>
                </Link>
                <Link
                  to={"/account"}
                  className="text-center text-gray-700 hover:text-primary transition relative mt-1"
                >
                  <div className="">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-xl text-white"
                    />
                    <span className="text-white pl-2">User</span>
                  </div>
                </Link>
              </div>
              <div className="py-2 bg-primary flex items-center pl-4 cursor-pointer group">
                <span className="text-white capitalize">All Categories</span>
                <div className="absolute w-full -left-32 top-52 bg-white shadow-md divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                  <Link
                    to={"#"}
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <img
                      src={bed}
                      alt="bed"
                      className="w-5 h-5 object-contain"
                    />
                    <span className="ml-6 text-gray-600 text-sm">Bed</span>
                  </Link>
                  <Link
                    to={"#"}
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <img
                      src={office}
                      alt="bed"
                      className="w-5 h-5 object-contain"
                    />
                    <span className="ml-6 text-gray-600 text-sm">Office</span>
                  </Link>
                  <Link
                    to={"#"}
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <img
                      src={sofa}
                      alt="bed"
                      className="w-5 h-5 object-contain"
                    />
                    <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                  </Link>
                  <Link
                    to={"#"}
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <img
                      src={outdoor}
                      alt="bed"
                      className="w-5 h-5 object-contain"
                    />
                    <span className="ml-6 text-gray-600 text-sm">
                      Outdoor Cafe
                    </span>
                  </Link>
                  <Link
                    to={"#"}
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <img
                      src={bed2}
                      alt="bed"
                      className="w-5 h-5 object-contain"
                    />
                    <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                  </Link>
                  <Link
                    to={"#"}
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <img
                      src={terrace}
                      alt="bed"
                      className="w-5 h-5 object-contain"
                    />
                    <span className="ml-6 text-gray-600 text-sm">Terrace</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Search bar */}
        <div className="hidden w-full max-w-xl md:flex relative">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            type="text"
            className="border w-full border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
            placeholder="Search....."
          />
          <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition ">
            Search
          </button>
        </div>
        {/* Icon */}
        <div className=" hidden md:flex md:items-center space-x-4 translate-x-0 md:translate-x-3">
          <Link
            to={"/account/wishlist"}
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="text-xs leading-3">Wish list</div>
            <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              11
            </span>
          </Link>
          <Link
            to={"/checkout"}
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faShoppingBag} />
            </div>
            <div className="text-xs leading-3">Cart</div>
            <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              3
            </span>
          </Link>
          <Link
            to={"/account"}
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="text-xs leading-3">Account</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
