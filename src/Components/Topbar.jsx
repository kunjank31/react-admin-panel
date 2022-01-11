import React from "react";
import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
//
const Topbar = () => {
  return (
    <>
      <div className="flex justify-between px-5 py-2 sticky w-full top-0 bg-white z-10">
        <div className="left-bar">
          <NavLink to="/" className="font-bold text-3xl text-blue">
            adminPanel
          </NavLink>
        </div>
        <div className="right-bar space-x-5">
          <SettingsIcon />
          <NotificationsRoundedIcon />
          <AccountCircleRoundedIcon />
        </div>
      </div>
    </>
  );
};

export default Topbar;
