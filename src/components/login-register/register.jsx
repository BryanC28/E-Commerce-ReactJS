import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { ButtonSubmit, FormInput } from "../items/items";

const Register = () => {
  return (
    <>
      <Header />
      <div className="container py-16">
        <div className="max-w-lg mx-auto shadow py-7 px-6 rounded overflow-hidden">
          <h2 className="uppercase text-2xl mb-2 font-medium">register</h2>
          <p className="text-sm mb-6 text-gray-600 font-serif">
            Register here if you don't have account
          </p>
          <form action="">
            <div className="space-y-4">
              <FormInput label={"full name"} type={"text"} placeholder={"John Ford"}/>
              <FormInput label={"email address"} type={"email"} placeholder={"example@gmail.com"}/>
              <FormInput label={"password"} type={"password"} placeholder={"type password"}/>
              <FormInput label={"confirm password"} type={"password"} placeholder={"confirm your password"}/>
            </div>
            <div className="mt-6 space-x-2">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary rounded-sm focus:ring-0 cursor-pointer"
              />
              <label htmlFor="agreement" className="text-gray-600 font-serif">
                I have read and agree to the{" "}
                <Link to={"#"} className="text-primary font-serif">
                  terms and conditions
                </Link>
              </label>
            </div>
           <ButtonSubmit buttonName={"create account"} size={"w-full"}/>
          </form>
          <div className="mt-6 flex justify-center relative">
            <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
              or signup in with
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
            Already have an account?
            <Link to={"/login"} className="text-primary ml-2">
              Login now
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
