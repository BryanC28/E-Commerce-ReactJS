import React from 'react'

const FilterTitle = ({children, title}) => {
  return (
    <div className="pt-4">
      <h3 className="text-xl uppercase text-gray-800 mb-3 font-medium">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default FilterTitle
