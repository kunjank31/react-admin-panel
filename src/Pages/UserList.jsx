import React from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import RightBar from "../Components/RightBar";
import UserListTable from "../Components/UserListTable";

const UserList = () => {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <RightBar>
          <div className="flex">
            <UserListTable />
          </div>
        </RightBar>
      </div>
    </>
  );
};

export default UserList;
