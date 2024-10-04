import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar,faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../assets/images/product/product9.jpg";
import product2 from "../../assets/images/product/product12.jpg";
import product3 from "../../assets/images/product/product10.jpg";
import product4 from "../../assets/images/product/product11.jpg";

const ProductGrid = ({title}) => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {/* single product card */}
        <div className="bg-white shadow rounded overflow-hidden group">
          {/* product images */}
          <div className="relative">
            <img src={product1} alt="product" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition cursor-pointer">
              <Link
                to={"#"}
                className="text-white text-lg w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FontAwesomeIcon icon={faSearch} />
              </Link>
              <Link
                to={"#"}
                className="text-white text-lg w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>
          {/* product images */}
          {/* product content */}
          <div className="pt-4 pb-3 px-4">
            <Link to={"#"}>
              <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">
                guyer chair
              </h4>
            </Link>
            <div className="flex items-baseline mb-1 space-x-2">
              <p className="text-xl text-red-500">250.000</p>
              <p className="text-sm text-gray-400 line-through">400.000</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="text-xs text-gray-400 ml-3">(150)</div>
            </div>
          </div>
          {/* product content */}
          <Link
            to={"/add-to-cart"}
            className="block w-full py-1 text-center uppercase text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition"
          >
            Add to cart
          </Link>
        </div>
        {/* single product card */}
        <div className="bg-white shadow rounded overflow-hidden group">
          {/* product images */}
          <div className="relative">
            <img src={product2} alt="product" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition cursor-pointer">
              <Link
                to={"#"}
                className="text-white text-lg w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FontAwesomeIcon icon={faSearch} />
              </Link>
              <Link
                to={"#"}
                className="text-white text-lg w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>
          {/* product images */}
          {/* product content */}
          <div className="pt-4 pb-3 px-4">
            <Link to={"#"}>
              <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">
                guyer chair
              </h4>
            </Link>
            <div className="flex items-baseline mb-1 space-x-2">
              <p className="text-xl text-red-500">550.000</p>
              <p className="text-sm text-gray-400 line-through">800.000</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="text-xs text-gray-400 ml-3">(200)</div>
            </div>
          </div>
          {/* product content */}
          <Link
            to={"/add-to-cart"}
            className="block w-full py-1 text-center uppercase text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition"
          >
            Add to cart
          </Link>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
          {/* product images */}
          <div className="relative">
            <img src={product3} alt="product" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition cursor-pointer">
              <Link
                to={"#"}
                className="text-white text-lg w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FontAwesomeIcon icon={faSearch} />
              </Link>
              <Link
                to={"#"}
                className="text-white text-lg w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>
          {/* product images */}
          {/* product content */}
          <div className="pt-4 pb-3 px-4">
            <Link to={"#"}>
              <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">
                guyer chair
              </h4>
            </Link>
            <div className="flex items-baseline mb-1 space-x-2">
              <p className="text-xl text-red-500">250.000</p>
              <p className="text-sm text-gray-400 line-through">400.000</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="text-xs text-gray-400 ml-3">(150)</div>
            </div>
          </div>
          {/* product content */}
          <Link
            to={"/add-to-cart"}
            className="block w-full py-1 text-center uppercase text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition"
          >
            Add to cart
          </Link>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
          {/* product images */}
          <div className="relative">
            <img src={product4} alt="product" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition cursor-pointer">
              <Link
                to={"#"}
                className="text-white text-lg w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FontAwesomeIcon icon={faSearch} />
              </Link>
              <Link
                to={"#"}
                className="text-white text-lg w-9 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
          </div>
          {/* product images */}
          {/* product content */}
          <div className="pt-4 pb-3 px-4">
            <Link to={"#"}>
              <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">
                guyer chair
              </h4>
            </Link>
            <div className="flex items-baseline mb-1 space-x-2">
              <p className="text-xl text-red-500">250.000</p>
              <p className="text-sm text-gray-400 line-through">400.000</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="text-xs text-gray-400 ml-3">(150)</div>
            </div>
          </div>
          {/* product content */}
          <Link
            to={"/add-to-cart"}
            className="block w-full py-1 text-center uppercase text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
