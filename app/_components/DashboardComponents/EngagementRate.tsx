"use client";
import * as React from "react";
import { ScaleLinear } from "d3-scale";
import { green, red } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { useYScale, useDrawingArea } from "@mui/x-charts/hooks";
import { LineChart, areaElementClasses } from "@mui/x-charts/LineChart";

type ColorSwichProps = {
  threshold: number;
  color1: string;
  color2: string;
  id: string;
};

function ColorSwich({ threshold, color1, color2, id }: ColorSwichProps) {
  const { top, height, bottom } = useDrawingArea();
  const svgHeight = top + bottom + height;

  const scale = useYScale() as ScaleLinear<number, number>;
  const y0 = scale(threshold);
  const off = y0 !== undefined ? y0 / svgHeight : 0;

  return (
    <defs>
      <linearGradient
        id={id}
        x1="0"
        x2="0"
        y1="0"
        y2={`${svgHeight}px`}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={off} stopColor={color1} stopOpacity={1} />
        <stop offset={off} stopColor={color2} stopOpacity={1} />
      </linearGradient>
    </defs>
  );
}

export default function EngagementRate({ datas }) {
  const data = datas?.engagementRate?.map((item) => item?.engagement) || [];
  const xData = datas?.engagementRate?.map((item) => item?.timeStamp) || [];

  console.log("Engagement Rate Data:", data, );

  return (
    <Stack direction="column" width="100%" spacing={1}>
      <div className="bg-white shadow-md rounded-lg px-3 py-5 h-fit">
        <div className="font-bold pb-5">Engagement Rate {`%`}</div>

        <LineChart
          xAxis={[{ data: xData, scaleType: "point" }]}
          yAxis={[{ min: -50, max: 50 }]}
          series={[{ data, showMark: true, area: true }]}
          height={200}
          margin={{ top: 20, bottom: 30, left: 75 }}
          sx={{
            [`& .${areaElementClasses.root}`]: {
              fill: "url(#swich-color-id-1)",
            },
          }}
        >
          <ColorSwich
            color1="#11B678" // green
            color2="#FF3143" // red
            threshold={0}
            id="swich-color-id-1"
          />
          <rect
            x={0}
            y={0}
            width={5}
            height="100%"
            fill="url(#swich-color-id-1)"
          />
        </LineChart>
      </div>
    </Stack>
  );
}
