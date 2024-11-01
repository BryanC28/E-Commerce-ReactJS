import React from "react";
import { ButtonCustom, FormInput } from "../../items/items";
import { Link } from "react-router-dom";
import lock from "../../../assets/images/lockadmin.jpg";

const DashLogin = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-4 md:p-14">
          <span className="mb-3 text-4xl font-bold capitalize">
            login
          </span>
          <div className="py-4">
            <FormInput
              label={"Email"}
              type={"email"}
              placeholder={"example@gmail.com"}
            />
          </div>
          <div className="py-4">
            <FormInput
              label={"Password"}
              type={"password"}
              placeholder={"**********"}
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-2 mr-24">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label htmlFor="agreement" className="font-serif">
                Remember me
              </label>
            </div>
            <Link
              to={"/send-mail"}
              className="text-primary font-serif capitalize"
            >
              forgot password?
            </Link>
          </div>
          <Link to={"/dashboard"}>
            <ButtonCustom
              buttonName={"login"}
              size={"w-full"}
              color={"blue-800"}
              textHover={"hover:text-blue-800"}
            />
          </Link>
        </div>
        <div className="relative">
          <img
            src={lock}
            alt="bg"
            className="w-96 h-full hidden rounded-r-2xl md:block object-cover"
          />
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
            <span className="text-white text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              vitae. Est reiciendis veritatis saepe, repudiandae architecto sunt
              vero voluptates molestiae voluptatum esse hic fugit inventore
              dolores nostrum, consectetur debitis error.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashLogin;
