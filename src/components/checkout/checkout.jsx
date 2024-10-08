import React from "react";
import { FormInput, TitlePageItems } from "../items/items";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <TitlePageItems title={"checkout"} />
      <div className="container grid grid-cols-12 pb-16 pt-4 gap-4">
        <div className="col-span-8 border border-gray-200 p-4 rounded">
          <h3 className="font-medium text-gray-600 capitalize">checkout</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label={"first name"}
                type={"text"}
                placeholder={"John"}
              />
              <FormInput
                label={"last name"}
                type={"text"}
                placeholder={"Nguyen"}
              />
            </div>
            <FormInput
              label={"company name"}
              type={"text"}
              placeholder={"company name"}
            />
            <FormInput
              label={"country/region"}
              type={"text"}
              placeholder={""}
            />
            <FormInput
              label={"street address"}
              type={"text"}
              placeholder={""}
            />
            <FormInput label={"town/city"} type={"text"} placeholder={""} />
            <FormInput label={"zip code"} type={"text"} placeholder={""} />
            <FormInput label={"phone number"} type={"tel"} placeholder={""} />
            <FormInput
              label={"email address"}
              type={"email"}
              placeholder={"example@gmail.com"}
            />
          </div>
        </div>
        <div className="col-span-4 border border-gray-200 p-4 rounded h-max">
          <h4 className="text-gray-800 font-medium uppercase text-lg mb-4">
            order summary
          </h4>
          <div className="space-y-2">
            {/* product order summary */}
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-gray-800 capitalize font-medium">
                  italian shape sofa
                </h5>
                <p className="text-sm text-gray-600">Size M</p>
              </div>
              <p className="text-gray-600">x3</p>
              <p className="text-gray-800">750.000</p>
            </div>
            {/* product order summary */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 text-gray-800 uppercase font-medium">
              <p>subtotal</p>
              <p>750.000</p>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 text-gray-800 uppercase font-medium">
              <p>shipping</p>
              <p>free</p>
            </div>
            <div className="flex items-center justify-between pb-4 text-gray-800 uppercase font-medium">
              <p className="font-bold">total</p>
              <p>750.000</p>
            </div>

            <div className="mt-6 space-x-2">
              <input
                type="checkbox"
                id="agreement"
                className="text-red-500 rounded-sm focus:ring-0 cursor-pointer"
              />
              <label htmlFor="agreement" className="text-gray-600 font-serif">
                Agree to our{" "}
                <Link to={"#"} className="text-red-500 font-serif">
                  terms and conditions
                </Link>
              </label>
            </div>
            <Link
              to={"/payment"}
              className="uppercase block w-full py-2 text-center text-white rounded bg-red-500 border border-red-500 hover:bg-transparent hover:text-red-500 transition font-medium"
            >
              place order
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
