import React from "react";
import {FaSearch, FaRegBell, FaEnvelope, FaThLarge} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="navbar h-14 shadow-lg flex sticky top-0 bg-white w-[68.3rem]">
      <div className="searchBar w-full left flex items-center px-8">
        <span className="cursor-pointer"><FaSearch /></span>
        <input className="p-4 outline-none" type="text" placeholder="Search here..." />
      </div>
      <div className="right flex mr-8 items-center space-x-6 text-lg font-medium cursor-pointer">
        <span className="hover:text-blue-400"><a href="#">English</a></span>
        <span className="hover:text-blue-400"><FaThLarge /></span>
        <span className="hover:text-blue-400"><FaEnvelope /></span>
        <span className="hover:text-blue-400"><FaRegBell /></span>
      </div>
    </div>
  );
};

export default Navbar;
