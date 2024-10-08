import React from "react";
import { ButtonSubmit, FormInput } from "../items/items";

const ProfileInfo = () => {
  return (
    <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
      <h4 className="font-medium capitalize">profile information</h4>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 py-3">
          <FormInput
            label={"first name"}
            type={"text"}
            placeholder={"Enter first name"}
          />
          <FormInput
            label={"last name"}
            type={"text"}
            placeholder={"Enter last name"}
          />
          <FormInput label={"Birthday"} type={"date"} />
          <div>
            <label className="text-gray-600 mb-2 block capitalize">
              Gender <span className="text-red-500">*</span>
            </label>
            <select name="" id="" className="input-box">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <FormInput
            label={"email address"}
            type={"email"}
            value={"JohnDoe@email.com"}
          />
          <FormInput
            label={"phone number"}
            type={"tel"}
            value={"+84962435997"}
          />
          <ButtonSubmit buttonName={"save change"} size={"w-1/2"} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
