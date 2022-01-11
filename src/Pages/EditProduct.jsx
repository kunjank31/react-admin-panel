import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import RightBar from "../Components/RightBar";
import { NavLink } from "react-router-dom";
import SmCharts from "../Components/SmCharts";
import {
  CalendarToday,
  EmailOutlined,
  LocationSearchingOutlined,
  PersonOutline,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { useState } from "react";

const EditProduct = () => {
  const [image, setImage] = useState();
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <RightBar>
          <div className="flex justify-between items-center py-5">
            <h2 className="text-4xl font-black">Product</h2>
            <NavLink
              to="/product/create"
              className="btn px-5 py-2 bg-textApprovedColor text-white rounded-md"
            >
              Create
            </NavLink>
          </div>
          <div className="flex space-x-10">
            <SmCharts />
            <div className="productInfo w-full shadow-md rounded-lg my-5 p-5">
              <div className="flex items-center mb-3">
                <img
                  src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="w-11 h-11 rounded-full object-cover mr-5"
                />
                <span className="font-bold">Apple Airpods</span>
              </div>
              <div className="flex justify-between w-1/4">
                <span className="block">id:</span>
                <span className="block font-light">123</span>
              </div>
              <div className="flex justify-between w-1/4">
                <span className="block">sales:</span>
                <span className="block font-light">5123</span>
              </div>
              <div className="flex justify-between w-1/4">
                <span className="block">active:</span>
                <span className="block font-light">no</span>
              </div>
              <div className="flex justify-between w-1/4">
                <span className="block">isStock:</span>
                <span className="block font-light">yes</span>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-lg p-5">
            <form className="flex my-5 justify-between">
              <div className="first_group">
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="Product Name">
                    Product Name
                  </label>
                  <input
                    className="appearance-none border-b-2 border-b-shadegrey w-full py-1 px-px focus:border focus:rounded-sm"
                    id="Product Name"
                    type="text"
                    placeholder="Apple Airpods"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="In Stock">
                    In Stock
                  </label>
                  <select
                    name="inStock"
                    id="In Stock"
                    className="w-full border"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="Active">
                    Active
                  </label>
                  <select name="active" id="Active" className="w-full border">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div className="second_group flex flex-col">
                <div className="fileDiv">
                  <label className="flex items-center" htmlFor="fileIcons">
                    <img
                      src={
                        image
                          ? URL.createObjectURL(image)
                          : "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      }
                      className="mr-5 w-32 h-32 object-cover rounded-xl"
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
        </RightBar>
      </div>
    </>
  );
};

export default EditProduct;
