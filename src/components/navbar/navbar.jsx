import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTiktok, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-red-500 flex items-center cursor-pointer relative group">
          <span className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </span>
          <span className="text-white ml-2 capitalize">All Categories</span>

          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300">
            <Link to={"#"} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-500 w-5 h-5 object-contain"/>
                <span className="ml-6 text-gray-600 text-sm">FaceBook</span>
            </Link>
            <Link to={"#"} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <FontAwesomeIcon icon={faTiktok} className="w-5 h-5 object-contain"/>
                <span className="ml-6 text-gray-600 text-sm">Tiktok</span>
            </Link>
            <Link to={"#"} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 object-contain"/>
                <span className="ml-6 text-gray-600 text-sm">Instagram</span>
            </Link>
            <Link to={"#"} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5 object-contain"/>
                <span className="ml-6 text-gray-600 text-sm">Linkedin</span>
            </Link>
            <Link to={"#"} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <FontAwesomeIcon icon={faYoutube} className="text-red-600 w-5 h-5 object-contain"/>
                <span className="ml-6 text-gray-600 text-sm">Youtube</span>
            </Link>
            <Link to={"#"} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5 object-contain"/>
                <span className="ml-6 text-gray-600 text-sm">Github</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 capitalize">
                <Link to={"/"} className="text-gray-200 hover:text-white transition">Home</Link>
                <Link to={"/products"} className="text-gray-200 hover:text-white transition">Products</Link>
                <Link to={"/contact"} className="text-gray-200 hover:text-white transition">Contact Us</Link>
                <Link to={"/aboutus"} className="text-gray-200 hover:text-white transition">About Us</Link>
            </div>
                <Link to={"/login"} className="text-gray-200 hover:text-white transition">Login/Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
