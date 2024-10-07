import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./layouts/layout";
import Home from "./components/home/home";
import AboutUs from "./components/aboutus/aboutUs";
import Contact from "./components/contact/contact";
import Product from "./components/product/product";
import ProductView from "./components/product/productView";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Layouts>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/aboutus" exact={true} element={<AboutUs />} />
          <Route path="/contact" exact={true} element={<Contact />} />
          <Route path="/products" exact={true} element={<Product />} />
          <Route path="/product-detail" exact={true} element={<ProductView />} />
        </Routes>
      </Layouts>
    </>
  );
}

export default App;
