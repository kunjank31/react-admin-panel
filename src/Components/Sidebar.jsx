import React from "react";
import { NavLink } from "react-router-dom";
import {
  AttachMoney,
  BarChartOutlined,
  ChatBubbleOutline,
  DynamicFeed,
  HomeRepairServiceOutlined,
  Insights,
  MailOutline,
  MessageOutlined,
  PersonOutlineRounded,
  Report,
  Storefront,
  WorkOutline,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar bg-bgTiltColor sticky flex-none w-1/5">
        <div className="sidebarWrapper p-5">
          <div className="first pt-1 pb-5">
            <h3 className="text-shadegrey font-semibold">Dashboard</h3>
            <ul className="pl-2 pt-2">
              <li className="bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/" className="flex items-center">
                  <HomeRepairServiceOutlined className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Home</span>
                </NavLink>
              </li>
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/" className="flex items-center">
                  <BarChartOutlined className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Analytics</span>
                </NavLink>
              </li>
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/" className="flex items-center">
                  <Insights className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Sales</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="second pt-1 pb-5">
            <h3 className="text-shadegrey font-semibold">Quick Menu</h3>
            <ul className="pl-2 pt-2">
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/users" className="flex items-center">
                  <PersonOutlineRounded className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">User</span>
                </NavLink>
              </li>
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/products" className="flex items-center">
                  <Storefront className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Products</span>
                </NavLink>
              </li>
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/" className="flex items-center">
                  <AttachMoney className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Transactions</span>
                </NavLink>
              </li>
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/" className="flex items-center">
                  <BarChartOutlined className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Reports</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="third pt-1 pb-5">
            <h3 className="text-shadegrey font-semibold">Notification</h3>
            <ul className="pl-2 pt-2">
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/" className="flex items-center">
                  <MailOutline className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Mail</span>
                </NavLink>
              </li>
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/" className="flex items-center">
                  <DynamicFeed className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Feedback</span>
                </NavLink>
              </li>
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/" className="flex items-center">
                  <ChatBubbleOutline className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Messages</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="fourth pt-1 pb-5">
            <h3 className="text-shadegrey font-semibold">Staff</h3>
            <ul className="pl-2 pt-2">
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/" className="flex items-center">
                  <WorkOutline className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Manage</span>
                </NavLink>
              </li>
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/" className="flex items-center">
                  <BarChartOutlined className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Analytics</span>
                </NavLink>
              </li>
              <li className="hover:bg-hoverColor rounded-md py-1 px-2">
                <NavLink to="/" className="flex items-center">
                  <Report className="text-lg text-iconColor" />
                  <span className="text-textDark ml-2">Reports</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
