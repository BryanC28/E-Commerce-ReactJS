import React from "react";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export const TitlePageItems = ({to,title,children}) => {
  return (
    <div className="container py-4 flex items-center gap-3">
      <Link to={to} className="text-red-500 text-base">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <FontAwesomeIcon
        className="text-sm text-gray-400"
        icon={faChevronRight}
      />
      <p className="text-medium text-gray-600 uppercase">{title}</p>
      {children}
    </div>
  );
};

export const FormInput = ({label,type,placeholder})=>{
    return (
      <div>
        <label className="text-gray-600 mb-2 block capitalize">
          {label} <span className="text-red-500">*</span>
        </label>
        <input
          type={type}
          className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-red-500 placeholder-gray-300"
          placeholder={placeholder}
        />
      </div>
    );
};

export const ButtonSubmit = ({buttonName}) => {
    return (
      <div className="mt-4">
        <button
          type="submit"
          className="uppercase block w-full py-2 text-center text-white rounded bg-red-500 border border-red-500 hover:bg-transparent hover:text-red-500 transition font-medium"
        >
          {buttonName}
        </button>
      </div>
    );
};


