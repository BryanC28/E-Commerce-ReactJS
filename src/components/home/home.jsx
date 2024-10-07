import React from "react";
import Banner from "../banner/banner";
import Feature from "../feature/feature";
import Category from "../category/category";
import ProductGrid from "../product/productGrid";
import Recommend from "../recommend/recommend";


const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <Category />
      <ProductGrid title={'top new arrival'}/>
      <Recommend/>
    </>
  );
};

export default Home;
