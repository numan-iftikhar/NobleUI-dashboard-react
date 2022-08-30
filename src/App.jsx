import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BottomRightButtons from "./components/BottomRightButtons";
import LoginFrom from "./pages/login-form/LoginForm";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";

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
          <div className="flex justify-between items-center space-x-6 m-6">
            <Stats title="new customers" value="3,897" pnValue="+3.3" chart="Bar"/>
            <Stats title="new orders" value="35,087" pnValue="-2.8" chart="Bar"/>
            <Stats title="growth" value="89.87%" pnValue="+2.8" chart="Bar"/>
          </div>
        </div>
        
      <BottomRightButtons />
      <Routes>
        <Route path="login" element={<LoginFrom />} />
      </Routes>
    </div>
  );
}

export default App;
