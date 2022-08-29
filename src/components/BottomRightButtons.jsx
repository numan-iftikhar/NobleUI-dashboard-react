import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const BottomRightButtons = () => {
  return (
    <div>
      <div className="flex fixed bottom-8 right-8 text-white">
        <button className="mr-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
          <FaFileAlt />
        </button>
        <button className="flex items-center bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md">
          <FaCartPlus /> <span className="ml-2">Buy Now</span>
        </button>
      </div>
    </div>
  );
};

export default BottomRightButtons;
