import React from "react";
import { Link } from "react-router-dom";
import {
  faChevronRight,
  faHeart,
  faHome,
  faShoppingBag,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProductGrid from "../product/productGrid";
import promain from "../../assets/images/product/product9.jpg";
import product1 from "../../assets/images/product/product8.jpg";
import product2 from "../../assets/images/product/product12.jpg";
import product3 from "../../assets/images/product/product10.jpg";
import product4 from "../../assets/images/product/product11.jpg";
import FilterTitle from "./filterTitle";

const ProductView = () => {
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
        <FontAwesomeIcon
          className="text-sm text-gray-400"
          icon={faChevronRight}
        />
        <p className="text-medium text-gray-600">ITALIAN L SHAPE SOFA </p>
      </div>
      <div className="container grid grid-cols-2 gap-6">
        {/* product image */}
        <div>
          <img src={promain} alt="product" className="w-full" />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src={product1}
              alt="product"
              className="w-full cursor-pointer border border-red-500"
            />
            <img
              src={product2}
              alt="product"
              className="w-full cursor-pointer border"
            />
            <img
              src={product3}
              alt="product"
              className="w-full cursor-pointer border"
            />
            <img
              src={product4}
              alt="product"
              className="w-full cursor-pointer border"
            />
            <img
              src={promain}
              alt="product"
              className="w-full cursor-pointer border"
            />
          </div>
        </div>
        {/* product image */}
        {/* ------------------ */}
        {/* product content */}
        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            ITALIAN L SHAPE SOFA{" "}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="text-xs text-gray-400 ml-3">(150 Reviews)</div>
          </div>
          <div>
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability:</span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="font-semibold space-x-2">
              <span className="text-gray-800">Brands:</span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="font-semibold space-x-2">
              <span className="text-gray-800">Category:</span>
              <span className="text-gray-600">Sofa</span>
            </p>
            <p className="font-semibold space-x-2">
              <span className="text-gray-800">SKU:</span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 mt-4">
            <p className="text-3xl text-red-500">250.000 VND</p>
            <p className="text-xl text-gray-400 line-through">400.000 VND</p>
          </div>
          <p className="text-gray-600 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            repellat explicabo minima neque necessitatibus. Sequi, dolorem vitae
            quo, voluptates molestias animi dicta nam deserunt aut atque
            similique repudiandae, repellat ullam.
          </p>
          <FilterTitle title={"size"}>
            <div className="flex items-center gap-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xs"
                  className="hidden"
                />
                <label
                  htmlFor="size-xs"
                  className="text-sx border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-s"
                  className="hidden"
                />
                <label
                  htmlFor="size-s"
                  className="text-sx border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  S
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-m"
                  className="hidden"
                />
                <label
                  htmlFor="size-m"
                  className="text-sx border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  M
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-l"
                  className="hidden"
                />
                <label
                  htmlFor="size-l"
                  className="text-sx border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  L
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xl"
                  className="hidden"
                />
                <label
                  htmlFor="size-xl"
                  className="text-sx border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XL
                </label>
              </div>
            </div>
          </FilterTitle>
          <FilterTitle title={"color"}>
            <div className="flex items-center gap-2">
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="color-red"
                  className="hidden"
                />
                <label
                  htmlFor="color-red"
                  className="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm bg-red-500 block"
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="color-white"
                  className="hidden"
                />
                <label
                  htmlFor="color-white"
                  className="border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm bg-white"
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="color-black"
                  className="hidden"
                />
                <label
                  htmlFor="color-black"
                  className="border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm bg-black"
                ></label>
              </div>
            </div>
          </FilterTitle>
          <FilterTitle title={"Quantity"}>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                8
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </FilterTitle>
          {/* Cart Button */}
          <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
            <Link
              to={"/add-to-cart"}
              className="bg-red-500 border border-red-500 text-white px-8 py-2 font-medium 
              rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-red-500 transition"
            >
              <FontAwesomeIcon icon={faShoppingBag} />
              Add to cart
            </Link>
            <Link
              to={"/add-to-cart"}
              className="border border-red-500 text-red-500 px-8 py-2 font-medium 
              rounded uppercase flex items-center gap-2 hover:bg-red-500 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faHeart} />
              Wishlist
            </Link>
          </div>
          {/* Cart Button */}
          <div className="flex gap-3 mt-4">
            <Link
              to={"#"}
              className="text-gray-400 text-xl hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to={"#"} className="text-gray-400 text-xl hover:text-red-600">
              <FontAwesomeIcon icon={faYoutube} />
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
          </div>
        </div>
        {/* product content */}
      </div>
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 text-gray-800 pb-3 font-medium">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600 space-y-3">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique non ex eum voluptatibus? Sed, explicabo dolorum
              assumenda, officia adipisci fugiat eaque commodi, nostrum impedit
              animi quis molestias. Aperiam, sunt accusantium.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
              cumque, eveniet vel voluptate explicabo pariatur distinctio rem
              voluptatum expedita, quo totam quaerat tenetur eius incidunt.
              Doloribus, aspernatur deserunt! Animi, voluptatibus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              porro, asperiores perspiciatis ipsam nihil provident facere quis
              voluptate, recusandae maxime eius hic ullam velit id libero animi
              dolores et sequi.
            </p>
          </div>
          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Color
              </th>
              <th className="py-2 px-4 border border-gray-300">
                Black, Brown, Red
              </th>
            </tr>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Material
              </th>
              <th className="py-2 px-4 border border-gray-300">
                Artificial Leather
              </th>
            </tr>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Weight
              </th>
              <th className="py-2 px-4 border border-gray-300">
                60Kg
              </th>
            </tr>
          </table>
        </div>
      </div>
      <ProductGrid title={"related products"} />
    </>
  );
};

export default ProductView;
