import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { ButtonSubmit, FormInput } from "../items/items";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="container py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase mb-2 font-medium">login</h2>
          <p className="text-sm mb-6 text-gray-600 font-serif">
            Login if you are a returing customer
          </p>
          <form action="">
            <div className="space-y-4">
              <FormInput label={"Email address"} type={"email"} placeholder={"example@gmail.com"}/>
              <FormInput label={"Password"} type={"password"} placeholder={"type password"}/>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreement"
                  className="text-red-500 focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="agreement" className="font-serif">
                  Remember me
                </label>
              </div>
              <Link
                to={"/send-mail"}
                className="text-red-500 font-serif capitalize"
              >
                forgot password?
              </Link>
            </div>
            <ButtonSubmit buttonName={"login"} size={"w-full"}/>
          </form>
          <div className="mt-6 flex justify-center relative">
            <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
              or login with
            </div>
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
          </div>
          <div className="flex mt-4 gap-4">
            <Link
              to={"#"}
              className="w-1/2 rounded bg-blue-800 uppercase py-2 text-center text-white hover:bg-blue-700"
            >
              facebook
            </Link>
            <Link
              to={"#"}
              className="w-1/2 rounded bg-yellow-600 uppercase py-2 text-center text-white hover:bg-yellow-500"
            >
              google
            </Link>
          </div>
          <p className="mt-4 text-center">
            Don't have an account?
            <Link to={"/register"} className="text-red-500 ml-2">
              Register now
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
