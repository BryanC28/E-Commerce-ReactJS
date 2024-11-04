import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import method from "../../assets/images/methods.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div>
      <footer className="py-16 border-t bg-gray-200 border-gray-100">
        <div className="container grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="row-span-3 space-y-4">
            <div className="space-y-2">
              <img src={logo} alt="logo" className="w-30" />
              <p className="text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                cum odit rem voluptatum quis, fuga possimus consequuntur rerum
                impedit veritatis?
              </p>
            </div>
            <div className="w-full relative space-y-3">
              <h4 className="uppercase">newsletter</h4>
              <form className="flex">
                <input
                  type="text"
                  className="border w-1/2 border-gray-500 border-r-0 py-1 pr-3 rounded-l-md focus:ring-0 focus:border-primary"
                  placeholder="Your email address"
                />
                <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-white hover:text-primary transition ">
                  Subscibe
                </button>
              </form>
            </div>
          </div>
          <div className="row-span-3 space-y-4">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-1">
                <h3 className="text-m font-medium text-gray-900 uppercase tracking-wider">
                  my account
                </h3>
                <div className="mt-4 space-y-5">
                  <Link
                    to={"#"}
                    className="text-base text-gray-500 hvr block"
                  >
                    Order
                  </Link>
                  <Link
                    to={"#"}
                    className="text-base text-gray-500 hvr block"
                  >
                    Wishlist
                  </Link>
                  <Link
                    to={"#"}
                    className="text-base text-gray-500 hvr block"
                  >
                    Track Order
                  </Link>
                  <Link
                    to={"#"}
                    className="text-base text-gray-500 hvr block"
                  >
                    Manage Account
                  </Link>
                  <Link
                    to={"#"}
                    className="text-base text-gray-500 hvr block"
                  >
                    Return Order
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1">
                <h3 className="text-m font-medium text-gray-900 uppercase tracking-wider">
                  information
                </h3>
                <div className="mt-4 space-y-5">
                  <Link
                    to={"#"}
                    className="text-base text-gray-500 hvr block"
                  >
                    About Us
                  </Link>
                  <Link
                    to={"#"}
                    className="text-base text-gray-500 hvr block"
                  >
                    Return Policy
                  </Link>
                  <Link
                    to={"#"}
                    className="text-base text-gray-500 hvr block"
                  >
                    Terms & condition
                  </Link>
                  <Link
                    to={"#"}
                    className="text-base text-gray-500 hvr block"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to={"#"}
                    className="text-base text-gray-500 hvr block"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-3 space-y-4">
            <h3 className="text-m font-medium text-gray-900 uppercase tracking-wider">
              contact
            </h3>
            <div className="w-full relative space-y-3 text-gray-600">
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> 7895 Dr New Albuquerue,
                NM 19800, United States Of America
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +566 477 256, +566 254 575
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> info@gmail.com
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                to={"#"}
                className="text-xl border rounded-full text-blue-600"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link
                to={"#"}
                className="text-xl border rounded-full text-rose-400"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                to={"#"}
                className="text-xl border rounded-full text-gray-950"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </Link>
              <Link
                to={"#"}
                className="text-xl border rounded-full text-red-600"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 md:py-4 ">
        <div className="container flex items-center justify-between">
          <p className="text-white">&#169; RAFCART - All Rights Reserved</p>
          <p className="text-white">&#64; Remark by Nguyen Le Cuong</p>
          <div>
            <img src={method} alt="method" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
