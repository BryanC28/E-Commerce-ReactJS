import React from "react";
import { Link } from "react-router-dom";
import offer from "../../assets/images/offer.jpg";
import ProductGrid from "../product/productGrid";

const Recommend = () => {
  return (
    <div>
      <div className="container pb-16">
        <Link to={"#"}>
          <img src={offer} alt="footer" className="w-full" />
        </Link>
        <ProductGrid title={"recommend for you"} />
      </div>
    </div>
  );
};

export default Recommend;
