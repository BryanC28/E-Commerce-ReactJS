import React from "react";
import { empolyeesData } from "../../../assets/constants";
import Cards from "./Cards";
import Balance from "./Balance";

const Stats = ({darkMode}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col gap-4 h-full">
        {empolyeesData.map((data, index) => (
          <Cards key={index} data={data} />
        ))}
      </div>
      <Balance darkmode={darkMode}/>
    </div>
  );
};

export default Stats;
