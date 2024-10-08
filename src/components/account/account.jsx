import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <Link to={"/"} className="text-red-500 text-base">
        <FontAwesomeIcon icon={faHome}/>
        </Link>
        <FontAwesomeIcon className="text-sm text-gray-400" icon={faChevronRight}/>
        <p className="text-medium text-gray-600 uppercase">My Account</p>
      </div>
    </>
  );
};

export default Account;
