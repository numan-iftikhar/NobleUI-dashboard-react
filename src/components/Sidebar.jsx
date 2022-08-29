import React from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../data/dummy";

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className="sidebar bg-slate-900 w-60 h-screen">

      {/* header */}
      <div className="flex justify-between w-full px-6 py-3  border-y border-gray-600">
        <p className="brandName font-bold text-2xl text-gray-100">
          Noble<span className="text-blue-700">UI</span>
        </p>
        <button className="text-gray-500 text-xl">
          <FaBars />
        </button>
      </div>

      {/* Link items */}
      <div className="mt-10">
        {links.map((linkItem) => {
          <div className="linkItem">
            {linkItem.title}
          </div>
        })}
      </div>
    </div>
  );
};

export default Sidebar;
