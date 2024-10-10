import React from "react";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export const TitlePageItems = ({to,title,children}) => {
  return (
    <div className="container py-4 flex items-center gap-3">
      <Link to={to} className="text-primary text-base">
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

export const FormInput = ({label,type,placeholder,value})=>{
    return (
      <div>
        <label className="text-gray-600 mb-2 block capitalize">
          {label} <span className="text-primary">*</span>
        </label>
        <input
          type={type}
          className="input-box"
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
};

export const ButtonSubmit = ({buttonName,size}) => {
    return (
      <div className="mt-4">
        <button
          type="submit"
          className={`uppercase block ${size} py-2 text-center text-white rounded bg-primary border border-primary hover:bg-transparent hover:text-primary transition font-medium`}
        >
          {buttonName}
        </button>
      </div>
    );
};


