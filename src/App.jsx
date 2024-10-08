import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./layouts/layout";
import Home from "./components/home/home";
import AboutUs from "./components/aboutus/aboutUs";
import Contact from "./components/contact/contact";
import Product from "./components/product/product";
import ProductView from "./components/product/productView";
import Login from "./components/login-register/login";
import Register from "./components/login-register/register";
import Account from "./components/account/account";
import Checkout from "./components/checkout/checkout";
import Wishlist from "./components/product/wishlist";

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
          <Route path="/account" element={<Account />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
