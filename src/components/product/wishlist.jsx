import React from "react";
import img from "../../assets/images/product/product12.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Wishlist = () => {
  return (
    <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
      <h4 className="font-medium uppercase">my Wishlist</h4>
      <div className="space-y-4 mt-5">
        <div className="flex justify-between items-center gap-4 border border-gray-200 rounded">
          <div className="w-28 flex-shrink-0 cursor-pointer">
            <Link to={"/product-detail"}>
              <img src={img} alt="img-wishlist" className="w-full" />
            </Link>
          </div>
          <div className="w-1/3">
            <h2 className="text-gray-800 text-xl font-medium uppercase">
              Italin Shape L Sofa
            </h2>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-green-600">In Strock</span>
            </p>
          </div>
          <div className="text-red-500 text-lg font-semibold">750.000</div>
          <Link
            to={"/add-to-cart"}
            className="py-2 px-6 text-center text-sm uppercase text-white bg-red-500 border border-red-500 rounded hover:bg-transparent hover:text-red-500 transition"
          >
            Add to cart
          </Link>
          <div className="text-gray-600 cursor-pointer px-2 justify-center items-center hover:text-red-500 transition">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 border border-gray-200 rounded">
          <div className="w-28 flex-shrink-0 cursor-pointer">
            <Link to={"/product-detail"}>
              <img src={img} alt="img-wishlist" className="w-full" />
            </Link>
          </div>
          <div className="w-1/3">
            <h2 className="text-gray-800 text-xl font-medium uppercase">
              Italin Shape L Sofa
            </h2>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-green-600">In Strock</span>
            </p>
          </div>
          <div className="text-red-500 text-lg font-semibold">750.000</div>
          <Link
            to={"/add-to-cart"}
            className="py-2 px-6 text-center text-sm uppercase text-white bg-red-500 border border-red-500 rounded hover:bg-transparent hover:text-red-500 transition"
          >
            Add to cart
          </Link>
          <div className="text-gray-600 cursor-pointer px-2 justify-center items-center hover:text-red-500 transition">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 border border-gray-200 rounded">
          <div className="w-28 flex-shrink-0 cursor-pointer">
            <Link to={"/product-detail"}>
              <img src={img} alt="img-wishlist" className="w-full" />
            </Link>
          </div>
          <div className="w-1/3">
            <h2 className="text-gray-800 text-xl font-medium uppercase">
              Italin Shape L Sofa
            </h2>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-green-600">In Strock</span>
            </p>
          </div>
          <div className="text-red-500 text-lg font-semibold">750.000</div>
          <Link
            to={"/add-to-cart"}
            className="py-2 px-6 text-center text-sm uppercase text-white bg-red-500 border border-red-500 rounded hover:bg-transparent hover:text-red-500 transition"
          >
            Add to cart
          </Link>
          <div className="text-gray-600 cursor-pointer px-2 justify-center items-center hover:text-red-500 transition">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 border border-gray-200 rounded">
          <div className="w-28 flex-shrink-0 cursor-pointer">
            <Link to={"/product-detail"}>
              <img src={img} alt="img-wishlist" className="w-full" />
            </Link>
          </div>
          <div className="w-1/3">
            <h2 className="text-gray-800 text-xl font-medium uppercase">
              Italin Shape L Sofa
            </h2>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-green-600">In Strock</span>
            </p>
          </div>
          <div className="text-red-500 text-lg font-semibold">750.000</div>
          <Link
            to={"/add-to-cart"}
            className="py-2 px-6 text-center text-sm uppercase text-white bg-red-500 border border-red-500 rounded hover:bg-transparent hover:text-red-500 transition"
          >
            Add to cart
          </Link>
          <div className="text-gray-600 cursor-pointer px-2 justify-center items-center hover:text-red-500 transition">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 border border-gray-200 rounded">
          <div className="w-28 flex-shrink-0 cursor-pointer">
            <Link to={"/product-detail"}>
              <img src={img} alt="img-wishlist" className="w-full" />
            </Link>
          </div>
          <div className="w-1/3">
            <h2 className="text-gray-800 text-xl font-medium uppercase">
              Italin Shape L Sofa
            </h2>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-green-600">In Strock</span>
            </p>
          </div>
          <div className="text-red-500 text-lg font-semibold">750.000</div>
          <Link
            to={"/add-to-cart"}
            className="py-2 px-6 text-center text-sm uppercase text-white bg-red-500 border border-red-500 rounded hover:bg-transparent hover:text-red-500 transition"
          >
            Add to cart
          </Link>
          <div className="text-gray-600 cursor-pointer px-2 justify-center items-center hover:text-red-500 transition">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
