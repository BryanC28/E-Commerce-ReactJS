import React from "react";
import Chart from "react-apexcharts";
const Donutchart = ({darkMode}) => {
  const options = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",
        height: 250,
      },
      labels: ["Desktop", "Tablet", "Mobile"],
      colors: ["#FF5733", "#33FF57", "#3357FF"],
      legend: {
        position: "bottom",
        labels: {
          colors: darkMode ? "#dddddd" : "#000000",
        },
      },
      dataLabels: {
        style: {
          colors: ["#dddddd"],
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div
      className="py-6 bg-white rounded-lg p-5 flex items-center justify-center 
                        dark:bg-gray-600"
    >
      <Chart options={options.options} series={options.series} type="donut" height={300}/>
    </div>
  );
};

export default Donutchart;
