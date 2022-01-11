import React from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import RightBar from "../Components/RightBar";

const NewUser = () => {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <RightBar>
          <h2 className="text-4xl font-bold">New User</h2>
          <form>
            <div className="flex box1 space-x-20">
              <div className="my-4 w-full">
                <label
                  className="block mb-2 text-shadegrey font-semibold"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="appearance-none border outline-none rounded-md border-shadegrey p-3 w-full"
                  id="username"
                  type="text"
                  placeholder="john"
                />
              </div>
              <div className="my-4 w-full">
                <label
                  className="block mb-2 text-shadegrey font-semibold"
                  htmlFor="Full Name"
                >
                  Full Name
                </label>
                <input
                  className="appearance-none border outline-none rounded-md border-shadegrey p-3 w-full"
                  id="Full Name"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="my-4 w-full">
                <label
                  className="block mb-2 text-shadegrey font-semibold"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  className="appearance-none border outline-none rounded-md border-shadegrey p-3 w-full"
                  id="Email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
            </div>
            <div className="flex box2 space-x-20">
              <div className="my-4 w-full">
                <label
                  className="block mb-2 text-shadegrey font-semibold"
                  htmlFor="Password"
                >
                  Password
                </label>
                <input
                  className="appearance-none border outline-none rounded-md border-shadegrey p-3 w-full"
                  id="Password"
                  type="password"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="my-4 w-full">
                <label
                  className="block mb-2 text-shadegrey font-semibold"
                  htmlFor="Phone"
                >
                  Phone
                </label>
                <input
                  className="appearance-none border outline-none rounded-md border-shadegrey p-3 w-full"
                  id="Phone"
                  type="number"
                  placeholder="+91 123456789"
                />
              </div>
              <div className="my-4 w-full">
                <label
                  className="block mb-2 text-shadegrey font-semibold"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="appearance-none border outline-none rounded-md border-shadegrey p-3 w-full"
                  id="address"
                  type="address"
                  placeholder="Kolkata | India"
                />
              </div>
            </div>
            <div className="flex box3 space-x-20">
              <div className="my-4 w-full">
                <label className="block mb-2 text-shadegrey font-semibold">
                  Gender
                </label>
                <div className="flex">
                  <label htmlFor="Male" className="flex items-center">
                    <input type="radio" name="gender" id="Male" />
                    <span className="mx-2">Male</span>
                  </label>
                  <label htmlFor="Female" className="flex items-center">
                    <input type="radio" name="gender" id="Female" />
                    <span className="mx-2">Female</span>
                  </label>
                  <label htmlFor="other" className="flex items-center">
                    <input type="radio" name="gender" id="other" />
                    <span className="mx-2">Other</span>
                  </label>
                </div>
              </div>
              <div className="my-4 w-full">
                <label
                  className="block mb-2 text-shadegrey font-semibold"
                  htmlFor="Active"
                >
                  Active
                </label>
                <select
                  name="active"
                  id="Active"
                  className="appearance-none border outline-none rounded-md border-shadegrey p-3 w-full"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="my-4 w-full flex items-end">
                <input
                  type="submit"
                  value="Create"
                  className="bg-darkblue py-4 w-5/12 text-white rounded-xl cursor-pointer"
                />
              </div>
            </div>
          </form>
        </RightBar>
      </div>
    </>
  );
};

export default NewUser;
