import React from "react";

import BottomRightButtons from "./components/BottomRightButtons";
import LoginFrom from "./components/LoginFrom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const activeMenu = true;

  return (
    <div className="App">
      {/* Bottom Corner Fixed Buttons */}
      {!(<LoginFrom />) && <BottomRightButtons />}

      {/* Sidebar */}
      {/* <Navbar /> */}
        {/* <Sidebar /> */}
      {/* navbar */}
      {/* login page */}
      <LoginFrom />
    </div>
  );
}

export default App;
