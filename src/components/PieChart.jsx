import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ chartData }) {
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 10,
          font: {
            size: 12,
          },
        },
      },
    },
  };
  const data = {
    labels: chartData.map((label) => label.title),
    datasets: [
      {
        label: "nbbb",
        data: chartData.map((data) => data.value),
        backgroundColor: chartData.map((data) => data.bgColor),
        offset: 20,
        hoverOffset: 20,
        rotation: -50,
      },
    ],
  };
  return <Pie options={options} data={data} />;
}

export default PieChart;
