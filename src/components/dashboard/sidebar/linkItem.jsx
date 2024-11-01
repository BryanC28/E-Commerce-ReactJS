import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const LinkItems = ({ to, icon, text, badge }) => {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center rounded-lg p-2 text-gray-900 dark:text-white
                    hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <FontAwesomeIcon className="mr-3" icon={icon} />
        <span className="flex-1 me-3">{text}</span>
        {badge && (
          <span
            className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full
                                  ${badge.color} ${badge.darkColor}`}
          >
            {badge.text}
          </span>
        )}
      </Link>
    </li>
  );
};

export default LinkItems;
