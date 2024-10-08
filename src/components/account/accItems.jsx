import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AccTitle = ({ title, icon, to, color, hover }) => {
  return (
    <NavLink
      to={to}
      // className={`relative capitalize text-xl ${color} block font-medium ${hover} transition`}
      className={({ isActive }) =>
        isActive
          ? `relative capitalize text-xl text-primary block font-medium`
          : `relative capitalize text-xl ${color} block font-medium ${hover} transition`
      }
    >
      <span className="absolute -left-8 top-0 text-base">
        <FontAwesomeIcon icon={icon} />
      </span>
      {title}
    </NavLink>
  );
};

export const AccItems = ({ name, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "relative capitalize text-primary block hover:text-red-400 transition"
          : "relative capitalize text-gray-500 block hover:text-red-400 transition"
      }
    >
      {name}
    </NavLink>
  );
};

export const ProfileCard = ({ title, to, name, infor, phone }) => {
  return (
    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800 text-lg capitalize">
          {title}
        </h3>
        <Link to={to} className="text-primary">
          Edit
        </Link>
      </div>
      <div className="space-y-1">
        <h4 className="text-gray-700 font-medium">{name}</h4>
        <p className="text-gray-800">{infor}</p>
        <p className="text-gray-800">{phone}</p>
      </div>
    </div>
  );
};
