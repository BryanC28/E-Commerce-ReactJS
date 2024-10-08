import React from "react";
import avt from "../../assets/images/noAvatar.jpg";
import { faCreditCard, faHeart, faIdCard } from "@fortawesome/free-regular-svg-icons";
import {AccItems, AccTitle} from "./accItems";
import { faGift, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
const AccSidebar = () => {
  return (
    <div className="col-span-3">
      <div className="px-4 py-3 flex items-center shadow gap-4">
        <div className="flex-shrink-0">
          <img
            src={avt}
            alt="avarta"
            className="w-14 h-14 rounded-full border border-gray-200 p-1 object-cover"
          />
        </div>
        <div className="flex-grow">
          <p className="text-gray-600 ">Hello,</p>
          <h4 className="text-gray-800 font-medium">Bryan Nguyen</h4>
        </div>
      </div>
      {/* account menu */}
      <div className="mt-6 bg-white rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
        <div className="space-y-1 pl-8">
          <AccTitle
            title={"Manage account"}
            icon={faIdCard}
            color={"text-gray-600"}
            hover={"hover:text-red-500"}
            to={"/account"}
          />
          <AccItems name={"profile information"} to={"/account/profile-info"} />
          <AccItems name={"manage address"} to={"/account/manager-address"} />
          <AccItems name={"change password"} to={"/account/change-password"} />
        </div>
        <div className="space-y-1 pl-8">
          <AccTitle title={"my order history"} icon={faGift} hover={"hover:text-red-500"} to={"/account/my-order"} />
          <AccItems name={"my returns"} to={"/account/return"}/>
          <AccItems name={"my cancellations"}to={"/account/cancel"} />
          <AccItems name={"my reviews"} to={"/account/reviews"}/>
        </div>
        <div className="space-y-1 pl-8">
          <AccTitle title={"payment methods"} icon={faCreditCard} hover={"hover:text-red-500"} to={"/account/payment"} />
          <AccItems name={"voucher"} to={"/account/voucher"}/>
        </div>
        <div className="space-y-1 pl-8">
          <AccTitle title={"my wishlist"} icon={faHeart} hover={"hover:text-red-500"} to={"/account/wishlist"} />
        </div>
        <div className="space-y-1 pl-8">
          <AccTitle title={"logout"} icon={faRightToBracket} to={"/login"} hover={"hover:text-red-500"} />
        </div>
      </div>
    </div>
  );
};

export default AccSidebar;
