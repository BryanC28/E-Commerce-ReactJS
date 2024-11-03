import React from "react";

const Member = ({ user }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          src={user.image}
          alt={user.name}
          className="w-12 h-12 rounded-full flex"
        />
        <div className="mr-3">
          <h2 className="font-bold dark:text-gray-200">{user.name}</h2>
          <span className="font-semibold text-gray-500 dark:text-gray-300 text-sm">
            {user.country}
          </span>
        </div>
      </div>
      <span className={`${user.bgColor} font-medium text-xs p-3 rounded-full dark:text-gray-300 dark:bg-gray-500`}>
        {user.role}
      </span>
    </div>
  );
};

export default Member;
