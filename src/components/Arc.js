import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { colorSchema } from "./helperfunc";

export default function Arc({ arcData, isHovered }) {
  const [radius, setRadius] = useState({
    outer: 120,
    inner: 90,
    pad: 0.03,
  });

  useEffect(() => {
    if (isHovered) mouseOver();
    else mouseOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  const arc = d3
    .arc()
    .innerRadius(radius.inner)
    .outerRadius(radius.outer)
    .cornerRadius(2)
    .padAngle(radius.pad);

  function mouseOver() {
    setRadius({ ...radius, inner: 130, outer: 90 });
  }

  function mouseOut() {
    setRadius({ ...radius, inner: 120, outer: 90 });
  }

  return (
    <>
      <path
        text={arcData.index}
        d={arc(arcData)}
        index={arcData.index}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        fill={colorSchema(arcData.index)}
      ></path>
    </>
  );
}
