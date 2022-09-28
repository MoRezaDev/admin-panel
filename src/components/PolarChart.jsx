import React from "react";

import { PolarArea } from "react-chartjs-2";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { polarChartViewData } from "../data/data";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PolarChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        fontWeight: "bold",
        labels: {
          padding: 10,
          boxWidth: 40,
          boxHeight: 20,
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };
  const data = {
    labels: polarChartViewData.map((item) => item.label),
    datasets: [
      {
        data: polarChartViewData.map((item) => item.data),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <PolarArea options={options} data={data} />;
}

export default PolarChart;
