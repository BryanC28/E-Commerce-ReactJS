import React from "react";

import AccSidebar from "./accSidebar";
import Profile from "./profile";
import { TitlePageItems } from "../items/items";

const Account = () => {
  return (
    <>
      <TitlePageItems title={"my account"} />
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* Account sidebar */}
        <AccSidebar />
        {/* Profile */}
        <Profile />
      </div>
    </>
  );
};

export default Account;
