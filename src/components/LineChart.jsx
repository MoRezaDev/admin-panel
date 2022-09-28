import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { lineChartViewData } from "../data/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
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
    },
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: lineChartViewData.activity.map((item) => item),
        borderColor: "#2962FF",
        backgroundColor: "#2962FF",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default LineChart;
