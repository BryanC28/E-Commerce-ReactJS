import React from "react";
import Banner from "../banner/banner";
import Feature from "../feature/feature";
import Category from "../category/category";
import ProductGrid from "../product/productGrid";


const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <Category />
      <ProductGrid title={'top new arrival'}/>
    </>
  );
};

export default Home;
