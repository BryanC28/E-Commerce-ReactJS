import React from "react";

const filterItem = ({nameCate,numCate}) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name=""
        id="cat-1"
        className="text-red-500 focus:ring-0 rounded-full cursor-pointer"
      />
      <label for="cat-1" className="text-gray-600 ml-3 cursor-pointer">
        {nameCate}
      </label>
      <div className="text-sm ml-auto text-gray-600">({numCate})</div>
    </div>
  );
};

export default filterItem;
