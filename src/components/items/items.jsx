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


