import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Stats = ({ title, value, pnValue, chart }) => {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <div className="line p-6 flex flex-col text-center items-center gap-5 justify-between bg-white w-full shadow-md">
      <div className="left">
        <h4 className="uppercase font-semibold text-sm text-gray-600">
          {title}
        </h4>
        <p className="font-bold text-xl">{value}</p>
        <p className={pnValue < 0 ? `text-red-600` : `text-green-600`}>
          {pnValue}%
        </p>
      </div>
      <div className="right w-full">
        <Line
          data={state}
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
  );
};

export default Stats;

// import React from 'react';
// import {Line} from 'react-chartjs-2';

// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Line
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }
