import React from "react";

import { barchartViewData } from "../data/data";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const options = {
  responsive: true,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: barchartViewData.map((item) => item),
      backgroundColor: "rgb(41, 98, 255)",
      borderRadius: 80,
    },
  ],
};

function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;
