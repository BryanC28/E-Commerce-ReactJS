import React from "react";
import Title from "../ui/Title";
import { events } from "../../../assets/constants";
import EventItem from "./Eventitem";

const Events = () => {
  return (
    <div className="bg-white rounded-2xl p-5 dark:bg-gray-700 text-gray-700 flex-1 flex flex-col">
      <Title>Events</Title>
      {events.map((events, index) => (
        <EventItem key={index} events={events} />
      ))}
    </div>
  );
};

export default Events;
