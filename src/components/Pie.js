import React, { useState, Fragment, useEffect, useReducer } from "react";
import * as d3 from "d3";
import Arc from "./Arc";
import "./Pie.css";
import { useDrillableData } from "./helperfunc";

export default function Pie({ data }) {
  const [percentVisible, setPercentVisible] = useState(0);

  const [{ startAngle }] = useDrillableData(data, useReducer);
  const position = {
    x: 130,
    y: 130,
  };

  // useEffect(() => {

  // }, [events]);

  const pie = d3
    .pie()
    .startAngle(startAngle)
    .endAngle(startAngle + percentVisible * Math.PI * 2)
    .value((d) => d.value);

  useEffect(() => {
    d3.selection()
      .transition("pie-reveal")
      .duration(8000)
      .ease(d3.easeSinInOut)
      .tween("percentVisible", () => {
        const percentInterpolate = d3.interpolate(0, 100);
        return (t) => setPercentVisible(percentInterpolate(t));
      });
  }, [data]);

  return (
    <div className={"pie"}>
      <div>
        <svg width="280" height="280">
          <g transform={`translate(${position.x}, ${position.y})`}>
            {pie(data).map((elem) => (
              <Fragment key={elem.index}>
                <Arc arcData={elem} />
              </Fragment>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
