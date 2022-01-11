import React from "react";
import Smbox from "../Components/Smbox";
import RightBar from "../Components/RightBar";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Recharts from "../Components/Recharts";
import WidgetSm from "../Components/WidgetSm";
import Widget from "../Components/Widget";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="flex">
      <Sidebar />
        <RightBar>
          <div className="flex space-x-10">
            <Smbox title="Revenue" />
            <Smbox title="Sales" />
            <Smbox title="Cost" />
          </div>
          <Recharts />
          <div className="flex space-x-6">
            <WidgetSm />
            <Widget />
          </div>
        </RightBar>
      </div>
    </>
  );
};

export default Home;
