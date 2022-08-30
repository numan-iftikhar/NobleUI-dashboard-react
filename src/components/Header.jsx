import React from "react";
import { FiDownloadCloud, FiPrinter } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header flex p-6 items-center">
      <div className="h__left mr-auto text-xl font-semibold">
        <h3>Welcome to Dashboard</h3>
      </div>

      <div className="h__right space-x-2">
        <input
          className="border rounded-sm border-blue-500 px-4 py-1"
          type="date"
        />

        <button className="border rounded-sm border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white px-4 py-1">
          <span className="inline-block mr-2">
            <FiPrinter />
          </span>
          Print
        </button>

        <button className="border rounded-sm border-blue-500 hover:bg-blue-600 px-4 py-1 bg-blue-500 text-white">
          <span className="inline-block mr-2">
            <FiDownloadCloud />
          </span>
          Download Report
        </button>
      </div>
    </div>
  );
};

export default Header;
