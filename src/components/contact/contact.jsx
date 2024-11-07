import React from "react";
import bgBanner from "../../assets/images/contact-banner.jpg";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHome,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonSubmit, FormInput } from "../items/items";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat py-36"
        style={{ backgroundImage: `url(${bgBanner})` }}
      >
        <div className="container">
          <h1 className="text-4xl text-white text-center font-medium mb-4 uppercase">
            contact us
          </h1>
          <div className="items-center justify-center flex space-x-2">
            <Link to={"/"} className="text-primary text-base">
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <FontAwesomeIcon
              className="text-sm text-white"
              icon={faChevronRight}
            />
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "text-medium text-primary capitalize"
                  : "text-medium text-white capitalize"
              }
            >
              contact us
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container grid md:grid-cols-12 grid-cols-1 items-start gap-6 pt-4 pb-16">
        <div className="md:col-span-8 col-span-12 border border-gray-200 shadow rounded px-6 pt-5 pb-7 space-y-5">
          <h4 className="uppercase text-2xl font-semibold">
            leave us a message
          </h4>
          <span className="text-sm">
            Use the form below to get in touch with the sales team
          </span>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <FormInput label={"full name"} type={"text"} />
            <FormInput label={"last name"} type={"text"} />
          </div>
          <FormInput label={"email address"} type={"email"} />
          <FormInput label={"subject"} type={"text"} />
          <label
            htmlFor="text-message"
            className="text-gray-600 mb-2 block capitalize"
          >
            Your message<span className="text-primary">*</span>
          </label>
          <textarea className="input-box" id="text-message" rows="5"></textarea>
          <ButtonSubmit buttonName={"send message"} size={"md:w-1/4 w-full "}/>
        </div>
        <div className="md:col-span-4 col-span-12 border border-gray-200 shadow p-4 rounded space-y-6">
          <div>
            <h4 className="text-gray-800 font-medium uppercase text-lg mb-4">
              our store
            </h4>
            <div className="w-full relative space-y-3 text-gray-600">
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> 7895 Dr New Albuquerue,
                NM 19800, United States Of America
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +566 477 256, +566 254 575
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> info@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-gray-800 font-medium uppercase text-lg mb-3">
              hours of operation
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-m text-gray-600">Monday</p>
                <p className="text-m text-gray-600">12:00PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-m text-gray-600">Tuesday</p>
                <p className="text-m text-gray-600">12:00PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-m text-gray-600">Wednesday</p>
                <p className="text-m text-gray-600">12:00PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-m text-gray-600">Thursday</p>
                <p className="text-m text-gray-600">12:00PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-m text-gray-600">Friday</p>
                <p className="text-m text-gray-600">12:00PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-m text-gray-600">Saturday</p>
                <p className="text-m text-gray-600">8:00PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-m text-gray-600">Sunday</p>
                <p className="text-m text-gray-600">8:00PM</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-gray-800 font-medium uppercase text-lg mb-3">
              careers
            </h4>
            <p>
              If you are interesting in emplyment opportunities at RAFCARTs.
              Please email us :{" "}
              <Link to={"#"} className="text-primary">
                contact@familiar.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
