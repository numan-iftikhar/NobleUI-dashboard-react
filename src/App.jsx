import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BottomRightButtons from "./components/BottomRightButtons";
import LoginFrom from "./pages/login-form/LoginForm";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import ButtonGroup from "./components/ButtonGroup";
import { Bar, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function App() {
  const app__chartTopHeading = "font-semibold text-md mb-4";
  const app__chartTopDesc = "text-sm text-gray-500";
  const percentage = 67;
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
    <div className="App bg-slate-100 grid grid-cols-12">
      <div className="md:col-span-2">
        <Sidebar />
      </div>

      <div className="md:col-span-10">
        <Navbar />

        <Header />

        {/* hero section */}
        <div className="flex heroSection justify-between items-center space-x-6 m-6">
          <Stats title="new customers" value="3,897" pnValue="+3.3" />
          <Stats title="new orders" value="35,087" pnValue="-2.8" />
          <Stats title="growth" value="89.87%" pnValue="+2.8" />
        </div>

        {/* full screen line chart */}
        <div className="fullScreenLineChart bg-white m-6 shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className={`${app__chartTopHeading}`}>REVENUE</h3>
              <p className={`${app__chartTopDesc} w-2/3`}>
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

        {/* monthly sales and cloud storage section */}
        <div className="flex justify-between m-6">
          {/* monthly sales */}
          <div className="md:col-span-6 p-6 bg-white">
            <div>
              <h4 className={`${app__chartTopHeading}`}>MONTHLY SALES</h4>
              <p className={`${app__chartTopDesc}`}>
                Sales are activities related to selling or the number of goods
                or services sold in a given time period.
              </p>
            </div>

            <div>
              <Bar
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

          {/* cloud storage */}
          <div className="md:col-span-4 p-6 ml-6 flex-1 bg-white">
            <div>
              <h4 className={`${app__chartTopHeading}`}>CLOUD STORAGE</h4>
            </div>
            <div className="w-40 mx-auto my-10">
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>

            <div className="flex justify-around mt-5">
              <div className="text-right">
                <p className="text-xs font-semibold">TOTAL STORAGE</p>
                <p className="font-bold">8TB</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold">USED STORAGE</p>
                <p className="font-bold">~5TB</p>
              </div>
            </div>

            <div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-5">
                Upgrade Storage
              </button>
            </div>
          </div>
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
