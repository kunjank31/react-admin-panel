import React from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import RightBar from "../Components/RightBar";
import ProductListTable from "../Components/ProductListTable";

const ProductList = () => {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <RightBar>
          <div className="flex">
            <ProductListTable />
          </div>
        </RightBar>
      </div>
    </>
  );
};

export default ProductList;
