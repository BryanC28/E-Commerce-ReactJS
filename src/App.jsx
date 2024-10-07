import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./layouts/layout";
import Home from "./components/home/home";
import AboutUs from "./components/aboutus/aboutUs";
import Contact from "./components/contact/contact";
import Product from "./components/product/product";
import ProductView from "./components/product/productView";
import Login from "./components/login/login";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product-detail" element={<ProductView />} />
        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
