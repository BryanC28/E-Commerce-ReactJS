import React from "react";
import bgBanner from "../../assets/images/banner-bg.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat py-36"
      style={{ backgroundImage: `url(${bgBanner})` }}
    >
      <div className="container">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
          best collection for <br /> home decoration
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          consectetur ipsam voluptate et! Dolorum, non nihil reprehenderit quo
          et animi deleniti sint, inventore veritatis quaerat, architecto
          assumenda quas harum odio.
        </p>
        <div className="mt-12">
          <Link
            to={"/products"}
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md
                      hover:bg-transparent hover:text-primary transition"
          >Shop now</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
