import React from "react";
import img from "../../assets/images/product/product12.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Wishlist = () => {
  return (
    <div className="md:col-span-9 col-span-6 shadow rounded px-6 pt-5 pb-7">
      <h4 className="font-medium uppercase">my Wishlist</h4>
      <div className="space-y-4 mt-5">
        <div className="flex justify-between md:px-2 md:py-3 p-0 items-center md:gap-4 border border-gray-200 rounded">
          <div className="md:w-32 w-24 flex-shrink-0 cursor-pointer">
            <Link to={"/product-detail"}>
              <img src={img} alt="img-wishlist" className="md:w-full h-24" />
            </Link>
          </div>
          <div className="md:w-1/3 w-full pl-2">
            <h2 className="text-gray-800 md:text-xl text-xs font-medium uppercase">
              Italin Shape L Sofa
            </h2>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-green-600">In Strock</span>
            </p>
            <div className="md:hidden text-primary text-sm font-semibold">
              750.000
            </div>
            <Link
              to={"/add-to-cart"}
              className="md:hidden px-2 text-center text-sm uppercase text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </Link>
            <FontAwesomeIcon
              className="md:hidden text-gray-600 cursor-pointer px-2 justify-center items-center hover:text-primary transition"
              icon={faTrash}
            />
          </div>
          <div className="md:block hidden text-primary text-lg font-semibold">
            750.000
          </div>
          <Link
            to={"/add-to-cart"}
            className="md:block hidden py-2 px-6 text-center text-sm uppercase text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
          >
            Add to cart
          </Link>
          <FontAwesomeIcon
            className="md:block hidden text-gray-600 cursor-pointer px-2 justify-center items-center hover:text-primary transition"
            icon={faTrash}
          />
        </div>
        <div className="flex justify-between md:px-2 md:py-3 p-0 items-center md:gap-4 border border-gray-200 rounded">
          <div className="md:w-32 w-24 flex-shrink-0 cursor-pointer">
            <Link to={"/product-detail"}>
              <img src={img} alt="img-wishlist" className="md:w-full h-24" />
            </Link>
          </div>
          <div className="md:w-1/3 w-full pl-2">
            <h2 className="text-gray-800 md:text-xl text-xs font-medium uppercase">
              Italin Shape L Sofa
            </h2>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-green-600">In Strock</span>
            </p>
            <div className="md:hidden text-primary text-sm font-semibold">
              750.000
            </div>
            <Link
              to={"/add-to-cart"}
              className="md:hidden px-2 text-center text-sm uppercase text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </Link>
            <FontAwesomeIcon
              className="md:hidden text-gray-600 cursor-pointer px-2 justify-center items-center hover:text-primary transition"
              icon={faTrash}
            />
          </div>
          <div className="md:block hidden text-primary text-lg font-semibold">
            750.000
          </div>
          <Link
            to={"/add-to-cart"}
            className="md:block hidden py-2 px-6 text-center text-sm uppercase text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
          >
            Add to cart
          </Link>
          <FontAwesomeIcon
            className="md:block hidden text-gray-600 cursor-pointer px-2 justify-center items-center hover:text-primary transition"
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
