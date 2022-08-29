import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const activeMenu = true;

  return (
    <div className="App">
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
      {/* <Navbar /> */}
        <Sidebar />
      {/* navbar */}
    </div>
  );
}

export default App;
