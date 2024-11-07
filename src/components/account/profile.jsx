import React from "react";
import { ProfileCard } from "./accItems";

const Profile = () => {
  return (
    <div className="md:col-span-9 grid md:grid-cols-3 col-span-6 grid-cols-1 gap-4">
      <ProfileCard
        title={"personal profile"}
        name={"Russell"}
        infor={"example@gmail.com"}
        phone={"(123) 456-789"}
      />
      <ProfileCard
        title={"ship address"}
        name={"Russell"}
        infor={"3891 Ranchview Dr.Richardson,Califonia"}
        phone={"(123) 456-789"}
      />
      <ProfileCard
        title={"Billing address"}
        name={"Russell"}
        infor={"3891 Ranchview Dr.Richardson,Califonia"}
        phone={"(123) 456-789"}
      />
    </div>
  );
};

export default Profile;
