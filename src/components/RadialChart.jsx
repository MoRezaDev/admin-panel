import React, { Component } from "react";
import Chart from "react-apexcharts";

class RadialChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [20, 67, 61, 90],
      options: {
        chart: {
          height: 390,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
        labels: ["80+", "61-79", "40-60", "18-39"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 100,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
        tooltip: {
          enabled: true,
        },
      },
    };
  }

  render() {
    return (
      <Chart
        style={{ zIndex: "-1" }}
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        height={300}
      />
    );
  }
}

export default RadialChart;
