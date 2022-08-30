import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BottomRightButtons from "./components/BottomRightButtons";
import LoginFrom from "./pages/login-form/LoginForm";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  const activeMenu = true;

  return (
    <div className="App bg-slate-50 grid grid-cols-12">

        <div className="md:col-span-2">
          <Sidebar />
        </div>
        <div className="md:col-span-10">
          <Navbar />
          <Header />
        </div>
        
      <BottomRightButtons />
      <Routes>
        <Route path="login" element={<LoginFrom />} />
      </Routes>
    </div>
  );
}

export default App;
