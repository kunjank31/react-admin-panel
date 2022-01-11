import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import RightBar from "../Components/RightBar";

const NewProduct = () => {
  const [image, setImage] = useState();
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <RightBar>
          <h2 className="text-4xl font-bold">New Product</h2>
          <form>
            <div className="my-4">
              <label className="flex items-center mb-2" htmlFor="fileIcons">
                Image
              </label>
              <input
                type="file"
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                id="fileIcons"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="h-80 mt-5 object-cover"
                />
              )}
            </div>
            <div className="my-4">
              <label
                className="block mb-2 text-shadegrey font-semibold"
                htmlFor="Name"
              >
                Name
              </label>
              <input
                className="appearance-none border outline-none rounded-sm border-shadegrey p-2 font-light"
                id="Name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="my-4">
              <label
                className="block mb-2 text-shadegrey font-semibold"
                htmlFor="Stock"
              >
                Stock
              </label>
              <input
                className="appearance-none border outline-none rounded-sm border-shadegrey p-2 font-light"
                id="Stock"
                type="number"
                placeholder="123"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-shadegrey font-semibold"
                htmlFor="Active"
              >
                Active
              </label>
              <select
                name="active"
                id="Active"
                className="w-48 p-2 appearance-none border outline-none rounded-md border-shadegrey"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <input
              type="submit"
              value="Create"
              className="bg-darkblue text-white py-2 px-5 rounded-xl mt-5"
            />
          </form>
        </RightBar>
      </div>
    </>
  );
};

export default NewProduct;
