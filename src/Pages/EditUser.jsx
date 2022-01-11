import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import RightBar from "../Components/RightBar";
import { NavLink } from "react-router-dom";
import {
  CalendarToday,
  EmailOutlined,
  LocationSearchingOutlined,
  MailOutline,
  PersonOutline,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { useState } from "react";

const EditUser = () => {
  const [image, setImage] = useState();
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <RightBar>
          <div className="flex justify-between items-center py-5">
            <h2 className="text-3xl font-black">Edit User</h2>
            <NavLink
              to="/user/create"
              className="btn px-5 py-2 bg-textApprovedColor text-white rounded-md"
            >
              Create
            </NavLink>
          </div>
          <div className="flex space-x-6">
            <div className="firstWrapper shadow-md w-2/5 rounded-lg  p-5">
              <div className="flex items-center">
                <div className="logo">
                  <img
                    src="https://randomuser.me/api/portraits/men/40.jpg"
                    className="w-14 rounded-full object-cover mr-5"
                  />
                </div>
                <div className="details">
                  <h3 className="font-semibold">Anna Keller</h3>
                  <span className="text-shadegrey font-light">
                    Software Engineer
                  </span>
                </div>
              </div>
              <div className="accountDetails">
                <h3 className="text-shadegrey font-semibold py-3">
                  Account Details
                </h3>
                <div className="py-2 flex items-center">
                  <PersonOutline
                    className="text-shadegrey"
                    style={{ fontSize: "18px" }}
                  />
                  <span className="ml-2">annabeck99</span>
                </div>
                <div className="py-2 flex items-center">
                  <CalendarToday
                    className="text-shadegrey"
                    style={{ fontSize: "18px" }}
                  />
                  <span className="ml-2">10.12.1999</span>
                </div>

                <h3 className="text-shadegrey font-semibold py-3">
                  Contact Details
                </h3>
                <div className="py-2 flex items-center">
                  <PhoneAndroid
                    className="text-shadegrey"
                    style={{ fontSize: "18px" }}
                  />
                  <span className="ml-2">+1 123 456 67</span>
                </div>
                <div className="py-2 flex items-center">
                  <EmailOutlined
                    className="text-shadegrey"
                    style={{ fontSize: "18px" }}
                  />
                  <span className="ml-2">annabeck99@gmail.com</span>
                </div>
                <div className="py-2 flex items-center">
                  <LocationSearchingOutlined
                    className="text-shadegrey"
                    style={{ fontSize: "18px" }}
                  />
                  <span className="ml-2">New York | USA</span>
                </div>
              </div>
            </div>
            <div className="secondWrapper shadow-md rounded-lg w-full p-5">
              <h2 className="text-2xl font-bold">Edit</h2>
              <form className="flex my-5 justify-between">
                <div className="first_group">
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="username">
                      Username
                    </label>
                    <input
                      className="appearance-none border-b-2 border-b-shadegrey w-full py-1 px-px focus:border focus:rounded-sm"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="fullname">
                      Full Name
                    </label>
                    <input
                      className="appearance-none border-b-2 border-b-shadegrey w-full py-1 px-px focus:border focus:rounded-sm"
                      id="fullname"
                      type="text"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="appearance-none border-b-2 border-b-shadegrey w-full py-1 px-px focus:border focus:rounded-sm"
                      id="email"
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="appearance-none border-b-2 border-b-shadegrey w-full py-1 px-px focus:border focus:rounded-sm"
                      id="phone"
                      type="number"
                      placeholder="+91 123456789"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="address">
                      Address
                    </label>
                    <input
                      className="appearance-none border-b-2 border-b-shadegrey w-full py-1 px-px focus:border focus:rounded-sm"
                      id="address"
                      type="text"
                      placeholder="Kolkata | India"
                    />
                  </div>
                </div>
                <div className="second_group flex flex-col">
                  <div className="fileDiv">
                    <label className="flex items-center" htmlFor="fileIcons">
                      <img
                        src={
                          image
                            ? URL.createObjectURL(image)
                            : "https://randomuser.me/api/portraits/men/40.jpg"
                        }
                        className="mr-5 w-32 rounded-xl"
                      />
                      <Publish style={{ fontSize: "2rem" }} />
                    </label>
                    <input
                      type="file"
                      className="hidden w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      id="fileIcons"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Update"
                    className="bg-darkblue text-white py-1 px-12 mt-auto rounded-lg"
                  />
                </div>
              </form>
            </div>
          </div>
        </RightBar>
      </div>
    </>
  );
};

export default EditUser;
