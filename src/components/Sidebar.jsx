import React from "react";
import { FaBars } from "react-icons/fa";
import { FaCube } from "react-icons/fa";
import LinkItem from "./LinkItem";

const Sidebar = () => {
  const sb__headingStyle =
    "gap-4 mb-1 px-6 text-xs text-white font-semibold";

  return (
    <div className="sidebar fixed w-60 top-0 left-0 overflow-x-hidden bg-slate-900 h-full pb-10">
      {/* header */}
      <div className="flex sticky top-0 justify-between px-6 py-3 border-y border-gray-600  bg-slate-900">
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
          <p className={sb__headingStyle}>MAIN</p>
          <LinkItem title="Dashboard" icon={<FaCube />} />
        </div>

        <div className="mb-4">
          <p className={sb__headingStyle}>WEB APPS</p>
          <LinkItem title="Email" icon={<FaCube />} />
          <LinkItem title="Chat" icon={<FaCube />} />
          <LinkItem title="Calender" icon={<FaCube />} />
        </div>

        <div className="mb-4">
          <p className={sb__headingStyle}>COMPONENTS</p>
          <LinkItem title="UI Kit" icon={<FaCube />} />
          <LinkItem title="Advanced UI" icon={<FaCube />} />
          <LinkItem title="Forms" icon={<FaCube />} />
          <LinkItem title="Charts" icon={<FaCube />} />
          <LinkItem title="Table" icon={<FaCube />} />
          <LinkItem title="Icons" icon={<FaCube />} />
        </div>

        <div className="mb-4">
          <p className={sb__headingStyle}>PAGES</p>
          <LinkItem title="Special pages" icon={<FaCube />} />
          <LinkItem title="Authentication" icon={<FaCube />} />
          <LinkItem title="Error" icon={<FaCube />} />
        </div>

        <div className="mb-4">
          <p className={sb__headingStyle}>DOCS</p>
          <LinkItem title="Documentation" icon={<FaCube />} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
