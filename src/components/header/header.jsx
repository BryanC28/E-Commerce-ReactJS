import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex flex-col md:flex-row sm:items-center items-start justify-between">
        {/* logo */}
        <Link to={"/"}>
          <img src={Logo} className="sm:w-32 w-40" alt="logo" />
        </Link>
        {/* Search bar */}
        <div className="hidden w-full max-w-xl sm:flex relative">
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
        <div className=" hidden sm:flex sm:items-center space-x-4 translate-x-0 md:translate-x-3">
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
