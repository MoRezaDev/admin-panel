import React from "react";
import styled from "styled-components";

//building styled components............
const ContainerStyles = styled.div`
  height: 8px;
  width: 100%;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  margin: 50;
`;

const FillerStyles = styled.div`
  height: 100%;
  width: ${(props) => props.completed}%;
  background-color: ${(props) => props.completedColor};
  text-align: right;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;

const LabelStyles = styled.span`
  padding: 5;
  color: "#fff";
  font-weight: bold;
`;
function ProgressBar({ bgColor, completed, completedColor }) {
  return (
    <ContainerStyles color={bgColor}>
      <FillerStyles
        completedColor={completedColor}
        completed={completed}
      ></FillerStyles>
    </ContainerStyles>
  );
}

export default ProgressBar;
