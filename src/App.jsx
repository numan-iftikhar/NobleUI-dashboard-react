import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const activeMenu = true;

  return (
    <div className="App bg-slate-500">
      {/* Bottom Corner Fixed Buttons */}
      <div className="flex fixed bottom-8 right-8 text-white">
        <button className="mr-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
          <FaFileAlt />
        </button>
        <button className="flex items-center bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md">
          <FaCartPlus /> <span className="ml-2">Buy Now</span>
        </button>
      </div>

      {/* Sidebar */}
      {activeMenu ? (
        <div className="sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
    </div>
  );
}

export default App;
