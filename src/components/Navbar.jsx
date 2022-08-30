import React from "react";

const Navbar = () => {
  return (
    <div className="h-14 shadow-lg w-screen sticky top-0 bg-white">
      <div className="searchBar">
        <input className="p-4" type="text" placeholder="Search here..." />
      </div>
    </div>
  );
};

export default Navbar;
