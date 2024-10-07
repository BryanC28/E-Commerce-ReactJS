import React from "react";
import product1 from "../../assets/images/product/product9.jpg";
import product2 from "../../assets/images/product/product12.jpg";
import product3 from "../../assets/images/product/product10.jpg";
import product4 from "../../assets/images/product/product11.jpg";
import ProductCard from "./productCard";

const ProductGrid = ({title}) => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-4 gap-6">
        <ProductCard srcImg={product1}/>
        <ProductCard srcImg={product2}/>
        <ProductCard srcImg={product3}/>
        <ProductCard srcImg={product4}/>
      </div>
    </div>
  );
};

export default ProductGrid;
