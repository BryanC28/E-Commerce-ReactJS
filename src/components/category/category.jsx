import React from "react";
import cate1 from "../../assets/images/category-1.jpg";
import cate2 from "../../assets/images/category-2.jpg";
import cate3 from "../../assets/images/category-3.jpg";
import cate4 from "../../assets/images/category-4.jpg";
import cate5 from "../../assets/images/category-5.jpg";
import cate6 from "../../assets/images/category-6.jpg";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="container py-10">
      <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative rounded-sm overflow-hidden">
          <img src={cate1} alt="" className="w-full" />
          <Link
            to={"#"}
            className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-xl text-white hover:bg-opacity-50 transition:"
          >
            Bedroom
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden">
          <img src={cate2} alt="" className="w-full" />
          <Link
            to={"#"}
            className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-xl text-white hover:bg-opacity-50 transition:"
          >
            Sofa
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden">
          <img src={cate3} alt="" className="w-full" />
          <Link
            to={"#"}
            className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-xl text-white hover:bg-opacity-50 transition:"
          >
            Office
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden">
          <img src={cate4} alt="" className="w-full" />
          <Link
            to={"#"}
            className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-xl text-white hover:bg-opacity-50 transition:"
          >
            Outdoor
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden">
          <img src={cate5} alt="" className="w-full" />
          <Link
            to={"#"}
            className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-xl text-white hover:bg-opacity-50 transition:"
          >
            Mattress
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden">
          <img src={cate6} alt="" className="w-full" />
          <Link
            to={"#"}
            className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-xl text-white hover:bg-opacity-50 transition:"
          >
            Terrace
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
