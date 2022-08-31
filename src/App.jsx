import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BottomRightButtons from "./components/BottomRightButtons";
import LoginFrom from "./pages/login-form/LoginForm";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "January",
      "February",
      "March",
      "April",
      "January",
      "February",
      "March",
      "April",
      "January",
      "February",
      "March",
      "April",
      "May",
    ],
    datasets: [
      {
        label: "Rainfall",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(72,113,247,1)",
        borderColor: "rgba(72,113,247,1)",
        borderWidth: 2,
        data: [
          65, 59, 80, 8, 65, 39, 80, 81, 65, 59, 80, 81, 16, 59, 80, 31, 56,
        ],
      },
    ],
  };

  return (
    <div className="App bg-slate-50 grid grid-cols-12">
      <div className="md:col-span-2">
        <Sidebar />
      </div>

      <div className="md:col-span-10">
        <Navbar />

        <Header />

        <div className="flex heroSection justify-between items-center space-x-6 m-6">
          <Stats title="new customers" value="3,897" pnValue="+3.3" />
          <Stats title="new orders" value="35,087" pnValue="-2.8" />
          <Stats title="growth" value="89.87%" pnValue="+2.8" />
        </div>

        <div className="fullScreenLineChart bg-white m-6 shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-md mb-4">REVENUE</h3>
              <p className="text-sm text-gray-500 w-2/3">
                Revenue is the income that a business has from its normal
                business activities, usually from the sale of goods and services
                to customers.
              </p>
            </div>
              <div>
                <ButtonGroup />
              </div>
          </div>
          <Line
            data={data}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
              category: {},
              options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltip: {
                  mode: "index",
                  intersect: false,
                },
              },
            }}
          />
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
