import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgressBar() {
  const percentage = 75;
  return (
    <CircularProgressbar
      strokeWidth={12}
      value={percentage}
      text={`${percentage}`}
      styles={buildStyles({
        pathColor: "#2962ff",
        textColor: "#455a64",
        trailColor: "#eeeeeee5",
      })}
    />
  );
}

export default CircularProgressBar;
