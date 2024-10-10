import React from 'react'
import { Link } from 'react-router-dom';

const Team = ({img,to,name,position}) => {
  return (
    <div className="col-span-3">
      <div className="relative overflow-hidden rounded-md">
        <img src={img} alt="team" className="w-full" />
      </div>
      <div className="block text-center mt-3">
        <Link to={to}>
          <h5 className="font-semibold capitalize">{name}</h5>
        </Link>
        <p className="text-sm text-gray-500 mb-4 capitalize">{position}</p>
      </div>
    </div>
  );
}

export default Team
