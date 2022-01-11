import { ArrowDownward } from "@mui/icons-material";
import React from "react";

const Smbox = ({title}) => {
  return (
    <>
      <div className="box shadow-md px-5 py-8 w-1/3 rounded-lg">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="income py-3 flex items-center">
          <span className="font-semibold text-4xl">$2,415</span>
          <span className="ml-5">
            -11.4 <ArrowDownward style={{ color: "red" }} />
          </span>
        </div>
        <span className="text-shadegrey">Compared to last month</span>
      </div>
    </>
  );
};

export default Smbox;
