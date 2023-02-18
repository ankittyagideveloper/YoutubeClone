import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex ">
      <div class>
        <Sidebar />
      </div>
      <div className="mt-28 md:mt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
