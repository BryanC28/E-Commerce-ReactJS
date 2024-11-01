import React from "react";
import Title from "../ui/Title";
import { shortcutLink } from "../../../assets/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Shortcut = () => {
  return (
    <div
      className="flex gap-4 flex-col bg-white rounded-lg p-4
                    dark:bg-gray-700"
    >
      <Title>Shortcuts</Title>
      {shortcutLink.map((list, index) => (
        <div
          key={index}
          className="flex items-center justify-between cursor-pointer rounded-sm"
        >
          <div className="flex gap-4">
            <FontAwesomeIcon
              className="bg-blue-100 p-2 rounded-full flex items-center justify-center
                        dark:bg-gray-800 dark:text-gray-300"
              icon={list.icon}
            />
            <h3 className="font-medium dark:text-gray-300">{list.title}</h3>
          </div>
          <FontAwesomeIcon
            className="bg-gray-300 dark:bg-gray-500 dark:text-gray-300 p-2 rounded-md
                      hover:mr-3 transition-all duration-500"
            icon={faChevronRight}
          />
        </div>
      ))}
    </div>
  );
};

export default Shortcut;
