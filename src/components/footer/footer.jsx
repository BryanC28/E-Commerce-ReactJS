import React from "react";
import { Link } from "react-router-dom";
import offer from "../../assets/images/offer.jpg";
import logo from "../../assets/images/logo.svg";
import method from "../../assets/images/methods.png";
import ProductGrid from "../product/productGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <div className="container pb-16">
        <Link to={"#"}>
          <img src={offer} alt="footer" className="w-full" />
        </Link>
        <ProductGrid title={"recommend for you"} />
        <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
          <div className="container grid grid-cols-3">
            <div className="col-span-1 space-y-8">
              <img src={logo} alt="logo" className="w-30" />
              <p className="text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                cum odit rem voluptatum quis, fuga possimus consequuntur rerum
                impedit veritatis?
              </p>
              <div className="flex space-x-6">
                <Link
                  to={"#"}
                  className="text-gray-400 text-xl hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  to={"#"}
                  className="text-gray-400 text-xl hover:text-rose-400"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  to={"#"}
                  className="text-gray-400 text-xl hover:text-gray-950"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </Link>
                <Link
                  to={"#"}
                  className="text-gray-400 text-xl hover:text-red-600"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    solutions
                  </h3>
                  <div className="mt-4 space-y-4">
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Marketing
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Analytics
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      E-Commerce
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Insights
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    support
                  </h3>
                  <div className="mt-4 space-y-4">
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Pricicing
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Documentations
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Guides
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      API Status
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    company
                  </h3>
                  <div className="mt-4 space-y-4">
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      About Us
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Blog
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Job
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Press
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    legal
                  </h3>
                  <div className="mt-4 space-y-4">
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Claim
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Privacy
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Policy
                    </Link>
                    <Link
                      to={"#"}
                      className="text-base text-gray-500 hover:text-gray-900 block"
                    >
                      Terms
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-gray-800 py-4">
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
