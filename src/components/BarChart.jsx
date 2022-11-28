
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function BarChart(){
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div className="chart-container">
      <Bar data={data} width={500} height={500} options={{responsive:false}}/>
    </div>
  );
};

