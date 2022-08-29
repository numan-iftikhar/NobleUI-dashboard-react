import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BottomRightButtons from "./components/BottomRightButtons";
import LoginFrom from "./pages/login-form/LoginForm";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const activeMenu = true;

  return (
    <div className="App">
      <div className="flex">
      <Sidebar />
      <Navbar />
      </div>
      <BottomRightButtons />
      <Routes>
        <Route path="login" element={<LoginFrom />} />
      </Routes>
    </div>
  );
}

export default App;
