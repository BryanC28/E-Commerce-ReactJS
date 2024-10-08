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
import Profile from "./components/account/profile";
import ProfileInfo from "./components/account/profileInfo";

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
          <Route path="/account" element={<Account />}>
            <Route path="/account" element={<Profile />} />
            <Route path="/account/wishlist" element={<Wishlist />} />
            <Route path="/account/profile-info" element={<ProfileInfo />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
