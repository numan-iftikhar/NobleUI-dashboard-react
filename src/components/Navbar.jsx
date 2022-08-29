import React from "react";

const Navbar = () => {
  return (
    <div className="bg-red-500 px-8 h-14 flex-1 border border-b w-screen sticky top-0">
      <div className="searchBar">
        <input className="p-4" type="text" placeholder="Search here..." />
      </div>
    </div>
  );
};

export default Navbar;
