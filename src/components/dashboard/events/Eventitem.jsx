import React from "react";

const EventItem = ({ events }) => {
  return (
    <div className="flex gap-5 items-center p-4">
      <span
        className="p-2 bg-gray-300 text-primary
                  rounded-xl text-center font-semibold h-16 w-16
                  dark:text-gray-700 dark:font-bold"
      >
        {events.date}
      </span>
      <div>
        <h1 className="text-xl font-bold dark:text-gray-300">{events.title}</h1>
        <p className="text-sm text-gray-400">{events.description}</p>
      </div>
    </div>
  );
};

export default EventItem;
