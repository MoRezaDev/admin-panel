import React from "react";

import { chartViewData } from "../data/data";

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

const labels = ["January", "February", "March", "April", "May", "June", "Sep"];

export const options = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: { display: false },
    },
    y: {
      stacked: true,
      grid: { display: false },
      display: false,
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: chartViewData.views_label,
      data: chartViewData.views_data,
      backgroundColor: "#00a6ff",
    },
    {
      label: chartViewData.likes_label,
      data: chartViewData.likes_data,
      backgroundColor: "#3e3e38",
    },
  ],
};

function StackedChart() {
  return <Bar options={options} data={data} />;
}

export default StackedChart;
