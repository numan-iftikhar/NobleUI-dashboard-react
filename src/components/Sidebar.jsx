import React from "react";
import { FaBars } from "react-icons/fa";
import { FaCube } from "react-icons/fa";
import { links } from "../data/dummy";
import LinkItem from "./LinkItem";

const Sidebar = () => {
  const headingStyle =
    "flex items-center gap-4 mb-1 px-6 text-xs text-white font-semibold";
  const activeMenu = true;

  return (
    <div className="sidebar bg-slate-900 w-60 h-screen overflow-auto">
      {/* header */}
      <div className="flex justify-between px-6 py-3 border-y border-gray-600">
        <p className="brandName font-bold text-2xl text-gray-100">
          Noble<span className="text-blue-700">UI</span>
        </p>
        <button className="text-gray-500 text-xl">
          <FaBars />
        </button>
      </div>

      {/* Link items */}
      <div className="mt-10 text-gray-400">
        <div className="mb-4">
          <p className={headingStyle}>MAIN</p>
          <LinkItem title="Dashboard" icon={<FaCube />} />
        </div>

        <div className="mb-4">
          <p className={headingStyle}>WEB APPS</p>
          <LinkItem title="Email" icon={<FaCube />} />
          <LinkItem title="Chat" icon={<FaCube />} />
          <LinkItem title="Calender" icon={<FaCube />} />
        </div>

        <div className="mb-4">
          <p className={headingStyle}>COMPONENTS</p>
          <LinkItem title="UI Kit" icon={<FaCube />} />
          <LinkItem title="Advanced UI" icon={<FaCube />} />
          <LinkItem title="Forms" icon={<FaCube />} />
          <LinkItem title="Charts" icon={<FaCube />} />
          <LinkItem title="Table" icon={<FaCube />} />
          <LinkItem title="Icons" icon={<FaCube />} />
        </div>

        <div className="mb-4">
          <p className={headingStyle}>PAGES</p>
          <LinkItem title="Special pages" icon={<FaCube />} />
          <LinkItem title="Authentication" icon={<FaCube />} />
          <LinkItem title="Error" icon={<FaCube />} />
        </div>

        <div className="mb-4">
          <p className={headingStyle}>DOCS</p>
          <LinkItem title="Documentation" icon={<FaCube />} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
