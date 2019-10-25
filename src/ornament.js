import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as importedLine } from "./ornament.svg";

const Ornament = ({ color = "#ccc" }) => {
  const [pathLength, setPathLength] = useState(0);
  useEffect(() => {
    const path = document.getElementById("ornamentPath");
    const length = path.getTotalLength();
    setPathLength(length / 2);
  }, []);
  return <Line pathLength={pathLength} color={color} />;
};

const ornamentPath = (length, color) => keyframes`
0%{
  fill-opacity:0;
  stroke-opacity:1;
  fill:transparent;
  stroke-dashoffset:${length}
}
80% {
  stroke-opacity:1;
  fill-opacity:0.5;
  fill:${color};
  stroke-dashoffset:0
}
100%{
  stroke-opacity:1;
  fill-opacity:0.7;
  fill:${color};
  stroke-dashoffset:0;
}
`;

const Line = styled(importedLine)`
  height: 90vh;
  display: block;
  margin: auto;
  & #ornamentPath {
    stroke: ${props => props.color};
    fill: ${props => props.color};
    stroke-dasharray: ${props => props.pathLength};
    stroke-dashoffset: ${props => props.pathLength};
    stroke-opacity: 0;
    fill-opacity: 0;
    animation: ${props => ornamentPath(props.pathLength)} 10s linear;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
`;

export default Ornament;
