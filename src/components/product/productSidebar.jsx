import React from "react";
import CateItem from "./filterItem";
import FilterTitle from "./filterTitle";

const Sidebar = () => {
  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
      <div className="divide-y divide-gray-200 space-y-5">
        {/* category filter */}
        <FilterTitle title={"categories"}>
          <div className="space-y-2">
            <CateItem numCate={15} nameCate={"Bedroom"} />
            <CateItem numCate={26} nameCate={"Sofa"} />
            <CateItem numCate={48} nameCate={"Outdoor"} />
            <CateItem numCate={100} nameCate={"Office"} />
          </div>
        </FilterTitle>
        <FilterTitle title={"brands"}>
          <div className="space-y-2">
            <CateItem numCate={15} nameCate={"Dominik"} />
            <CateItem numCate={26} nameCate={"Kart"} />
            <CateItem numCate={48} nameCate={"Maxing"} />
            <CateItem numCate={100} nameCate={"Ernest"} />
          </div>
        </FilterTitle>
        <FilterTitle title={"price"}>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              className="w-full border-gray-300 focus:border-red-500 focus:ring-0 px-3 py-1 text-gray-600 text-sm rounded shadow-sm"
              placeholder="min"
            />
            <span className="mx-3 text-gray-500 ">-</span>
            <input
              type="text"
              className="w-full border-gray-300 focus:border-red-500 focus:ring-0 px-3 py-1 text-gray-600 text-sm rounded shadow-sm"
              placeholder="max"
            />
          </div>
        </FilterTitle>
        <FilterTitle title={"size"}>
          <div className="flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" id="size-xs" className="hidden" />
              <label
                htmlFor="size-xs"
                className="text-sx border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XS
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-s" className="hidden" />
              <label
                htmlFor="size-s"
                className="text-sx border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-m" className="hidden" />
              <label
                htmlFor="size-m"
                className="text-sx border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-l" className="hidden" />
              <label
                htmlFor="size-l"
                className="text-sx border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-xl" className="hidden" />
              <label
                htmlFor="size-xl"
                className="text-sx border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XL
              </label>
            </div>
          </div>
        </FilterTitle>
        <FilterTitle title={"color"}>
          <div className="flex items-center gap-2">
            <div className="color-selector">
              <input
                type="radio"
                name="color"
                id="color-red"
                className="hidden"
              />
              <label
                htmlFor="color-red"
                className="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm bg-red-500 block"
              ></label>
            </div>
            <div className="color-selector">
              <input
                type="radio"
                name="color"
                id="color-white"
                className="hidden"
              />
              <label
                htmlFor="color-white"
                className="border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm bg-white"
              ></label>
            </div>
            <div className="color-selector">
              <input
                type="radio"
                name="color"
                id="color-black"
                className="hidden"
              />
              <label
                htmlFor="color-black"
                className="border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm bg-black"
              ></label>
            </div>
          </div>
        </FilterTitle>
      </div>
    </div>
  );
};

export default Sidebar;
