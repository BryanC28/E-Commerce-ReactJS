import {
  faChevronRight,
  faHome,
  faTh,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../assets/images/product/product9.jpg";
import product2 from "../../assets/images/product/product12.jpg";
import product3 from "../../assets/images/product/product10.jpg";
import product4 from "../../assets/images/product/product11.jpg";
import ProductCard from "./productCard";
import Sidebar from "./productSidebar";
import Recommend from "../recommend/recommend";

const Product = () => {
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <Link to={"/"} className="text-red-500 text-base">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <FontAwesomeIcon
          className="text-sm text-gray-400"
          icon={faChevronRight}
        />
        <p className="text-medium text-gray-600">Shop</p>
      </div>
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <Sidebar />
        <div className="col-span-3">
          <div className="flex items-center justify-center mb-4">
            <select className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 rounded shadow-sm focus:ring-red-500 focus:border-red-500">
              <option>Default sorting</option>
              <option>Price low to high</option>
              <option>Price high to low</option>
            </select>
            <div className="flex gap-2 ml-auto">
              <div className="border border-red-500 w-10 h-9 flex justify-center items-center text-white bg-red-500 rounded cursor-pointer">
                <FontAwesomeIcon icon={faTh} />
              </div>
              <div className="border border-red-500 w-10 h-9 flex justify-center items-center text-gray-600 rounded cursor-pointer">
                <FontAwesomeIcon icon={faThList} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <ProductCard srcImg={product1} />
            <ProductCard srcImg={product2} />
            <ProductCard srcImg={product3} />
            <ProductCard srcImg={product4} />
            <ProductCard srcImg={product1} />
            <ProductCard srcImg={product3} />
            <ProductCard srcImg={product2} />
          </div>
        </div>
      </div>
      <Recommend/>
    </>
  );
};

export default Product;
